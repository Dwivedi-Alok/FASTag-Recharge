import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { auth, firebaseConfig } from "./services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { registerServiceWorker } from "./services/pwaSetup";
import Header from "./components/Header";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import PaymentPage from "./Pages/PaymentPage";
import SuccessPage from "./Pages/SuccessPage";
import ProfilePage from "./Pages/ProfilePage";
import WalletPage from "./Pages/WalletPage";
import RechargeHistoryPage from "./Pages/RechargeHistoryPage";
import WalletHistoryPage from "./Pages/WalletHistoryPage";
import OffersPage from "./Pages/OffersPage";
import HelpAndSupportPage from "./Pages/HelpAndSupportPage";

export default function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [rechargeDetails, setRechargeDetails] = useState({
    vehicleNumber: "",
    amount: 0,
    provider: "",
  });

  useEffect(() => {
    registerServiceWorker();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        if (window.location.pathname === '/login' || window.location.pathname === '/') {
          navigate("/main");
        }
      } else {
        setUser(null);
        navigate("/login");
      }
      setIsAuthReady(true);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const handleProceedToPay = (vehicleNumber, provider) => {
    setRechargeDetails({ ...rechargeDetails, vehicleNumber, provider });
    navigate("/payment");
  };

  const handlePay = (amount) => {
    setRechargeDetails({ ...rechargeDetails, amount });
    navigate("/success");
  };

  const handleBackToHome = () => {
    setRechargeDetails({ vehicleNumber: "", amount: 0, provider: "" });
    navigate("/main");
  };

  if (!isAuthReady || !firebaseConfig.apiKey) {
    if (!firebaseConfig.apiKey) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          Error: Firebase config missing.
        </div>
      );
    }
    return (
      <div className="min-h-screen flex items-center justify-center">
        <svg className="animate-spin h-8 w-8 text-primary" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={handleLogout} onWalletClick={() => navigate("/wallet")} onProfileClick={() => navigate("/profile")} />
      <div >
         <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/main"
          element={
            <MainPage
              user={user}
              onLogout={handleLogout}
              onProceed={handleProceedToPay}
              onProfileClick={() => navigate("/profile")}
            />
          }
        />
        <Route
          path="/payment"
          element={
            <PaymentPage
              vehicleNumber={rechargeDetails.vehicleNumber}
              provider={rechargeDetails.provider}
              onPay={handlePay}
              onBack={handleBackToHome}
            />
          }
        />
        <Route
          path="/success"
          element={
            <SuccessPage
              vehicleNumber={rechargeDetails.vehicleNumber}
              amount={rechargeDetails.amount}
              onBackToHome={handleBackToHome}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProfilePage
              user={user}
              onLogout={handleLogout}
              onBack={handleBackToHome}
            />
          }
        />
        <Route path="/wallet" element={<WalletPage onBack={handleBackToHome} />} />
        <Route path="/recharge-history" element={<RechargeHistoryPage />} />
        <Route path="/wallet-history" element={<WalletHistoryPage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/help-and-support" element={<HelpAndSupportPage />} />
      </Routes>
      </div>
     
    </div>
  );
}