import React from "react";
import myImage from './assets/IMG-20241009-WA0026.jpg'
import callImage from './assets/call.png'
import hoursImage from './assets/2191941.png'
import { useHistory } from 'react-dom'


function Home() {
    // const history = useHistory();

    // const handleAboutUsClick = () => {
    //     history.push('./About')
    // };


    return (
        <>
            <div className="header-container">
                <div className="logo-section">
                    <img className="logo" src={myImage} alt="view-logo" width="40" height="45" />
                    <h1 className="company-name">McLeun<br />Refrigeration</h1>
                </div>

                <div className="contact-section">
                    <img className="call-pic" src={callImage} alt="phone icon" width="35" height="35" />
                    <p className="contact-info">Call Today<br />+263776019643</p>
                </div>

                <div className="hours-section">
                    <img className="hours-pic" src={hoursImage} alt="clock icon" width="35" height="35" />
                    <p className="opening-hours">
                        Mon-Sat: 07:00-17:00<br />
                        <span className="emergency-service">24h Emergency Service</span>
                    </p>
                </div>
            </div>
            <hr />

            <nav className="navigate">
                <a href="/home" className="nav-link">Home</a>
                <a href="/services" className="nav-link">Services</a>
                <a href="/target-market" className="nav-link">Target Market</a>
            </nav>

            <div className="hero-section">
                <div className="overlay">
                    <h2>Welcome to McLeun Refrigeration</h2>
                    <p>Your trusted partner for all Heating & Air Conditioning Service,
                        Repair and Installation.</p>
                    <button className="abt-button">About Us</button>
                </div>
            </div>
        </>
    );
}

export default Home;
