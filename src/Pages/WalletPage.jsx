import React, { useState } from 'react';

const WalletPage = ({ onBack }) => {
    const [amount, setAmount] = useState('');
    const [upiId, setUpiId] = useState('');
    const [error, setError] = useState('');
    const [balance] = useState(500);

    const handleAddMoney = () => {
        const numAmount = parseInt(amount, 10);
        if (isNaN(numAmount) || numAmount < 100) {
            setError("Please enter a valid amount to add (minimum ₹100).");
            return;
        }
        if (!upiId || !/^[\w.-]+@[\w.-]+$/.test(upiId)) {
            setError("Please enter a valid UPI ID (e.g., yourname@upi).");
            return;
        }
        setError('');
        alert(`Adding ₹${numAmount} to your wallet using UPI ID: ${upiId}!`);
    };

    const quickAmounts = [200, 500, 1000];

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            {/* Main Card */}
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm bg-opacity-95">
                <div className="p-6 space-y-6">
                    <button 
                        onClick={onBack} 
                        className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Back
                    </button>
                    
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold text-gray-900">My Wallet</h2>
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mt-4 transform transition-all hover:scale-105">
                            <p className="text-sm text-gray-600 mb-1">Available Balance</p>
                            <p className="text-4xl font-bold text-gray-900">₹{balance}</p>
                        </div>
                    </div>
                    
                    <div className="space-y-5">
                        <div>
                            <label htmlFor="add-amount" className="block text-sm font-semibold text-gray-700 mb-2">
                                Add Money to Wallet
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg font-medium">
                                    ₹
                                </span>
                                <input
                                    type="number"
                                    id="add-amount"
                                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg"
                                    placeholder="Enter amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-3">
                            {quickAmounts.map(quickAmount => (
                                <button
                                    key={quickAmount}
                                    onClick={() => setAmount(String(quickAmount))}
                                    className="py-3 px-4 border-2 border-gray-200 rounded-xl text-sm font-semibold text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all transform hover:scale-105 active:scale-95"
                                >
                                    ₹{quickAmount}
                                </button>
                            ))}
                        </div>

                        <div>
                            <label htmlFor="upi-id" className="block text-sm font-semibold text-gray-700 mb-2">
                                UPI ID
                            </label>
                            <input
                                type="text"
                                id="upi-id"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                placeholder="yourname@upi"
                                value={upiId}
                                onChange={(e) => setUpiId(e.target.value)}
                            />
                        </div>

                        {error && (
                            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg animate-shake">
                                <p className="text-sm text-red-700">{error}</p>
                            </div>
                        )}
                        
                        <button
                            onClick={handleAddMoney}
                            className="w-full py-4 px-4 border border-transparent rounded-xl shadow-lg text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Pay with UPI
                        </button>
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
                
                .animate-blob {
                    animation: blob 7s infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
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
                
                .animate-shake {
                    animation: shake 0.5s;
                }
            `}</style>
        </div>
    );
};

export default WalletPage;