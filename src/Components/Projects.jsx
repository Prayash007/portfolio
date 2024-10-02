import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('projects');
    return savedProjects ? JSON.parse(savedProjects) : [];
  });

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = () => {
    const newProject = {
      id: Date.now(),
      title: 'New Project',
      description: 'This is a brief description of the new project.',
      image: 'https://via.placeholder.com/150',
      link: '#'
    };
    setProjects([...projects, newProject]);
  };

  const updateProject = (id, updatedProject) => {
    setProjects(projects.map(project => 
      project.id === id ? { ...project, ...updatedProject } : project
    ));
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  return (
    <div className="bg-gray-300 py-10">
      <h2 className="text-4xl text-gray-900 font-bold text-center mb-10">My Projects</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onUpdate={updateProject}
            onDelete={deleteProject}
          />
        ))}
      </div>
      <div className="text-center mt-10">
        <button 
          onClick={addProject} 
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-300 transition-all"
        >
          Add New Project
        </button>
      </div>
    </div>
  );
}

export default Projects;
