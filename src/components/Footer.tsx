import React from 'react';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  GlobeAltIcon,
  ClockIcon,
  ShieldCheckIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                City Mobile Selection
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Nawada's most trusted mobile shop since 2009. We offer the latest smartphones, 
                accessories, and repair services with genuine warranty and best prices.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <ShieldCheckIcon className="h-5 w-5 text-green-400" />
                  <span className="text-sm font-medium text-gray-200">Genuine Products</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-200">4.7+ Rating</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <ClockIcon className="h-5 w-5 text-blue-400" />
                  <span className="text-sm font-medium text-gray-200">15+ Years</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <MapPinIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Nawada, Bihar - 805110</p>
                  <p className="text-gray-400 text-sm">3 Convenient Locations</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <PhoneIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">+91 7004100548</p>
                  <p className="text-gray-400 text-sm">24/7 Customer Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <GlobeAltIcon className="h-6 w-6 mr-3 text-indigo-400" />
              Quick Links
            </h4>
            <div className="space-y-4">
              <a href="/shops" className="block text-gray-300 hover:text-indigo-400 transition-colors duration-300 hover:translate-x-2 transform">
                🏪 Our Shops
              </a>
              <a href="/about" className="block text-gray-300 hover:text-indigo-400 transition-colors duration-300 hover:translate-x-2 transform">
                ℹ️ About Us
              </a>
              <a href="/shop" className="block text-gray-300 hover:text-indigo-400 transition-colors duration-300 hover:translate-x-2 transform">
                📱 Products
              </a>
              <a href="#services" className="block text-gray-300 hover:text-indigo-400 transition-colors duration-300 hover:translate-x-2 transform">
                🔧 Services
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-indigo-400 transition-colors duration-300 hover:translate-x-2 transform">
                📞 Contact
              </a>
            </div>
          </div>

          {/* Social Media & Business */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <StarIcon className="h-6 w-6 mr-3 text-yellow-400" />
              Connect With Us
            </h4>
            
            {/* Social Media Links */}
            <div className="space-y-4 mb-6">
              <a 
                href="https://www.youtube.com/@citymobilenawada/featured" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-colors duration-300 hover:translate-x-2 transform"
              >
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">YT</span>
                </div>
                <span>YouTube Channel</span>
              </a>
              
              <a 
                href="https://www.facebook.com/people/City-mobile-Selection-nawada/100094592142265/?_rdr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-2 transform"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">FB</span>
                </div>
                <span>Facebook Page</span>
              </a>
              
              <a 
                href="https://www.instagram.com/city_mobile_nawada/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:translate-x-2 transform"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">IG</span>
                </div>
                <span>Instagram</span>
              </a>
            </div>

            {/* Business Hours */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <h5 className="font-semibold text-white mb-2">Business Hours</h5>
              <p className="text-gray-300 text-sm">9:00 AM - 9:30 PM</p>
              <p className="text-gray-400 text-xs">All Days</p>
            </div>
          </div>
        </div>

        {/* Newsletter & CTA */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Offers
            </h4>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get notified about new arrivals, special discounts, and exclusive deals on mobile phones and accessories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} City Mobile Selection. All rights reserved.
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <div className="fixed bottom-8 left-8 z-50">
        <a
          href="https://wa.me/917004100548"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 hover:bg-green-600"
        >
          <div className="text-2xl">💬</div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
