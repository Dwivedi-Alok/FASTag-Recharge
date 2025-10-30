import React from 'react';

const SuccessPage = ({ vehicleNumber, amount, onBackToHome }) => (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-12 h-12 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900">Recharge Successful!</h2>
            
            <p className="text-lg text-gray-700">
                Your recharge for <strong className="text-gray-900">{vehicleNumber}</strong> of <strong className="text-gray-900">₹{amount}</strong> was completed.
            </p>
            
            <button
                onClick={onBackToHome}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
                Back to Home
            </button>
        </div>
    </div>
);

export default SuccessPage;