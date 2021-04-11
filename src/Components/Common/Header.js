import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  // State Variables
  const [theme, setTheme] = useState("light");
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
              <Nav.Link>
                {" "}
                {theme === "light" ? (
                  <i
                    className="las la-sun"
                    style={{ fontSize: "16px" }}
                    onClick={() => setTheme("dark")}
                  />
                ) : (
                  <i
                    className="las la-moon"
                    style={{ fontSize: "16px" }}
                    onClick={() => setTheme("light")}
                  ></i>
                )}{" "}
              </Nav.Link>
              <LinkContainer to="/login">
                <Nav.Link>Sign In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
