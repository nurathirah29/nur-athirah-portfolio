import './About.css';

const facts = [
  { label: 'Based in', value: 'Malaysia', accent: false },
  { label: 'Current role', value: 'Junior Programmer', accent: false },
  { label: 'Experience', value: '1+ year', accent: false },
  { label: 'Stack', value: 'Flask · MySQL · Bootstrap', accent: false },
  { label: 'Currently', value: 'Open to new roles', accent: true },
];

const stats = [
  { num: '4', label: 'Systems built' },
  { num: '1+ year', label: 'Work experience' },
];

const education = [
  {
    degree: 'Bachelor of Computer Science (Hons.)',
    period: 'Oct 2021 – Apr 2024',
  },
  {
    degree: 'Diploma in Computer Science',
    period: 'Sept 2018 – Mar 2021',
  },
];

export default function About() {
  return (
    <section id="about" className="section-inner">
      <div className="about-grid">
        <div>
          <p className="section-label">About me</p>
          <h2 className="section-title">Building real systems for real users.</h2>
          <div className="about-text">
            <p>
              I'm a junior programmer with 1+ year of working experience
              focused on building internal web systems using
              Python Flask, MySQL, and Bootstrap — deployed on self-hosted Synology NAS infrastructure.
            </p>
            <p>
              Working on systems with real business logic: multi-role workflows,
              data exports, and tools that teams actually depend on day to day. I'm currently
              looking for new roles where I can keep growing as a developer.
            </p>
          </div>

          <div className="education">
            <p className="education-label">Education</p>
            {education.map(({ degree, period }) => (
              <div key={degree} className="education-item">
                <div className="education-degree">{degree}</div>
                <div className="education-period">{period}</div>
              </div>
            ))}
          </div>

          <div className="stat-row">
            {stats.map(({ num, label }) => (
              <div key={label} className="stat">
                <div className="stat-num">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-card">
          {facts.map(({ label, value, accent }) => (
            <div key={label} className="about-card-row">
              <span className={`av-dot${accent ? ' purple' : ''}`} />
              <span className="av-label">{label}</span>
              <span className="av-val">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}