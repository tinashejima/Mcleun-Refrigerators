import React from 'react';
import { useNavigate } from "react-router-dom";
import servicesImage from "../assets/NTC_CommRefrigLuekens_0063.jpg";


const Services = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };
    const servicesList = [
        "Refrigeration system installation",
        "Regular maintenance and inspections",
        "Repair and troubleshooting",
        "Energy efficiency upgrades and retrofits",
        "24/7 emergency service",
        "Refrigerant management and compliance",
        "Temperature monitoring and control solutions",
        "Customized preventative maintenance program"
    ];

    return (
        <div className="services-container">
            <div className="services-content">
                <div className="services-image">
                    <img src={servicesImage} alt="Our Services" />
                </div>
                <div className="services-text">
                    <h1>Our Services</h1>
                    <ul className="services-list">
                        {servicesList.map((service, index) => (
                            <li key={index} className="service-item">
                                • {service}
                            </li>
                        ))}
                    </ul>
                    <button className="back-button" onClick={handleGoBack}>
                        Back to Home
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Services;