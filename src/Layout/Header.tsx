import logo from '../assets/logo.svg';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './Styles/SLStyles.css';
import CircleProfile from '../Components/Icons/CircleProfile';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar expand="lg" bg="light" className="fixed-top my-navbar">
      <Container className="text-center">
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} alt="Logo" width={50} height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#">Start learning</Nav.Link>
            <NavDropdown title="Tests">
              <NavDropdown.Item href="#">A1</NavDropdown.Item>
              <NavDropdown.Item href="#">A2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link as={NavLink} to="/profile">
          <CircleProfile />
        </Nav.Link>
      </Container>
    </Navbar>
  );
}
