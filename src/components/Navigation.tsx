import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, ShoppingBagIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Shops', path: '/shops', icon: ShoppingBagIcon },
    { name: 'About', path: '/about', icon: InformationCircleIcon },
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                City Mobile Selection
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
