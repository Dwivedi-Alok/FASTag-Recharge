import React, { useState } from "react";

const AiFaq = () => {
  const [faqQuery, setFaqQuery] = useState("");
  const [faqAnswer, setFaqAnswer] = useState("");
  const [isAsking, setIsAsking] = useState(false);
  const [faqError, setFaqError] = useState("");

  // Suggested questions
  const suggestedQuestions = [
    "How do I check my FASTag balance?",
    "What happens if my FASTag balance is low?",
    "How to recharge my FASTag?",
    "Which banks issue FASTag?",
  ];

  const handleAskFaq = async () => {
    if (!faqQuery.trim()) {
      setFaqError("Please enter a question.");
      return;
    }
    setIsAsking(true);
    setFaqError("");
    setFaqAnswer("");

    const systemPrompt =
      "You are an expert on India's FASTag system. Answer concisely and accurately. If the question is unrelated, politely decline.";

    try {
      // Simulating API call - replace with actual callGeminiApi
      // const response = await callGeminiApi(systemPrompt, faqQuery, true);
      
      // Mock response for demonstration
      await new Promise(resolve => setTimeout(resolve, 2000));
      const response = "FASTag is an electronic toll collection system in India. You can check your balance through your bank's mobile app, SMS service, or by visiting the toll plaza. For recharge, use your bank's app, UPI, or authorized payment platforms.";
      
      setFaqAnswer(response);
    } catch (error) {
      setFaqError(error.message || "Failed to get answer. Please try again.");
    } finally {
      setIsAsking(false);
    }
  };

  const handleSuggestedQuestion = (question) => {
    setFaqQuery(question);
    setFaqError("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isAsking) {
      handleAskFaq();
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            AI-Powered FAQ Assistant
          </h2>
          <p className="text-gray-600 text-lg">
            Get instant answers to your FASTag questions
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-6 sm:p-8 space-y-6">
            {/* Input Section */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700">
                Ask your question
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={faqQuery}
                  onChange={(e) => setFaqQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-5 py-4 pr-12 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all text-gray-900 placeholder-gray-400"
                  placeholder="e.g., How do I check my FASTag balance?"
                  disabled={isAsking}
                />
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            {/* Ask Button */}
            <button
              onClick={handleAskFaq}
              disabled={isAsking}
              className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-md text-lg font-semibold text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isAsking ? (
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
                  <span>Thinking...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Ask AI Assistant</span>
                </>
              )}
            </button>

            {/* Error Message */}
            {faqError && (
              <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-red-700 font-medium">{faqError}</p>
              </div>
            )}

            {/* Answer Display */}
            {faqAnswer && (
              <div className="mt-6 p-6 bg-gray-50 rounded-xl border-2 border-gray-200 shadow-inner animate-fadeIn">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">Answer</h4>
                </div>
                <p className="text-gray-800 leading-relaxed whitespace-pre-wrap ml-11">{faqAnswer}</p>
              </div>
            )}

            {/* Suggested Questions */}
            {!faqAnswer && !isAsking && (
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-3">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="px-4 py-2 text-sm bg-gray-100 hover:bg-teal-50 text-gray-700 hover:text-teal-700 rounded-lg transition-colors border border-gray-200 hover:border-teal-300"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Info */}
          <div className="px-6 sm:px-8 py-4 bg-gray-50 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center">
              💡 Powered by AI • Get accurate answers about FASTag instantly
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default AiFaq;