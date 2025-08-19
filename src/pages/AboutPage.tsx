import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon, 
  PhoneIcon, 
  ClockIcon, 
  StarIcon, 
  CheckCircleIcon,
  UsersIcon,
  ShieldCheckIcon,
  TruckIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: UsersIcon, number: '1000+', label: 'Happy Customers' },
    { icon: StarIcon, number: '4.7', label: 'Average Rating' },
    { icon: ClockIcon, number: '15+', label: 'Years Experience' },
    { icon: TruckIcon, number: '3', label: 'Shop Locations' },
  ];

  const values = [
    {
      title: 'Quality Assurance',
      description: 'We only deal with genuine products and provide authentic warranty on all our products.',
      icon: ShieldCheckIcon,
      color: 'bg-green-500'
    },
    {
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We provide personalized service and support.',
      icon: UsersIcon,
      color: 'bg-blue-500'
    },
    {
      title: 'Best Prices',
      description: 'Competitive pricing with price match guarantee and exclusive discounts.',
      icon: CheckCircleIcon,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 sm:py-16 md:py-20">
        <div className="container-responsive text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              City Mobile Selection
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
            Nawada's most trusted mobile shop with over 15 years of experience in providing 
            quality smartphones, accessories, and exceptional customer service.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-8 sm:py-12 md:py-16">
        <div className="container-responsive">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-indigo-100 rounded-full mb-3 sm:mb-4">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-indigo-600" />
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Our Story</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Founded in 2009, City Mobile Selection started as a small mobile shop in Nawada, Bihar. 
                Our journey began with a simple mission: to provide genuine mobile products at fair prices 
                with exceptional customer service.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Over the years, we've grown to become the most trusted mobile shop in Nawada, serving 
                thousands of satisfied customers. We've expanded to three strategic locations to better 
                serve our community.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Today, we continue to uphold our founding principles while embracing new technologies 
                and expanding our product range to meet the evolving needs of our customers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-indigo-600 mb-3 sm:mb-4">15+</div>
                <div className="text-lg sm:text-xl text-gray-700 mb-3 sm:mb-4">Years of Excellence</div>
                <div className="text-sm sm:text-base text-gray-600">
                  Serving Nawada with dedication and commitment since 2009
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container-responsive">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Values</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 px-4">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`inline-flex p-3 sm:p-4 rounded-lg sm:rounded-xl ${value.color} mb-4 sm:mb-6`}>
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Shop Locations Preview */}
      <div className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Shop Locations</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 px-4">
              Visit any of our three convenient locations in Nawada
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
              <MapPinIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-indigo-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Near Rangmahal</h3>
              <p className="text-xs sm:text-sm text-gray-600">Sonar Patti Road, Par Nawada</p>
            </div>
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
              <MapPinIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-indigo-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Near Girls School</h3>
              <p className="text-xs sm:text-sm text-gray-600">Thana Road, Opposite Yamuna Path</p>
            </div>
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center sm:col-span-2 lg:col-span-1">
              <MapPinIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-indigo-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Near Vijay Cinema</h3>
              <p className="text-xs sm:text-sm text-gray-600">Ground Floor, Vijay Cinema, Sonar Patti Road</p>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/shops"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg sm:rounded-xl hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              View All Shops
            </Link>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="container-responsive text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Ready to Get Started?</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-indigo-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Visit any of our shops or contact us for the best mobile deals in Nawada
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a
              href="tel:+917004100548"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-600 font-semibold rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Call Now
            </a>
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

export default AboutPage;
