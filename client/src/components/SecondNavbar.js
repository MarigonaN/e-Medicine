import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";
import { AuthContext } from "../context/AuthContext";
import { Navbar, Nav } from "react-bootstrap";
import "../App.css";
const SecondNavbar = (props) => {
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(
    AuthContext
  );

  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  };

  const authenticatedNavbar = () => {
    return (
      <div>
        <Navbar bg="transparent" variant="transparent">
          <Link to="/">
            <img
              src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/15/4097908015_46ee0ad4-45ff-4c70-9a0e-48f1c172bf9d.png?cb=1605046547"
              style={{ width: "180px", marginRight: "50px" }}
            ></img>
          </Link>
          <Nav className="mr-auto">
            <Link to="/">
              <li>
                {" "}
                <Nav.Link
                  href="#home"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  Home
                </Nav.Link>{" "}
              </li>
            </Link>
            <Link to="/todos">
              <li className="active">
                {" "}
                <Nav.Link
                  className="active"
                  href="#doctors"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: "",
                  }}
                >
                  Doctors
                </Nav.Link>{" "}
              </li>{" "}
            </Link>
          </Nav>
          {user.role === "admin" ? (
            <Link to="/admin">
              <li
                className="active"
                href="#admin"
                style={{ color: "white", fontWeight: "bold" }}
              >
                Admin
              </li>
            </Link>
          ) : null}
          <Nav.Link>
            {" "}
            <Link to="/">
              <button
                type="button"
                className="btn btn-link nav-link"
                onClick={onClickLogoutHandler}
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Logout
              </button>
            </Link>
          </Nav.Link>
        </Navbar>
      </div>
    );
  };

  return (
    <div className="overlay1">
      <ul>
        {!isAuthenticated ? authenticatedNavbar() : authenticatedNavbar()}
      </ul>
    </div>
  );
};

export default SecondNavbar;
