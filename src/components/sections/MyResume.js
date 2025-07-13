import Link from "next/link";

const MyResume = () => {
  const experienceData = [
    {
      title: "Assistant",
      company: "ITERA",
      period: "2022 - Present",
      description:
        "Desc",
    },
    {
      title: "Assistant",
      company: "ITERA",
      period: "2020 - 2022",
      description:
        "Desc",
    },
  ];

  const educationData = [
    {
      title: "Bachelor of Data Science",
      institution: "Institute of Technology Sumatera",
      period: "2023 - 2027",
      description:
        "Desc",
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "SQL",
    "MongoDB",
    "AWS",
    "Docker",
  ];

  return (
    <div className="mt-70 mb-50">
      <div className="text-center mb-50">
        <h2 className="mb-10 wow animate__animated animate__fadeInUp">
          <span className="color-white">My </span>
          <span className="color-linear">Resume</span>
        </h2>
        <div className="mt-30">
          <Link
            href="#"
            className="btn btn-linear hover-up wow animate__animated animate__zoomIn"
          >
            <i className="fi-rr-download mr-10" />
            Download CV
          </Link>
        </div>
      </div>

      <div className="row mt-70">
        {/* Experience Section */}
        <div className="col-lg-6 mb-50">
          <div className="resume-section">
            <div className="resume-header mb-40">
              <div className="resume-icon">
                <i className="fi-rr-briefcase" />
              </div>
              <h3 className="color-white">Experience</h3>
            </div>

            <div className="resume-timeline">
              {experienceData.map((item, index) => (
                <div
                  className="timeline-item mb-40 wow animate__animated animate__fadeIn"
                  data-wow-delay={`${index * 0.1}s`}
                  key={index}
                >
                  <div className="timeline-content">
                    <h4 className="color-white mb-5">{item.title}</h4>
                    <div className="company-info mb-15">
                      <span className="color-linear">{item.company}</span>
                      <span className="color-gray-500 ml-15">
                        {item.period}
                      </span>
                    </div>
                    <p className="color-gray-500 text-sm line-height-24">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="col-lg-6 mb-50">
          <div className="resume-section">
            <div className="resume-header mb-40">
              <div className="resume-icon">
                <i className="fi-rr-graduation-cap" />
              </div>
              <h3 className="color-white">Education</h3>
            </div>

            <div className="resume-timeline">
              {educationData.map((item, index) => (
                <div
                  className="timeline-item mb-40 wow animate__animated animate__fadeIn"
                  data-wow-delay={`${index * 0.1}s`}
                  key={index}
                >
                  <div className="timeline-content">
                    <h4 className="color-white mb-5">{item.title}</h4>
                    <div className="company-info mb-15">
                      <span className="color-linear">{item.institution}</span>
                      <span className="color-gray-500 ml-15">
                        {item.period}
                      </span>
                    </div>
                    <p className="color-gray-500 text-sm line-height-24">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Technologies Section */}
      <div className="mt-50">
        <div className="resume-header text-center mb-40">
          <div className="resume-icon mx-auto">
            <i className="fi-rr-settings" />
          </div>
          <h3 className="color-white">Skills & Technologies</h3>
        </div>

        <div className="skills-container text-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="skill-tag wow animate__animated animate__fadeIn"
              data-wow-delay={`${index * 0.05}s`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyResume;
