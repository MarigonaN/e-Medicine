import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../services/AuthService';
import { AuthContext } from '../context/AuthContext';
import { Navbar, Nav } from 'react-bootstrap'
import '../App.css'
const SecondNavbar = props => {
    const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);

    const onClickLogoutHandler = () => {
        AuthService.logout().then(data => {
            if (data.success) {
                setUser(data.user);
                setIsAuthenticated(false)
            }
        });
    }



    const authenticatedNavbar = () => {
        return (
            <div >
                <Navbar bg="transparent" variant="transparent">
                <Link to="/"> <Navbar.Brand style={{fontFamily: "cursive", fontSize: "30px", color: "white"}}>E-Medicine</Navbar.Brand></Link>
                    <Nav className="mr-auto">
                        <Link to="/"> <Nav.Link style={{ color: "white", fontWeight: "bold" }}>Home</Nav.Link>  </Link>
                        <Link to="/todos"><li className="active"> <Nav.Link  className="active" href="#doctors" style={{ color: "white", fontWeight: "bold", backgroundColor: "" }}>Doctors</Nav.Link> </li>  </Link>
                    </Nav>
                    {
                        user.role === "admin" ?
                            <Link to="/admin">
                                <li className="active" href="#admin" style={{ color: "white", fontWeight: "bold" }}>Admin</li>
                            </Link> : null
                    }
                    <Nav.Link> <Link to="/"><button type="button" className="btn btn-link nav-link" onClick={onClickLogoutHandler} style={{ color: "black", fontWeight: "bold" }}>Logout</button>
                    </Link></Nav.Link>
                </Navbar>
            </div>
        )
    }


    return (

        <div className="overlay">
            <ul>
                {!isAuthenticated ?   authenticatedNavbar() : authenticatedNavbar()}
            </ul>
        </div>
     
    )

}


export default SecondNavbar;