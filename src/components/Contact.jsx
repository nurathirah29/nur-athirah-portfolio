import './Contact.css';

const contactLinks = [
  { icon: '📧', label: 'athirahnur2905@gmail.com', href: 'mailto:athirahnur2905@gmail.com' },
  { icon: '💻', label: 'github.com/nurathirah29', href: 'https://github.com/nurathirah29' },
  { icon: '🔗', label: 'linkedin.com/in/nur-athirah29', href: 'https://www.linkedin.com/in/nur-a-94a987206/' },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-inner contact-grid">
        <div className="contact-info">
          <p className="section-label">Let's connect</p>
          <h2 className="section-title">Get in touch</h2>
          {/* <p className="contact-body">
            I'm currently open to Software Developer opportunities. Whether you
            have a question or just want to say hi, feel free to reach out.
          </p> */}
          <div className="contact-links">
            {contactLinks.map(({ icon, label, href }) => (
              <a key={label} href={href} className="contact-link" target="_blank" rel="noreferrer">
                <span>{icon}</span> {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}