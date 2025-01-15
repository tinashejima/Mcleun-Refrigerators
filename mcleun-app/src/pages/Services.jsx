import React from 'react';


const Services = () => {
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
            <h1 className="services-title">Our Services</h1>
            <ul className="services-list">
                {servicesList.map((service, index) => (
                    <li key={index} className="service-item">
                        • {service}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Services;