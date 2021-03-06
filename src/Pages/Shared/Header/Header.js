import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import logo from '../../../images/logo.png';
import CustomLink from "../../Customlink/CustomLink";
import './Header.css';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div className="sticky-top">
      <Navbar collapseOnSelect  bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
              <img width={60} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className=" ms-auto header"
            >
              <CustomLink className="mx-2 text-decoration-none text-muted fs-6 fw-bold" to='/'>Home</CustomLink>
              <CustomLink className="mx-2 text-decoration-none text-muted fs-6 fw-bold" to='/blogs'>Blogs</CustomLink>
              <CustomLink className="mx-2 text-decoration-none text-muted fs-6 fw-bold" to='/about'>About</CustomLink>
              <CustomLink className="mx-2 text-decoration-none text-muted fs-6 fw-bold" to='/checkout'>Checkout</CustomLink>
              {user? <button className="btn btn-link fs-6 fw-bold text-decoration-none text-muted log-out-btn" onClick={logout}>Logout</button>:<CustomLink className="mx-2 text-decoration-none text-muted fs-6 fw-bold" to='/login'>login</CustomLink>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
