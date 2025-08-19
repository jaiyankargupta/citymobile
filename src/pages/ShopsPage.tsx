import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MagnifyingGlassIcon, 
  MapPinIcon, 
  PhoneIcon, 
  ClockIcon,
  StarIcon,
  FunnelIcon,
  GlobeAltIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';
import { shops } from '../data/shops';

const ShopsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedShop, setSelectedShop] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleViewDetails = (shopId: string) => {
    navigate(`/shop-${shopId}`);
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
        case 'years':
          return b.yearsInBusiness - a.yearsInBusiness;
        default:
          return 0;
      }
    });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-6 sm:py-8 md:py-12">
        <div className="container-responsive">
          {/* Loading Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="animate-pulse">
              <div className="h-8 sm:h-10 md:h-12 bg-gray-300 rounded-2xl w-64 sm:w-80 md:w-96 mx-auto mb-4"></div>
              <div className="h-5 sm:h-6 md:h-7 bg-gray-300 rounded-xl w-80 sm:w-96 md:w-[28rem] mx-auto"></div>
            </div>
          </div>
          
          {/* Loading Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 animate-pulse">
                <div className="h-48 sm:h-56 bg-gray-300 rounded-2xl mb-6"></div>
                <div className="h-6 bg-gray-300 rounded-xl mb-4 w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded-lg mb-3 w-full"></div>
                <div className="h-4 bg-gray-300 rounded-lg mb-6 w-2/3"></div>
                <div className="space-y-3">
                  <div className="h-12 bg-gray-300 rounded-xl"></div>
                  <div className="h-12 bg-gray-300 rounded-xl"></div>
                  <div className="h-12 bg-gray-300 rounded-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-6 sm:py-8 md:py-12">
      <div className="container-responsive">
        {/* Enhanced Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl mb-6 shadow-2xl">
            <span className="text-2xl sm:text-3xl md:text-4xl">🏪</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Shop Locations
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed px-4">
            Discover our three convenient City Mobile Selection shops across Nawada. 
            Expert mobile services, latest smartphones, and professional repair solutions.
          </p>
        </div>

        {/* Enhanced Search and Filter Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 md:mb-16 animate-fade-in-up animate-delay-100 border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Search Bar */}
            <div className="relative lg:col-span-2">
              <MagnifyingGlassIcon className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search shops by name, location, or address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 sm:pl-14 pr-4 sm:pr-5 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 text-base sm:text-lg bg-white/50 backdrop-blur-sm"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <FunnelIcon className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-12 sm:pl-14 pr-4 sm:pr-5 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 appearance-none bg-white/50 backdrop-blur-sm text-base sm:text-lg"
              >
                <option value="rating">⭐ Sort by Rating</option>
                <option value="years">📅 Sort by Experience</option>
                <option value="name">🏷️ Sort by Name</option>
                <option value="location">📍 Sort by Location</option>
              </select>
            </div>
          </div>
        </div>

        {/* Enhanced Shops Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20">
          {filteredShops.map((shop, index) => (
            <div 
              key={shop.id} 
              className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 animate-fade-in-up group cursor-pointer ${
                selectedShop === shop.id ? 'ring-4 ring-indigo-500/50' : ''
              }`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
              onClick={() => setSelectedShop(shop.id)}
            >
              {/* Enhanced Shop Image */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={shop.image}
                  alt={shop.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Location Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold rounded-2xl shadow-2xl">
                    📍 {shop.location}
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-3 py-2 shadow-xl">
                    <div className="flex items-center space-x-2">
                      {renderStars(shop.rating)}
                      <span className="text-gray-900 font-bold text-sm">{shop.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Shop Info */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 line-clamp-2">
                  {shop.name}
                </h3>
                
                <p className="text-gray-600 mb-4 sm:mb-6 line-clamp-2 text-sm sm:text-base leading-relaxed">
                  {shop.address}
                </p>

                {/* Enhanced Quick Info Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100/50">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ClockIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-medium">Hours</p>
                      <p className="text-gray-900 font-semibold text-sm">{shop.businessHours}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100/50">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{shop.yearsInBusiness}</span>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-medium">Years</p>
                      <p className="text-gray-900 font-semibold text-sm">Experience</p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Rating Section */}
                <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      {renderStars(shop.rating)}
                      <span className="text-gray-900 font-bold text-lg">{shop.rating}</span>
                    </div>
                    <span className="text-gray-600 text-sm font-medium">{shop.reviews} reviews</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(shop.rating / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="space-y-3 sm:space-y-4">
                  {/* Call Button */}
                  <a
                    href={`tel:${shop.phone}`}
                    className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-2xl hover:from-green-700 hover:to-emerald-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base group/btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <PhoneIcon className="h-5 w-5 mr-3 group-hover/btn:scale-110 transition-transform duration-300" />
                    Call Now: {shop.phone}
                  </a>
                  
                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/${shop.whatsapp.replace('+91', '91')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold rounded-2xl hover:from-green-600 hover:to-teal-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base group/btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="text-xl mr-3 group-hover/btn:scale-110 transition-transform duration-300">💬</span>
                    WhatsApp: {shop.whatsapp}
                  </a>
                  
                  {/* View Details Button */}
                  <button
                    onClick={() => handleViewDetails(shop.id)}
                    className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base group/btn"
                  >
                    <GlobeAltIcon className="h-5 w-5 mr-3 group-hover/btn:scale-110 transition-transform duration-300" />
                    View Full Details
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredShops.length === 0 && (
          <div className="text-center py-16 sm:py-20 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 animate-fade-in-up">
            <div className="text-gray-400 mb-6 sm:mb-8">
              <MagnifyingGlassIcon className="h-20 w-20 sm:h-24 sm:w-24 mx-auto" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">No shops found</h3>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 px-4">Try adjusting your search terms or filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSortBy('rating');
              }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Enhanced Stats Section */}
        <div className="bg-gradient-to-br from-white/95 to-indigo-50/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-10 md:p-16 border border-white/20 animate-fade-in-up animate-delay-500">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 md:mb-16 text-center px-4">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              City Mobile Selection?
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                <span className="text-3xl sm:text-4xl md:text-5xl">📱</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Expert Mobile Services</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg px-2">
                Professional mobile repair, sales, and accessories from experienced technicians with years of expertise.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                <span className="text-3xl sm:text-4xl md:text-5xl">⭐</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Trusted by Thousands</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg px-2">
                High ratings and positive reviews from satisfied customers across Nawada, building trust since 2009.
              </p>
            </div>
            
            <div className="text-center group md:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                <span className="text-3xl sm:text-4xl md:text-5xl">🏪</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Multiple Locations</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg px-2">
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
