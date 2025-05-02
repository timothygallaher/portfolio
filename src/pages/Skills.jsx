import './Skills.css';

export default function Skills() {
  const technical = ['Python', 'TypeScript', 'JavaScript', 'C/C++', 'C#', 'SQL', 'React', 'React Native', 'Node.js', 'HTML', 'CSS', 'Firebase'];
  const soft = ['Communication', 'Problem Solving', 'Teamwork'];

  return (
    <div className="skills">
      <h2>Skills</h2>

      <div className="skill-category">
        <h3>Technical Skills</h3>
        <ul>
          {technical.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>

      <div className="skill-category">
        <h3>Non-Technical Skills</h3>
        <ul>
          {soft.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    </div>
  );
}
