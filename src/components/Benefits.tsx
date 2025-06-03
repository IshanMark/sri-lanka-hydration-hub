
import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      title: "100% Natural Processing",
      description: "No artificial preservatives, colors, or additives. Just pure, natural goodness.",
      icon: "🌱",
      color: "emerald"
    },
    {
      title: "Export Quality Standards",
      description: "All products meet international quality standards and food safety requirements.",
      icon: "⭐",
      color: "amber"
    },
    {
      title: "Rich in Nutrients",
      description: "Retains essential vitamins, minerals, and fiber through our careful dehydration process.",
      icon: "💪",
      color: "orange"
    },
    {
      title: "Long Shelf Life",
      description: "Extended freshness without compromising taste or nutritional value.",
      icon: "🕐",
      color: "blue"
    },
    {
      title: "Supporting Local Farmers",
      description: "Sourced directly from Sri Lankan farmers, ensuring fair trade and fresh produce.",
      icon: "🤝",
      color: "green"
    },
    {
      title: "Traditional Sri Lankan Taste",
      description: "Authentic flavors that capture the essence of Sri Lankan tropical fruits and spices.",
      icon: "🏝️",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: "bg-emerald-100 text-emerald-700",
      amber: "bg-amber-100 text-amber-700",
      orange: "bg-orange-100 text-orange-700",
      blue: "bg-blue-100 text-blue-700",
      green: "bg-green-100 text-green-700",
      purple: "bg-purple-100 text-purple-700"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-700";
  };

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Why Choose Ceylon Hydrated?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference of premium Sri Lankan hydrated foods 
            that combine traditional methods with modern quality standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group hover:scale-105"
            >
              <div className="text-6xl mb-6">{benefit.icon}</div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {benefit.description}
              </p>
              
              <div className={`inline-block px-4 py-2 rounded-full ${getColorClasses(benefit.color)} font-semibold`}>
                Premium Quality
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Certified & Trusted
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our products are certified by Sri Lankan export authorities and meet international 
            food safety standards. We're committed to delivering the highest quality hydrated foods 
            that represent the best of Sri Lankan agriculture.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              ISO Certified
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              HACCP Compliant
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              Export Approved
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
