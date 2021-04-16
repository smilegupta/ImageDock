import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Image Dock</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <LinkContainer to="/upload">
                <Nav.Link>  Upload </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/generate-image">
                <Nav.Link>  Generate </Nav.Link>
              </LinkContainer>
            <LinkContainer to="/home">
                <Nav.Link>  Home </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link className="pr-0"> Sign In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
