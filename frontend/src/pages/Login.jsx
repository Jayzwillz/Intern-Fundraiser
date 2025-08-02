import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiLock, FiEye, FiEyeOff, FiMail, FiUserPlus, FiLogIn } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { BiShield } from 'react-icons/bi';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center px-4 py-8">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white bg-opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white bg-opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-md w-full space-y-8 stagger-animation">
        <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl card-shadow p-8 sm:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto h-16 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4 float-animation">
              <HiOutlineSparkles className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Sign in to your Intern Fundraiser Portal
            </p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    ) : (
                      <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary text-base sm:text-lg py-4 relative overflow-hidden"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="spinner w-5 h-5 mr-2"></div>
                    Signing In...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <FiLogIn className="w-5 h-5 mr-2" />
                    Sign In to Dashboard
                  </div>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <button type="button" className="text-blue-600 hover:text-blue-500 font-medium">
                Forgot password?
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <button
                  type="button"
                  className="font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                  onClick={() => navigate('/dashboard')}
                >
                  Sign up here
                </button>
              </p>
            </div>
          </form>

          {/* Demo credentials section with enhanced design */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center text-blue-600 mb-2">
                <BiShield className="w-5 h-5 mr-1" />
                <span className="text-sm font-medium">Demo Access</span>
              </div>
              <p className="text-xs text-blue-600 mb-3">Any email/password combination works for demo!</p>
              <div className="space-y-2">
                <div className="bg-white bg-opacity-70 px-3 py-2 rounded-lg">
                  <div className="flex items-center justify-center text-xs text-blue-700 font-mono">
                    <FiMail className="w-3 h-3 mr-2" />
                    demo@internfund.com
                  </div>
                </div>
                <div className="bg-white bg-opacity-70 px-3 py-2 rounded-lg">
                  <div className="flex items-center justify-center text-xs text-blue-700 font-mono">
                    <FiLock className="w-3 h-3 mr-2" />
                    password123
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional features hint */}
        <div className="text-center text-white text-opacity-90">
          <p className="text-sm">
            🎯 Track donations • 🏆 View leaderboards • 🎖️ Unlock rewards
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
