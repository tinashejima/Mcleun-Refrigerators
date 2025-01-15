import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


function Contact() {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Information</h1>

            <div className="contact-content">
                {/* Emergency Call-to-Action */}
                <div className="emergency-contact">
                    <p className="emergency-text">
                        Call us now for <span className="highlight">Emergency Service</span>:
                    </p>
                    <p className="phone-numbers">
                        <FaPhone className="icon" /> +263 789 654 527 / +263 787 799 867
                    </p>
                </div>


                <div className="contact-details">
                    <div className="contact-item">
                        <FaPhone className="icon" />
                        <p>Phone: +263 789 654 527</p>
                    </div>
                    <div className="contact-item">
                        <FaEnvelope className="icon" />
                        <p>Email: mcleunrefrigeration23@gmail.com</p>
                    </div>
                    <div className="contact-item">
                        <FaMapMarkerAlt className="icon" />
                        <p>Address: P.O.Box 94 Hwange, Zimbabwe</p>
                    </div>
                </div>
                <button className="back-button" onClick={handleGoBack}>
                    Back to Home
                </button>
            </div>
        </div>
    );
}

export default Contact;