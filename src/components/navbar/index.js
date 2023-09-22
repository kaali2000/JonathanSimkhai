import Navbar from "react-bootstrap/Navbar";
import { Nav, Container } from "react-bootstrap";
import { Cart, Search, People } from "react-bootstrap-icons";
import logo from "../../images/logo.png";
import "./style.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="white" className="boxShadaw p-3">
      <Container>
        <Navbar.Brand href="/">
          <img alt="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">THE EDIT</Nav.Link>
            <Nav.Link href="#link">NEW ARRIVALS</Nav.Link>
            <Nav.Link href="#link">DESIGNERS</Nav.Link>
            <Nav.Link href="#link">CLOTHING</Nav.Link>
            <Nav.Link href="#link">SHOES</Nav.Link>
            <Nav.Link href="#link">BAGS</Nav.Link>
            <Nav.Link href="#link">ACCESSORIES</Nav.Link>
            <Nav.Link href="#link">JEWELRY</Nav.Link>
            <Nav.Link href="#link">BEAUTY</Nav.Link>
            <Nav.Link href="#link">HOME</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/">
          <Search className="me-2"></Search>
          <Cart className="me-2"></Cart>
          <People className="me-2"></People>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
