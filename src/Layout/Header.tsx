import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './Styles/SLStyles.css';
import CircleProfile from '../Components/Icons/CircleProfile';
import { NavLink } from 'react-router-dom';
import MainLogo from '../Components/Icons/MainLogo';

export default function Header() {
  return (
    <Navbar expand="sm" bg="light" className="fixed-top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <MainLogo width={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Start learning</Nav.Link>
            <NavDropdown title="Tests">
              <NavDropdown.Item href="#">A1</NavDropdown.Item>
              <NavDropdown.Item href="#">A2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link as={NavLink} to="/profile">
            <CircleProfile />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
