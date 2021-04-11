import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  // State Variables   
  const [theme, setTheme] = useState("light");
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Image Dock</Navbar.Brand>
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
              <Nav.Link href="/login">Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
