import React, { useState, useEffect } from 'react'; // CHANGED: Imported useEffect
import data from '../mockData/mockData.json';
const WalletHistoryPage = () => {
  const [filter, setFilter] = useState('all');

  // CHANGED: Replaced hardcoded data with state
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    totalBalance: 0,
    totalCredit: 0,
    totalDebit: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // CHANGED: Added useEffect to fetch data from the backend
  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // This is the API endpoint you need to create on your backend.
        const response = await fetch('/mockData/mockData.json'); 

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        

        setTransactions(data.transactions);
        setSummary(data.summary);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWalletData();
  }, []); // The empty array [] means this effect runs once when the component mounts

  // This filtering logic now works on the 'transactions' state
  const filteredTransactions = transactions.filter(t => {
    if (filter === 'all') return true;
    return t.type === filter;
  });

  // CHANGED: Added Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center">
        <p className="text-xl font-medium text-teal-700">Loading your history...</p>
        {/* You could put a spinner component here */}
      </div>
    );
  }

  // CHANGED: Added Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center">
        <p className="text-xl font-medium text-red-600">
          Error loading data: {error}
        </p>
      </div>
    );
  }

  // The rest of your component JSX remains largely the same,
  // but we update the parts that used hardcoded totals.
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Animated Background Elements (no change) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header (no change) */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-teal-700 to-teal-600 bg-clip-text text-transparent mb-2">
            Wallet History
          </h1>
          <p className="text-teal-600 font-medium">Track all your wallet transactions in one place</p>
        </div>

        {/* Stats Cards (CHANGED to use summary state) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-slide-up">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium mb-1">Current Balance</p>
                {/* CHANGED */}
                <p className="text-3xl font-bold text-gray-900">₹{summary.totalBalance}</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium mb-1">Total Credited</p>
                {/* CHANGED */}
                <p className="text-3xl font-bold text-green-600">₹{summary.totalCredit}</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-red-100 hover:shadow-xl transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium mb-1">Total Debited</p>
                {/* CHANGED */}
                <p className="text-3xl font-bold text-red-600">₹{summary.totalDebit}</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 13l-5 5m0 0l-5-5m5 5V6"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs (no change) */}
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
              All Transactions
            </button>
            <button
              onClick={() => setFilter('credit')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                filter === 'credit'
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Credits
            </button>
            <button
              onClick={() => setFilter('debit')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                filter === 'debit'
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Debits
            </button>
          </div>
        </div>

        {/* Transactions List (no change, it now maps over 'filteredTransactions' from state) */}
        <div className="space-y-4 animate-slide-up animation-delay-400">
          {filteredTransactions.map((transaction, index) => (
            <div
              key={transaction.id}
              className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:scale-[1.01]"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      transaction.type === 'credit'
                        ? 'bg-gradient-to-br from-green-400 to-green-600'
                        : 'bg-gradient-to-br from-red-400 to-red-600'
                    }`}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {transaction.type === 'credit' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12"/>
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 13l-5 5m0 0l-5-5m5 5V6"/>
                      )}
                    </svg>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-gray-900">{transaction.description}</h3>
                      <p
                        className={`text-xl font-bold ${
                          transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        {transaction.date}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        {transaction.time}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          transaction.status === 'completed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {transaction.status === 'completed' ? '✓ Completed' : '✗ Failed'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (no change, it now works with 'filteredTransactions' from state) */}
        {filteredTransactions.length === 0 && !loading && (
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-12 shadow-lg border border-teal-100 text-center">
            <svg className="w-20 h-20 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No transactions found</h3>
            <p className="text-gray-500">Try changing the filter to see more transactions</p>
          </div>
        )}
      </div>

     
    </div>
  );
};

export default WalletHistoryPage;