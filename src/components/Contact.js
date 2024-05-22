import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesomeIcon component
import { faEnvelope, faPhone, faMapMarkerAlt, faHeart } from '@fortawesome/free-solid-svg-icons'; // Importing necessary icons from FontAwesome
import '../styles/contact.css'; // Importing CSS styles
import logo from '../icons/logo.png'; // Importing logo image
import home from '../icons/home.png'; // Importing home icon image
import admin from '../icons/Admin.png'; // Importing admin icon image
import settings from '../icons/settings.png'; // Importing settings icon image
import LogOut from '../icons/LogOut.png'; // Importing logout icon image

// Component for the Contact page
function Contact() {
    return (
        <div>
            {/* Navigation bar */}
            <nav className="navbar">
                <img src={logo} alt="Logo" className="logo" />
                <div className="navbar-brand">BidBay</div>
                <div className="navbar-links">
                    {/* Home link */}
                    <div className="home-icon-container">
                        <Link to="/dashboard">
                            <img src={home} alt="Home" className="home-icon" style={{ width: '20px', height: '20px', filter: 'invert(1)' }} />
                        </Link>
                        <span className="icon-text">Home</span>
                    </div>
                    {/* Contact Us link */}
                    <div className="contact-icon-container">
                        <Link to="/contact">
                            <img src={settings} alt="contact" className="contact-icon" style={{ width: '20px', height: '20px', filter: 'invert(1)' }} />
                        </Link>
                        <span className="icon-text">Contact Us</span>
                    </div>
                    {/* About Us link */}
                    <div className="about-icon-container">
                        <Link to="/about">
                            <img src={admin} alt="about us" className="about" style={{ width: '20px', height: '20px', filter: 'invert(1)' }} />
                        </Link>
                        <span className="icon-text">About Us</span>
                    </div>
                    {/* Log Out link */}
                    <div className="logout-icon-container">
                        <a href="#">
                            <img src={LogOut} alt="Log out" className="sys-icon" style={{ width: '20px', height: '20px', filter: 'invert(1)' }} />
                        </a>
                        <span className="icon-text">Log Out</span>
                    </div>
                    {/* Button to go to Bidding page */}
                    <div className="add-listing-button-container">
                        <Link to="/listing">
                            <button className="add-listing-button">Go to Bidding</button>
                        </Link>
                    </div>
                </div>
            </nav>
            
            {/* Contact information section */}
            <div className="contact-container">
                <div className="contact-info">
                    <h1>Contact Us</h1>
                    {/* Email */}
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>Email: uzairasif@bidbay.com</span>
                    </div>
                    {/* Phone */}
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>Phone: +923315138327</span>
                    </div>
                    {/* Address */}
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span>Address: 123 Main St, Islamabad, Pakistan</span>
                    </div>
                </div>
                {/* Contact form */}
                <div className="contact-form">
                    <h2>Send us a message</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Your Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 made with <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} /> by BidBay</p>
            </footer>
        </div>
    );
}

export default Contact;
