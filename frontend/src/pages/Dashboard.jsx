import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import StatsCard from '../components/StatsCard';
import RewardsSection from '../components/RewardsSection';
import { FiUser, FiDollarSign, FiTrendingUp, FiTarget, FiCopy, FiShare2, FiUsers, FiAward, FiActivity } from 'react-icons/fi';
import { HiOutlineSparkles, HiOutlineFire } from 'react-icons/hi';
import { BiMedal, BiShield, BiTrophy } from 'react-icons/bi';

const Dashboard = () => {
  const [internData, setInternData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchInternData();
  }, []);

  const fetchInternData = async () => {
    try {
      setLoading(true);
      // Try to fetch from backend, fallback to dummy data if backend is not running
      const response = await fetch('http://localhost:5000/api/intern');
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      
      const result = await response.json();
      setInternData(result.data);
    } catch (err) {
      console.warn('Backend not available, using dummy data:', err.message);
      // Fallback dummy data if backend is not running
      setInternData({
        name: "Jahswill Johnson",
        referralCode: "jahswill2025",
        donationsRaised: 15750.50,
        currency: "USD",
        rewards: [
          {
            id: 1,
            title: "First Donation Shoutout",
            description: "Get featured on our social media",
            unlocked: true,
            threshold: 100
          },
          {
            id: 2,
            title: "Bronze Badge",
            description: "Unlock Bronze Fundraiser Badge",
            unlocked: true,
            threshold: 500
          },
          {
            id: 3,
            title: "Silver Badge",
            description: "Unlock Silver Fundraiser Badge",
            unlocked: true,
            threshold: 2000
          },
          {
            id: 4,
            title: "Gold Badge",
            description: "Unlock Gold Fundraiser Badge",
            unlocked: true,
            threshold: 5000
          },
          {
            id: 5,
            title: "Platinum Access",
            description: "Exclusive mentor session and bonus resources",
            unlocked: true,
            threshold: 10000
          },
          {
            id: 6,
            title: "Diamond Elite",
            description: "VIP networking event access",
            unlocked: false,
            threshold: 25000
          }
        ],
        leaderboardPosition: 3,
        totalInterns: 50
      });
    } finally {
      setLoading(false);
    }
  };

  const copyReferralCode = async () => {
    try {
      await navigator.clipboard.writeText(internData.referralCode);
      // Could add a toast notification here
      alert('Referral code copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = internData.referralCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Referral code copied to clipboard!');
    }
  };

  const shareProfile = () => {
    const shareUrl = `${window.location.origin}/profile/${internData.referralCode}`;
    if (navigator.share) {
      navigator.share({
        title: 'Support My Fundraising Campaign',
        text: `Help me reach my fundraising goal! Use my referral code: ${internData.referralCode}`,
        url: shareUrl,
      });
    } else {
      copyReferralCode();
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getProgressPercentage = () => {
    if (!internData) return 0;
    const nextThreshold = internData.rewards.find(reward => !reward.unlocked)?.threshold || 25000;
    return Math.min((internData.donationsRaised / nextThreshold) * 100, 100);
  };

  const getNextReward = () => {
    if (!internData) return null;
    return internData.rewards.find(reward => !reward.unlocked);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="spinner mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Loading your dashboard...</h2>
          <p className="text-gray-500">Fetching your latest fundraising data</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={fetchInternData}
            className="btn-primary"
          >
            <span className="flex items-center space-x-2">
              <span>🔄</span>
              <span>Try Again</span>
            </span>
          </button>
        </div>
      </div>
    );
  }

  const nextReward = getNextReward();
  const progressPercentage = getProgressPercentage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white bg-opacity-10 rounded-full transform translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white bg-opacity-5 rounded-full transform -translate-x-16 translate-y-16"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-4 sm:mb-0">
                  <div className="flex items-center mb-3">
                    <HiOutlineSparkles className="w-8 h-8 mr-3 text-yellow-300" />
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                      Welcome back, {internData.name}!
                    </h1>
                  </div>
                  <p className="text-blue-100 text-sm sm:text-base flex items-center">
                    <FiActivity className="w-4 h-4 mr-2" />
                    Here's your fundraising progress and achievements
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-4 text-center">
                    <p className="text-xs uppercase tracking-wide text-blue-100 mb-1">Today</p>
                    <p className="text-lg font-bold">{new Date().toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <StatsCard
            title="Total Raised"
            value={formatCurrency(internData.donationsRaised)}
            icon="💰"
            color="bg-green-500"
            delay={0}
          />
          <StatsCard
            title="Referral Code"
            value={internData.referralCode}
            icon="🔗"
            color="bg-blue-500"
            delay={100}
            onClick={copyReferralCode}
            clickable={true}
          />
          <StatsCard
            title="Leaderboard Rank"
            value={`#${internData.leaderboardPosition}`}
            icon="🏆"
            color="bg-yellow-500"
            delay={200}
          />
          <StatsCard
            title="Rewards Unlocked"
            value={`${internData.rewards.filter(r => r.unlocked).length}/${internData.rewards.length}`}
            icon="�️"
            color="bg-purple-500"
            delay={300}
          />
        </div>

        {/* Progress Section */}
        {nextReward && (
          <div className="bg-white rounded-2xl card-shadow p-6 sm:p-8 mb-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center">
                  <span className="mr-2">🎯</span>
                  Progress to Next Reward
                </h3>
                <div className="hidden sm:block">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {Math.round(progressPercentage)}% Complete
                  </span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <div className="mb-2 sm:mb-0">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {nextReward.title}
                    </h4>
                    <p className="text-sm text-gray-600">{nextReward.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500 block">
                      {formatCurrency(internData.donationsRaised)} / {formatCurrency(nextReward.threshold)}
                    </span>
                    <span className="sm:hidden px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full inline-block mt-1">
                      {Math.round(progressPercentage)}% Complete
                    </span>
                  </div>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                <p className="text-gray-700 text-sm sm:text-base">
                  <span className="font-semibold">
                    Only {formatCurrency(nextReward.threshold - internData.donationsRaised)} more
                  </span>
                  {' '}to unlock this amazing reward! 🚀
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Rewards Section */}
        <RewardsSection rewards={internData.rewards} />

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl card-shadow p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <HiOutlineFire className="w-6 h-6 mr-3 text-orange-500" />
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <button 
              onClick={() => navigate('/leaderboard')}
              className="btn-primary flex items-center justify-center space-x-2 w-full"
            >
              <BiTrophy className="w-5 h-5" />
              <span>View Leaderboard</span>
            </button>
            <button 
              onClick={shareProfile}
              className="btn-secondary flex items-center justify-center space-x-2 w-full"
            >
              <FiShare2 className="w-5 h-5" />
              <span>Share Referral Link</span>
            </button>
            <button 
              onClick={copyReferralCode}
              className="btn-secondary flex items-center justify-center space-x-2 w-full sm:col-span-2 lg:col-span-1"
            >
              <FiCopy className="w-5 h-5" />
              <span>Copy Referral Code</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
