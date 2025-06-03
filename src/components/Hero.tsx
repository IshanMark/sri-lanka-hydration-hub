
import React from 'react';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Premium
            <span className="text-emerald-600 block">Hydrated Foods</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Naturally Healthy & Delicious! Experience the authentic taste of Sri Lankan hydrated foods, 
            crafted with traditional methods and export quality standards.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToProducts}
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Explore Products
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-amber-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-emerald-300 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-orange-300 rounded-full opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;
