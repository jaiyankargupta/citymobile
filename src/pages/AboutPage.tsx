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
  TruckIcon
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
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              City Mobile Selection
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nawada's most trusted mobile shop with over 15 years of experience in providing 
            quality smartphones, accessories, and exceptional customer service.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2009, City Mobile Selection started as a small mobile shop in Nawada, Bihar. 
                Our journey began with a simple mission: to provide genuine mobile products at fair prices 
                with exceptional customer service.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the years, we've grown to become the most trusted mobile shop in Nawada, serving 
                thousands of satisfied customers. We've expanded to three strategic locations to better 
                serve our community.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to uphold our founding principles while embracing new technologies 
                and expanding our product range to meet the evolving needs of our customers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-indigo-600 mb-4">15+</div>
                <div className="text-xl text-gray-700 mb-4">Years of Excellence</div>
                <div className="text-gray-600">
                  Serving Nawada with dedication and commitment since 2009
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`inline-flex p-4 rounded-xl ${value.color} mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Shop Locations Preview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Shop Locations</h2>
            <p className="text-lg text-gray-600">
              Visit any of our three convenient locations in Nawada
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <MapPinIcon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Near Rangmahal</h3>
              <p className="text-gray-600 text-sm">Sonar Patti Road, Par Nawada</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <MapPinIcon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Near Girls School</h3>
              <p className="text-gray-600 text-sm">Thana Road, Opposite Yamuna Path</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <MapPinIcon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Near Vijay Cinema</h3>
              <p className="text-gray-600 text-sm">Ground Floor, Vijay Cinema, Sonar Patti Road</p>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/shops"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Shops
            </Link>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-16 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Visit any of our shops or contact us for the best mobile deals in Nawada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917004100548"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call Now
            </a>
            <Link
              to="/shops"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Find Our Shops
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
