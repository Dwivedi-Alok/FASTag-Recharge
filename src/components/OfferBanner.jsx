import React from "react";

const OfferBanner = () => {
  return (
    <section className="relative h-64 md:h-48 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-3 h-3 bg-yellow-300 rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-yellow-300 rounded-full opacity-40 animate-float animation-delay-1000"></div>
        <div className="absolute top-32 left-1/3 w-4 h-4 bg-yellow-300 rounded-full opacity-50 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-white rounded-full opacity-30 animate-float animation-delay-3000"></div>
        <div className="absolute bottom-32 left-1/2 w-2 h-2 bg-white rounded-full opacity-40 animate-float animation-delay-1500"></div>
      </div>

      {/* Background with diagonal split */}
      <div className="absolute inset-0 flex">
        {/* Left side - Teal/Green solid background */}
        <div className="w-full md:w-1/2 bg-teal-700 relative">
          {/* Diagonal cut with animation */}
          <div className="absolute top-0 right-0 w-32 h-full bg-teal-700 transform origin-top-right skew-x-12 translate-x-16 animate-slide-in z-10"></div>
        </div>
        
        {/* Right side - Traffic image */}
        <div className="hidden md:block w-1/2 relative animate-fade-in-right">
          <img 
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop" 
            alt="Highway traffic" 
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-700/60 to-transparent"></div>
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-xl">
            {/* Heading with slide-in animation */}
            <p className="text-white text-lg md:text-xl font-normal italic mb-2 animate-slide-in-left">
              Grab exciting savings on travel must-haves!
            </p>
            
            {/* Main offer with staggered animation */}
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-3 animate-slide-in-left animation-delay-200">
              Flat <span className="text-yellow-300 animate-pulse-glow">₹50 OFF</span> on Recharge
            </h2>
            
            {/* Code badge with bounce animation */}
            <div className="inline-block animate-slide-in-left animation-delay-400">
              <div className="bg-yellow-300 text-black px-6 py-3 rounded hover:scale-105 transition-transform cursor-pointer animate-bounce-subtle">
                <span className="text-base md:text-lg font-semibold">
                  Apply Code <span className="font-bold text-red-600 animate-wiggle">EXTRA50</span> Today.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile background image (shown on small screens) */}
      <div className="md:hidden absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop" 
          alt="Highway traffic" 
          className="w-full h-full object-cover"
        />
      </div>

     
    </section>
  );
};

export default OfferBanner;