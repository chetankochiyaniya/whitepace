import React from "react";
import "../assets/styles/Header.css"; // Importing the custom CSS for the header
import HeroImg from "../assets/img/Image-container.png"; // Importing the hero image

function Header() {
    return (
        // Main section for the header
        <section className="ctm-header">
            <div className="container">
                <div className="row text-center text-lg-start align-items-center">
                    {/* Left section for text content */}
                    <div className="col-12 col-lg-6 py-5">
                        {/* Main heading for the header */}
                        <h1 className="ctm-header-heading">Get More Done with Whitepace</h1>

                        {/* Sub-heading with a brief description */}
                        <p className="ctm-header-sub-heading my-4">
                            Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.
                        </p>

                        {/* Button to try Whitepace for free */}
                        <button className="btn btn-try px-3">
                            Try Whitepace Free <i className="fa fa-arrow-right"></i>
                        </button>
                    </div>

                    {/* Right section for the hero image */}
                    <div className="col-12 col-lg-6">
                        <div className="position-relative mt-4 mt-md-0">
                            {/* Hero image */}
                            <img src={HeroImg} className="ctm-header-img img-fluid" alt="Hero" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
