import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/AddingList.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Listing from './ListingForm';
import logo from '../icons/logo.png'; 
import home from '../icons/home.png';
import admin from '../icons/Admin.png';
import settings from '../icons/settings.png';
import LogOut from '../icons/LogOut.png';

function Dashboard() {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="navbar-brand">BidBay</div>  
        <div className="navbar-links">
          <div className="home-icon-container">
            <Link to="/dashboard"> {/* Wrap home icon with Link */}
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
        </div>
      </nav>

      
            <div className="card" >
                <div className="card-header" style={{ color: 'white' }}></div>
                <div className="card-body">
                   <Listing />
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
