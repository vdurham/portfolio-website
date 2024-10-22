import styled from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import Projects from './components/Projects';
import '@fortawesome/fontawesome-free/css/all.min.css';
import profile from './components/profile.jpg';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <div className="container">
        <div className="app-wrapper">
          {/* Left column (sticky) */}
          <div className="left-column">
            <header className="header">
              <img
                src={profile}
                alt="Virginia Choi-Durham"
                className="profile-photo"
              />

              <div className="title-wrapper">
                <h1 className="title">Virginia Choi-Durham</h1>
                <p className="subtitle">
                  Software Developer | Machine Learning Engineer
                </p>
              </div>

              {/* Icon links */}
              <div className="icon-links">
                <a
                  href="https://github.com/vdurham"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>

                <a
                  href="https://linkedin.com/in/virginia-choi-durham"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>

                <a
                  href="mailto:virginia.choi.durham@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-envelope"></i>
                </a>
              </div>
            </header>
          </div>

          {/* Right column (scrollable) */}
          <div className="right-column">
            {/* Home content */}
            <section className="section">
              <div className="section-title">About</div>
              <div className="section-text">
                <p>
                  I'm a generalist in the healthtech software space and nothing
                  excites me more than learning a new technology to solve a
                  problem.
                </p>

                <p>
                  I've had the privilege of building software for the top{' '}
                  <a
                    href="https://www.epic.com/"
                    style={{ fontWeight: 'bold', textDecoration: 'none' }}
                  >
                    electronic health record platform
                  </a>
                  , a{' '}
                  <a
                    href="https://www.stryker.com/us/en/endoscopy.html"
                    style={{ fontWeight: 'bold', textDecoration: 'none' }}
                  >
                    global leader in medical devices
                  </a>
                  , and a cutting-edge{' '}
                  <a
                    href="https://www.intuitive.com/en-us"
                    style={{ fontWeight: 'bold', textDecoration: 'none' }}
                  >
                    robotic surgery company
                  </a>
                  .
                </p>

                <p>
                  I most enjoy working in my sweet spot: the intersection of
                  technical expertise and strong interpersonal skills. You want
                  me on your team because I can manage stakeholders and work
                  cross-functionally to remove blockers and deliver high-quality
                  software on time and on budget.
                </p>

                <p>
                  When I'm not at my computer, I enjoy hiking, digital
                  illustration, creating automated tools to manage my finances,
                  and spending time with my Boston Terrier, Winnie.
                </p>
              </div>
            </section>

            {/* Projects content */}
            <Projects />

            {/* Footer */}
            <footer className="footer">
              <p className="footer-text">
                © {new Date().getFullYear()} Virginia Choi-Durham. All rights
                reserved.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
