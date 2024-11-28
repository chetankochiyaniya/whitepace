import React from "react";
import "../assets/styles/Footer.css"; // Importing custom styles for the footer
import logo from "../assets/img/logo.png"; // Importing the company logo
import GlobeIcon from "../assets/img/Icon.svg"; // Importing the globe icon
import FacebookIcon from "../assets/img/Facebook.svg"; // Importing the Facebook icon
import TwitterIcon from "../assets/img/Twitter.svg"; // Importing the Twitter icon
import LinkedinIcon from "../assets/img/Linkedin.svg"; // Importing the LinkedIn icon

function Footer() {
    return (
        <footer className="ctm-footer">
            <div className="container">
                {/* Main content area */}
                <div className="row text-center text-sm-start mb-md-5">
                    {/* Column for company logo and description */}
                    <div className="col-lg-3">
                        <h2 className="fw-bold">
                            {/* Whitepace logo */}
                            <img
                                src={logo}
                                alt="Whitepace Logo"
                                className="d-inline-block align-top me-2"
                            />
                        </h2>
                        <p className="ctm-footer-text mt-4 pe-lg-4">
                            whitepace was created for the new ways we live and work. We make a better workspace around the world
                        </p>
                    </div>

                    {/* Column for Product links */}
                    <div className="col-sm-6 col-lg-2 mt-4 mt-lg-0">
                        <h5>Product</h5>
                        <ul className="nav flex-column ctm-footer-quick-links">
                            <li><a href="#!"> Overview</a></li>
                            <li><a href="#!"> Pricing</a></li>
                            <li><a href="#!"> Customer stories</a></li>
                        </ul>
                    </div>

                    {/* Column for Resources links */}
                    <div className="col-sm-6 col-lg-2 mt-4 mt-lg-0">
                        <h5>Resources</h5>
                        <ul className="nav flex-column ctm-footer-quick-links">
                            <li><a href="#!"> Blog</a></li>
                            <li><a href="#!"> Guides & tutorials</a></li>
                            <li><a href="#!"> Help center</a></li>
                        </ul>
                    </div>

                    {/* Column for Company links */}
                    <div className="col-sm-6 col-lg-2 mt-4 mt-lg-0">
                        <h5>Company</h5>
                        <ul className="nav flex-column ctm-footer-quick-links">
                            <li><a href="#!"> About us</a></li>
                            <li><a href="#!"> Careers</a></li>
                            <li><a href="#!"> Media kit</a></li>
                        </ul>
                    </div>

                    {/* Column for Try It Today section */}
                    <div className="col-sm-6 col-lg-3 mt-4 mt-lg-0">
                        <h5>Try It Today</h5>
                        <ul className="nav flex-column ctm-footer-quick-links">
                            <li>Get started for free. Add your whole team as your needs grow.</li>
                            <li className="nav-item">
                                {/* Button to try Whitepace for free */}
                                <button className="btn btn-try px-3">
                                    Try Whitepace Free <i className="fa fa-arrow-right"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                {/* Bottom section for footer links and social media icons */}
                <div className="row d-flex justify-content-between align-items-center text-center text-lg-start">
                    {/* Left section for footer links */}
                    <div className="col-md-9">
                        <ul className="ctm-footer-nav nav">
                            <li className="nav-item">
                                {/* Language selection with globe icon */}
                                <a className="nav-link" href="#!">
                                    <img src={GlobeIcon} height={18} />  English <i className="fa fa-angle-down"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">Terms & Privacy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">Security</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">Status</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">&copy;2021 Whitepace LLC.</a>
                            </li>
                        </ul>
                    </div>

                    {/* Right section for social media icons */}
                    <div className="col-md-3">
                        <ul className="ctm-footer-nav nav justify-content-center justify-content-md-end mt-1">
                            <li className="nav-item">
                                {/* Facebook icon */}
                                <a className="nav-link" href="#!">
                                    <img src={FacebookIcon} height={18} />
                                </a>
                            </li>
                            <li className="nav-item">
                                {/* Twitter icon */}
                                <a className="nav-link" href="#!">
                                    <img src={TwitterIcon} height={18} />
                                </a>
                            </li>
                            <li className="nav-item">
                                {/* LinkedIn icon */}
                                <a className="nav-link" href="#!">
                                    <img src={LinkedinIcon} height={18} />
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;