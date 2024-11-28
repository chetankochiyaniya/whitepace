import React from "react";
// Importing CSS for styling the Plans section
import "../assets/styles/Plans.css";
// Importing an image for the line under the heading
import LineImg from "../assets/img/Line.svg";

function Plans() {
    return (
        <section className="ctm-plans">
            <div className="container">
                {/* Heading section with title and line image */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 col-xl-8 text-center">
                        <div className="ctm-plans-heading-wrapper">
                            <h2 className="ctm-plans-heading mb-3">Choose Your Plan</h2>
                            <img src={LineImg} alt="Plan Icon" className="ctm-plans-svg" />
                        </div>
                        <p className="ctm-plans-sub-heading mb-0">
                            Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
                        </p>
                    </div>
                </div>

                {/* Plan options displayed in a grid layout */}
                <div className="row">
                    {/* Free Plan */}
                    <div className="col-md-6 col-xl-4 mt-4">
                        <div className="ctm-plans-item ctm-border p-3 p-lg-5">
                            <h3 className="fw-bold mb-2 ctm-plans-title">Free</h3>
                            <div className="ctm-plans-price mb-3">
                                <span className="fs-3 fw-bold">$0</span>
                            </div>
                            <p className="mb-4 ctm-plans-note fw-bold">
                                Capture ideas and find them quickly
                            </p>
                            <ul className="nav flex-column ezy-pricing1-features">
                                {/* List of features for Free Plan */}
                                <li className="mb-3">
                                    <span className="fas fa-check text-primary me-2"></span>
                                    <span>Sync unlimited devices</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fas fa-check text-primary me-2"></span>
                                    <span>10 GB monthly uploads</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fas fa-check text-primary me-2"></span>
                                    <span>200 MB max. note size</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fas fa-check text-primary me-2"></span>
                                    <span>Customize Home dashboard and access extra widgets</span>
                                </li>
                                <li>
                                    <span className="fas fa-check text-primary me-2"></span>
                                    <span>Connect primary Google Calendar account</span>
                                </li>
                                <li>
                                    <span className="fas fa-check text-primary me-2"></span>
                                    <span>Add due dates, reminders, and notifications to your tasks</span>
                                </li>
                            </ul>
                            <button className="btn btn-outline mt-4 ctm-plans-btn">Get Started</button>
                        </div>
                    </div>

                    {/* Personal Plan (Active) */}
                    <div className="col-md-6 col-xl-4 mt-4">
                        <div className="ctm-plans-item active p-3 p-lg-5">
                            <h3 className="fw-bold mb-2 ctm-plans-title">Personal</h3>
                            <div className="ctm-plans-price mb-3">
                                <span className="fs-3 fw-bold ctm-text">$11.99</span>
                            </div>
                            <p className="mb-4 ctm-plans-note fw-bold">
                                Keep home and family on track
                            </p>
                            <ul className="nav flex-column ezy-pricing1-features">
                                {/* List of features for Personal Plan */}
                                <li className="mb-3">
                                    <span className="fas fa-check text-primary me-2"></span>
                                    <span>Sync unlimited devices</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fas fa-check text-primary me-2"></span>
                                    <span>10 GB monthly uploads</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fas fa-check text-primary me-2"></span>
                                    <span>200 MB max. note size</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fas fa-check text-primary me-2"></span>
                                    <span>Customize Home dashboard and access extra widgets</span>
                                </li>
                                <li>
                                    <span className="fas fa-check text-primary me-2"></span>
                                    <span>Connect primary Google Calendar account</span>
                                </li>
                                <li>
                                    <span className="fas fa-check text-primary me-2"></span>
                                    <span>Add due dates, reminders, and notifications to your tasks</span>
                                </li>
                            </ul>
                            <button className="btn btn-primary mt-4 ctm-plans-btn">Get Started</button>
                        </div>
                    </div>

                    {/* Organization Plan */}
                    <div className="col-md-6 col-xl-4 mt-4">
                        <div className="ctm-plans-item ctm-border p-3 p-lg-5">
                            <h3 className="fw-bold mb-2 ctm-plans-title">Organization</h3>
                            <div className="ctm-plans-price mb-3">
                                <span className="fs-3 fw-bold">$49.99</span>
                            </div>
                            <p className="mb-4 ctm-plans-note">
                                Capture ideas and find them quickly
                            </p>
                            <ul className="nav flex-column ezy-pricing1-features">
                                {/* List of features for Organization Plan */}
                                <li className="mb-3">
                                    <span className="fas fa-check text-primary me-2"></span>
                                    <span>Sync unlimited devices</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fas fa-check text-primary me-2"></span>
                                    <span>10 GB monthly uploads</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fas fa-check text-primary me-2"></span>
                                    <span>200 MB max. note size</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fas fa-check text-primary me-2"></span>
                                    <span>Customize Home dashboard and access extra widgets</span>
                                </li>
                                <li>
                                    <span className="fas fa-check text-primary me-2"></span>
                                    <span>Connect primary Google Calendar account</span>
                                </li>
                                <li>
                                    <span className="fas fa-check text-primary me-2"></span>
                                    <span>Add due dates, reminders, and notifications to your tasks</span>
                                </li>
                            </ul>
                            <button className="btn btn-outline mt-4 ctm-plans-btn">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Plans;
