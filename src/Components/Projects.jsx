import React from 'react';
import './Projects.css';

const projectsdata = [
  {
    title: 'Handwritten Digit Recognition using CNN',
    date: '03/2022 - 07/2022',
    description: 'Created a Python-based Handwritten Digit Recognition System using Convolutional Neural Networks (CNNs). Utilizing TensorFlow and Keras, the system identifies human handwritten digits with accuracy. The process involves dataset loading, CNN model construction, training, and evaluation on the MNIST dataset.',
    link: 'https://github.com/DwijapriyaSarma/Hand-Written-digit-recoznition-using-CNN.git',
    
  },
  
  {
    title: 'Work Flow Management System',
    date: '03/2020 - 05/2020',
    description: 'Developed a Workflow Management System on Windows 7 operating system, utilizing HTML, CSS, JavaScript, and PHP as development tools. The system is backed by a MySQL database for efficient data management.',
    link: 'http://project-link.com',
    
  },
  {
    title: 'Travel and Tourism Web Application',
    date: '03/2024 - 04/2024',
    description: 'Designed and implemented the frontend of a static travel and tourism website using HTML, CSS, and Bootstrap. Crafted a visually appealing user interface with responsive design, facilitating seamless navigation and interaction for visitors. Incorporated Bootstrap components for enhanced functionality and optimized user experience.',
    link: 'https://github.com/DwijapriyaSarma/TravelWebsite.git',
    
  }
];

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    {projectsdata.map((project, index) => (
      <div key={index} className="project" style={{ backgroundColor: project.bgColor }}>
        <div className="project-details">
          <div className="date">
            <h6>{project.date}</h6>
          </div>
          <div className="description">
            <h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                {project.title} 
              </a>
            </h3>
            <p className="description-text">{project.description}</p>
          </div>
        </div>
      </div>
    ))}
  </section>
);

export default Projects;
