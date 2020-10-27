import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../services/AuthService';
import { AuthContext } from '../context/AuthContext';


const Navbar = props => {
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
                <Link to="/">
                    <li className="active" href="#home">Home</li>
                </Link>

                <Link to="/login">
                    <li href="#login">Login</li>
                </Link>
                <Link to="/register">
                    <li href="#register">Register</li>
                </Link>
            </>
        )

    }

    const authenticatedNavbar = () => {
        return (
            <>
                <Link to="/">
                    <li className="active" href="#home">Home</li>
                </Link>

                <Link to="/todos">
                    <li className="active" href="#contact">Todos</li>
                </Link>
                {
                    user.role === "admin" ?
                        <Link to="/admin">
                            <li className="active" href="#contact">Admin</li>
                        </Link> : null
                }
                <Link to="/"><button type="button" className="btn btn-link nav-link" onClick={onClickLogoutHandler}>Logout</button>
                </Link>
            </>
        )
    }
    return (
        <header>
            <div className="overlay">

                <ul>
                    {!isAuthenticated ? unauthenticatedNavbar() : authenticatedNavbar()}
                </ul>



                <br></br>
                <h1 className="mt-5">Simply The Best</h1>
                <h3>Reasons for Choosing US</h3>
            </div>
        </header>


    )

}


export default Navbar;