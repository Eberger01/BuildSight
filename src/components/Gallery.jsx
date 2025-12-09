import './Gallery.css';

function Gallery() {
    const categories = ['All Projects', 'Kitchen', 'Bathroom', 'Fences', 'Decks', 'Roofing'];

    const placeholderProjects = [
        { id: 1, title: 'Modern Kitchen', category: 'Kitchen', images: 12 },
        { id: 2, title: 'Luxury Bathroom', category: 'Bathroom', images: 8 },
        { id: 3, title: 'Privacy Fence', category: 'Fences', images: 15 },
        { id: 4, title: 'Outdoor Deck', category: 'Decks', images: 10 },
        { id: 5, title: 'Roof Replacement', category: 'Roofing', images: 6 },
        { id: 6, title: 'Kitchen Island', category: 'Kitchen', images: 9 },
    ];

    return (
        <div className="gallery">
            <div className="gallery-header">
                <div>
                    <h2>Project Gallery</h2>
                    <p className="gallery-subtitle">Browse photos from completed projects</p>
                </div>
                <button className="btn btn-accent">
                    <span>📸</span>
                    <span>Upload Photos</span>
                </button>
            </div>

            <div className="gallery-filters">
                {categories.map((category) => (
                    <button key={category} className="filter-btn">
                        {category}
                    </button>
                ))}
            </div>

            <div className="gallery-grid">
                {placeholderProjects.map((project) => (
                    <div key={project.id} className="gallery-item">
                        <div className="gallery-placeholder">
                            <div className="placeholder-icon">📷</div>
                            <p className="placeholder-text">Project Photos</p>
                        </div>
                        <div className="gallery-item-info">
                            <h4>{project.title}</h4>
                            <p className="gallery-item-meta">
                                <span className="category-tag">{project.category}</span>
                                <span>{project.images} photos</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="camera-integration-banner">
                <div className="banner-content">
                    <div className="banner-icon">📸</div>
                    <div>
                        <h3>Camera Integration Coming Soon</h3>
                        <p>Take progress photos directly from the app and automatically organize them by project</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
