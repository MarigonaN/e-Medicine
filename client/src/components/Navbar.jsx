import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../services/AuthService';
import { AuthContext } from '../context/AuthContext';
import {Navbar, Nav} from 'react-bootstrap';
import './Navbar.css'

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
        <Navbar bg="transparent" variant="transparent" >
        <Navbar.Brand style={{fontFamily: "cursive", fontSize: "30px"}}>E-Medicine</Navbar.Brand>
        <Nav className="mr-auto">
                <Link to="/">
                <Link to="/"> <li><Nav.Link className="active" style={{color:"white", fontWeight: "bold"}}>Home</Nav.Link></li>  </Link>
                </Link>
                </Nav>
                <Nav.Link>  <Link to="/login">
                    <li href="#login" style={{color:"white", fontWeight: "bold"}}>Login</li>
                </Link>
                </Nav.Link>
                <Nav.Link>    <Link to="/register">
                <li href="#register" style={{color:"white", fontWeight: "bold"}} >Register</li>
                </Link>
              </Nav.Link>
                </Navbar>
            </>
        )

    }

    const authenticatedNavbar = () => {
        return (
            <>
         <Navbar bg="transparent" variant="transparent" className="nav">
    <Navbar.Brand style={{fontFamily: "cursive", fontSize: "40px", marginRight: "50px", }}>E-Medicine</Navbar.Brand>
    <Nav className="mr-auto">
    <Link to="/"> <li ><Nav.Link className="active" style={{color:"white", fontWeight: "bold"}}>Home</Nav.Link></li>  </Link>
    <Link to="/todos"><li><Nav.Link href="#doctors" style={{color:"white", fontWeight: "bold"}}>Doctors</Nav.Link>  </li></Link>
     
    </Nav>
                {
                    user.role === "admin" ?
                        <Link to="/admin">
                          <li className="active" href="#admin">Admin</li>
                        </Link> : null
                }
                <Link to="/"><li><button type="button" className="btn btn-link nav-link" onClick={onClickLogoutHandler} style={{color:"white", fontWeight: "bold"}}>Logout</button></li>
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