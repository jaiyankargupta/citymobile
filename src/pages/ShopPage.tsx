import React, { useState } from 'react';
import { StarIcon, ShoppingCartIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'home', name: 'Home & Garden' },
    { id: 'books', name: 'Books' },
  ];

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      category: 'electronics',
      price: 99.99,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      shopUrl: 'https://amazon.com',
      shopName: 'Amazon',
    },
    {
      id: 2,
      name: 'Smart Watch',
      category: 'electronics',
      price: 199.99,
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      shopUrl: 'https://bestbuy.com',
      shopName: 'Best Buy',
    },
    {
      id: 3,
      name: 'Designer T-Shirt',
      category: 'clothing',
      price: 29.99,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      shopUrl: 'https://nike.com',
      shopName: 'Nike',
    },
    {
      id: 4,
      name: 'Coffee Maker',
      category: 'home',
      price: 79.99,
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop',
      shopUrl: 'https://target.com',
      shopName: 'Target',
    },
    {
      id: 5,
      name: 'Bestseller Novel',
      category: 'books',
      price: 14.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
      shopUrl: 'https://barnesandnoble.com',
      shopName: 'Barnes & Noble',
    },
    {
      id: 6,
      name: 'Gaming Laptop',
      category: 'electronics',
      price: 1299.99,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop',
      shopUrl: 'https://newegg.com',
      shopName: 'Newegg',
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<StarIcon key={i} className="h-4 w-4 text-yellow-400" />);
      } else {
        stars.push(<StarOutlineIcon key={i} className="h-4 w-4 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Shop Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing products from top retailers. Click on any product to visit the shop and make your purchase.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.shopName}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center mr-2">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({Math.floor(Math.random() * 500) + 100} reviews)
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-indigo-600">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-500 capitalize">
                    {product.category}
                  </span>
                </div>
                
                <a
                  href={product.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-200"
                >
                  <ShoppingCartIcon className="h-5 w-5 mr-2" />
                  Shop on {product.shopName}
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Shops Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Shops
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className={`block p-6 rounded-xl bg-gradient-to-r ${shop.color} text-white text-center hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200`}
              >
                <h3 className="text-xl font-bold mb-2">{shop.name}</h3>
                <p className="text-sm opacity-90">Visit our partner store</p>
                <ArrowTopRightOnSquareIcon className="h-5 w-5 mx-auto mt-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
