import React from 'react';
import '../RideTypeSelector.css'; // optional styling file
import { useNavigate } from 'react-router-dom';

const RideTypeSelector = () => {
    const navigate = useNavigate();

    const handleSelect = (type) => {
        // Pass the selected ride type to next page or store in context/state
        navigate(`/book-ride?type=${type}`);
    };

    return (
        <div className="ride-type-container">
            <h2>Select Your Ride Type</h2>
            <div className="ride-options">
                <button className="ride-button personal" onClick={() => handleSelect('personal')}>
                    🚗 Personal Ride
                </button>
                <button className="ride-button shared" onClick={() => handleSelect('shared')}>
                    🚖 Shared Ride
                </button>
                <button className="ride-button shared-women" onClick={() => handleSelect('shared-women')}>
                    👩‍🦰 Shared Ride (Women Only)
                </button>
            </div>
        </div>
    );
};

export default RideTypeSelector;
