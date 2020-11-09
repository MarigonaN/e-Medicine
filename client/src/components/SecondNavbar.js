import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../services/AuthService';
import { AuthContext } from '../context/AuthContext';
import {Navbar, Nav} from 'react-bootstrap'

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

    const unauthenticatedNavbar = () => {
        return (
            <>
           <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">E-Medicine</Navbar.Brand>
    <Nav className="mr-auto">
    <Link to="/"> <Nav.Link href="#home">Home</Nav.Link>   </Link>
      <Nav.Link href="#doctors">Doctors</Nav.Link>
    </Nav>

  </Navbar>
         
          
            </>
        )

    }

    const authenticatedNavbar = () => {
        return (
            <>
           <Navbar bg="light" variant="light">
           <Link to="/"><Navbar.Brand href="#home">E-Medicine</Navbar.Brand>  </Link>
    <Nav className="mr-auto">
    <Link to="/"> <Nav.Link href="#home">Home</Nav.Link>   </Link>
    <Link to="/todos"> <Nav.Link href="#doctors">Doctors</Nav.Link>   </Link>
    </Nav>


              
                {
                    user.role === "admin" ?
                        <Link to="/admin">
                            <li className="active" href="#contact">Admin</li>
                        </Link> : null
                }
              <Nav.Link> <Link to="/"><button type="button" className="btn btn-link nav-link" onClick={onClickLogoutHandler}>Logout</button>
                </Link></Nav.Link> 
                </Navbar>
            </>
        )
    }
    return (
   
            <div >
              

                <ul>
                    {!isAuthenticated ? unauthenticatedNavbar() : authenticatedNavbar()}
                </ul>



          
                
              
            </div>
     


    )

}


export default SecondNavbar;