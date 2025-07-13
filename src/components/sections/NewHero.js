import Link from "next/link";

const Hero3 = () => {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="hero-content py-100">
                <span className="hero-greeting color-gray-500 text-lg mb-20 wow animate__animated animate__fadeInUp">
                  Hello Everyone!
                </span>

                <h1
                  className="hero-title mb-30 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".1s"
                >
                  I'm <span className="color-linear">Your Name</span>
                </h1>

                <div
                  className="hero-description mb-40 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".2s"
                >
                  <p className="text-lg color-gray-500 line-height-32">
                    A passionate{" "}
                    <span className="color-linear font-weight-600">
                      Full Stack Developer
                    </span>{" "}
                    creating amazing digital experiences with modern
                    technologies. I'm always open to new challenges and
                    opportunities.
                  </p>
                </div>

                <div
                  className="hero-social mb-50 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <Link
                    className="social-icon hover-up mr-20"
                    href="https://github.com"
                    target="_blank"
                  >
                    <i className="fi-rr-brands-github" />
                  </Link>
                  <Link
                    className="social-icon hover-up mr-20"
                    href="https://linkedin.com"
                    target="_blank"
                  >
                    <i className="fi-rr-brands-linkedin" />
                  </Link>
                  <Link
                    className="social-icon hover-up"
                    href="mailto:your.email@example.com"
                  >
                    <i className="fi-rr-envelope" />
                  </Link>
                </div>

                <div
                  className="hero-buttons wow animate__animated animate__fadeInUp"
                  data-wow-delay=".4s"
                >
                  <Link
                    href="/contact"
                    className="btn btn-linear hover-up mr-20"
                  >
                    Contact Me
                  </Link>
                  <Link href="#" className="btn btn-outline-linear hover-up">
                    My Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero3;
