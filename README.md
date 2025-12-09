# BuildSight - AI-Powered Contractor Estimation Platform

![BuildSight Logo](https://img.shields.io/badge/BuildSight-AI%20Powered-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Base%20Complete-success?style=for-the-badge)
![Framework](https://img.shields.io/badge/Framework-React%20%2B%20Vite-purple?style=for-the-badge)

## 🏗️ Overview

BuildSight is a modern, AI-powered contractor estimation and job tracking platform designed to streamline the workflow for contractors specializing in:

- 🔨 Kitchen Remodels
- 🚿 Bathroom Upgrades
- 🏡 Fence Installation
- 🪜 Deck Construction
- 🏠 Home Improvement
- 🎨 Painting & Finishing
- And more...

## ✨ Features

### Current Features (Base Implementation)

- **📊 Dashboard**: Comprehensive overview of active jobs, pending estimates, and key metrics
- **📝 Estimate Creator**: Beautiful form interface for creating new project estimates
- **🔨 Job Tracking**: Monitor progress of active jobs with visual progress bars
- **📷 Gallery**: Browse project photos organized by category
- **⚙️ Settings**: Configure AI settings, camera options, and notifications
- **🎨 Premium UI/UX**: Dark mode interface with smooth animations and gradients

### Coming Soon

- **🤖 AI Estimation (Gemini 3 Pro)**: Automated cost estimation powered by Google's Gemini 3 Pro
- **📸 Camera Integration**: Take progress photos and site images directly in the app
- **📈 Advanced Analytics**: Detailed reporting and insights
- **📱 Mobile App**: Native mobile applications for iOS and Android
- **🔔 Real-time Notifications**: Push notifications for project updates

## 🚀 Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS with custom design system
- **Typography**: Inter & Outfit (Google Fonts)
- **AI Engine**: Gemini 3 Pro (Planned)
- **State Management**: React Hooks

## 🎨 Design System

BuildSight features a comprehensive design system with:

- **Color Palette**: Professional construction-themed colors with primary (blue) and accent (orange) schemes
- **Typography**: Modern font stack with Inter for body text and Outfit for headings
- **Components**: Reusable UI components (buttons, inputs, cards, etc.)
- **Animations**: Smooth transitions, hover effects, and micro-animations
- **Responsive**: Mobile-first design that works on all devices

## 📁 Project Structure

```
BuildSight/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx       # Main navigation bar
│   │   ├── Navigation.css
│   │   ├── Dashboard.jsx        # Dashboard view
│   │   ├── Dashboard.css
│   │   ├── EstimateForm.jsx     # New estimate form
│   │   ├── EstimateForm.css
│   │   ├── ActiveJobs.jsx       # Active jobs tracker
│   │   ├── ActiveJobs.css
│   │   ├── Gallery.jsx          # Project gallery
│   │   ├── Gallery.css
│   │   ├── Settings.jsx         # App settings
│   │   └── Settings.css
│   ├── App.jsx                  # Main app component
│   ├── App.css
│   ├── index.css                # Global styles & design system
│   └── main.jsx                 # App entry point
├── index.html
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation Steps

1. **Clone the repository** (or navigate to the project folder):
   ```bash
   cd BuildSight
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🎯 Roadmap

### Phase 1: Foundation ✅ (Current)
- [x] Design system implementation
- [x] Core UI components
- [x] Navigation and routing
- [x] Dashboard with sample data
- [x] Estimate form interface
- [x] Job tracking views
- [x] Gallery placeholder
- [x] Settings interface

### Phase 2: AI Integration (Next)
- [ ] Gemini 3 Pro API integration
- [ ] AI-powered cost estimation
- [ ] Material recommendations
- [ ] Timeline predictions
- [ ] Risk assessment

### Phase 3: Camera & Media
- [ ] Camera API integration
- [ ] Photo capture and upload
- [ ] Image galleries per project
- [ ] Before/after comparisons
- [ ] Automatic project documentation

### Phase 4: Advanced Features
- [ ] Client portal
- [ ] Invoice generation
- [ ] Payment processing
- [ ] Team collaboration
- [ ] Mobile applications

## 🔐 Environment Variables

When implementing AI features, create a `.env` file:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

## 📱 Responsive Design

BuildSight is fully responsive and works seamlessly on:

- 💻 Desktop (1024px+)
- 📱 Tablet (768px - 1023px)
- 📱 Mobile (320px - 767px)

## 🎨 Screenshots

The app features:
- **Dark Mode Interface**: Professional dark theme with vibrant accents
- **Gradient Elements**: Modern gradient effects on buttons and text
- **Smooth Animations**: Micro-animations for improved UX
- **Progress Tracking**: Visual progress bars with shimmer effects
- **Status Badges**: Color-coded status indicators
- **Glassmorphism**: Subtle glass effects on cards

## 🤝 Contributing

This is currently a private project. Future contributions will be welcomed once the project reaches beta stage.

## 📄 License

Proprietary - All rights reserved

## 👤 Author

**BuildSight Development Team**

## 🙏 Acknowledgments

- Google Gemini 3 Pro for AI capabilities (upcoming)
- React team for the amazing framework
- Vite team for the lightning-fast build tool

---

**Note**: This is the base implementation of BuildSight. AI estimation and camera features will be implemented in future releases. The current version provides a beautiful, functional foundation for the platform.

**Current Status**: ✅ Base UI Complete | 🔄 AI Integration Pending | 🔄 Camera Integration Pending
