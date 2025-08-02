const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy intern data
const internData = {
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
};

// Dummy leaderboard data
const leaderboardData = [
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
];

// Routes
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to Intern Fundraiser API",
    version: "1.0.0",
    endpoints: {
      intern: "/api/intern",
      leaderboard: "/api/leaderboard"
    }
  });
});

// GET /api/intern - Returns intern data
app.get('/api/intern', (req, res) => {
  try {
    res.json({
      success: true,
      data: internData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching intern data",
      error: error.message
    });
  }
});

// GET /api/leaderboard - Returns leaderboard data
app.get('/api/leaderboard', (req, res) => {
  try {
    res.json({
      success: true,
      data: leaderboardData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching leaderboard data",
      error: error.message
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api/intern`);
  console.log(`🏆 Leaderboard at http://localhost:${PORT}/api/leaderboard`);
});

module.exports = app;
