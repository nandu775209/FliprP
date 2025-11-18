import React, { useState, useEffect } from 'react';
import api from '../api/axiosConfig'; // API connection

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await api.get('/api/projects');
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching projects. Please try again later.');
        console.error(err);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []); 

  if (loading) {
    return <div className="projects-section"><h2>Loading Projects...</h2></div>;
  }

  if (error) {
    return <div className="projects-section"><h2>{error}</h2></div>;
  }

  return (
    <section className="projects-section">
      <h2>Our Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <img src={project.projectImage} alt={project.projectName} />
            <div className="project-card-content">
              <h3>{project.projectName}</h3>
              <p>{project.projectDescription}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;