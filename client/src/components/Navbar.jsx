import React, { Component, useContext } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../services/AuthService';
import { AuthContext } from '../context/AuthContext';
import { Container } from 'react-bootstrap';

const Navbar = props => {
    const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);

const onClickLogoutHandler = () =>{
    AuthService.logout().then(data=>{
        if(data.success){
            setUser(data.user);
            setIsAuthenticated(false)
        }
    });
}

    const unauthenticatedNavbar = () => {
        return (
            <>
                <Link to="/">
                    <li> <a class="active" href="#home">Home</a></li>
                </Link>
                <Link to="/about">
                    <li><a href="#about">About</a></li>
                </Link>
                <Link to="/contact">
                    <li><a href="#contact">Contact</a></li>
                </Link>
                <Link to="/login">
                    <li><a href="#login">Login</a></li>
                </Link>
                <Link to="/register">
                    <li><a href="#register">Register</a></li>
                </Link>
            </>
        )

    }

    const authenticatedNavbar = () => {
        return (
            <>
                <Link to="/">
                    <li> <a class="active" href="#home">Home</a></li>
                </Link>
                <Link to="/about">
                    <li><a href="#about">About</a></li>
                </Link>
                <Link to="/contact">
                    <li><a href="#contact">Contact</a></li>
                </Link>
                <Link to="/todos">
                    <li><a href="#contact">Todos</a></li>
                </Link>
                {
                    user.role === "admin" ?
                        <Link to="/admin">
                            <li><a href="#contact">Admin</a></li>
                        </Link> : null
                }
                <button type="button" className="btn btn-link nav-link" onClick={onClickLogoutHandler}>Logout</button>

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