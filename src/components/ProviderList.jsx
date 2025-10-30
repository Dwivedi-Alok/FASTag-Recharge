import React from "react";

const ProviderList = () => {
  const providers = [
    { id: 1, name: "Indian Highways Management", logo: "https://via.placeholder.com/120x60/1e40af/ffffff?text=IHMCL" },
    { id: 2, name: "IndusInd Bank", logo: "https://via.placeholder.com/120x60/e11d48/ffffff?text=IndusInd" },
    { id: 3, name: "Bank of Baroda", logo: "https://via.placeholder.com/120x60/ea580c/ffffff?text=BOB" },
    { id: 4, name: "Axis Bank", logo: "https://via.placeholder.com/120x60/7c2d12/ffffff?text=Axis" },
    { id: 5, name: "IDFC FIRST Bank", logo: "https://via.placeholder.com/120x60/0891b2/ffffff?text=IDFC" },
    { id: 6, name: "HDFC Bank", logo: "https://via.placeholder.com/120x60/0c4a6e/ffffff?text=HDFC" },
    { id: 7, name: "Kotak Mahindra Bank", logo: "https://via.placeholder.com/120x60/dc2626/ffffff?text=Kotak" },
    { id: 8, name: "Equitas", logo: "https://via.placeholder.com/120x60/15803d/ffffff?text=Equitas" },
    { id: 9, name: "IDBI Bank", logo: "https://via.placeholder.com/120x60/1d4ed8/ffffff?text=IDBI" },
    { id: 10, name: "IOB", logo: "https://via.placeholder.com/120x60/b91c1c/ffffff?text=IOB" },
    { id: 11, name: "Jammu and Kashmir Bank", logo: "https://via.placeholder.com/120x60/be123c/ffffff?text=J%26K" },
    { id: 12, name: "Karnataka Bank", logo: "https://via.placeholder.com/120x60/ea580c/ffffff?text=Karnataka" },
    { id: 13, name: "Paytm Payments Bank", logo: "https://via.placeholder.com/120x60/0284c7/ffffff?text=Paytm" },
    { id: 14, name: "State Bank of India", logo: "https://via.placeholder.com/120x60/1e3a8a/ffffff?text=SBI" },
    { id: 15, name: "Federal Bank", logo: "https://via.placeholder.com/120x60/f59e0b/ffffff?text=Federal" },
    { id: 16, name: "ICICI Bank", logo: "https://via.placeholder.com/120x60/b45309/ffffff?text=ICICI" },
    { id: 17, name: "UCO Bank", logo: "https://via.placeholder.com/120x60/16a34a/ffffff?text=UCO" },
    { id: 18, name: "Airtel Payments Bank", logo: "https://via.placeholder.com/120x60/dc2626/ffffff?text=Airtel" },
    { id: 19, name: "Bank of Maharashtra", logo: "https://via.placeholder.com/120x60/ea580c/ffffff?text=BOM" },
    { id: 20, name: "Indian Bank", logo: "https://via.placeholder.com/120x60/0891b2/ffffff?text=Indian" },
    { id: 21, name: "LivQuik Technology India", logo: "https://via.placeholder.com/120x60/7c3aed/ffffff?text=LivQuik" },
    { id: 22, name: "South Indian Bank", logo: "https://via.placeholder.com/120x60/0c4a6e/ffffff?text=SIB" },
    { id: 23, name: "Union Bank of India", logo: "https://via.placeholder.com/120x60/b91c1c/ffffff?text=Union" },
    { id: 24, name: "Canara Bank", logo: "https://via.placeholder.com/120x60/be123c/ffffff?text=Canara" },
    { id: 25, name: "AU Bank", logo: "https://via.placeholder.com/120x60/ea580c/ffffff?text=AU" },
    { id: 26, name: "Bandhan Bank", logo: "https://via.placeholder.com/120x60/15803d/ffffff?text=Bandhan" },
  ];

  // Duplicate providers for seamless loop
  const duplicatedProviders = [...providers, ...providers];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            FASTag Providers
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted by leading banks and payment providers across India
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling content */}
          <div className="flex animate-scroll">
            {duplicatedProviders.map((provider, index) => (
              <div
                key={`${provider.id}-${index}`}
                className="flex-shrink-0 mx-4 w-40 h-28 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-4 border border-gray-100 hover:scale-105 group"
              >
                <img
                  src={provider.logo}
                  alt={provider.name}
                  className="w-full h-14 object-contain mb-2"
                />
                <p className="text-xs text-center text-gray-700 font-medium line-clamp-2 group-hover:text-teal-600 transition-colors">
                  {provider.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats or CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            <span className="font-semibold text-teal-600">{providers.length}+</span> FASTag providers to choose from
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProviderList;
