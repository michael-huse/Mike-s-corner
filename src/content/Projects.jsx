import ProjectCard from "./ProjectCard";
import blindDate from '../assets/blindDate.jpg';
import beMyBuddy from '../assets/socialMedia.jpg';
import myFridge from '../assets/fridge.jpeg';

const Projects = () => {
  const projectsList = [
    {
      name: "BeMyBuddy",
      description: "A social media platform for people looking for friends.",
      image: beMyBuddy,
    },
    { name: "BlindR", description: "A blind dating app.", image: blindDate },
    {
      name: "MyFridge",
      description: "An app that helps you cook with what you have at home.",
      image: myFridge,
    },
  ];

  return (
    <div className="projects-container">
      {projectsList.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  );
};

export default Projects;

