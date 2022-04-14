import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../../assests/img/logo.png';
import profile from '../../../assests/img/profile.png';
import './navbar.css';
 const NavbarAdmin = ()=>{
    
    
    return (
        <Navbar bg="light" expand="lg" className="bg-white">
        <Container className="align-items-center">
          <Navbar.Brand href="#home"><img src={logo} width="130px"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="active" href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
              <Nav.Link href="#home">Users</Nav.Link>
              <Nav.Link href="#link">Manual Order</Nav.Link>
              <Nav.Link href="#home">Checks</Nav.Link>
          
            </Nav>
            <div className='admin ms-auto d-flex align-items-center justify-items-center justify-content-center'>
                <img src={profile} width="50"/>
                <a className="role" href="#">Admin</a>
                <i className="fa fa-chevron-down"></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    );
}
    export default NavbarAdmin