import React from 'react';

const Footer = () => (
    <footer className="bg-primary-dark text-gray-300">
        <div className="h-24 bg-gray-700 flex items-center justify-center text-gray-400">
            [Illustrative Banner of Toll Plaza]
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
            <div>
                <span className="font-bold text-3xl text-white">FASTagRecharge</span>
                <p className="mt-2 text-gray-400">© 2025 All rights reserved.</p>
            </div>
            <div>
                <h4 className="text-lg font-semibold text-white">Reach Us</h4>
                <ul className="mt-4 space-y-2">
                    <li><a href="#" className="hover:text-white">Contact Us</a></li>
                    <li><a href="#" className="hover:text-white">FAQs</a></li>
                    <li><a href="#" className="hover:text-white">Support</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                <ul className="mt-4 space-y-2">
                    <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white">About Us</a></li>
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;