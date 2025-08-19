import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPinIcon, 
  PhoneIcon, 
  ClockIcon,
  StarIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';
import { shops } from '../data/shops';

const ShopDetailPage: React.FC = () => {
  const { shopId } = useParams<{ shopId: string }>();
  
  const shop = shops.find(s => s.id === shopId);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [shopId]);

  const customerReviews = [
    {
      id: 1,
      name: "Vikram Mehta",
      rating: 5,
      comment: "Outstanding service! This is my go-to place for all mobile needs. They have the latest models and best prices in town.",
      time: "1 day ago"
    },
    {
      id: 2,
      name: "Anita Rao",
      rating: 5,
      comment: "Excellent experience! The staff is very professional and they offer genuine products with proper warranty. Highly recommended!",
      time: "4 days ago"
    },
    {
      id: 3,
      name: "Suresh Kumar",
      rating: 5,
      comment: "Great shop with wide variety of phones. The location is perfect and they provide good after-sales service too.",
      time: "1 week ago"
    }
  ];

  const featuredPhones = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: "₹1,29,999",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop&crop=center",
      discount: "10% OFF"
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: "₹89,999",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center",
      discount: "15% OFF"
    },
    {
      id: 3,
      name: "OnePlus 12",
      price: "₹69,999",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center",
      discount: "12% OFF"
    },
    {
      id: 4,
      name: "Xiaomi 14 Pro",
      price: "₹49,999",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop&crop=center",
      discount: "20% OFF"
    }
  ];

  if (!shop) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Shop Not Found</h1>
          <Link to="/shops" className="text-indigo-600 hover:text-indigo-700">
            Back to All Shops
          </Link>
        </div>
      </div>
    );
  }

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

  const googleMapsUrl = `https://www.google.com/maps?q=${shop.coordinates.lat},${shop.coordinates.lng}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${shop.coordinates.lat},${shop.coordinates.lng}`;

  return (
    <div className="min-h-screen bg-gray-50">
            {/* Hero Section - Modern & Beautiful */}
      <div className="relative h-[25rem] overflow-hidden">
        <img
          src={shop.image}
          alt={shop.name}
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 mb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Shop Info Card - Modern Design */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 backdrop-blur-sm">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{shop.name}</h2>
                  <p className="text-lg text-gray-600">{shop.address}</p>
                                      <p className="text-gray-600">{shop.location}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-4">
                    <StarIcon className="h-6 w-6 text-indigo-600" />
                    <div>
                      <p className="text-gray-600 font-medium">Rating</p>
                      <div className="flex items-center">
                        {renderStars(shop.rating)}
                        <span className="ml-2 text-gray-900 font-semibold">{shop.rating}</span>
                        <span className="ml-2 text-gray-600">({shop.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <ClockIcon className="h-6 w-6 text-indigo-600" />
                    <div>
                      <p className="text-gray-600 font-medium">Years in Business</p>
                      <p className="text-gray-900 font-semibold">{shop.yearsInBusiness} years</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Buttons - Modern Design */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <a
                  href={`tel:${shop.phone}`}
                  className="group flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <PhoneIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Call Now: {shop.phone}
                </a>
                <a
                  href={`https://wa.me/${shop.whatsapp.replace('+91', '91')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center px-6 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-emerald-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <PhoneIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  WhatsApp: {shop.whatsapp}
                </a>
              </div>

              {/* Quick Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <ClockIcon className="h-6 w-6 text-indigo-600" />
                  <div>
                    <p className="text-gray-600 font-medium">Business Hours</p>
                    <p className="text-gray-900 font-semibold">{shop.businessHours}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPinIcon className="h-6 w-6 text-indigo-600" />
                  <div>
                    <p className="text-gray-600 font-medium">Location</p>
                    <p className="text-gray-900 font-semibold">{shop.location}</p>
                  </div>
                </div>
              </div>
            </div>



            {/* Our Services - Modern Design */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full mr-4"></div>
                Our Services
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Latest Smartphones</h4>
                    <p className="text-gray-600">All major brands with warranty</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="text-white font-bold text-lg">₹</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Best Prices</h4>
                    <p className="text-gray-600">Price match guarantee + extra discount</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="text-white font-bold text-lg">🎁</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Premium Accessories</h4>
                    <p className="text-gray-600">Original cases, chargers, and more</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="text-white font-bold text-lg">👥</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Customer Service</h4>
                    <p className="text-gray-600">Personalized assistance and support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Videos - Modern Design */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full mr-4"></div>
                Watch Our Videos
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { id: 'k2t-IR8CzL8', title: 'Latest Smartphones Collection', desc: 'Check out our newest arrivals' },
                  { id: 'jHl5hD1W6CY', title: 'Mobile Repair Services', desc: 'Professional repair solutions' },
                  { id: 'mcGeb3gkKZA', title: 'Customer Testimonials', desc: 'What our customers say' },
                ].map(v => (
                  <div key={v.id} className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative">
                      <iframe
                        src={`https://www.youtube.com/embed/${v.id}`}
                        title={v.title}
                        className="w-full h-48"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="px-4 py-4 bg-gradient-to-r from-gray-50 to-white">
                      <h4 className="font-semibold text-gray-900 mb-1">{v.title}</h4>
                      <p className="text-sm text-gray-600">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews - Modern Design */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full mr-4"></div>
                What Customers Say
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {customerReviews.map(review => (
                  <div key={review.id} className="group rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-gray-50 to-white h-full">
                    <div className="flex items-center gap-2 mb-4">
                      {renderStars(review.rating)}
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{review.time}</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed flex-grow">"{review.comment}"</p>
                    <div className="text-sm font-semibold text-gray-900 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                        {review.name.charAt(0)}
                      </div>
                      {review.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* New Arrivals - Modern Design */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full mr-4"></div>
                New Arrivals
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredPhones && featuredPhones.length > 0 ? (
                  featuredPhones.map(phone => (
                    <div key={phone.id} className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white h-full">
                    <div className="relative">
                      <img src={phone.image} alt={phone.name} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-4 flex flex-col h-full">
                      <h4 className="text-sm text-gray-900 font-semibold mb-4 flex-grow">{phone.name}</h4>
                      <div className="mt-auto">
                        <a
                          href={`https://wa.me/${shop?.whatsapp}?text=Hi! I'm interested in ${phone.name}. Can you please provide more details and pricing?`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 font-medium"
                        >
                          <PhoneIcon className="h-4 w-4 mr-1" />
                          Make Order
                        </a>
                      </div>
                    </div>
                  </div>
                ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-500 text-lg">No new arrivals available at the moment.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar - Modern Design */}
          <div className="space-y-6">
            {/* Map Card - Modern Design */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Location</h3>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mb-4">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${shop.coordinates.lat},${shop.coordinates.lng}&zoom=15`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={shop.name}
                  />
                </div>
                <div className="space-y-3">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <MapPinIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    View on Google Maps
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                  </a>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <MapPinIcon className="h-5 w-5 mr-2" />
                    Get Directions
                    <ArrowTopRightOnSquareIcon className="h-4 w-5 ml-2" />
                  </a>
                  <a
                    href={shop.justdialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-yellow-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <MapPinIcon className="h-5 w-5 mr-2" />
                    View on JustDial
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>



            {/* Quick Stats Card - Modern Design */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-2xl p-6 border border-indigo-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-2 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full mr-3"></div>
                Quick Stats
              </h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-white rounded-2xl border border-indigo-200">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">{shop.rating}★</div>
                  <div className="text-sm text-gray-600">({shop.reviews} reviews)</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl border border-indigo-200">
                  <div className="text-2xl font-bold text-purple-600 mb-1">{shop.yearsInBusiness}+</div>
                  <div className="text-sm text-gray-600">Years in Business</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl border border-indigo-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default ShopDetailPage;
