import React from "react";
import { useNavigate } from "react-router-dom";


function About() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <>

            <div className="about-container">
                <h1>About McLeun Refrigeration</h1>
                <p>
                    McLeun Refrigeration is a professional refrigeration services company
                    offering installation, maintenance and repair solutions for commercial
                    and industrial clients. Our team of experienced technicians provides
                    efficient and cost-effective solutions to ensure optimal refrigeration
                    system performance.
                </p>
                <p>
                    We aim to become the go-to refrigeration partner for businesses in
                    the region, building long-term relationships through exceptional
                    service, expertise, and customer satisfaction.
                </p>
                <button className="back-button" onClick={handleGoBack}>
                    Back to Home
                </button>
            </div>
        </>
    );
}

export default About;