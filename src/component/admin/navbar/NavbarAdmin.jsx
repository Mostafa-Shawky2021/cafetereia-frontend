import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../../assests/img/main-0١.png";
import profile from "../../../assests/img/profile.png";
import "./navbar.css";
const NavbarAdmin = () => {
    const HandleLogout = ()=> {
      window.localStorage.clear()
      window.location.href = "/login"
    }
  return (
    <Navbar bg="light" expand="lg" className="bg-white">
      <Container className="align-items-center">
        <Navbar.Brand href="#home">
          <div className="logo"></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link active" to="/home">
              Home
            </NavLink>
            <NavLink  className="nav-link" to="/products">Products</NavLink>
            {/* <Nav.Link href="/categories">categories</Nav.Link> */}
            <NavLink className="nav-link" to="/users">Users</NavLink>
            <NavLink className="nav-link" to="/orders">Manual Order</NavLink>
            <NavLink className="nav-link" to="/checks">Checks</NavLink>
          </Nav>
          <div className="admin ms-auto d-flex align-items-center justify-items-center justify-content-center">
            <img src={profile} width="50" />
            <div className="role" href="/">
              Admin
              /
          
              <a className="logout" href="#" onClick = { HandleLogout }>Logout</a>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarAdmin;
