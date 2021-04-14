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
                <Nav.Link className="pr-0">  <i class="las la-file-upload" style={{ fontSize: "16px" }} /> Upload </Nav.Link>
              </LinkContainer>
            <LinkContainer to="/home">
                <Nav.Link className="pr-0"> <i class="las la-home" style={{ fontSize: "16px" }} /> Home </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link className="pr-0 mx-1"> <i class="las la-walking" style={{ fontSize: "17px" }} /> Sign In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
