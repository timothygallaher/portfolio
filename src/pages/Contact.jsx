import './Contact.css';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Message sent! Thank you, ${form.name}.`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required value={form.name} onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required value={form.email} onChange={handleChange} />

        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="5" required value={form.message} onChange={handleChange}></textarea>

        <button type="submit">Send</button>
      </form>

      <div className="contact-links">
        <p>Find me on:</p>
        <a href="https://github.com/timothygallaher" target="_blank" rel="noopener noreferrer">GitHub</a><br />
        <a href="https://linkedin.com/in/timothygallaher" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}
