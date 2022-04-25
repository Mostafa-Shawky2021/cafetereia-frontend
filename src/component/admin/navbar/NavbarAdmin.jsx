import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../../assests/img/main-0١.png";
import profile from "../../../assests/img/profile.png";
import "./navbar.css";



const NavbarAdmin = () => {
  const location = useLocation();
  const path = location.pathname;

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
            <NavLink className={`nav-link ${( path === "/home") && 'active'}`} to="/home">
              Home
            </NavLink>
            <NavLink  className={`nav-link ${( path === "/products") && 'active'}`} to="/products">Products</NavLink>
            {/* <Nav.Link href="/categories">categories</Nav.Link> */}
            <NavLink className={`nav-link ${( path === "/users") && 'active'}`} to="/users">Users</NavLink>
            <NavLink className={`nav-link ${( path === "/orders") && 'active'}`} to="/orders">Manual Order</NavLink>
            <NavLink className={`nav-link ${( path === "/checks") && 'active'}`} to="/checks">Checks</NavLink>
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
