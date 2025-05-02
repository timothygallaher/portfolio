import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Timothy Gallaher. All rights reserved.</p>
      <div>
        <a href="https://github.com/timothygallaher" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/timothygallaher" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}
