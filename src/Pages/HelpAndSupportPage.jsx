import React from 'react';

// FAQ data - this could be fetched from an API
const faqs = [
  {
    question: "How do I recharge my FASTag?",
    answer: "You can recharge your FASTag directly from the 'Recharge' section of the app. Just enter your vehicle number, select your FASTag issuer bank, enter the amount, and pay using your wallet balance or any other saved payment method."
  },
  {
    question: "My recharge failed but the amount was debited.",
    answer: "Don't worry. If your recharge fails and the amount is debited from your account, it will be automatically refunded to the source account within 3-5 business days. You can check the status in your 'Wallet History'."
  },
  {
    question: "How long does it take for the recharge to reflect in my FASTag balance?",
    answer: "Most recharges are instant. However, in some rare cases, it might take up to 15-20 minutes for the balance to reflect in your FASTag account. Please check your issuer bank's FASTag portal for the final status."
  },
  {
    question: "What if I recharged the wrong FASTag?",
    answer: "Unfortunately, FASTag recharges are processed in real-time and cannot be reversed. We kindly request you to double-check the vehicle number before proceeding with the recharge."
  },
  {
    question: "How do I add money to my wallet?",
    answer: "Go to the 'Wallet' section on the homepage, click on 'Add Money', enter the amount you wish to add, and complete the payment using UPI, Credit Card, Debit Card, or Netbanking."
  },
];

const HelpAndSupportPage = () => {
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
        <div className="mb-8 animate-fade-in text-center">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-teal-700 to-teal-600 bg-clip-text text-transparent mb-2">
            Help & Support
          </h1>
          <p className="text-teal-600 font-medium text-lg">How can we help you today?</p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up animation-delay-200">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Email Us</h3>
            <p className="text-gray-600 text-sm mb-4">Get a response within 24 hours.</p>
            <a href="mailto:support@fastagapp.com" className="font-medium text-teal-600 hover:text-teal-700">support@fastagapp.com</a>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h8a2 2 0 012 2v4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Live Chat</h3>
            <p className="text-gray-600 text-sm mb-4">Chat with our team 24/7.</p>
            <button className="font-medium text-teal-600 hover:text-teal-700">Start Chat Now</button>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Call Us</h3>
            <p className="text-gray-600 text-sm mb-4">Speak to an agent 8 AM - 10 PM.</p>
            <a href="tel:1800-000-0000" className="font-medium text-teal-600 hover:text-teal-700">1800-000-0000</a>
          </div>
        </div>

        {/* --- NEW: Contact Form & Location Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 animate-slide-up animation-delay-400">
          
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Recharge Issue"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Please describe your issue..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md hover:from-teal-600 hover:to-teal-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Location */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Location</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">FASTag App HQ</h3>
              <p className="text-gray-600 mt-1">123 Tech Park, Cyber City</p>
              <p className="text-gray-600">Gurugram, Haryana, 122002</p>
              <p className="text-gray-600">India</p>
            </div>
            
            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center border border-gray-300">
              <p className="text-gray-500">Map loading...</p>
              {/* You would replace this div with an iframe for a real map */}
              {/* <iframe 
                src="https://www.google.com/maps/embed?pb=..."
                width="100%" 
                height="100%" 
                style={{ border:0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe> */}
            </div>
          </div>
        </div>
        {/* --- END: Contact Form & Location Section --- */}


        {/* FAQs Section */}
        <div className="animate-slide-up animation-delay-600"> {/* Changed delay */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-100 p-6 group hover:shadow-xl transition-all"
                style={{ animation: `slideUp 0.6s ease-out ${600 + index * 100}ms backwards` }} /* Changed delay */
              >
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900 list-none">
                  {faq.question}
                  <span className="ml-4 transition-transform transform group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 mt-4 animate-fade-in-content">
                  {faq.answer}
                </p>
              </details>
            ))}
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
        
        /* Animation for accordion content */
        @keyframes fadeInContent {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        details[open] p {
          animation: fadeInContent 0.4s ease-out;
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

        /* Added new delay class */
        .animation-delay-600 {
          animation-delay: 0.6s;
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

export default HelpAndSupportPage;

