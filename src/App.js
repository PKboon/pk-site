import './App.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

import SkillTableCell from './components/SkillTableCell';

import Logo from './assets/logoNav.png';

function App() {

  const textCenter = {textAlign: 'center'}
  const aboutDiv = {backgroundColor: '#ff7171'}
  const skillHr= {width: '40%', margin:'15px auto'}

  return (
    <>
      <Navbar expand="md">
        <Container fluid="xxl">
          <Navbar.Brand href="#home"><img src={Logo} alt="pk's logo" width="45"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#project">Project</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid="xxl" id="home">
        <div style={textCenter}>
          <h2>I'm Pk.</h2>
          <h2>I'm a Computer Science Student.</h2>
          <h5>I am in my senior year at Wentworth Institute of Technology in Boston, MA.</h5>
          <h5>I am in search of Spring 2022 Internship.</h5>
        </div>
      </Container>

      <Container fluid id="about" style={aboutDiv}>
        <Container fluid="xxl" style={textCenter}>
          <h2>Skills</h2>
          <SkillTableCell title="Programming" list="Java, PHP, HTML, CSS, JavaScript, Bootstrap, Vue.js, React.js, Git, MySQL, C++" />
          <hr style={skillHr}/>
          <SkillTableCell title="Software" list="NetBeans, Atom, PhpStorm, Postman, Photoshop, Illustrator, Lucidchart, Draw.io" />
          <hr style={skillHr}/>
          <SkillTableCell title="Language" list="English, Thai" />
        </Container>
      </Container>

      <Container fluid id="experience">
      </Container>
    </>
  );
}

export default App;
