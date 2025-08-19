import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBagIcon, 
  ArrowRightIcon,
  StarIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

const HomePage: React.FC = () => {
  const features = [
    {
      title: 'Our Shops',
      description: 'Find the nearest City Mobile Selection shop near you with detailed information.',
      icon: ShoppingBagIcon,
      path: '/shops',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
    },
    {
      title: 'Products',
      description: 'Browse our latest smartphones, accessories, and mobile services.',
      icon: ShoppingBagIcon,
      path: '/shops',
      color: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    },
  ];

  const customerReviews = [
    {
      name: "Vikram Mehta",
      rating: 5,
      comment: "Outstanding service! This is my go-to place for all mobile needs. They have the latest models and best prices in town.",
      time: "1 day ago",
      avatar: "VM"
    },
    {
      name: "Anita Rao",
      rating: 5,
      comment: "Excellent experience! The staff is very professional and they offer genuine products with proper warranty. Highly recommended!",
      time: "4 days ago",
      avatar: "AR"
    },
    {
      name: "Suresh Kumar",
      rating: 5,
      comment: "Great shop with wide variety of phones. The location is perfect and they provide good after-sales service too.",
      time: "1 week ago",
      avatar: "SK"
    },
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "Best mobile shop in Nawada! They helped me choose the perfect phone within my budget. Amazing customer service!",
      time: "2 weeks ago",
      avatar: "PS"
    }
  ];

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
    <div className="min-h-screen">
      {/* Hero Section - Improved Design with Reduced Top Margin */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container-responsive py-12 md:py-16 lg:py-20">
          <div className="text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-200 mb-6 md:mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-xs md:text-sm font-medium text-indigo-700">Trusted by 500000+ Customers</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                City Mobile Selection
              </span>
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-indigo-700 mb-6 md:mb-8">
              Nawada's Most Trusted Mobile Shop
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Your trusted mobile shop in Nawada, Bihar. We offer the latest smartphones, 
              accessories, and repair services with the best prices and warranty.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-16 px-4">
              <Link
                to="/shops"
                className="group inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl hover:shadow-2xl md:hover:shadow-3xl transform hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 text-base md:text-lg"
              >
                <ShoppingBagIcon className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3 group-hover:scale-110 transition-transform" />
                Find Our Shops
                <ArrowRightIcon className="h-5 w-5 md:h-6 md:w-6 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/shop"
                className="group inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-white text-indigo-600 font-semibold rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl hover:shadow-2xl md:hover:shadow-3xl transform hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 border-2 border-indigo-600 text-base md:text-lg"
              >
                <ShoppingBagIcon className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3 group-hover:scale-110 transition-transform" />
                View Products
                <ArrowRightIcon className="h-5 w-5 md:h-6 md:w-6 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto px-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl mb-2">Customers</div>
                <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-2">500000+</div>
                <div className="text-sm md:text-base text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl mb-2">Experience</div>
                <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-sm md:text-base text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl mb-2">Locations</div>
                <div className="text-2xl md:text-3xl font-bold text-pink-600 mb-2">3</div>
                <div className="text-sm md:text-base text-gray-600">Shop Locations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl mb-2">Rating</div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-600 mb-2">4.7</div>
                <div className="text-sm md:text-base text-gray-600">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container-responsive py-12 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Discover our services and find what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link
                key={index}
                to={feature.path}
                className="group block p-6 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`inline-flex p-3 md:p-4 rounded-xl ${feature.color} mb-4 md:mb-6`}>
                  <Icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                  {feature.description}
                </p>
                <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 text-sm md:text-base">
                  Learn more
                  <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-12 md:py-16">
        <div className="container-responsive">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Real reviews from satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {customerReviews.map((review, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">{review.name}</h4>
                    <div className="flex items-center">
                      {renderStars(review.rating)}
                      <span className="ml-2 text-xs md:text-sm text-gray-500">{review.time}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 py-12 md:py-16">
        <div className="container-responsive text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-indigo-100 mb-6 md:mb-8 max-w-2xl mx-auto">
            Visit any of our shops or contact us for the best mobile deals in Nawada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="tel:+917004100548"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors text-sm md:text-base"
            >
              <PhoneIcon className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Call Now
            </a>
            <a
              href="https://wa.me/919155582054"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors text-sm md:text-base"
            >
              <span className="text-lg md:text-xl mr-2">💬</span>
              WhatsApp
            </a>
            <Link
              to="/shops"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-300 text-sm md:text-base"
            >
              <MapPinIcon className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Find Our Shops
            </Link>
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
      </div>
    </div>
  );
};

export default HomePage;
