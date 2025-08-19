import React from 'react';
import { 
  MapPinIcon, 
  PhoneIcon, 
  StarIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Main Footer Content */}
      <div className="container-responsive py-12 sm:py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                City Mobile Selection
              </h3>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                Nawada's most trusted mobile shop since 2009. We offer the latest smartphones, 
                accessories, and repair services with genuine warranty and best prices.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                  <span className="text-xs sm:text-sm font-medium text-gray-200">Genuine Products</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                  <StarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                  <span className="text-xs sm:text-sm font-medium text-gray-200">4.7+ Rating</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                  <span className="text-xs sm:text-sm font-medium text-gray-200">15+ Years</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium text-sm sm:text-base">Nawada, Bihar - 805110</p>
                  <p className="text-gray-400 text-xs sm:text-sm">3 Convenient Locations</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium text-sm sm:text-base">+91 9155582054</p>
                  <p className="text-gray-400 text-xs sm:text-sm">24/7 Customer Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <StarIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 text-yellow-400" />
              Connect With Us
            </h4>
            
            {/* Social Media Links */}
            <div className="space-y-3 sm:space-y-4">
              <a 
                href="https://www.youtube.com/@citymobilenawada/featured" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-red-400 transition-colors duration-300 hover:translate-x-2 transform"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs sm:text-sm">YT</span>
                </div>
                <span className="text-sm sm:text-base">YouTube Channel</span>
              </a>
              
              <a 
                href="https://www.facebook.com/people/City-mobile-Selection-nawada/100094592142265/?_rdr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-2 transform"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs sm:text-sm">FB</span>
                </div>
                <span className="text-sm sm:text-base">Facebook Page</span>
              </a>
              
              <a 
                href="https://www.instagram.com/city_mobile_nawada/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:translate-x-2 transform"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs sm:text-sm">IG</span>
                </div>
                <span className="text-sm sm:text-base">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-600">
              © 2024 City Mobile Selection. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <button 
                onClick={() => alert('Privacy Policy - Coming Soon')}
                className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => alert('Terms of Service - Coming Soon')}
                className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => alert('Contact Us - Coming Soon')}
                className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 z-50">
        <a
          href="https://wa.me/919155582054"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden"
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* WhatsApp icon with better styling */}
          <div className="relative z-10 flex items-center justify-center">
            <svg 
              className="w-6 h-6 sm:w-8 sm:h-8 fill-current" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </div>
          
          {/* Pulse animation ring */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 sm:mb-3 px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-900 text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Chat on WhatsApp
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
