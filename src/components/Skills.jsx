import './Skills.css';

const skills = [
  {
    icon: '🌐',
    name: 'Frontend',
    desc: 'Building responsive, user-friendly interfaces for internal web systems.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React'],
    tagStyle: 'blue',
  },
  {
    icon: '🐍',
    name: 'Backend',
    desc: 'Developing server-side logic, REST APIs, and role-based access systems using Python and PHP.',
    tags: ['Python', 'Flask', 'PHP', 'REST APIs'],
    tagStyle: 'purple',
  },
  {
    icon: '🗄️',
    name: 'Database',
    desc: 'Designing and querying relational databases to support multi-role business workflows.',
    tags: ['MySQL'],
    tagStyle: 'teal',
  },
  {
    icon: '🚀',
    name: 'Deployment & Infrastructure',
    desc: 'Deploying and hosting web applications on self-hosted infrastructure, with version control throughout.',
    tags: ['HeidiSQL', 'Synology NAS', 'Database Management'],
    tagStyle: 'neutral',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-inner">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map(({ icon, name, desc, tags, tagStyle }) => (
            <div key={name} className="skill-card">
              <div className="skill-icon">{icon}</div>
              <h3 className="skill-name">{name}</h3>
              <p className="skill-desc">{desc}</p>
              <div className="skill-tags">
                {tags.map((tag) => (
                  <span key={tag} className={`skill-tag ${tagStyle}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="legacy-banner">
          <span className="legacy-label">Legacy maintenance</span>
          <p className="legacy-desc">
            Maintaining and extending existing internal systems built with PHP, MySQL, HTML, CSS, JavaScript, and Bootstrap.
          </p>
        </div>
      </div>
    </section>
  );
}