import React from 'react';


const TargetMarket = () => {
    const targetMarkets = [
        "Supermarkets and grocery stores",
        "Restaurants and food service providers",
        "Industrial manufacturing facilities",
        "Cold storage warehouses",
        "Healthcare and pharmaceutical facilities",
        "Food processing and packaging plants",
        "Hotels and hospitality industry"
    ];

    return (
        <div className="target-market-container">
            <h1 className="target-market-title">Our Target Markets</h1>
            <ul className="target-market-list">
                {targetMarkets.map((market, index) => (
                    <li key={index} className="target-market-item">
                        • {market}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TargetMarket;