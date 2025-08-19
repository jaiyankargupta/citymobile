import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon, 
  PhoneIcon, 
  ClockIcon,
  StarIcon,
  ArrowTopRightOnSquareIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

const ShopGirlsSchoolPage: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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

  const isShopOpen = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute;
    
    // Business hours: 9:00 AM - 9:30 PM
    const openTime = 9 * 60; // 9:00 AM
    const closeTime = 21 * 60 + 30; // 9:30 PM
    
    return currentTime >= openTime && currentTime <= closeTime;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
            <MapPinIcon className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Near Girls School</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            City Mobile Selection
          </h1>
          
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Thana Road, Near Girl School, Opposite Yamuna Path, Nawada Road-805110
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        {/* Important Links Section - Moved Above */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-100">
          
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Website Link */}
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-200/50">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <GlobeAltIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Website</h3>
              <p className="text-gray-600 mb-6 text-lg">Visit our main website for complete information</p>
              <a
                href="https://citymobileselection.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Visit Website
                <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-3" />
              </a>
            </div>

            {/* JustDial Link */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">JustDial</h3>
              <p className="text-gray-600 mb-4">Find us on JustDial for reviews and directions</p>
              <a
                href="https://jsdl.in/DT-99EETTTVFFD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors"
              >
                View on JustDial
                <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
              </a>
            </div>

            {/* Google Maps Link */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <MapPinIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Google Maps</h3>
              <p className="text-gray-600 mb-4">Get directions to our shop location</p>
              <a
                href="https://maps.app.goo.gl/hun9JeSgeX36dEQ19"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Get Directions
                <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Shop Info Card - Moved Below */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Shop Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">Thana Road, Near Girl School, Opposite Yamuna Path, Nawada Road-805110</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <PhoneIcon className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Contact Numbers</h3>
                    <p className="text-gray-600">+91 7004100547</p>
                    <p className="text-gray-600">Call Now: +91 7004100547</p>
                    <p className="text-gray-600">WhatsApp: +91 7004100547</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <ClockIcon className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">9:00 AM - 9:30 PM</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${
                      isShopOpen() ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {isShopOpen() ? '🟢 Open Now' : '🔴 Closed'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <StarIcon className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Rating & Reviews</h3>
                    <div className="flex items-center mb-2">
                      {renderStars(4.6)}
                      <span className="ml-2 font-semibold text-gray-900">4.6</span>
                      <span className="ml-2 text-gray-600">(189 reviews)</span>
                    </div>
                    <p className="text-gray-600">10 years in business</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-4">
                <a
                  href="tel:+917004100547"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call Now
                </a>
                
                <a
                  href="https://wa.me/917004100547"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
                >
                  <span className="text-xl mr-2">💬</span>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Latest Smartphones</h3>
              <p className="text-gray-600 text-sm">All major brands with warranty</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mobile Repair</h3>
              <p className="text-gray-600 text-sm">Expert technicians & genuine parts</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Accessories</h3>
              <p className="text-gray-600 text-sm">Original cases, chargers & more</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Easy Financing</h3>
              <p className="text-gray-600 text-sm">EMI options available</p>
            </div>
          </div>
        </div>

        {/* Back to All Shops */}
        <div className="text-center mb-8">
          <Link 
            to="/shops" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2 transform rotate-180" />
            Back to All Shops
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopGirlsSchoolPage;

