import styled from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AppWrapper = styled.div`
  text-align: center;
  max-width: 2000px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Header = styled.header`
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  border-bottom: 1px solid #333;
  text-align: left;
`;

const TitleWrapper = styled.div`
  text-align: left;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800; /* Extra bold */
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.7rem;
  color: #888;
  margin: 0;
`;

const IconLinks = styled.div`
  display: flex;
  gap: 10px;

  a {
    font-size: 2rem;
    color: #fff; /* White color */
  }

  a:hover {
    color: #ddd; /* Light on hover */
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Header>
          <TitleWrapper>
            <Title>Virginia Choi-Durham</Title>
            <Subtitle>Software Developer | Machine Learning Engineer</Subtitle>
          </TitleWrapper>

          {/* Icon links and Menu button inline */}
          <div style={{ display: 'flex', alignItems: 'normal', gap: '2rem' }}>
            <IconLinks>
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
            </IconLinks>
          </div>
        </Header>
        <Home />
        <Projects />
        <Footer />
      </AppWrapper>
    </>
  );
};

export default App;
