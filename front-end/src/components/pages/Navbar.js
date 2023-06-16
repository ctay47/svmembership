import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "../pages/navbar.scss"

function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div className="navbar__header">
                    <Link to="/" className="navbar__link">
                        <img alt="..." src="/img/StreetVerselogo.png" className="navbar__logo-image" />
                    </Link>
                    <button
                        className="navbar__toggle"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                <div className={"navbar__menu" + (navbarOpen ? " navbar__menu--open" : "")} id="navbar-menu" >
                    <ul className="navbar__list">
                        <li className="navbar__list-item">
                            <Link to="events" className="navbar__list-item__link" target="_self">Events</Link>
                        </li>
                        <li className="navbar__list-item">
                            <Link to="/community" className="navbar__list-item__link" target="_self">Community</Link>
                        </li>
                        <li className="navbar__list-item">
                            <Link to="/membership" className="navbar__list-item__link" target="_self">Membership</Link>
                        </li>
                        <li className="navbar__list-item">
                            <Link to="faq" className="navbar__list-item__link" target="_self">Faq</Link>
                        </li>
                        <li className="navbar__list-item">
                            <Link to="/about" className="navbar__list-item__link" target="_self">About</Link>
                        </li>

                        <li className="navbar__list-item">
                            <Link to="auth/login" className="navbar__list-item__link" target="_self">Sign in</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;