import './ActiveJobs.css';

function ActiveJobs() {
    const jobs = [
        {
            id: 1,
            client: 'John Smith',
            type: 'Kitchen Remodel',
            status: 'In Progress',
            progress: 65,
            startDate: '2025-12-01',
            estimatedCompletion: '2025-12-20',
            budget: '€45,000',
            spent: '€29,250',
            tasks: 12,
            completedTasks: 8,
            lastUpdate: '2 hours ago',
        },
        {
            id: 2,
            client: 'Sarah Johnson',
            type: 'Bathroom Upgrade',
            status: 'Planning',
            progress: 25,
            startDate: '2025-12-03',
            estimatedCompletion: '2026-01-15',
            budget: '€22,000',
            spent: '€5,500',
            tasks: 8,
            completedTasks: 2,
            lastUpdate: '1 day ago',
        },
        {
            id: 3,
            client: 'Mike Davis',
            type: 'Fence Installation',
            status: 'In Progress',
            progress: 80,
            startDate: '2025-11-28',
            estimatedCompletion: '2025-12-12',
            budget: '€8,500',
            spent: '€6,800',
            tasks: 6,
            completedTasks: 5,
            lastUpdate: '30 minutes ago',
        },
        {
            id: 4,
            client: 'Emily Brown',
            type: 'Home Improvement',
            status: 'Review',
            progress: 95,
            startDate: '2025-11-25',
            estimatedCompletion: '2025-12-08',
            budget: '€12,000',
            spent: '€11,400',
            tasks: 10,
            completedTasks: 10,
            lastUpdate: '5 hours ago',
        },
    ];

    return (
        <div className="active-jobs">
            <div className="jobs-header">
                <div>
                    <h2>Active Jobs</h2>
                    <p className="jobs-subtitle">Track and manage ongoing projects</p>
                </div>
                <div className="jobs-filters">
                    <select className="filter-select">
                        <option>All Status</option>
                        <option>Planning</option>
                        <option>In Progress</option>
                        <option>Review</option>
                    </select>
                    <select className="filter-select">
                        <option>Sort by: Recent</option>
                        <option>Sort by: Progress</option>
                        <option>Sort by: Budget</option>
                    </select>
                </div>
            </div>

            <div className="jobs-grid">
                {jobs.map((job) => (
                    <div key={job.id} className="job-detail-card">
                        <div className="job-card-header">
                            <div>
                                <h3 className="job-title">{job.type}</h3>
                                <p className="job-client-name">Client: {job.client}</p>
                            </div>
                            <span className={`status-badge status-${job.status.toLowerCase().replace(' ', '-')}`}>
                                {job.status}
                            </span>
                        </div>

                        <div className="job-progress-section">
                            <div className="progress-header">
                                <span className="progress-label">Overall Progress</span>
                                <span className="progress-percentage">{job.progress}%</span>
                            </div>
                            <div className="progress-bar-large">
                                <div
                                    className="progress-bar-fill"
                                    style={{ width: `${job.progress}%` }}
                                ></div>
                            </div>
                            <div className="progress-info">
                                <span>{job.completedTasks}/{job.tasks} tasks completed</span>
                                <span className="last-update">Updated {job.lastUpdate}</span>
                            </div>
                        </div>

                        <div className="job-stats">
                            <div className="stat-item">
                                <span className="stat-icon">💰</span>
                                <div className="stat-data">
                                    <p className="stat-value">{job.spent}</p>
                                    <p className="stat-label">Spent of {job.budget}</p>
                                </div>
                            </div>
                            <div className="stat-item">
                                <span className="stat-icon">📅</span>
                                <div className="stat-data">
                                    <p className="stat-value">{job.estimatedCompletion}</p>
                                    <p className="stat-label">Est. Completion</p>
                                </div>
                            </div>
                        </div>

                        <div className="job-actions">
                            <button className="btn btn-ghost btn-sm">
                                <span>📷</span>
                                <span>Photos</span>
                            </button>
                            <button className="btn btn-ghost btn-sm">
                                <span>📋</span>
                                <span>Details</span>
                            </button>
                            <button className="btn btn-primary btn-sm">
                                <span>✏️</span>
                                <span>Update</span>
                            </button>
                        </div>

                        <div className="camera-badge">
                            <span className="camera-badge-icon">📸</span>
                            <span>Progress photos ready</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="jobs-footer">
                <button className="btn btn-ghost">Load More Jobs</button>
            </div>
        </div>
    );
}

export default ActiveJobs;
