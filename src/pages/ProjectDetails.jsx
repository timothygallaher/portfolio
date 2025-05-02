import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <p>Project not found.</p>;

  return (
    <div className="projects">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} style={{ maxWidth: '100%', borderRadius: '8px' }} />
      <p><strong>Technologies:</strong> {project.tech.join(', ')}</p>
      <p><strong>Challenges:</strong> {project.challenges}</p>
      <p><strong>Outcome:</strong> {project.outcome}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">Live Site</a>
    </div>
  );
}
