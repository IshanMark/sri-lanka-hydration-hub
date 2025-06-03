
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Ceylon Hydrated
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preserving Sri Lankan heritage through premium hydrated foods, 
              bringing you the finest naturally processed products from the pearl of the Indian Ocean.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="prose lg:prose-lg">
                <h3 className="text-2xl font-bold text-emerald-700 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To share the authentic taste and nutritional benefits of Sri Lankan hydrated foods 
                  with the world, while supporting local farmers and preserving traditional food 
                  processing methods passed down through generations.
                </p>
              </div>

              <div className="prose lg:prose-lg">
                <h3 className="text-2xl font-bold text-emerald-700 mb-4">Our Heritage</h3>
                <p className="text-gray-600 leading-relaxed">
                  Founded on the rich agricultural traditions of Sri Lanka, we specialize in 
                  premium hydrated foods including dehydrated tropical fruits, spices, and 
                  coconut products. Our commitment to quality ensures every product meets 
                  international export standards.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-emerald-100 px-4 py-2 rounded-full">
                  <span className="text-emerald-700 font-semibold">100% Natural</span>
                </div>
                <div className="bg-amber-100 px-4 py-2 rounded-full">
                  <span className="text-amber-700 font-semibold">Export Quality</span>
                </div>
                <div className="bg-orange-100 px-4 py-2 rounded-full">
                  <span className="text-orange-700 font-semibold">Traditional Methods</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-amber-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-6xl">🥥</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Sri Lankan Excellence</h4>
                  <p className="text-gray-600">Premium hydrated foods from the island paradise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
