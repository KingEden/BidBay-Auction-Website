import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../styles/Dashboard.css'; 
import logo from '../icons/logo.png';
import home from '../icons/home.png';
import admin from '../icons/Admin.png';
import settings from '../icons/settings.png';
import LogOut from '../icons/LogOut.png';

function About() {
    return (
        <div>
             <nav className="navbar">
                <img src={logo} alt="Logo" className="logo" />
                <div className="navbar-brand">BidBay</div>
                <div className="navbar-links">
                    <div className="home-icon-container">
                        <Link to="/dashboard">
                            <img src={home} alt="Home" className="home-icon" style={{ width: '20px', height: '20px', filter: 'invert(1)' }} />
                        </Link>
                        <span className="icon-text">Home</span>
                    </div>
                    <div className="contact-icon-container">
                        <Link to="/contact"> {/* Change 'a' to 'Link' and set the 'to' attribute */}
                            <img src={settings} alt="contact" className="contact-icon" style={{ width: '20px', height: '20px', filter: 'invert(1)' }} />
                        </Link>
                        <span className="icon-text">Contact Us</span>
                    </div>
                    <div className="about-icon-container">
                        < Link to="/about"> {/* Change 'a' to 'Link' and set the 'to' attribute */}
                            <img src={admin} alt="about us" className="about" style={{ width: '20px', height: '20px', filter: 'invert(1)' }} />
                        </Link>
                        <span className="icon-text">About Us</span>
                    </div>
                    <div className="logout-icon-container">
                        <a href="#">
                            <img src={LogOut} alt="Log out" className="sys-icon" style={{ width: '20px', height: '20px', filter: 'invert(1)' }} />
                        </a>
                        <span className="icon-text">Log Out</span>
                    </div>
                    <div className="add-listing-button-container">
                        <Link to="/listing">
                            <button className="add-listing-button">Go to Bidding</button>
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="about-container">
                <div className="about-info">
                    <h1>About US</h1>
                    <p>
                        Hi there! We're BidBay, passionate web programmers based in Pakistan. We love to do web programming and cyber security. With a background in web programming and cyber security, We're always eager to help you out.
                    </p>
                    <p>
                        Feel free to reach out to us at any time via email or phone. We're excited to connect and collaborate!
                    </p>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>Email: uzairasif@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>Phone: +923315149997</span>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span>Location: Islamabad, Pakistan</span>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <p>&copy; 2024 made with <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} /> by BidBay</p>
            </footer>
        </div>
    );
}

export default About;
