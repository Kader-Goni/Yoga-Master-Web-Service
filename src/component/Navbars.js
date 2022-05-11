import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
import "../Style/Home.css"
import logo from '../Images/logo.png'
import {GoSignOut} from 'react-icons/go'

const Navbars = () => {
    const [user] = useAuthState(auth)
    const SignOut = () => {
        signOut(auth)
    }

    
    return (
        <div>
            <Navbar bg="" className='bg-nav' expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <div className="nab d-flex align-items-center">
                        <img src={logo} className='logo' alt="" />
                        <p className='text-white fw-bold ps-0 fs-4'>Yoga Master</p>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/">HOME</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/about">ABOUT</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/checkout">CHECKOUT</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/blog">BLOG</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/contact">CONTACT</NavLink>
                        {   user ?
                            <button  onClick={SignOut} className='rounded-pill ms-2 btn bt-social btn-light'><GoSignOut></GoSignOut></button>
                            :
                            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/login">LOGIN</NavLink>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbars;