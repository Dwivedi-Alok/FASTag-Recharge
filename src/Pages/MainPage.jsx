import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import the new separated components
import RechargeSection from "../components/RechargeSection";
import OfferBanner from "../components/OfferBanner";
import TollEstimator from "../components/TollEstimator";
import ProviderList from "../components/ProviderList";
import AiFaq from "../components/AiFaq";

const MainPage = ({ user, onLogout, onProceed }) => {
  return (
    <>
     
      <main>
        {/* 🌟 Hero Section (now self-contained) */}
        <RechargeSection onProceed={onProceed} />

        {/* Offer Banner */}
        <OfferBanner />

        {/* 🚗 Trip Toll Estimator (now self-contained) */}
        <TollEstimator />

        {/* 🏦 FASTag Providers (now self-contained) */}
        <ProviderList />

        {/* 🤖 AI FAQ (now self-contained) */}
        <AiFaq />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;