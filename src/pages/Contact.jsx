import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_60yqhuh',    // Service ID
      'template_ci02d4d',   // Template ID
      form.current,
      '62tEvNnhji2OuTMAS'     // Public Key
    ).then(
      () => {
        alert('Message sent!');
        form.current.reset();
      },
      (error) => {
        console.error('FAILED...', error);
        alert('Message failed to send.');
      }
    );
  };

  return (
    <div className="contact">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" required />

        <label>Email</label>
        <input type="email" name="email" required />

        <label>Subject</label>
        <input type="subject" name="subject" required />

        <label>Message</label>
        <textarea name="message" rows="5" required />

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