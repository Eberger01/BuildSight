# BuildSight - Development Guide

## 🎯 Next Steps for Implementation

### Phase 1: AI Integration with Gemini 3 Pro

#### 1. Install Gemini API SDK
```bash
npm install @google/generative-ai
```

#### 2. Create AI Service Module

Create `src/services/geminiService.js`:

```javascript
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function generateEstimate(projectData) {
  const model = genAI.getGenerativeModel({ model: "gemini-3-pro" });
  
  const prompt = `
    As a professional contractor estimation AI, provide a detailed cost estimate for the following project:
    
    Project Type: ${projectData.projectType}
    Description: ${projectData.description}
    Square Footage: ${projectData.squareFootage || 'Not specified'}
    Timeline: ${projectData.timeline}
    
    Please provide:
    1. Estimated total cost (with range)
    2. Material costs breakdown
    3. Labor costs estimate
    4. Timeline estimate
    5. Potential risks or considerations
    
    Format the response in JSON.
  `;
  
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return JSON.parse(response.text());
}
```

#### 3. Update EstimateForm Component

Modify `src/components/EstimateForm.jsx`:

```javascript
import { generateEstimate } from '../services/geminiService';

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  
  try {
    const estimate = await generateEstimate(formData);
    // Display estimate results
    setEstimateResults(estimate);
  } catch (error) {
    console.error('Error generating estimate:', error);
    // Handle error
  } finally {
    setLoading(false);
  }
};
```

### Phase 2: Camera Integration

#### 1. Install Camera Library
```bash
npm install react-webcam
```

#### 2. Create Camera Component

Create `src/components/CameraCapture.jsx`:

```javascript
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

function CameraCapture({ onCapture }) {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    onCapture(imageSrc);
  };

  return (
    <div className="camera-capture">
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          width: 1280,
          height: 720,
          facingMode: "environment"
        }}
      />
      <button onClick={capture} className="btn btn-accent">
        📸 Capture Photo
      </button>
      {imgSrc && <img src={imgSrc} alt="Captured" />}
    </div>
  );
}
```

#### 3. Integrate with Gallery

Update `src/components/Gallery.jsx` to use the camera component.

### Phase 3: Backend & Database

#### 1. Set up Firebase (Recommended)
```bash
npm install firebase
```

#### 2. Configure Firebase

Create `src/config/firebase.js`:

```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Your Firebase configuration
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
```

#### 3. Create Data Models

**Project Model:**
```javascript
{
  id: string,
  clientName: string,
  projectType: string,
  description: string,
  status: 'planning' | 'in-progress' | 'review' | 'completed',
  progress: number, // 0-100
  budget: number,
  spent: number,
  startDate: timestamp,
  estimatedCompletion: timestamp,
  photos: string[], // URLs to Firebase Storage
  aiEstimate: object,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Phase 4: State Management

For larger scale, consider adding Redux or Zustand:

```bash
npm install zustand
```

Create `src/store/useStore.js`:

```javascript
import create from 'zustand';

export const useStore = create((set) => ({
  jobs: [],
  estimates: [],
  addJob: (job) => set((state) => ({ jobs: [...state.jobs, job] })),
  updateJob: (id, updates) => set((state) => ({
    jobs: state.jobs.map(job => job.id === id ? { ...job, ...updates } : job)
  })),
  // Add more actions
}));
```

## 🎨 Design System Reference

### Colors
- Primary (Blue): `--primary-500` (hsl(210, 90%, 50%))
- Accent (Orange): `--accent-500` (hsl(32, 95%, 52%))
- Success: `--success-400` (hsl(142, 76%, 45%))
- Danger: `--danger-400` (hsl(0, 84%, 60%))
- Background: `--dark-bg-primary` (hsl(220, 18%, 12%))

### Component Classes
- `.btn` - Base button
- `.btn-primary` - Primary action button
- `.btn-accent` - Accent button
- `.btn-ghost` - Transparent button
- `.card` - Card component
- `.glass` - Glassmorphism effect
- `.input` - Input field
- `.input-group` - Input with label

### Animations
- `fadeIn` - Fade in animation
- `slideIn` - Slide in from left
- `scaleIn` - Scale in animation
- `pulse` - Pulsing animation
- `shimmer` - Shimmer effect

## 📋 API Integration Checklist

- [ ] Set up environment variables
- [ ] Create API service layer
- [ ] Implement error handling
- [ ] Add loading states
- [ ] Implement retry logic
- [ ] Add rate limiting protection
- [ ] Cache responses where appropriate

## 🔒 Security Considerations

1. **API Keys**: Never commit API keys to version control
2. **Environment Variables**: Use `.env` files (add to `.gitignore`)
3. **Input Validation**: Validate all user inputs
4. **Authentication**: Implement proper auth (Firebase Auth recommended)
5. **File Upload**: Validate file types and sizes for camera uploads
6. **HTTPS**: Ensure all API calls use HTTPS

## 🧪 Testing Strategy

### Unit Tests
```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

### E2E Tests
```bash
npm install --save-dev playwright
```

## 📱 Progressive Web App (PWA)

To make BuildSight a PWA:

```bash
npm install vite-plugin-pwa -D
```

Update `vite.config.js`:

```javascript
import { VitePWA } from 'vite-plugin-pwa';

export default {
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'BuildSight',
        short_name: 'BuildSight',
        description: 'AI-Powered Contractor Estimation',
        theme_color: '#1976d2',
        icons: [
          // Add app icons
        ]
      }
    })
  ]
}
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel deploy
```

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## 📊 Analytics Integration

Consider adding:
- Google Analytics
- Mixpanel
- Hotjar for user behavior

## 🎯 Performance Optimization

1. **Code Splitting**: Use React.lazy() for route-based code splitting
2. **Image Optimization**: Compress images before upload
3. **Lazy Loading**: Implement lazy loading for images
4. **Bundle Analysis**: Use `rollup-plugin-visualizer`
5. **Caching**: Implement proper caching strategies

---

**Remember**: This is a living document. Update it as you implement new features!
