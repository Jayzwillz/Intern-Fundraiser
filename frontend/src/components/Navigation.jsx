import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiHome, FiTrendingUp, FiUser, FiLogOut, FiMenu, FiX, FiDollarSign, FiAward } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { BiTrophy } from 'react-icons/bi';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white bg-opacity-95 backdrop-blur-lg shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <HiOutlineSparkles className="text-white text-lg" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:block">
                  Fundraiser Portal
                </h1>
                <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:hidden">
                  Portal
                </h1>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              <button
                onClick={() => navigate('/dashboard')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive('/dashboard')
                    ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <FiHome className="w-4 h-4" />
                  <span>Dashboard</span>
                </span>
              </button>
              <button
                onClick={() => navigate('/leaderboard')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive('/leaderboard')
                    ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <BiTrophy className="w-4 h-4" />
                  <span>Leaderboard</span>
                </span>
              </button>
            </div>
          </div>

          {/* Desktop User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">Jahswill Johnson</p>
              <p className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full inline-block">
                jahswill2025
              </p>
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <FiUser className="text-white text-sm" />
            </div>
            <button
              onClick={handleLogout}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md flex items-center space-x-2"
            >
              <FiLogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg text-gray-600 transition-all duration-200"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white bg-opacity-95 backdrop-blur-lg border-t border-gray-100">
          {/* Mobile User Info */}
          <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">J</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Jahswill Johnson</p>
              <p className="text-xs text-gray-600">jahswill2025</p>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <button
            onClick={() => {
              navigate('/dashboard');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
              isActive('/dashboard')
                ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <span className="flex items-center space-x-3">
              <FiHome className="w-5 h-5" />
              <span>Dashboard</span>
            </span>
          </button>
          
          <button
            onClick={() => {
              navigate('/leaderboard');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
              isActive('/leaderboard')
                ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <span className="flex items-center space-x-3">
              <BiTrophy className="w-5 h-5" />
              <span>Leaderboard</span>
            </span>
          </button>

          {/* Mobile Logout */}
          <button
            onClick={() => {
              handleLogout();
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-red-600 hover:bg-red-50 transition-all duration-200 mt-2 border-t border-gray-200 pt-4"
          >
            <span className="flex items-center space-x-3">
              <FiLogOut className="w-5 h-5" />
              <span>Logout</span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
