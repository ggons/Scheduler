import React from 'react';

const ViewProjects = ({ projects, onClick }) => {
  const renderProjects = () => {
    return projects.map(project => (
      <div 
        key={project._id} 
        onClick={() => onClick(project._id)}
      >
        {project.name}
      </div>
    ));
  }

  return (  
    <div>
      { renderProjects() }
    </div>
  );
}
 
export default ViewProjects;