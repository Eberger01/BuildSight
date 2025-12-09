import { useState } from 'react';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import EstimateForm from './components/EstimateForm';
import ActiveJobs from './components/ActiveJobs';
import Gallery from './components/Gallery';
import Settings from './components/Settings';
import './App.css';

function App() {
  const [activeView, setActiveView] = useState('dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard onViewChange={setActiveView} />;
      case 'estimate':
        return <EstimateForm />;
      case 'jobs':
        return <ActiveJobs />;
      case 'gallery':
        return <Gallery />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard onViewChange={setActiveView} />;
    }
  };

  return (
    <div className="app">
      <Navigation activeView={activeView} onViewChange={setActiveView} />
      <main className="app-content">
        {renderView()}
      </main>
      <footer className="app-footer">
        <div className="footer-content">
          <p>&copy; 2025 BuildSight. Powered by Gemini 3 Pro AI.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#support">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
