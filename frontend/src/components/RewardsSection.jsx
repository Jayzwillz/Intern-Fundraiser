import React from 'react';

const RewardsSection = ({ rewards }) => {
  return (
    <div className="bg-white rounded-2xl card-shadow p-6 sm:p-8 mb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>
      
      <div className="relative z-10">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="mr-2">🎯</span>
          Rewards & Achievements
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {rewards.map((reward, index) => (
            <div
              key={reward.id}
              className={`group p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 relative overflow-hidden ${
                reward.unlocked
                  ? 'border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg'
                  : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Achievement badge for unlocked rewards */}
              {reward.unlocked && (
                <div className="absolute top-2 right-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
              
              <div className="flex items-start justify-between mb-3">
                <h4 className={`font-bold text-sm sm:text-base transition-colors ${
                  reward.unlocked ? 'text-green-800' : 'text-gray-600'
                }`}>
                  {reward.title}
                </h4>
                <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-110">
                  {reward.unlocked ? '✨' : '🔒'}
                </span>
              </div>
              
              <p className={`text-xs sm:text-sm mb-4 transition-colors ${
                reward.unlocked ? 'text-green-700' : 'text-gray-500'
              }`}>
                {reward.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className={`text-xs font-medium px-2 py-1 rounded-full transition-colors ${
                  reward.unlocked
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  ${reward.threshold.toLocaleString()} threshold
                </span>
                
                {reward.unlocked && (
                  <span className="text-xs text-green-600 font-bold animate-bounce">
                    Unlocked! 🎉
                  </span>
                )}
              </div>

              {/* Progress bar for locked rewards */}
              {!reward.unlocked && (
                <div className="mt-3">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="h-1 bg-gray-400 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-lg sm:text-xl font-bold text-green-600">
                {rewards.filter(r => r.unlocked).length}
              </p>
              <p className="text-xs sm:text-sm text-gray-600">Unlocked</p>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-bold text-orange-600">
                {rewards.filter(r => !r.unlocked).length}
              </p>
              <p className="text-xs sm:text-sm text-gray-600">Remaining</p>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-bold text-blue-600">
                {Math.round((rewards.filter(r => r.unlocked).length / rewards.length) * 100)}%
              </p>
              <p className="text-xs sm:text-sm text-gray-600">Complete</p>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-bold text-purple-600">
                {rewards.length}
              </p>
              <p className="text-xs sm:text-sm text-gray-600">Total Rewards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsSection;
