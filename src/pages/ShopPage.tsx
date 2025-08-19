import React, { useState } from 'react';
import { 
  StarIcon, 
  ArrowTopRightOnSquareIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'home', name: 'Home & Garden' },
    { id: 'beauty', name: 'Beauty' },
    { id: 'sports', name: 'Sports' }
  ];

  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 89.99,
      rating: 4.5,
      category: "electronics",
      shopName: "TechStore",
      shopUrl: "https://techstore.com",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      rating: 4.3,
      category: "fashion",
      shopName: "EcoFashion",
      shopUrl: "https://ecofashion.com",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Smart Home Security Camera",
      price: 149.99,
      rating: 4.7,
      category: "electronics",
      shopName: "SmartHome",
      shopUrl: "https://smarthome.com",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Ceramic Plant Pot Set",
      price: 45.99,
      rating: 4.4,
      category: "home",
      shopName: "GardenCo",
      shopUrl: "https://gardenco.com",
      image: "https://images.unsplash.com/photo-1485955900006-10f4d9d7195e?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Natural Face Moisturizer",
      price: 34.99,
      rating: 4.6,
      category: "beauty",
      shopName: "BeautyNaturals",
      shopUrl: "https://beautynaturals.com",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Yoga Mat Premium",
      price: 59.99,
      rating: 4.8,
      category: "sports",
      shopName: "FitLife",
      shopUrl: "https://fitlife.com",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop"
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<StarSolidIcon key={i} className="h-4 w-4 text-yellow-400" />);
      } else {
        stars.push(<StarIcon key={i} className="h-4 w-4 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen py-4 sm:py-6 md:py-8">
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Our Shop Collection
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Discover amazing products from top retailers. Click on any product to visit the shop and make your purchase.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-200 text-sm sm:text-base ${
                selectedCategory === category.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-indigo-50 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <span className="bg-indigo-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {product.shopName}
                  </span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center mr-2">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">
                    {product.rating} ({Math.floor(Math.random() * 500) + 100} reviews)
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-indigo-600">
                    ${product.price}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 capitalize">
                    {product.category}
                  </span>
                </div>
                
                <a
                  href={product.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-200 text-sm sm:text-base"
                >
                  <ShoppingCartIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Shop on {product.shopName}
                  <ArrowTopRightOnSquareIcon className="h-3 w-3 sm:h-4 sm:w-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Shops Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center px-4">
            Featured Shops
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: 'Amazon', url: 'https://amazon.com', color: 'from-orange-400 to-orange-600' },
              { name: 'Best Buy', url: 'https://bestbuy.com', color: 'from-blue-400 to-blue-600' },
              { name: 'Target', url: 'https://target.com', color: 'from-red-400 to-red-600' },
            ].map((shop, index) => (
              <a
                key={index}
                href={shop.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-4 sm:p-6 rounded-lg sm:rounded-xl bg-gradient-to-r ${shop.color} text-white text-center hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 ${
                  index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <h3 className="text-lg sm:text-xl font-bold mb-2">{shop.name}</h3>
                <p className="text-xs sm:text-sm opacity-90">Visit our partner store</p>
                <ArrowTopRightOnSquareIcon className="h-4 w-4 sm:h-5 sm:w-5 mx-auto mt-2 sm:mt-3" />
              </a>
            ))}
          </div>
        </div>
        <a
          href="https://citymobileselection.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Visit Our Website
          <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-3" />
        </a>
      </div>
    </div>
  );
};

export default ShopPage;
