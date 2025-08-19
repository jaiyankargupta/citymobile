import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MagnifyingGlassIcon, 
  MapPinIcon, 
  PhoneIcon, 
  ClockIcon,
  StarIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';
import { shops } from '../data/shops';

const ShopsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleViewDetails = (shopId: string) => {
    navigate(`/shop/${shopId}`);
  };

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
        case 'name':
          return a.name.localeCompare(b.name);
        case 'location':
          return a.location.localeCompare(b.location);
        default:
          return 0;
      }
    });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-4 sm:py-6 md:py-8">
        <div className="container-responsive">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="animate-pulse">
              <div className="h-6 sm:h-7 md:h-8 bg-gray-300 rounded-lg w-48 sm:w-56 md:w-64 mx-auto mb-3 sm:mb-4"></div>
              <div className="h-4 sm:h-5 md:h-6 bg-gray-300 rounded-lg w-72 sm:w-80 md:w-96 mx-auto"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 animate-pulse">
                <div className="h-40 sm:h-44 md:h-48 bg-gray-300 rounded-xl sm:rounded-2xl mb-3 sm:mb-4"></div>
                <div className="h-5 sm:h-6 bg-gray-300 rounded-lg mb-2"></div>
                <div className="h-3 sm:h-4 bg-gray-300 rounded-lg mb-3 sm:mb-4 w-3/4"></div>
                <div className="h-3 sm:h-4 bg-gray-300 rounded-lg w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-4 sm:py-6 md:py-8">
      <div className="container-responsive">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in-up">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Shop Locations
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
            Find the nearest City Mobile Selection shop near you. We have three convenient locations 
            across Nawada to serve you better.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12 animate-fade-in-up animate-delay-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Search Bar */}
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search shops by name, location, or address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <FunnelIcon className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 appearance-none bg-white text-sm sm:text-base"
              >
                <option value="rating">Sort by Rating</option>
                <option value="name">Sort by Name</option>
                <option value="location">Sort by Location</option>
              </select>
            </div>
          </div>
        </div>

        {/* Shops Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-14 md:mb-16">
          {filteredShops.map((shop, index) => (
            <div 
              key={shop.id} 
              className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Shop Image */}
              <div className="relative h-40 sm:h-44 md:h-48 lg:h-56 overflow-hidden">
                <img
                  src={shop.image}
                  alt={shop.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <span className="inline-flex items-center px-2 sm:px-3 py-1 bg-indigo-600 text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg">
                    {shop.location}
                  </span>
                </div>
              </div>

              {/* Shop Info */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
                  {shop.name}
                </h3>
                
                <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base">
                  {shop.address}
                </p>

                {/* Quick Info Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl">
                    <ClockIcon className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-xs sm:text-sm">{shop.businessHours}</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl">
                    <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-xs sm:text-sm">{shop.location}</span>
                  </div>
                </div>

                {/* Rating and Reviews - Simplified for Mobile */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      {renderStars(shop.rating)}
                      <span className="text-gray-900 font-semibold text-sm sm:text-base">{shop.rating}</span>
                      <span className="text-gray-600 text-xs sm:text-sm">({shop.reviews} reviews)</span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs sm:text-sm text-gray-500 font-medium">{shop.yearsInBusiness} years</p>
                    </div>
                  </div>
                  
                  {/* Mobile-friendly rating display */}
                  <div className="hidden sm:block">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <StarIcon className="h-5 w-5 text-indigo-600" />
                        <div>
                          <p className="text-gray-600 font-medium text-sm">Rating</p>
                          <div className="flex items-center">
                            {renderStars(shop.rating)}
                            <span className="ml-2 text-gray-900 font-semibold text-sm">{shop.rating}</span>
                            <span className="ml-2 text-gray-600 text-xs">({shop.reviews} reviews)</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <ClockIcon className="h-5 w-5 text-indigo-600" />
                        <div>
                          <p className="text-gray-600 font-medium text-sm">Years</p>
                          <p className="text-gray-900 font-semibold text-sm">{shop.yearsInBusiness} years</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-3 sm:space-y-4">
                  <a
                    href={`tel:${shop.phone}`}
                    className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-lg sm:rounded-xl hover:from-green-700 hover:to-green-800 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                    Call Now: {shop.phone}
                  </a>
                  
                  <a
                    href={`https://wa.me/${shop.whatsapp.replace('+91', '91')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg sm:rounded-xl hover:from-green-600 hover:to-green-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                    WhatsApp: {shop.whatsapp}
                  </a>
                  
                  <button
                    onClick={() => handleViewDetails(shop.id)}
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg sm:rounded-xl hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2 sm:mr-3"></div>
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
          <div className="text-center py-12 sm:py-16 bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 animate-fade-in-up">
            <div className="text-gray-400 mb-4 sm:mb-6">
              <MagnifyingGlassIcon className="h-16 w-16 sm:h-20 sm:w-20 mx-auto" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">No shops found</h3>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 px-4">Try adjusting your search terms or filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSortBy('rating');
              }}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-indigo-700 transition-colors text-sm sm:text-base"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Enhanced Stats Section */}
        <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-indigo-100 mb-12 sm:mb-14 md:mb-16 animate-fade-in-up animate-delay-500">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12 text-center px-4">
            Why Choose City Mobile Selection?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            <div className="text-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl sm:text-2xl md:text-3xl">📱</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Expert Mobile Services</h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base px-2">
                Professional mobile repair, sales, and accessories from experienced technicians with years of expertise.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl sm:text-2xl md:text-3xl">⭐</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Trusted by Thousands</h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base px-2">
                High ratings and positive reviews from satisfied customers across Nawada, building trust since 2009.
              </p>
            </div>
            <div className="text-center group sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl sm:text-2xl md:text-3xl">🏪</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Multiple Locations</h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base px-2">
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
