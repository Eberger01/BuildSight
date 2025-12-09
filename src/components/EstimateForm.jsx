import { useState } from 'react';
import { generateEstimate } from '../services/geminiService';
import './EstimateForm.css';

function EstimateForm() {
    const [formData, setFormData] = useState({
        clientName: '',
        email: '',
        phone: '',
        projectType: '',
        description: '',
        squareFootage: '',
        timeline: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [estimate, setEstimate] = useState(null);
    const [error, setError] = useState(null);
    const [photos, setPhotos] = useState([]);

    const projectTypes = [
        'Kitchen Remodel',
        'Bathroom Upgrade',
        'Fence Installation',
        'Deck Construction',
        'Home Improvement',
        'Basement Finishing',
        'Roof Replacement',
        'Flooring',
        'Painting',
        'Other',
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setEstimate(null);

        try {
            console.log('Generating AI estimate for:', formData);
            const result = await generateEstimate(formData);
            console.log('AI Estimate Result:', result);
            setEstimate(result);
        } catch (err) {
            console.error('Error generating estimate:', err);
            setError(err.message || 'Failed to generate estimate. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const handlePhotoUpload = (e) => {
        const files = Array.from(e.target.files);
        const newPhotos = files.map(file => ({
            file,
            preview: URL.createObjectURL(file),
            id: Math.random().toString(36).substr(2, 9)
        }));
        setPhotos(prev => [...prev, ...newPhotos]);
    };

    const handleRemovePhoto = (photoId) => {
        setPhotos(prev => {
            const photoToRemove = prev.find(p => p.id === photoId);
            if (photoToRemove) {
                URL.revokeObjectURL(photoToRemove.preview);
            }
            return prev.filter(p => p.id !== photoId);
        });
    };

    return (
        <div className="estimate-form-container">
            <div className="estimate-header">
                <div>
                    <h2>New Project Estimate</h2>
                    <p className="estimate-subtitle">Fill in the details to generate an AI-powered estimate</p>
                </div>
                <div className="ai-badge">
                    <span className="ai-badge-icon">🤖</span>
                    <span>Powered by Gemini 3 Pro</span>
                </div>
            </div>

            <div className="estimate-content">
                <form onSubmit={handleSubmit} className="estimate-form">
                    <div className="form-section">
                        <h3 className="form-section-title">Client Information</h3>
                        <div className="form-grid">
                            <div className="input-group">
                                <label htmlFor="clientName" className="input-label">Client Name *</label>
                                <input
                                    type="text"
                                    id="clientName"
                                    name="clientName"
                                    className="input"
                                    value={formData.clientName}
                                    onChange={handleChange}
                                    placeholder="John Smith"
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="email" className="input-label">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="input"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="phone" className="input-label">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="input"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="(555) 123-4567"
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-section">
                        <h3 className="form-section-title">Project Details</h3>
                        <div className="form-grid">
                            <div className="input-group full-width">
                                <label htmlFor="projectType" className="input-label">Project Type *</label>
                                <select
                                    id="projectType"
                                    name="projectType"
                                    className="input"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                >
                                    <option value="">Select project type...</option>
                                    {projectTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="input-group">
                                <label htmlFor="squareFootage" className="input-label">Square Footage</label>
                                <input
                                    type="number"
                                    id="squareFootage"
                                    name="squareFootage"
                                    className="input"
                                    value={formData.squareFootage}
                                    onChange={handleChange}
                                    placeholder="500"
                                    disabled={isLoading}
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="timeline" className="input-label">Preferred Timeline</label>
                                <select
                                    id="timeline"
                                    name="timeline"
                                    className="input"
                                    value={formData.timeline}
                                    onChange={handleChange}
                                    disabled={isLoading}
                                >
                                    <option value="">Select timeline...</option>
                                    <option value="asap">ASAP</option>
                                    <option value="1-2weeks">1-2 weeks</option>
                                    <option value="1month">1 month</option>
                                    <option value="2-3months">2-3 months</option>
                                    <option value="flexible">Flexible</option>
                                </select>
                            </div>

                            <div className="input-group full-width">
                                <label htmlFor="description" className="input-label">Project Description *</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    className="input"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Describe the project in detail..."
                                    rows="5"
                                    required
                                    disabled={isLoading}
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="camera-section">
                        <div className="camera-header">
                            <h3 className="form-section-title">Project Photos</h3>
                            <span className="photo-count-badge">{photos.length} photo{photos.length !== 1 ? 's' : ''}</span>
                        </div>

                        {photos.length > 0 && (
                            <div className="photos-grid">
                                {photos.map((photo) => (
                                    <div key={photo.id} className="photo-preview">
                                        <img src={photo.preview} alt="Project photo" />
                                        <button
                                            type="button"
                                            className="photo-remove-btn"
                                            onClick={() => handleRemovePhoto(photo.id)}
                                            title="Remove photo"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="camera-upload">
                            <input
                                type="file"
                                id="photo-input"
                                accept="image/*"
                                capture="environment"
                                multiple
                                onChange={handlePhotoUpload}
                                style={{ display: 'none' }}
                            />
                            <div className="camera-icon">📷</div>
                            <p className="camera-text">Upload or capture project site photos</p>
                            <p className="camera-subtext">Supports multiple images • Camera & file upload</p>
                            <label htmlFor="photo-input" className="btn btn-primary">
                                <span>📸</span>
                                <span>Add Photos</span>
                            </label>
                        </div>
                    </div>

                    {error && (
                        <div className="error-message">
                            <span className="error-icon">⚠️</span>
                            <span>{error}</span>
                        </div>
                    )}

                    <div className="form-actions">
                        <button type="button" className="btn btn-ghost" disabled={isLoading}>
                            Save as Draft
                        </button>
                        <button type="submit" className="btn btn-accent btn-large" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <span className="spinner">⏳</span>
                                    <span>Generating Estimate...</span>
                                </>
                            ) : (
                                <>
                                    <span>🤖</span>
                                    <span>Generate AI Estimate</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>

                <div className="estimate-sidebar">
                    {!estimate ? (
                        <>
                            <div className="sidebar-card">
                                <h4>💡 Estimation Tips</h4>
                                <ul className="tips-list">
                                    <li>Provide detailed project descriptions for more accurate estimates</li>
                                    <li>Include square footage when applicable</li>
                                    <li>Photos of the site help improve accuracy</li>
                                    <li>Mention any specific materials or preferences</li>
                                </ul>
                            </div>

                            <div className="sidebar-card ai-features">
                                <div className="feature-icon">✨</div>
                                <h4>AI Features</h4>
                                <ul className="features-list">
                                    <li>
                                        <span className="feature-check">✓</span>
                                        <span>Instant cost estimation</span>
                                    </li>
                                    <li>
                                        <span className="feature-check">✓</span>
                                        <span>Material recommendations</span>
                                    </li>
                                    <li>
                                        <span className="feature-check">✓</span>
                                        <span>Timeline predictions</span>
                                    </li>
                                    <li>
                                        <span className="feature-check">✓</span>
                                        <span>Risk assessment</span>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <div className="estimate-results">
                            <div className="results-card">
                                <h3>AI-Generated Estimate</h3>

                                <div className="estimate-summary">
                                    <div className="estimate-total">
                                        <span className="estimate-label">Estimated Cost</span>
                                        <span className="estimate-amount">
                                            {formatCurrency(estimate.totalEstimate?.average || 0)}
                                        </span>
                                        <span className="estimate-range">
                                            Range: {formatCurrency(estimate.totalEstimate?.min || 0)} - {formatCurrency(estimate.totalEstimate?.max || 0)}
                                        </span>
                                    </div>
                                </div>

                                {estimate.breakdown && (
                                    <div className="breakdown-section">
                                        <h4>Cost Breakdown</h4>
                                        <div className="breakdown-items">
                                            {estimate.breakdown.materials && (
                                                <div className="breakdown-item">
                                                    <span>Materials</span>
                                                    <span>{formatCurrency(estimate.breakdown.materials.cost)}</span>
                                                </div>
                                            )}
                                            {estimate.breakdown.labor && (
                                                <div className="breakdown-item">
                                                    <span>Labor</span>
                                                    <span>{formatCurrency(estimate.breakdown.labor.cost)}</span>
                                                </div>
                                            )}
                                            {estimate.breakdown.permits && (
                                                <div className="breakdown-item">
                                                    <span>Permits</span>
                                                    <span>{formatCurrency(estimate.breakdown.permits)}</span>
                                                </div>
                                            )}
                                            {estimate.breakdown.contingency && (
                                                <div className="breakdown-item">
                                                    <span>Contingency</span>
                                                    <span>{formatCurrency(estimate.breakdown.contingency)}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {estimate.timeline && (
                                    <div className="timeline-section">
                                        <h4>Timeline</h4>
                                        <p className="timeline-estimate">
                                            Estimated Duration: <strong>{estimate.timeline.estimatedDays} days</strong>
                                        </p>
                                    </div>
                                )}

                                {estimate.recommendations && estimate.recommendations.length > 0 && (
                                    <div className="recommendations-section">
                                        <h4>Recommendations</h4>
                                        <ul className="recommendations-list">
                                            {estimate.recommendations.map((rec, index) => (
                                                <li key={index}>{rec}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="results-actions">
                                    <button className="btn btn-primary" onClick={() => setEstimate(null)}>
                                        New Estimate
                                    </button>
                                    <button className="btn btn-ghost">
                                        Download PDF
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default EstimateForm;
