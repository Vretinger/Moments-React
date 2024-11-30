import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed='top'>
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img src={logo} alt='logo' height="45" /> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-left">
                        <Nav.Link as={NavLink} className={styles.NavLink} activeClassName={styles.active} to="/" exact>
                            <i className='fas fa-home'></i> Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} className={styles.NavLink} activeClassName={styles.active} to="/signin">
                            <i className='fas fa-sign-in-alt'></i> Sign in
                        </Nav.Link>
                        <Nav.Link as={NavLink} className={styles.NavLink} activeClassName={styles.active} to="/signup">
                            <i className='fas fa-user-plus'></i> Sign up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
