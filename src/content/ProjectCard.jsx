const ProjectCard = ({ project }) => {
    return (
      <div className="project-card">
        <img src={project.image} alt={project.name} className="project-image" />
        <div className="project-content">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  