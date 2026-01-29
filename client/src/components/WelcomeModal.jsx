import React, { useState, useEffect } from 'react';

const WelcomeModal = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); // 300ms for exit animation
    };

    return (
        <div className={`welcome-modal-overlay ${isVisible ? 'visible' : ''}`}>
            <div className="welcome-modal">
                <button className="close-btn" onClick={handleClose}>
                    &times;
                </button>
                <div className="modal-content">
                    <div className="welcome-symbol">🚀</div>
                    <h2 className="welcome-title">Welcome!</h2>
                    <p className="welcome-text">
                        Thank you for visiting my portfolio. I am pleased to present my work and projects.
                    </p>
                    <button className="explore-btn" onClick={handleClose}>
                        Let's Explore
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeModal;
