import React from 'react';
import Dashboard from './components/Dashboard'; // Importing the Dashboard component
import UserLoginSignup from './components/user_login_signup'; // Importing the UserLoginSignup component
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Importing necessary components from react-router-dom
import ContactUs from './components/Contact'; // Importing the ContactUs component
import Listing from './components/Listing'; // Importing the Listing component
import About from './components/About'; // Importing the About component

// Component for displaying a 404 - Not Found message
function NotFound() {
  return <h1>404 - Not Found</h1>;
}

// Main App component
function App() {
  return (
    <Router> {/* Router component to enable routing */}
      <Routes> {/* Routes component to define different routes */}
        
        <Route path='/' element={<Dashboard />} /> {/* Route for the home page */}
        
        <Route path='/login' element={<UserLoginSignup />} /> {/* Route for the login page */}
        
        <Route path='/dashboard' element={<Dashboard />} /> {/* Route for the dashboard page */}
        
        <Route path='/listing' element={<Listing />} /> {/* Route for the listing page */}
        
        <Route path='/contact' element={<ContactUs />} /> {/* Route for the contact page */}
        
        <Route path='/about' element={<About />} /> {/* Route for the about page */}
        
        <Route path='*' element={<NotFound />} /> {/* Route for handling invalid routes */}
      
      </Routes>
    </Router>
  );
}

export default App;
