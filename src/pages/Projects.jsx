import './Projects.css';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div className="projects">
      {projects.map(project => (
        <div className="project-card" key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <Link to={`/projects/${project.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}
