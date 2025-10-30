import React, { useState } from "react";

const TollEstimator = () => {
  const [originCity, setOriginCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [tollEstimate, setTollEstimate] = useState("");
  const [isEstimating, setIsEstimating] = useState(false);
  const [estimateError, setEstimateError] = useState("");

  // Popular routes for quick selection
  const popularRoutes = [
    { from: "Mumbai", to: "Delhi" },
    { from: "Bangalore", to: "Chennai" },
    { from: "Delhi", to: "Jaipur" },
    { from: "Pune", to: "Mumbai" },
  ];

  const handleEstimateTolls = async () => {
    if (!originCity.trim() || !destinationCity.trim()) {
      setEstimateError("Please enter both origin and destination cities.");
      return;
    }
    setIsEstimating(true);
    setEstimateError("");
    setTollEstimate("");

    const systemPrompt =
      "You are a helpful travel assistant. Estimate the total FASTag toll cost for a trip between two Indian cities for a standard car. Provide a breakdown if possible.";
    const userQuery = `Estimate FASTag toll cost from ${originCity} to ${destinationCity}.`;

    try {
      // Simulating API call - replace with actual callGeminiApi
      // const response = await callGeminiApi(systemPrompt, userQuery, true);
      
      // Mock response for demonstration
      await new Promise(resolve => setTimeout(resolve, 2000));
      const response = `Trip from ${originCity} to ${destinationCity}:\n\nEstimated Toll Cost: ₹450-550\n\nRoute: NH-48 (Major Highway)\nApproximate Distance: 850 km\nNumber of Toll Plazas: 8-10\n\nBreakdown:\n- Entry tolls: ₹150-200\n- Mid-route tolls: ₹200-250\n- State border tolls: ₹100-100\n\nNote: Actual costs may vary based on vehicle type and route taken.`;
      
      setTollEstimate(response);
    } catch (error) {
      setEstimateError(error.message || "Failed to estimate toll cost. Please try again.");
    } finally {
      setIsEstimating(false);
    }
  };

  const handleQuickRoute = (from, to) => {
    setOriginCity(from);
    setDestinationCity(to);
    setEstimateError("");
  };

  const handleSwapCities = () => {
    const temp = originCity;
    setOriginCity(destinationCity);
    setDestinationCity(temp);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Trip Toll Estimator
          </h2>
          <p className="text-gray-600 text-lg">
            Calculate estimated toll charges for your journey
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-6 sm:p-8 space-y-6">
            {/* Input Section */}
            <div className="grid sm:grid-cols-2 gap-4 relative">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  From (City)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={originCity}
                    onChange={(e) => setOriginCity(e.target.value)}
                    className="w-full px-5 py-4 pl-12 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all text-gray-900 placeholder-gray-400"
                    placeholder="e.g., Mumbai"
                    disabled={isEstimating}
                  />
                  <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>

              {/* Swap Button */}
              <button
                onClick={handleSwapCities}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-10 h-10 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg transition-all hover:scale-110"
                title="Swap cities"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </button>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  To (City)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={destinationCity}
                    onChange={(e) => setDestinationCity(e.target.value)}
                    className="w-full px-5 py-4 pl-12 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all text-gray-900 placeholder-gray-400"
                    placeholder="e.g., Delhi"
                    disabled={isEstimating}
                  />
                  <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Estimate Button */}
            <button
              onClick={handleEstimateTolls}
              disabled={isEstimating}
              className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-md text-lg font-semibold text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isEstimating ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z"
                    ></path>
                  </svg>
                  <span>Estimating...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>Estimate Toll Cost</span>
                </>
              )}
            </button>

            {/* Error Message */}
            {estimateError && (
              <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-red-700 font-medium">{estimateError}</p>
              </div>
            )}

            {/* Estimate Display */}
            {tollEstimate && (
              <div className="mt-6 p-6 bg-gray-50 rounded-xl border-2 border-gray-200 shadow-inner animate-fadeIn">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">Toll Estimate</h4>
                </div>
                <p className="text-gray-800 leading-relaxed whitespace-pre-wrap ml-11">{tollEstimate}</p>
              </div>
            )}

            {/* Popular Routes */}
            {!tollEstimate && !isEstimating && (
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-3">Popular routes:</p>
                <div className="grid grid-cols-2 gap-2">
                  {popularRoutes.map((route, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickRoute(route.from, route.to)}
                      className="px-4 py-2 text-sm bg-gray-100 hover:bg-teal-50 text-gray-700 hover:text-teal-700 rounded-lg transition-colors border border-gray-200 hover:border-teal-300 text-left"
                    >
                      <span className="font-medium">{route.from}</span>
                      <svg className="inline w-3 h-3 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="font-medium">{route.to}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Info */}
          <div className="px-6 sm:px-8 py-4 bg-gray-50 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center">
              🚗 Estimates are for standard cars • Actual costs may vary
            </p>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default TollEstimator;