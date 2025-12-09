import './Dashboard.css';

function Dashboard({ onViewChange }) {
    const stats = [
        { label: 'Active Jobs', value: '12', icon: '🔨', trend: '+3', color: 'primary' },
        { label: 'Pending Estimates', value: '8', icon: '📋', trend: '+2', color: 'accent' },
        { label: 'Completed This Month', value: '24', icon: '✅', trend: '+12%', color: 'success' },
        { label: 'Total Revenue', value: '€142K', icon: '💰', trend: '+18%', color: 'success' },
    ];

    const recentJobs = [
        { id: 1, client: 'John Smith', type: 'Kitchen Remodel', status: 'In Progress', progress: 65, date: '2025-12-01' },
        { id: 2, client: 'Sarah Johnson', type: 'Bathroom Upgrade', status: 'Planning', progress: 25, date: '2025-12-03' },
        { id: 3, client: 'Mike Davis', type: 'Fence Installation', status: 'In Progress', progress: 80, date: '2025-11-28' },
        { id: 4, client: 'Emily Brown', type: 'Home Improvement', status: 'Review', progress: 95, date: '2025-11-25' },
    ];

    const upcomingTasks = [
        { task: 'Site inspection - Johnson residence', time: 'Today, 2:00 PM', priority: 'high' },
        { task: 'Material delivery - Smith kitchen', time: 'Tomorrow, 10:00 AM', priority: 'medium' },
        { task: 'Final walkthrough - Davis fence', time: 'Dec 10, 3:00 PM', priority: 'medium' },
        { task: 'Estimate review - New client', time: 'Dec 12, 11:00 AM', priority: 'low' },
    ];

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <div>
                    <h2>Welcome back! 👋</h2>
                    <p className="dashboard-subtitle">Here's what's happening with your projects today.</p>
                </div>
                <button className="btn btn-accent" onClick={() => onViewChange('estimate')}>
                    <span>📝</span>
                    <span>New Estimate</span>
                </button>
            </div>

            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className={`stat-card ${stat.color}`}>
                        <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-content">
                            <p className="stat-label">{stat.label}</p>
                            <div className="stat-value-row">
                                <h3 className="stat-value">{stat.value}</h3>
                                <span className="stat-trend">{stat.trend}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="dashboard-grid">
                <div className="dashboard-section">
                    <div className="section-header">
                        <h3>Recent Jobs</h3>
                        <button className="btn-link">View All →</button>
                    </div>
                    <div className="jobs-list">
                        {recentJobs.map((job) => (
                            <div key={job.id} className="job-card">
                                <div className="job-header">
                                    <div>
                                        <h4 className="job-client">{job.client}</h4>
                                        <p className="job-type">{job.type}</p>
                                    </div>
                                    <span className={`job-status status-${job.status.toLowerCase().replace(' ', '-')}`}>
                                        {job.status}
                                    </span>
                                </div>
                                <div className="job-progress">
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{ width: `${job.progress}%` }}></div>
                                    </div>
                                    <span className="progress-text">{job.progress}%</span>
                                </div>
                                <p className="job-date">Started: {job.date}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="dashboard-section">
                    <div className="section-header">
                        <h3>Upcoming Tasks</h3>
                        <button className="btn-link">View Calendar →</button>
                    </div>
                    <div className="tasks-list">
                        {upcomingTasks.map((item, index) => (
                            <div key={index} className="task-item">
                                <div className={`task-priority priority-${item.priority}`}></div>
                                <div className="task-content">
                                    <p className="task-name">{item.task}</p>
                                    <p className="task-time">{item.time}</p>
                                </div>
                                <button className="btn-icon-sm">✓</button>
                            </div>
                        ))}
                    </div>

                    <div className="ai-banner">
                        <div className="ai-icon">🤖</div>
                        <div className="ai-content">
                            <h4>AI Estimation Ready</h4>
                            <p>Powered by Gemini 3 Pro - Coming Soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
