import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="get-in-touch-section py-80">
            {/* Header */}
            <div className="text-center mb-70">
              <h2 className="mb-10 wow animate__animated animate__fadeInUp">
                <span className="color-white">Get In </span>
                <span className="color-linear">Touch</span>
              </h2>
              <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                Let's work together to bring your ideas to life. I'm always
                excited about new opportunities and challenges.
              </p>
            </div>

            <div className="row">
              {/* Contact Info */}
              <div className="col-lg-5 mb-50">
                <div className="contact-info">
                  <h3 className="color-white mb-30 wow animate__animated animate__fadeInUp">
                    Let's start a conversation
                  </h3>
                  <p className="color-gray-500 mb-40 wow animate__animated animate__fadeInUp">
                    I'm always interested in new opportunities and exciting
                    projects. Whether you have a question or just want to say
                    hi, feel free to reach out!
                  </p>

                  <div className="contact-item mb-30 wow animate__animated animate__fadeInUp">
                    <div className="contact-icon">
                      <i className="fi-rr-envelope" />
                    </div>
                    <div className="contact-content">
                      <h6 className="color-white mb-5">Email</h6>
                      <p className="color-gray-500">alfaizifadil100@gmail.com</p>
                    </div>
                  </div>

                  <div className="contact-item mb-30 wow animate__animated animate__fadeInUp">
                    <div className="contact-icon">
                      <i className="fi-rr-phone-call" />
                    </div>
                    <div className="contact-content">
                      <h6 className="color-white mb-5">Phone</h6>
                      <p className="color-gray-500">+62 812-7293-5644</p>
                    </div>
                  </div>

                  <div className="contact-item mb-30 wow animate__animated animate__fadeInUp">
                    <div className="contact-icon">
                      <i className="fi-rr-marker" />
                    </div>
                    <div className="contact-content">
                      <h6 className="color-white mb-5">Location</h6>
                      <p className="color-gray-500">Bandar Lampung, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-lg-7">
                <div className="contact-form">
                  <form className="wow animate__animated animate__fadeInUp">
                    <div className="row">
                      <div className="col-md-6 mb-20">
                        <label className="form-label color-gray-500">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control contact-input"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="col-md-6 mb-20">
                        <label className="form-label color-gray-500">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control contact-input"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div className="mb-20">
                      <label className="form-label color-gray-500">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control contact-input"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div className="mb-30">
                      <label className="form-label color-gray-500">
                        Message
                      </label>
                      <textarea
                        className="form-control contact-textarea"
                        rows="5"
                        placeholder="Tell me about your project or just say hello!"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-send-message hover-up"
                    >
                      <i className="fi-rr-paper-plane mr-10" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom border-gray-800 mt-70 pt-30">
              <div className="row">
                <div className="col-lg-6 text-center text-lg-start">
                  <p className="text-base color-gray-500 wow animate__animated animate__fadeIn">
                    © 2025 All rights reserved.
                  </p>
                </div>
                <div className="col-lg-6 text-center text-lg-end">
                  <div className="box-socials">
                    <div
                      className="d-inline-block mr-30 wow animate__animated animate__fadeIn"
                      data-wow-delay=".0s"
                    >
                      <Link
                        className="icon-socials icon-twitter color-gray-500"
                        href="https://twitter.com"
                      >
                        Twitter
                      </Link>
                    </div>
                    <div
                      className="d-inline-block mr-30 wow animate__animated animate__fadeIn"
                      data-wow-delay=".2s"
                    >
                      <Link
                        className="icon-socials icon-linked color-gray-500"
                        href="https://www.linkedin.com"
                      >
                        LinkedIn
                      </Link>
                    </div>
                    <div
                      className="d-inline-block wow animate__animated animate__fadeIn"
                      data-wow-delay=".4s"
                    >
                      <Link
                        className="icon-socials icon-insta color-gray-500"
                        href="https://www.instagram.com"
                      >
                        Instagram
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
