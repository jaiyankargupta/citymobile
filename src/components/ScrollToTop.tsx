import React, { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 hover:from-indigo-700 hover:to-purple-700"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
