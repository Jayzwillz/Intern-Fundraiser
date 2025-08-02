# 🚀 Deployment Guide

## Quick Start

### Option 1: Using Startup Scripts
1. Double-click `start-servers.bat` (Windows)
2. Or run `.\start-servers.ps1` in PowerShell

### Option 2: Manual Setup

#### Backend
```bash
cd backend
npm install
npm start
```
Server runs on: http://localhost:5000

#### Frontend  
```bash
cd frontend
npm install
npm start
```
App runs on: http://localhost:3000

## 🌐 Production Deployment

### Frontend (Netlify)

1. Build the project:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy to Netlify:
   - Drag the `build` folder to Netlify
   - Or connect your GitHub repo to Netlify

### Backend (Render)

1. Push code to GitHub
2. Connect repo to Render
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables if needed

### Environment Variables

For production, set:
- `NODE_ENV=production`
- `PORT=5000` (or as required by hosting service)

## 🔧 API Testing

Test the backend endpoints:
- GET http://localhost:5000/api/intern
- GET http://localhost:5000/api/leaderboard

## 📱 Features Overview

✅ **Completed Features:**
- ✅ Express.js REST API with CORS
- ✅ React frontend with Tailwind CSS  
- ✅ Dummy login/signup page
- ✅ Dashboard with intern data display
- ✅ Referral code and donations tracking
- ✅ Rewards/achievements system
- ✅ Leaderboard page
- ✅ Responsive navigation
- ✅ Error handling and loading states
- ✅ Fallback data when backend unavailable

🚧 **Potential Enhancements:**
- Real authentication
- Database integration
- Real-time updates
- Email notifications
- Mobile responsiveness improvements

## 🐛 Troubleshooting

**Backend not starting?**
- Check if Node.js is installed: `node --version`
- Ensure port 5000 is available
- Check for error messages in terminal

**Frontend build issues?**
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

**CORS errors?**
- Ensure backend is running before frontend
- Check API URLs in frontend code

---

**Happy Coding! 🎉**
