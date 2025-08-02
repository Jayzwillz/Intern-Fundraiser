import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  const fetchLeaderboardData = async () => {
    try {
      setLoading(true);
      // Try to fetch from backend, fallback to dummy data if backend is not running
      const response = await fetch('http://localhost:5000/api/leaderboard');
      
      if (!response.ok) {
        throw new Error('Failed to fetch leaderboard data');
      }
      
      const result = await response.json();
      setLeaderboardData(result.data);
    } catch (err) {
      console.warn('Backend not available, using dummy leaderboard data:', err.message);
      // Fallback dummy data if backend is not running
      setLeaderboardData([
        {
          rank: 1,
          name: "Sarah Chen",
          referralCode: "sarah2025",
          donationsRaised: 22340.75,
          badges: 6
        },
        {
          rank: 2,
          name: "Marcus Thompson",
          referralCode: "marcus2025",
          donationsRaised: 18990.25,
          badges: 5
        },
        {
          rank: 3,
          name: "Jahswill Johnson",
          referralCode: "jahswill2025",
          donationsRaised: 15750.50,
          badges: 5
        },
        {
          rank: 4,
          name: "Emma Rodriguez",
          referralCode: "emma2025",
          donationsRaised: 14230.00,
          badges: 5
        },
        {
          rank: 5,
          name: "David Kim",
          referralCode: "david2025",
          donationsRaised: 12870.90,
          badges: 4
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  // Calculate stats
  const totalRaised = leaderboardData.reduce((sum, intern) => sum + intern.donationsRaised, 0);
  const averageRaised = leaderboardData.length > 0 ? totalRaised / leaderboardData.length : 0;
  const leaderGap = leaderboardData.length >= 2 ? leaderboardData[0].donationsRaised - leaderboardData[1].donationsRaised : 0;

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return '🏅';
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1: return 'bg-yellow-100 border-yellow-300';
      case 2: return 'bg-gray-100 border-gray-300';
      case 3: return 'bg-orange-100 border-orange-300';
      default: return 'bg-white border-gray-200';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex items-center justify-center pt-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            🏆 Fundraising Leaderboard
          </h1>
          <p className="text-gray-600">
            See how you stack up against other interns
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {leaderboardData.slice(0, 3).map((intern, index) => (
            <div
              key={intern.rank}
              className={`text-center p-6 sm:p-8 rounded-2xl border-2 ${getRankColor(intern.rank)} transform transition-all duration-500 hover:scale-105 float-animation relative overflow-hidden`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                order: intern.rank === 1 ? 2 : intern.rank === 2 ? 1 : 3 
              }}
            >
              {/* Crown for first place */}
              {intern.rank === 1 && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div className="text-3xl animate-bounce">👑</div>
                </div>
              )}
              
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-50 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl mb-4 animate-pulse">{getRankIcon(intern.rank)}</div>
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">{intern.name}</h3>
                <p className="text-sm text-gray-600 mb-3 bg-white bg-opacity-70 px-2 py-1 rounded-full inline-block">
                  {intern.referralCode}
                </p>
                <p className="text-xl sm:text-2xl font-bold text-green-600 mb-2">
                  {formatCurrency(intern.donationsRaised)}
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-xs sm:text-sm text-gray-500">
                    {intern.badges} badges earned
                  </span>
                  <span className="text-yellow-500">🏅</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Leaderboard Table */}
        <div className="bg-white rounded-2xl card-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
              <span className="mr-2">📊</span>
              Full Rankings
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Referral Code
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Amount Raised
                  </th>
                  <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Badges
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leaderboardData.map((intern, index) => (
                  <tr
                    key={intern.rank}
                    className={`table-row-hover transition-all duration-300 ${
                      intern.name === 'Jahswill Johnson' 
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 ring-2 ring-blue-200' 
                        : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-xl sm:text-2xl mr-2">{getRankIcon(intern.rank)}</span>
                        <span className="text-sm font-bold text-gray-900">
                          #{intern.rank}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <div className="text-sm font-bold text-gray-900">
                          {intern.name}
                        </div>
                        {intern.name === 'Jahswill Johnson' && (
                          <span className="mt-1 sm:mt-0 sm:ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                            You 🎯
                          </span>
                        )}
                        <div className="sm:hidden text-xs text-gray-600 mt-1">
                          {intern.referralCode}
                        </div>
                      </div>
                    </td>
                    <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
                      {intern.referralCode}
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">
                      {formatCurrency(intern.donationsRaised)}
                    </td>
                    <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        🏅 {intern.badges} badges
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl card-shadow p-4 sm:p-6 hover:card-hover transition-all duration-300 animate-slide-up text-center">
            <div className="flex items-center justify-center mb-3">
              <span className="text-3xl sm:text-4xl">💰</span>
            </div>
            <h4 className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
              Total Raised
            </h4>
            <p className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">
              {formatCurrency(totalRaised)}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Across all campaigns
            </p>
          </div>

          <div className="bg-white rounded-2xl card-shadow p-4 sm:p-6 hover:card-hover transition-all duration-300 animate-slide-up text-center" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center justify-center mb-3">
              <span className="text-3xl sm:text-4xl">👥</span>
            </div>
            <h4 className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
              Active Interns
            </h4>
            <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
              {leaderboardData.length}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Fundraising participants
            </p>
          </div>

          <div className="bg-white rounded-2xl card-shadow p-4 sm:p-6 hover:card-hover transition-all duration-300 animate-slide-up text-center" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center justify-center mb-3">
              <span className="text-3xl sm:text-4xl">📊</span>
            </div>
            <h4 className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
              Average per Intern
            </h4>
            <p className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">
              {formatCurrency(averageRaised)}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Mean contribution
            </p>
          </div>

          <div className="bg-white rounded-2xl card-shadow p-4 sm:p-6 hover:card-hover transition-all duration-300 animate-slide-up text-center" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center justify-center mb-3">
              <span className="text-3xl sm:text-4xl">🏆</span>
            </div>
            <h4 className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
              Top Performer
            </h4>
            <p className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1">
              {formatCurrency(leaderboardData[0]?.donationsRaised || 0)}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Leading amount
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
