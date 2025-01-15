import React from 'react';
import { useNavigate } from "react-router-dom";
import supermarketImage from "../assets/premium_photo-1664305032567-2c460e29dec1.jpeg";
import restaurantImage from "../assets/Food_Service.jpg";
import industrialImage from "../assets/istockphoto-1320950393-612x612.jpg";
import coldStorageImage from "../assets/istockphoto-1320950393-612x612.jpg";
import healthcareImage from "../assets/close-up-pharmaceutical-industry_1028938-193963.avif";
import foodProcessingImage from "../assets/istockphoto-1346535903-612x612.jpg";
import hotelImage from "../assets/hwange-safari-lodge.jpg";

const TargetMarket = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

    const targetMarkets = [
        { name: "Supermarkets and grocery stores", image: supermarketImage },
        { name: "Restaurants and food service providers", image: restaurantImage },
        { name: "Industrial manufacturing facilities", image: industrialImage },
        { name: "Cold storage warehouses", image: coldStorageImage },
        { name: "Healthcare and pharmaceutical facilities", image: healthcareImage },
        { name: "Food processing and packaging plants", image: foodProcessingImage },
        { name: "Hotels and hospitality industry", image: hotelImage }
    ];

    return (
        <div className="target-market-container">
            <h1 className="target-market-title">Our Target Markets</h1>

            <div className="target-market-grid">
                {targetMarkets.map((market, index) => (
                    <div key={index} className="target-market-card">
                        <img src={market.image} alt={market.name} className="target-market-card-image" />
                        <p className="target-market-card-text">{market.name}</p>
                    </div>
                ))}

            </div>
            <button className="back-button" onClick={handleGoBack}>
                Back to Home
            </button>
        </div>
    );
}

export default TargetMarket;