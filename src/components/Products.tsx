
import React from 'react';

const Products = () => {
  const products = [
    {
      name: "Dehydrated Tropical Fruits",
      description: "Premium mango, pineapple, papaya, and banana chips. Naturally sweet and packed with nutrients.",
      price: "LKR 800 - 1,500",
      category: "Fruits",
      emoji: "🥭"
    },
    {
      name: "Coconut Products",
      description: "Coconut chips, desiccated coconut, and coconut flour. Pure Ceylon coconut goodness.",
      price: "LKR 600 - 1,200",
      category: "Coconut",
      emoji: "🥥"
    },
    {
      name: "Dehydrated Vegetables",
      description: "Carrot, beetroot, sweet potato, and okra chips. Healthy snacking made delicious.",
      price: "LKR 700 - 1,300",
      category: "Vegetables",
      emoji: "🥕"
    },
    {
      name: "Sri Lankan Spices",
      description: "Dehydrated curry leaves, pandan, and traditional spice mixes. Authentic Sri Lankan flavors.",
      price: "LKR 500 - 1,000",
      category: "Spices",
      emoji: "🌿"
    },
    {
      name: "Jackfruit Products",
      description: "Dehydrated jackfruit, jackfruit chips, and young jackfruit. Sri Lanka's national fruit.",
      price: "LKR 900 - 1,600",
      category: "Specialty",
      emoji: "🫛"
    },
    {
      name: "Mixed Fruit Packs",
      description: "Assorted dehydrated fruit combinations. Perfect for gifting or variety snacking.",
      price: "LKR 1,200 - 2,000",
      category: "Gift Packs",
      emoji: "🎁"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Premium Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of naturally processed hydrated foods, 
            each carefully crafted to preserve authentic Sri Lankan flavors and nutritional value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{product.emoji}</div>
                  <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {product.category}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="text-center">
                  <div className="text-xl font-bold text-emerald-600 mb-4">
                    {product.price}
                  </div>
                  <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need custom quantities or bulk orders?</p>
          <button className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
            Contact for Wholesale Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
