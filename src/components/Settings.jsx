import './Settings.css';

function Settings() {
    return (
        <div className="settings">
            <div className="settings-header">
                <h2>Settings</h2>
                <p className="settings-subtitle">Manage your application preferences</p>
            </div>

            <div className="settings-grid">
                <div className="settings-section">
                    <h3>AI Configuration</h3>
                    <div className="setting-item">
                        <div className="setting-info">
                            <h4>AI Model</h4>
                            <p>Currently using Gemini 3 Pro for estimations</p>
                        </div>
                        <div className="setting-value">
                            <span className="ai-status">Active</span>
                        </div>
                    </div>
                    <div className="setting-item">
                        <div className="setting-info">
                            <h4>Auto-Estimation</h4>
                            <p>Automatically generate estimates for new projects</p>
                        </div>
                        <div className="setting-value">
                            <label className="toggle">
                                <input type="checkbox" />
                                <span className="toggle-slider"></span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="settings-section">
                    <h3>Camera Settings</h3>
                    <div className="setting-item">
                        <div className="setting-info">
                            <h4>Auto-Upload Photos</h4>
                            <p>Automatically upload photos to project gallery</p>
                        </div>
                        <div className="setting-value">
                            <label className="toggle">
                                <input type="checkbox" />
                                <span className="toggle-slider"></span>
                            </label>
                        </div>
                    </div>
                    <div className="setting-item">
                        <div className="setting-info">
                            <h4>Photo Quality</h4>
                            <p>Set default quality for captured images</p>
                        </div>
                        <div className="setting-value">
                            <select className="setting-select">
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="settings-section">
                    <h3>Notifications</h3>
                    <div className="setting-item">
                        <div className="setting-info">
                            <h4>Email Notifications</h4>
                            <p>Receive updates about project progress</p>
                        </div>
                        <div className="setting-value">
                            <label className="toggle">
                                <input type="checkbox" defaultChecked />
                                <span className="toggle-slider"></span>
                            </label>
                        </div>
                    </div>
                    <div className="setting-item">
                        <div className="setting-info">
                            <h4>Push Notifications</h4>
                            <p>Get alerts for important updates</p>
                        </div>
                        <div className="setting-value">
                            <label className="toggle">
                                <input type="checkbox" defaultChecked />
                                <span className="toggle-slider"></span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="settings-section">
                    <h3>Account</h3>
                    <div className="setting-item">
                        <div className="setting-info">
                            <h4>Company Name</h4>
                            <p>Your business or contractor name</p>
                        </div>
                        <div className="setting-value">
                            <button className="btn btn-ghost btn-sm">Edit</button>
                        </div>
                    </div>
                    <div className="setting-item">
                        <div className="setting-info">
                            <h4>Contact Information</h4>
                            <p>Update your email and phone number</p>
                        </div>
                        <div className="setting-value">
                            <button className="btn btn-ghost btn-sm">Edit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="settings-footer">
                <button className="btn btn-ghost">Reset to Defaults</button>
                <button className="btn btn-primary">Save Changes</button>
            </div>
        </div>
    );
}

export default Settings;
