import './Projects.css';
import { useState } from "react";
import ImageSliderModal from "./ImageSliderModal";

const projects = [
  {
    num: '01',
    title: 'Spare Part Request System',
    desc: 'Built an internal request management system that streamlined spare part approval workflows. Implemented reference number generation, status tracking, admin dashboards, and CSV/PDF export to reduce manual processing.',
    tags: ['Python Flask', 'MySQL', 'Bootstrap', 'PDF & CSV Export'],
    link: 'https://github.com/nurathirah29/Spare-Part-Request-System',
    images: [
      { type: "image", src: "/screenshots/spare-dashboard.png" },
      { type: "image", src: "/screenshots/spare-request.png" },
      { type: "image", src: "/screenshots/spare-status.png" },
    ],
  },
  {
    num: '02',
    title: 'Employee Movement Tracking System',
    desc: 'Employees pre-register via QR code — their name and department auto-populate on scan. Guards log movement at entry and exit. HR can monitor full movement history.',
    tags: ['Python Flask', 'MySQL', 'QR Code', 'Bootstrap'],
    link: 'https://github.com/nurathirah29/Employee-Movement-Tracking-System',
    images: [
      { type: "video", src: "/videos/EMTS.mp4" },
    ],
  },
  {
    num: '03',
    title: 'Leave Application System',
    desc: 'Developed a multi-stage leave approval platform supporting employees, verifiers, approvers, and HR administration. Implemented role-based access, delegated submissions, holiday management, and export capabilities.',
    tags: ['Python Flask', 'MySQL', 'Bootstrap', '5-role Workflow', 'CSV Export'],
    link: 'https://github.com/nurathirah29/Leave-Application-System',
    images: [
      { type: "image", src: "/screenshots/leave-dashboard.png" },
      { type: "image", src: "/screenshots/leave-approval.png" },
      { type: "image", src: "/screenshots/leave-form.png" },
    ],
  },
  {
    num: '04',
    title: 'Sample Requisition System',
    desc: 'ERJ users request product samples via registered email. ERM reviewers update the expected delivery date, and ERJ closes the request once fulfilled — keeping both sides in sync.',
    tags: ['Python Flask', 'MySQL', 'Bootstrap', 'Email Login'],
    link: 'https://github.com/nurathirah29/Sample-Requisition-System',
    images: [
      { type: "image", src: "/screenshots/sample-form.png" },
      { type: "image", src: "/screenshots/sample-listing.png" },
    ],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const handleScreenshotsClick = (e, project) => {
    e.preventDefault();
    e.stopPropagation();
    setSelected(project);
  };

  return (
    <section id="projects" className="section-inner">
      <p className="section-label">Work</p>
      <h2 className="section-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <a key={project.num} href={project.link} className="project-item">
            <span className="project-num">{project.num}</span>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              {project.images?.length > 0 && (
                <button className="project-screenshots-btn" onClick={(e) => handleScreenshotsClick(e, project)}>
                  View →
                </button>
              )}
            </div>
            <span className="project-arrow">→</span>
          </a>
        ))}
      </div>

      {selected && (
        <ImageSliderModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}