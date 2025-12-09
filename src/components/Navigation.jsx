import { useState } from 'react';
import './Navigation.css';

function Navigation({ activeView, onViewChange }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: '📊' },
        { id: 'estimate', label: 'New Estimate', icon: '📝' },
        { id: 'jobs', label: 'Active Jobs', icon: '🔨' },
        { id: 'gallery', label: 'Gallery', icon: '📷' },
        { id: 'settings', label: 'Settings', icon: '⚙️' },
    ];

    return (
        <nav className="navigation">
            <div className="nav-container">
                <div className="nav-brand">
                    <div className="brand-icon">🏗️</div>
                    <div className="brand-text">
                        <h1 className="brand-name">BuildSight</h1>
                        <p className="brand-tagline">Contractor Estimation Pro</p>
                    </div>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="menu-icon">{isMenuOpen ? '✕' : '☰'}</span>
                </button>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                className={`nav-link ${activeView === item.id ? 'active' : ''}`}
                                onClick={() => {
                                    onViewChange(item.id);
                                    setIsMenuOpen(false);
                                }}
                            >
                                <span className="nav-icon">{item.icon}</span>
                                <span className="nav-label">{item.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="nav-actions">
                    <button className="btn btn-ghost btn-icon" title="Notifications">
                        🔔
                    </button>
                    <button className="btn btn-ghost btn-icon" title="Profile">
                        👤
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
