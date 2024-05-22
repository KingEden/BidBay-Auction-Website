import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faHandPointRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../styles/Dashboard.css'; 
import logo from '../icons/logo.png'; 
import home from '../icons/home.png';
import admin from '../icons/Admin.png';
import settings from '../icons/settings.png';
import LogOut from '../icons/LogOut.png';

function Dashboard() {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <img src={logo} alt="Logo" className="logo" />
                <div className="navbar-brand">BidBay</div>
                <div className="navbar-links">
                    {/* Home Icon */}
                    <div className="home-icon-container">
                        <Link to="/dashboard">
                            <img src={home} alt="Home" className="home-icon" style={{ width: '20px', height: '20px', filter: 'invert(1)' }} />
                        </Link>
                        <span className="icon-text">Home</span>
                    </div>
                    {/* Contact Icon */}
                    <div className="contact-icon-container">
                        <Link to="/contact"> {/*  */}
                            <img src={settings} alt="contact" className="contact-icon" style={{ width: '20px', height: '20px', filter: 'invert(1)' }} />
                        </Link>
                        <span className="icon-text">Contact Us</span>
                    </div>
                    {/* About Icon */}
                    <div className="about-icon-container">
                        <Link to="/about"> {/*  */}
                            <img src={admin} alt="about us" className="about" style={{ width: '20px', height: '20px', filter: 'invert(1)' }} />
                        </Link>
                        <span className="icon-text">About Us</span>
                    </div>
                    {/* Logout Icon */}
                    <div className="logout-icon-container">
                        <a href="#">
                            <img src={LogOut} alt="Log out" className="sys-icon" style={{ width: '20px', height: '20px', filter: 'invert(1)' }} />
                        </a>
                        <span className="icon-text">Log Out</span>
                    </div>
                    {/*  */}
                    <div className="add-listing-button-container">
                        <Link to="/listing">
                            <button className="add-listing-button">Go to Bidding</button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className="card" style={{ width: '700px' }}>
                    <div className="card-header" style={{ color: 'white' }}></div>
                    <div className="card-body">
                        {/* Welcome Message */}
                        <h1 style={{ color: 'white' }}>Welcome To BidBay</h1>
                        <p style={{ color: 'white' }}>This is a bidding platform where you are able to bid on items.</p>
                        {/* Features */}
                        <ul>
                            <li style={{ color: 'white' }}><b><FontAwesomeIcon icon={faHandPointRight} /> Auction Listing Creation:</b> Sellers should have the ability to create detailed listings for their items, including title, description, images, starting bid price, and auction duration.</li>
                            <li style={{ color: 'white' }}><b><FontAwesomeIcon icon={faHandPointRight} /> Real-Time Bidding:</b> Buyers should be able to place bids in real-time during live auctions, with automatic updates on current highest bids.</li>
                            <li style={{ color: 'white' }}><b><FontAwesomeIcon icon={faHandPointRight} /> Search and Filtering:</b> Users should be able to easily search for specific items and filter results based on criteria such as category, price range, and auction status.</li>
                        </ul>
                        <p style={{ color: 'white' }}><FontAwesomeIcon icon={faGem} /> Join the excitement, engage in the auction, and let the bidding frenzy begin. Your next treasure awaits.</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 made with <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} /> by BidBay</p>
            </footer>
        </div>
    );
}

export default Dashboard;
