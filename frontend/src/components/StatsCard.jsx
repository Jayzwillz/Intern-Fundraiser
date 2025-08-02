import React, { useState, useEffect } from 'react';

const StatsCard = ({ title, value, icon, color, delay = 0, onClick, clickable = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (isVisible) {
      // Animate number values
      if (typeof value === 'string' && value.includes('$')) {
        const numericValue = parseFloat(value.replace(/[$,]/g, ''));
        animateNumber(0, numericValue, '$');
      } else if (typeof value === 'string' && value.includes('#')) {
        const numericValue = parseInt(value.replace('#', ''));
        animateNumber(0, numericValue, '#');
      } else {
        setAnimatedValue(value);
      }
    }
  }, [isVisible, value]);

  const animateNumber = (start, end, prefix = '') => {
    const duration = 1000;
    const startTime = Date.now();
    
    const updateNumber = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * easeOutCubic;
      
      if (prefix === '$') {
        setAnimatedValue(`$${current.toLocaleString('en-US', { maximumFractionDigits: 2 })}`);
      } else if (prefix === '#') {
        setAnimatedValue(`#${Math.round(current)}`);
      } else {
        setAnimatedValue(Math.round(current).toString());
      }
      
      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    };
    
    updateNumber();
  };

  const getColorClasses = (color) => {
    const colorMap = {
      'bg-success-500': 'from-green-400 to-emerald-500',
      'bg-primary-500': 'from-blue-400 to-indigo-500',
      'bg-warning-500': 'from-yellow-400 to-orange-500',
      'bg-purple-500': 'from-purple-400 to-violet-500',
    };
    return colorMap[color] || 'from-gray-400 to-gray-500';
  };

  return (
    <div className={`group transition-all duration-500 ease-out transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`}>
      <div 
        className={`bg-white rounded-2xl card-shadow p-6 hover:shadow-2xl transition-all duration-300 group-hover:scale-105 relative overflow-hidden ${
          clickable ? 'cursor-pointer hover:bg-gray-50 active:scale-95' : ''
        }`}
        onClick={clickable ? onClick : undefined}
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br opacity-5 rounded-full transform translate-x-8 -translate-y-8"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                {title}
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900 transition-all duration-300">
                {animatedValue || value}
              </p>
            </div>
            <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-r ${getColorClasses(color)} shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
              <span className="text-2xl sm:text-3xl filter drop-shadow-sm">
                {icon}
              </span>
            </div>
          </div>
          
          {/* Copy hint for referral code */}
          {clickable && title === 'Referral Code' && (
            <div className="text-xs text-blue-600 font-medium mb-2 opacity-75 flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                <path d="M3 5a2 2 0 012-2 3 3 0 003 3h6a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L14.586 13H19v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2V9h-2v2z"></path>
              </svg>
              Click to copy
            </div>
          )}
          
          {/* Progress indicator */}
          <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${getColorClasses(color)} rounded-full transition-all duration-1000 ease-out transform ${
                isVisible ? 'translate-x-0' : '-translate-x-full'
              }`}
              style={{ 
                transitionDelay: `${delay + 300}ms`,
              }}
            ></div>
          </div>
          
          {/* Trend indicator (placeholder for future enhancement) */}
          <div className="mt-3 flex items-center justify-between text-xs">
            <span className="text-green-600 font-medium flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              +12.5%
            </span>
            <span className="text-gray-500">vs last month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
