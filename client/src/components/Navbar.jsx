import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../services/AuthService';
import { AuthContext } from '../context/AuthContext';
import {Navbar, Nav} from 'react-bootstrap';

const Navbarr = props => {
    const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);

    const onClickLogoutHandler = () => {
        AuthService.logout().then(data => {
            if (data.success) {
                setUser(data.user);
                setIsAuthenticated(false)
            }
        });
    }

    const unauthenticatedNavbar = () => {
        return (
            <>
        <Navbar bg="transparent" variant="transparent">
        <Navbar.Brand href="#home">E-Medicine</Navbar.Brand>
        <Nav className="mr-auto">
                <Link to="/">
                <Nav.Link> <li className="active"  href="#home">Home</li></Nav.Link>
                </Link>
                </Nav>
                <Nav.Link>  <Link to="/login">
                    <li href="#login" >Login</li>
                </Link>
                </Nav.Link>
                <Nav.Link>    <Link to="/register">
                <li href="#register" >Register</li>
                </Link>
              </Nav.Link>
                </Navbar>
            </>
        )

    }

    const authenticatedNavbar = () => {
        return (
            <>
         <Navbar bg="transparent" variant="transparent">
    <Navbar.Brand href="#home">E-Medicine</Navbar.Brand>
    <Nav className="mr-auto">
    <Link to="/"> <Nav.Link href="#home">Home</Nav.Link>  </Link>
    <Link to="/todos"> <Nav.Link href="#features">Doctors</Nav.Link>  </Link>
     
    </Nav>
   
                {
                    user.role === "admin" ?
                        <Link to="/admin">
                          <li className="active" href="#contact">Admin</li>
                        </Link> : null
                }
                <Link to="/"><button type="button" className="btn btn-link nav-link" onClick={onClickLogoutHandler}>Logout</button>
                </Link>
                </Navbar>
            </>
        )
    }
    return (
        <header>
            <div className="overlay" >

                <ul>
                    {!isAuthenticated ? unauthenticatedNavbar() : authenticatedNavbar()}
                </ul>



                <br></br>
                <h1 className="mt-5" style={{paddingTop: "50px",paddingBottom: "50px", color: "whitesmoke", fontSize: "10vh", fontVariant: "oblique", fontWeight: "bolder"}}>Simply The Best</h1>
              
            </div>
        </header>


    )

}


export default Navbarr;