import React, { useState } from 'react';

const PaymentPage = ({ vehicleNumber, provider, onPay, onBack }) => {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('upi');
    const [upiId, setUpiId] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [bank, setBank] = useState('');

    const handlePay = () => {
        const numAmount = parseInt(amount, 10);
        if (isNaN(numAmount) || numAmount < 100) {
            setError("Please enter a valid amount (minimum ₹100).");
            return;
        }

        if (paymentMethod === 'upi') {
            if (!upiId || !/^[\w.-]+@[\w.-]+$/.test(upiId)) {
                setError("Please enter a valid UPI ID (e.g., yourname@upi).");
                return;
            }
        } else if (paymentMethod === 'cards') {
            if (!cardNumber || !/^\d{16}$/.test(cardNumber)) {
                setError("Please enter a valid 16-digit card number.");
                return;
            }
            if (!expiryDate || !/^\d{2}\/\d{2}$/.test(expiryDate)) {
                setError("Please enter a valid expiry date (MM/YY).");
                return;
            }
            if (!cvv || !/^\d{3}$/.test(cvv)) {
                setError("Please enter a valid 3-digit CVV.");
                return;
            }
        } else if (paymentMethod === 'netbanking') {
            if (!bank) {
                setError("Please select a bank.");
                return;
            }
        }

        setError('');
        onPay(numAmount);
    };

    const quickAmounts = [200, 500, 1000];
    const banks = ["State Bank of India", "HDFC Bank", "ICICI Bank", "Axis Bank", "Kotak Mahindra Bank"];

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl space-y-6">
                <button onClick={onBack} className="flex items-center text-sm font-medium text-primary hover:underline">
                    <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Back
                </button>
                
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Complete Recharge</h2>
                    <p className="text-gray-600">
                        Recharging for: <strong className="text-gray-800">{vehicleNumber}</strong>
                    </p>
                    <p className="text-gray-600">
                        Provider: <strong className="text-gray-800">{provider}</strong>
                    </p>
                </div>
                
                <div className="space-y-4">
                    <div>
                        <label htmlFor="recharge-amount" className="block text-sm font-medium text-gray-700">Recharge Amount (₹)</label>
                        <input
                            type="number"
                            id="recharge-amount"
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                            placeholder="Enter amount (e.g., 500)"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2">
                        {quickAmounts.map(quickAmount => (
                            <button
                                key={quickAmount}
                                onClick={() => setAmount(String(quickAmount))}
                                className="quick-amount-btn py-2 px-3 border border-gray-300 rounded-md text-sm font-medium text-primary hover:bg-secondary"
                            >
                                ₹{quickAmount}
                            </button>
                        ))}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Select Payment Method</label>
                        <div className="mt-2 grid grid-cols-3 gap-2 rounded-lg bg-gray-200 p-1">
                            <button
                                onClick={() => setPaymentMethod('upi')}
                                className={`w-full py-2 text-sm font-medium rounded-md ${paymentMethod === 'upi' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:bg-gray-300'}`}>
                                UPI
                            </button>
                            <button
                                onClick={() => setPaymentMethod('cards')}
                                className={`w-full py-2 text-sm font-medium rounded-md ${paymentMethod === 'cards' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:bg-gray-300'}`}>
                                Cards
                            </button>
                            <button
                                onClick={() => setPaymentMethod('netbanking')}
                                className={`w-full py-2 text-sm font-medium rounded-md ${paymentMethod === 'netbanking' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:bg-gray-300'}`}>
                                Netbanking
                            </button>
                        </div>
                    </div>

                    {paymentMethod === 'upi' && (
                        <div>
                            <label htmlFor="upi-id" className="block text-sm font-medium text-gray-700">UPI ID</label>
                            <input
                                type="text"
                                id="upi-id"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                                placeholder="yourname@upi"
                                value={upiId}
                                onChange={(e) => setUpiId(e.target.value)}
                            />
                        </div>
                    )}

                    {paymentMethod === 'cards' && (
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card Number</label>
                                <input
                                    type="text"
                                    id="card-number"
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                                    placeholder="0000 0000 0000 0000"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                                    <input
                                        type="text"
                                        id="expiry-date"
                                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                                        placeholder="MM/YY"
                                        value={expiryDate}
                                        onChange={(e) => setExpiryDate(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                                        placeholder="123"
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {paymentMethod === 'netbanking' && (
                        <div>
                            <label htmlFor="bank" className="block text-sm font-medium text-gray-700">Select Bank</label>
                            <select
                                id="bank"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                                value={bank}
                                onChange={(e) => setBank(e.target.value)}
                            >
                                <option value="">Select a bank</option>
                                {banks.map(b => (
                                    <option key={b} value={b}>{b}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {error && <p className="text-sm text-red-600">{error}</p>}
                    
                    <button
                        onClick={handlePay}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
