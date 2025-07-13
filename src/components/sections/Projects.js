import Link from "next/link";
import Image from "next/image";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description:
        "A brief description of your amazing project. This could be a web application, mobile app, or any other digital solution that showcases your expertise.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      image: "/assets/imgs/page/portfolio/project-placeholder.jpg",
    },
    {
      id: 2,
      title: "Project Two",
      description:
        "Another fantastic project showcasing your skills and creativity. Describe the problem it solves and the impact it has made in your portfolio.",
      technologies: ["Next.js", "Node.js", "MongoDB"],
      image: "/assets/imgs/page/portfolio/project-placeholder.jpg",
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "Your third remarkable project demonstrating your versatility and technical expertise in different domains and technologies.",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      image: "/assets/imgs/page/portfolio/project-placeholder.jpg",
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
            <div className="card-project hover-up">
              <div className="card-image mb-20">
                <div className="project-image-placeholder">
                  <span className="placeholder-text">
                    Project Image Placeholder
                  </span>
                </div>
              </div>
              <div className="card-info">
                <h4 className="color-white mb-15">{project.title}</h4>
                <p className="color-gray-500 mb-20 text-sm line-height-26">
                  {project.description}
                </p>
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
