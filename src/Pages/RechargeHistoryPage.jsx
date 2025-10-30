import React, { useState, useEffect } from 'react';

const RechargeHistoryPage = () => {
  // Filter state: all, completed, pending, failed
  const [filter, setFilter] = useState('all');

  // State for API data
  const [recharges, setRecharges] = useState([]);
  const [summary, setSummary] = useState({
    totalSpent: 0,
    pending: 0,
    failed: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchRechargeData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // This is the API endpoint you need to create on your backend.
        const response = await fetch('/api/recharge-history'); 

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        // Mock data structure:
        // const data = {
        //   summary: { totalSpent: 625, pending: 1, failed: 1 },
        //   recharges: [
        //     { id: 2, vehicleNumber: 'MH12AB1234', amount: 150, date: '2025-10-28', time: '03:45 PM', status: 'completed' },
        //     { id: 4, vehicleNumber: 'DL08CA5678', amount: 200, date: '2025-10-26', time: '02:20 PM', status: 'completed' },
        //     { id: 6, vehicleNumber: 'KA01BC9012', amount: 175, date: '2025-10-24', time: '04:30 PM', status: 'pending' },
        //     { id: 8, vehicleNumber: 'TN22XY3456', amount: 100, date: '2025-10-22', time: '10:00 AM', status: 'failed' },
        //   ]
        // };

        setRecharges(data.recharges);
        setSummary(data.summary);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Simulate API call for demonstration
    // In a real app, you'd call fetchRechargeData()
    // We'll use a timeout to show the loading state
    setTimeout(() => {
        const mockData = {
          summary: { totalSpent: 525, pending: 1, failed: 1 }, // Only counts completed for totalSpent
          recharges: [
            { id: 2, vehicleNumber: 'MH12AB1234', amount: 150, date: '2025-10-28', time: '03:45 PM', status: 'completed' },
            { id: 4, vehicleNumber: 'DL08CA5678', amount: 200, date: '2025-10-26', time: '02:20 PM', status: 'completed' },
            { id: 6, vehicleNumber: 'KA01BC9012', amount: 175, date: '2025-10-24', time: '04:30 PM', status: 'pending' },
            { id: 8, vehicleNumber: 'TN22XY3456', amount: 100, date: '2025-10-22', time: '10:00 AM', status: 'failed' },
            { id: 9, vehicleNumber: 'PB01CD9876', amount: 175, date: '2025-10-21', time: '11:00 AM', status: 'completed' },
          ]
        };
        setRecharges(mockData.recharges);
        setSummary(mockData.summary);
        setLoading(false);
    }, 1000); // 1-second delay

  }, []); // Runs once on mount

  // Filter logic
  const filteredRecharges = recharges.filter(r => {
    if (filter === 'all') return true;
    return r.status === filter;
  });

  // Reusable Status Pill component
  const StatusPill = ({ status }) => {
    let classes = 'px-3 py-1 rounded-full text-xs font-semibold ';
    let text = '✓ Completed';
    
    switch (status) {
      case 'completed':
        classes += 'bg-green-100 text-green-700';
        text = '✓ Completed';
        break;
      case 'pending':
        classes += 'bg-yellow-100 text-yellow-700';
        text = '... Pending';
        break;
      case 'failed':
        classes += 'bg-red-100 text-red-700';
        text = '✗ Failed';
        break;
      default:
        classes += 'bg-gray-100 text-gray-700';
        text = 'Unknown';
    }
    
    return <span className={classes}>{text}</span>;
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center">
        <p className="text-xl font-medium text-teal-700">Loading recharge history...</p>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center">
        <p className="text-xl font-medium text-red-600">
          Error loading data: {error}
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
            Recharge History
          </h1>
          <p className="text-teal-600 font-medium">Track all your FASTag recharges</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-slide-up">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium mb-1">Total Spent</p>
                <p className="text-3xl font-bold text-gray-900">₹{summary.totalSpent}</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border-yellow-100 hover:shadow-xl transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium mb-1">Pending</p>
                <p className="text-3xl font-bold text-yellow-600">{summary.pending}</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-red-100 hover:shadow-xl transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium mb-1">Failed</p>
                <p className="text-3xl font-bold text-red-600">{summary.failed}</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-teal-100 mb-6 animate-slide-up animation-delay-200">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                filter === 'completed'
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Completed
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                filter === 'pending'
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilter('failed')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                filter === 'failed'
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Failed
            </button>
          </div>
        </div>

        {/* Recharges List */}
        <div className="space-y-4 animate-slide-up animation-delay-400">
          {filteredRecharges.map((recharge, index) => (
            <div
              key={recharge.id}
              className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:scale-[1.01]"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-teal-400 to-teal-600`}
                  >
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17l-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2h2l2 2m0 0l2-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2l-2-2m-4-7h8a2 2 0 012 2v3H7V7a2 2 0 012-2z"/>
                    </svg>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-gray-900">
                        FASTag Recharge - {recharge.vehicleNumber}
                      </h3>
                      <p className={`text-xl font-bold text-gray-900`}>
                        -₹{recharge.amount}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        {recharge.date}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        {recharge.time}
                      </span>
                      <StatusPill status={recharge.status} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredRecharges.length === 0 && !loading && (
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-12 shadow-lg border border-teal-100 text-center">
            <svg className="w-20 h-20 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No recharges found</h3>
            <p className="text-gray-500">Try changing the filter to see more recharges</p>
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

export default RechargeHistoryPage;
