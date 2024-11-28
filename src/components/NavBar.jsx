import React from "react";
import "./../assets/styles/Navbar.css"; // Importing CSS for the Navbar styling
import logo from "../assets/img/logo.png"; // Importing logo image

function NavBar() {
    return (
        <>
            {/* Main navigation container */}
            <div className="ctm-nav">
                <nav className="navbar navbar-expand-xl py-3">
                    <div className="container">
                        {/* Brand logo, linking to the homepage */}
                        <div className="navbar-brand" >
                            <img
                                src={logo}
                                alt="Whitepace Logo" // Alternative text for the logo
                                className="d-inline-block align-top me-2" // Bootstrap classes for alignment
                            />
                        </div>

                        {/* Button to toggle the navigation menu on mobile */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse" // Collapse functionality from Bootstrap
                            data-bs-target="#navbarText" // Target for collapsing the menu
                            aria-controls="navbarText" // Controls the collapse behavior
                            aria-expanded="false" // Initial state of the collapsed menu
                            aria-label="Toggle navigation" // Accessibility label
                        >
                            <span>
                                {/* The icon inside the toggle button */}
                                <span></span>
                            </span>
                        </button>

                        {/* Collapsing navigation links, will appear on larger screens */}
                        <div className="collapse navbar-collapse" id="navbarText">
                            {/* Main navigation items */}
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-4 mt-lg-0">
                                {/* Dropdown menu for Products */}
                                <li className="nav-item dropdown">
                                    <div className="nav-link active" >
                                        Products <i className="fa fa-angle-down"></i>
                                    </div>
                                </li>
                                {/* Menu item for Solutions */}
                                <li className="nav-item">
                                    <div className="nav-link" >
                                        Solutions <i className="fa fa-angle-down"></i>
                                    </div>
                                </li>
                                {/* Menu item for Resources */}
                                <li className="nav-item">
                                    <div className="nav-link" >
                                        Resources <i className="fa fa-angle-down"></i>
                                    </div>
                                </li>
                                {/* Menu item for Pricing */}
                                <li className="nav-item">
                                    <div className="nav-link" >
                                        Pricing <i className="fa fa-angle-down"></i>
                                    </div>
                                </li>
                            </ul>

                            {/* Buttons for Login and Free Trial */}
                            <ul className="navbar-nav flex-row mb-2 mb-lg-0 ms-lg-3">
                                {/* Login button */}
                                <li className="nav-item me-2">
                                    <button className="btn btn-login px-3">Login</button>
                                </li>
                                {/* Try Free button */}
                                <li className="nav-item">
                                    <button className="btn btn-try px-3">
                                        Try Whitepace Free <i className="fa fa-arrow-right"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default NavBar;
