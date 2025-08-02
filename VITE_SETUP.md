# 🚀 How to Run the Intern Fundraiser Portal

Your **Vite + React** frontend is now ready to work with your **Express.js** backend!

## 🏃‍♂️ Quick Start

### Option 1: Use the Startup Scripts
Simply double-click **`start-servers.bat`** in the root folder. This will automatically start both servers:
- Backend on http://localhost:5000
- Frontend on http://localhost:5173 (Vite's default port)

### Option 2: Manual Start

#### 1. Start the Backend (Terminal 1):
```bash
cd backend
npm start
```
✅ Backend will run on **http://localhost:5000**

#### 2. Start the Frontend (Terminal 2):
```bash
cd frontend
npm run dev
```
✅ Frontend will run on **http://localhost:5173**

## 🎯 What You Get

### **Frontend Features (Vite + React + Tailwind CSS):**
- ⚡ **Lightning Fast**: Vite's hot module replacement (HMR)
- 🎨 **Modern UI**: Tailwind CSS with custom components
- 🧭 **React Router**: Smooth navigation between pages
- 📱 **Responsive**: Works on desktop and mobile
- 🔄 **Smart Fallback**: Works even if backend is offline

### **Pages Available:**
1. **Login Page** (`/login`)
   - Dummy authentication (any credentials work)
   - Beautiful gradient background

2. **Dashboard** (`/dashboard`)
   - Shows intern name, referral code, donations raised
   - Progress tracking to next reward
   - Interactive rewards section
   - Quick action buttons

3. **Leaderboard** (`/leaderboard`)
   - Top 3 podium display
   - Full rankings table
   - Statistics summary

### **Backend API Endpoints:**
- `GET /api/intern` - Intern data with rewards
- `GET /api/leaderboard` - Rankings and stats

## 🔧 Key Features

### **API Integration:**
- Frontend automatically connects to backend on http://localhost:5000
- Graceful error handling if backend is unavailable
- Fallback to dummy data for development

### **Modern React Patterns:**
- Functional components with hooks
- useState and useEffect for state management
- Custom CSS classes with Tailwind
- Responsive design patterns

### **Vite Benefits:**
- 🚀 Instant server start
- ⚡ Hot Module Replacement (HMR)
- 📦 Optimized builds
- 🔧 Modern ES modules

## 🎨 Styling System

Using **Tailwind CSS** with custom utility classes:
- `.btn-primary` - Primary action buttons
- `.btn-secondary` - Secondary buttons
- `.card-shadow` - Consistent card shadows
- `.gradient-bg` - Beautiful gradient backgrounds
- `.progress-bar` - Progress tracking bars

## 🌐 Deployment Ready

### **Frontend (Netlify/Vercel):**
```bash
cd frontend
npm run build
# Upload 'dist' folder
```

### **Backend (Render/Railway):**
```bash
cd backend
# Push to GitHub and connect to hosting service
```

## 🚨 Troubleshooting

**Port already in use?**
- Backend: Check if port 5000 is available
- Frontend: Vite will automatically use next available port (5174, 5175, etc.)

**CORS errors?**
- Make sure backend is running first
- Backend includes CORS configuration for frontend

**Components not found?**
- All components use `.jsx` extension for Vite compatibility
- Check file paths in import statements

## 🎉 You're All Set!

Your full-stack app now features:
✅ Modern Vite + React frontend  
✅ Express.js REST API backend  
✅ Tailwind CSS styling  
✅ React Router navigation  
✅ Responsive design  
✅ API integration with fallbacks  
✅ Production-ready setup  

**Happy coding! 🚀**
