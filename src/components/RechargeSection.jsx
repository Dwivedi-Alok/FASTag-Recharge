import React, { useState } from "react";
import ProviderModal from "./ProviderModal";

const RechargeSection = ({ onProceed }) => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProceed = () => {
    if (vehicleNumber.trim().length < 4) {
      setError("Please enter a valid vehicle number.");
      return;
    }
    setError("");
    setIsModalOpen(true);
  };

  const handleSelectProvider = (provider) => {
    onProceed(vehicleNumber.trim().toUpperCase(), provider);
    setIsModalOpen(false);
  };

  return (
    <>
      <ProviderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectProvider={handleSelectProvider}
      />
      <section className="relative bg-secondary pt-12 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
          <div className="absolute top-40 right-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center animate-slide-in-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6 w-fit">
              <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-primary">Fast & Secure</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              FASTag Recharge <span className="text-primary block lg:inline">Online</span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Recharge your FASTag instantly from anywhere, anytime.
            </p>

            {/* Feature highlights */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center text-gray-700">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Instant recharge confirmation</span>
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">100% secure payment gateway</span>
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">24/7 customer support</span>
              </div>
            </div>
          </div>

          {/* Recharge Box */}
          <div className="mt-12 lg:mt-0 animate-slide-in-right">
            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 backdrop-blur-sm bg-opacity-95 hover:shadow-3xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Recharge FASTag
                </h3>
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="vehicle-number"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Enter Vehicle Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="vehicle-number"
                      className="block w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-primary uppercase text-lg font-medium transition-all"
                      placeholder="MH12 AB 1234"
                      value={vehicleNumber}
                      onChange={(e) => setVehicleNumber(e.target.value)}
                    />
                  </div>
                  {error && (
                    <div className="mt-2 bg-red-50 border-l-4 border-red-500 p-3 rounded animate-shake">
                      <p className="text-sm text-red-700 font-medium">{error}</p>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleProceed}
                  className="w-full flex justify-center items-center py-4 px-6 rounded-xl shadow-lg text-lg font-semibold text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all transform hover:scale-[1.02] active:scale-[0.98] group"
                >
                  <span>Proceed to Pay</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  <svg className="w-4 h-4 inline mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Your payment information is secure with us
                </p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes shake {
            0%, 100% {
              transform: translateX(0);
            }
            10%, 30%, 50%, 70%, 90% {
              transform: translateX(-5px);
            }
            20%, 40%, 60%, 80% {
              transform: translateX(5px);
            }
          }
          
          .animate-blob {
            animation: blob 7s infinite;
          }
          
          .animate-slide-in-left {
            animation: slideInLeft 0.8s ease-out forwards;
          }

          .animate-slide-in-right {
            animation: slideInRight 0.8s ease-out forwards;
          }

          .animate-shake {
            animation: shake 0.5s;
          }
          
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          
          .animation-delay-4000 {
            animation-delay: 4s;
          }

          .shadow-3xl {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
        `}</style>
      </section>
    </>
  );
};

export default RechargeSection;