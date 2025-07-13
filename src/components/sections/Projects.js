import Link from "next/link";
import Image from "next/image";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description:
        "Desc",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      image: "/assets/imgs/page/portfolio/project-placeholder.jpg",
      liveUrl: "https://your-project-one-live-url.com",
      githubUrl: "https://github.com/yourusername/project-one",
    },
    {
      id: 2,
      title: "Project Two",
      description:
        "Desc",
      technologies: ["Next.js", "Node.js", "MongoDB"],
      image: "/assets/imgs/page/portfolio/project-placeholder.jpg",
      liveUrl: "https://your-project-two-live-url.com",
      githubUrl: "https://github.com/yourusername/project-two",
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "Desc",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      image: "/assets/imgs/page/portfolio/project-placeholder.jpg",
      liveUrl: "https://your-project-three-live-url.com",
      githubUrl: "https://github.com/yourusername/project-three",
    },
  ];

  return (
    <div className="mt-70 mb-50">
      <div className="text-center">
        <h2 className="mb-10 wow animate__animated animate__fadeInUp">
          <span className="color-white">Featured </span>
          <span className="color-linear">Projects</span>
        </h2>
        <p className="text-lg color-gray-500 mb-70 wow animate__animated animate__fadeInUp">
          Here are some of my recent projects that showcase my skills and
          passion for development
        </p>
      </div>

      <div className="row">
        {projects.map((project, i) => (
          <div
            className="col-lg-4 col-md-6 mb-30 wow animate__animated animate__fadeIn"
            data-wow-delay={`${i * 0.1}s`}
            key={project.id}
          >
            <div className="project-card">
              <div className="project-image-container">
                <div className="project-image-placeholder">
                  <span className="placeholder-text">
                    Project Image Placeholder
                  </span>
                </div>
                <div className="project-overlay">
                  <div className="project-actions">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-button live-button"
                    >
                      <i className="fi-rr-link" />
                      <span>Live</span>
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-button github-button"
                    >
                      <i className="fi-brands-github" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-50">
        <Link
          href="/portfolio"
          className="btn btn-linear hover-up wow animate__animated animate__zoomIn"
        >
          View All Projects
          <i className="fi-rr-arrow-small-right ml-5" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
