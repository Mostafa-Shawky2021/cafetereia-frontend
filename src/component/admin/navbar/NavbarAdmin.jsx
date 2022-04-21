import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assests/img/main-0١.png";
import profile from "../../../assests/img/profile.png";
import "./navbar.css";
const NavbarAdmin = () => {
  return (
    <Navbar bg="light" expand="lg" className="bg-white">
      <Container className="align-items-center">
        <Navbar.Brand href="#home">
          <div className="logo"></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="active" href="/home">
              Home
            </Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            {/* <Nav.Link href="/categories">categories</Nav.Link> */}
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/orders">Manual Order</Nav.Link>
            <Nav.Link href="/checks">Checks</Nav.Link>
          </Nav>
          <div className="admin ms-auto d-flex align-items-center justify-items-center justify-content-center">
            <img src={profile} width="50" />
            <div className="role" href="/">
              Admin
              /
              <a className="logout" href="#">Logout</a>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarAdmin;
