import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPinIcon, 
  PhoneIcon, 
  ClockIcon,
  StarIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';
import { shops } from '../data/shops';

// Loading Skeleton Component
const ShopCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 animate-pulse">
    <div className="h-56 bg-gray-200"></div>
    <div className="p-8">
      <div className="h-6 bg-gray-200 rounded mb-3"></div>
      <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
      <div className="h-3 bg-gray-200 rounded mb-6 w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded mb-4 w-2/3"></div>
      <div className="space-y-4">
        <div className="h-12 bg-gray-200 rounded-xl"></div>
        <div className="h-12 bg-gray-200 rounded-xl"></div>
        <div className="h-12 bg-gray-200 rounded-xl"></div>
      </div>
    </div>
  </div>
);

const ShopsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const navigate = useNavigate();

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredShops = shops
    .filter(shop => 
      shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shop.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shop.address.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        case 'years':
          return b.yearsInBusiness - a.yearsInBusiness;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

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

  const handleViewDetails = (shopId: string) => {
    setIsLoading(true);
    // Scroll to top before navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Small delay to show loading state and ensure smooth scroll
    setTimeout(() => {
      navigate(`/shop/${shopId}`);
    }, 300);
  };

  if (isPageLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading shops...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6 animate-fade-in-up">
            <SparklesIcon className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">3 Convenient Locations</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animate-delay-100">
            Our Shop Locations
          </h1>
          
          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            Find the nearest City Mobile Selection shop near you. All shops offer mobile sales, 
            repair services, and accessories with expert technicians.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        {/* Search and Filter Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-100 animate-fade-in-up animate-delay-300">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-indigo-400" />
              <input
                type="text"
                placeholder="Search by location, address, or shop name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 focus:outline-none transition-all duration-300 text-lg"
              />
            </div>
            <div className="relative">
              <FunnelIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-indigo-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 focus:outline-none transition-all duration-300 appearance-none bg-white text-lg cursor-pointer"
              >
                <option value="rating">⭐ Sort by Rating</option>
                <option value="reviews">📊 Sort by Reviews</option>
                <option value="years">🏢 Sort by Years in Business</option>
                <option value="name">🔤 Sort by Name</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 animate-fade-in-up animate-delay-400">
          <div className="bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-100 inline-block">
            <p className="text-gray-700 font-medium">
              📍 Showing <span className="text-indigo-600 font-bold">{filteredShops.length}</span> of <span className="text-indigo-600 font-bold">{shops.length}</span> shops
            </p>
          </div>
        </div>

        {/* Shops Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredShops.map((shop, index) => (
            <div
              key={shop.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 overflow-hidden border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Shop Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={shop.image}
                  alt={shop.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {shop.yearsInBusiness}+ Years
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center space-x-1">
                    <StarSolidIcon className="h-4 w-4 text-yellow-500" />
                    <span className="font-bold text-gray-900">{shop.rating}</span>
                  </div>
                </div>
              </div>

              {/* Shop Info */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {shop.name}
                  </h3>
                  <p className="text-indigo-600 font-semibold mb-2">{shop.location}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{shop.address}</p>
                </div>

                {/* Rating and Reviews */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {renderStars(shop.rating)}
                    </div>
                    <span className="text-gray-700 font-medium">({shop.reviews} reviews)</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 font-medium">{shop.yearsInBusiness} years in business</p>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                    <ClockIcon className="h-5 w-5 text-indigo-600" />
                    <span className="text-gray-700 font-medium">{shop.hours}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                    <MapPinIcon className="h-5 w-5 text-indigo-600" />
                    <span className="text-gray-700 font-medium">{shop.city}</span>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-4">
                  <a
                    href={`tel:${shop.phone}`}
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-xl hover:from-green-700 hover:to-green-800 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <PhoneIcon className="h-5 w-5 mr-3" />
                    Call Now: {shop.callNow}
                  </a>
                  
                  <a
                    href={`https://wa.me/${shop.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-green-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <PhoneIcon className="h-5 w-5 mr-3" />
                    WhatsApp: {shop.whatsapp}
                  </a>
                  
                  <button
                    onClick={() => handleViewDetails(shop.id)}
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    ) : (
                      <span>View Details</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredShops.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl shadow-xl border border-gray-100 animate-fade-in-up">
            <div className="text-gray-400 mb-6">
              <MagnifyingGlassIcon className="h-20 w-20 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No shops found</h3>
            <p className="text-gray-600 text-lg mb-6">Try adjusting your search terms or filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSortBy('rating');
              }}
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Enhanced Stats Section */}
        <div className="bg-gradient-to-br from-white to-indigo-50 rounded-3xl shadow-2xl p-12 border border-indigo-100 mb-16 animate-fade-in-up animate-delay-500">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose City Mobile Selection?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Mobile Services</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional mobile repair, sales, and accessories from experienced technicians with years of expertise.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Thousands</h3>
              <p className="text-gray-600 leading-relaxed">
                High ratings and positive reviews from satisfied customers across Nawada, building trust since 2009.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🏪</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Multiple Locations</h3>
              <p className="text-gray-600 leading-relaxed">
                Convenient locations across Nawada for easy access to mobile services, wherever you are in the city.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopsPage;
