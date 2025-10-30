import React, { useState, useEffect } from 'react';

const OffersPage = () => {
  // State for API data
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchOffersData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // This is the API endpoint you would create on your backend.
        // const response = await fetch('/api/offers'); 
        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }
        // const data = await response.json();
        // setOffers(data.offers);

        // Simulate API call for demonstration
        setTimeout(() => {
          const mockData = {
            offers: [
              { id: 1, title: '20% Cashback on FASTag Recharge', description: 'Get 20% cashback (up to ₹50) on your first FASTag recharge this month.', expiryDate: '2025-11-15', imgPlaceholder: '20% OFF' },
              { id: 2, title: 'Flat ₹25 Off', description: 'Recharge your FASTag for ₹500 or more and get a flat ₹25 discount.', expiryDate: '2025-11-10', imgPlaceholder: '₹25 OFF' },
              { id: 3, title: 'Refer & Earn ₹100', description: 'Refer a friend to the FASTag service and you both get ₹100 in your wallet.', expiryDate: '2025-11-30', imgPlaceholder: 'Refer & Earn' },
              { id: 4, title: 'Pay Toll via App & Win', description: 'Pay for 5 toll plazas using the app and stand a chance to win ₹1000 cashback.', expiryDate: '2025-11-20', imgPlaceholder: 'WIN ₹1000' },
              { id: 5, title: '5% Cashback on HPCL', description: 'Pay with your FASTag balance at HPCL pumps and get 5% cashback.', expiryDate: '2025-11-12', imgPlaceholder: '5% HPCL' },
              { id: 6, title: 'Zero Convenience Fee', description: 'Enjoy zero convenience fees on all wallet reloads above ₹2000 this weekend.', expiryDate: '2025-11-05', imgPlaceholder: 'Zero Fee' },
            ]
          };
          setOffers(mockData.offers);
          setLoading(false);
        }, 1000); // 1-second delay

      } catch (err) {
        setError(err.message);
      } finally {
        // In a real fetch, setLoading(false) would be here
      }
    };

    fetchOffersData();

  }, []); // Runs once on mount


  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center">
        <p className="text-xl font-medium text-teal-700">Loading exclusive offers...</p>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center">
        <p className="text-xl font-medium text-red-600">
          Error loading offers: {error}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-teal-700 to-teal-600 bg-clip-text text-transparent mb-2">
            Offers & Promotions
          </h1>
          <p className="text-teal-600 font-medium">Exclusive deals and discounts just for you</p>
        </div>

        {/* Offers Grid */}
        {offers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up animation-delay-200">
            {offers.map((offer, index) => (
              <div
                key={offer.id}
                className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-all hover:scale-[1.02]"
                style={{ animation: `slideUp 0.6s ease-out ${index * 100}ms backwards` }}
              >
                {/* Image Placeholder */}
                <img 
                  src={`https://placehold.co/600x400/0d9488/ffffff?text=${offer.imgPlaceholder}`} 
                  alt={offer.title}
                  className="w-full h-48 object-cover"
                />
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{offer.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-1">{offer.description}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-xs text-red-600 font-medium">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Expires: {offer.expiryDate}
                      </span>
                    </div>
                    <button className="px-4 py-2 rounded-lg font-medium text-sm bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md hover:from-teal-600 hover:to-teal-700 transition-all">
                      Redeem
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-12 shadow-lg border border-teal-100 text-center animate-slide-up animation-delay-200">
            <svg className="w-20 h-20 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0c-1.657 0-3-.895-3-2s1.343-2 3-2 3-.895 3-2-1.343-2-3-2m0 8c1.11 0 2.08-.402 2.599-1M12 8V7m0 1v8m0 0H9m3 0h3m-3 0v-1m0 1v-2m0 2v-3m0 3V7m0 3v-2"/>
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No offers available right now</h3>
            <p className="text-gray-500">Please check back later for new deals and promotions.</p>
          </div>
        )}
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
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default OffersPage;
