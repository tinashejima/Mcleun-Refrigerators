import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleAboutClick = () => {
        navigate('/about');
    };

    return (
        <>
            <div className="hero-section">
                <div className="overlay">
                    <h2>Welcome to McLeun Refrigeration</h2>
                    <p className="sub-heading">Your trusted partner for all Refrigeration Services,
                        Repair and Installations.</p>
                    <button className="abt-button" onClick={handleAboutClick}>
                        About Us
                    </button>
                </div>
            </div>
        </>
    );
}

export default Home;