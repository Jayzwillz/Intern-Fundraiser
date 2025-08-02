# 💰 Intern Fundraiser Portal

A full-stack web application for tracking intern fundraising progress with a React frontend and Node.js/Express backend.

## 🎯 Project Overview

This application provides a complete fundraising dashboard for interns to:
- Track their donation progress
- View their referral code
- Monitor rewards and achievements
- Check leaderboard rankings
- Access a clean, modern interface

## 📦 Project Structure

```
Intern-Fundraiser/
├── backend/           # Express.js API server
│   ├── index.js      # Main server file
│   └── package.json  # Backend dependencies
└── frontend/         # React application
    ├── public/       # Static files
    ├── src/          # React components and pages
    │   ├── components/   # Reusable components
    │   ├── pages/       # Page components
    │   ├── App.js       # Main app component
    │   └── index.js     # React entry point
    └── package.json  # Frontend dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   # or for development with auto-reload:
   npm run dev
   ```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will run on `http://localhost:3000`

## 🔧 API Endpoints

### Backend Routes

- `GET /api/intern` - Returns intern data including:
  - Name
  - Referral code
  - Total donations raised
  - Rewards/achievements
  - Leaderboard position

- `GET /api/leaderboard` - Returns leaderboard data with all interns ranked by donations

- `GET /` - API welcome message with available endpoints

## 🎨 Features

### Frontend Pages

1. **Login Page** (`/login`)
   - Dummy authentication (any credentials work)
   - Clean, modern design with Tailwind CSS
   - Responsive layout

2. **Dashboard** (`/dashboard`)
   - Personal stats overview
   - Progress tracking to next reward
   - Achievements and rewards section
   - Quick action buttons

3. **Leaderboard** (`/leaderboard`)
   - Top 3 podium display
   - Full rankings table
   - Personal highlighting
   - Statistics summary

### Key Components

- **Navigation**: Responsive navigation bar with active state indicators
- **StatsCard**: Reusable cards for displaying key metrics
- **RewardsSection**: Interactive rewards and achievements display

## 🎨 Styling

The project uses **Tailwind CSS** for styling with:
- Custom color palette
- Responsive design
- Hover effects and animations
- Gradient backgrounds
- Card shadows and modern UI elements

## 📊 Sample Data

The application includes realistic dummy data:

### Intern Data
- Name: Jahswill Johnson
- Referral Code: jahswill2025
- Donations Raised: $15,750.50
- 6 reward tiers (5 unlocked, 1 locked)

### Leaderboard
- 5 sample interns with varying fundraising amounts
- Ranking system with badges and achievements
- Personal position highlighting

## 🔄 Data Flow

1. Frontend makes API calls to backend endpoints
2. If backend is unavailable, fallback to local dummy data
3. Real-time progress calculations and reward status updates
4. Responsive error handling and loading states

## 🚢 Deployment Options

### Frontend (Netlify)
```bash
cd frontend
npm run build
# Upload dist folder to Netlify
```

### Backend (Render/Heroku)
```bash
cd backend
# Push to Git repository
# Connect to Render/Heroku for automatic deployment
```

## 🛠️ Development Notes

### Environment Variables
- Backend runs on PORT 5000 (configurable via environment)
- Frontend proxies API calls to localhost:5000 during development

### CORS Configuration
- Backend includes CORS middleware for cross-origin requests
- Configured to allow frontend access during development

## 📈 Future Enhancements

- Real authentication system
- Database integration (MongoDB/PostgreSQL)
- Real-time notifications
- Email sharing functionality
- Advanced analytics dashboard
- Mobile app version

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for the Intern Fundraiser Program**
