import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user, onLogout, onProfileClick, onWalletClick }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const userInitial = user?.email ? user.email.charAt(0).toUpperCase() : 'G';
    const userEmail = user?.email ? user.email : 'Guest';

    const navLinks = [
        { name: 'Home', path: '/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { name: 'Recharge History', path: '/recharge-history', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
        { name: 'Wallet History', path: '/wallet-history', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
        { name: 'Offers', path: '/offers', icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7' },
        { name: 'Help & Support', path: '/help-and-support', icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100 relative">
            <nav className="w-screen mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to='/' className="flex items-center space-x-2 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                                </svg>
                            </div>
                            <span className="font-bold text-2xl bg-gradient-to-r from-teal-700 to-teal-600 bg-clip-text text-transparent">
                                FASTagRecharge
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    {/* CHANGE 1: Increased space-x-4 to space-x-6 for more breathing room */}
                    <div className="hidden lg:flex mx-2 items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                // CHANGE 2: Added `whitespace-nowrap` to prevent text from splitting
                                className="flex items-center space-x-0 px-1 py-2 rounded-lg text-gray-600 hover:text-teal-700 hover:bg-teal-50 transition-all duration-200 font-medium text-sm group whitespace-nowrap"
                            >
                                <svg className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon} />
                                </svg>
                                <span>{link.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    {/* CHANGE 3: Increased space-x-3 to space-x-4 */}
                    <div className="flex items-center space-x-4">
                        {/* Wallet Button */}
                        <button 
                            onClick={onWalletClick} 
                            className="hidden lg:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 shadow-md font-medium"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                            </svg>
                            <span className="hidden xl:inline">Wallet</span>
                        </button>

                        {/* Profile Dropdown */}
                        <div 
                            onClick={onProfileClick} 
                            className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-200 border border-gray-200 hover:border-teal-300"
                        >
                            <span className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-white flex items-center justify-center font-bold text-sm shadow-md">
                                {userInitial}
                            </span>
                            <span className="hidden lg:block text-sm font-medium text-gray-700 max-w-[150px] truncate">
                                {userEmail}
                            </span>
                        </div>

                        {/* Logout Button */}
                        <button 
                            onClick={onLogout} 
                            className="hidden lg:flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-100 rounded-lg transition-all duration-200 font-medium border border-red-200 hover:border-red-300 hover:text-red-700"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                            </svg>
                            <span>Logout</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div 
                    id="mobile-menu"
                    className={`
                        lg:hidden 
                        transition-all duration-300 ease-in-out 
                        overflow-y-hidden
                        ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
                    `}
                >
                    <div className="py-4 border-t border-gray-100 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-teal-700 hover:bg-teal-50 transition-all duration-200 font-medium"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon} />
                                </svg>
                                <span>{link.name}</span>
                            </Link>
                        ))}
                        
                        <button 
                            onClick={() => {
                                onWalletClick();
                                setIsMobileMenuOpen(false);
                            }}
                            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-teal-700 hover:bg-teal-50 transition-all duration-200 font-medium w-full"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                            </svg>
                            <span>Wallet</span>
                        </button>
                        
                        <button 
                            onClick={() => {
                                onLogout();
                                setIsMobileMenuOpen(false);
                            }}
                            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200 font-medium w-full"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                            </svg>
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;