import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Authentication from "./Authentication"; 

function Header() {
    const navigate = useNavigate();
    let loggedIn = Authentication.isUserLoggedIn();

    const logout = () => {
        Authentication.logout();
        navigate("/Login");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">
                My App
            </a>
            {loggedIn && (
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Home1/world">
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/List1">
                                ABOUT
                            </Link>
                        </li>
                    </ul>
                    <form className="Logout">
                        <button onClick={logout} className="btn btn-primary">
                            Logout
                        </button>
                    </form>
                </div>
            )}
        </nav>
    );
}

export default Header;
