import React from 'react';
import './HomePage.css'; // Import the CSS file for styling

const WeldoHomePage = () => {
    return (
        <div className="welding-iron-works">
            <header className="weldo-header">
                <h1>Your home's security with our premium burglar bars today!</h1>
                <p>WE BUILD THE BEST.</p>   
            </header>
            {/* Call to action section */}
            <section className="weldo-cta">
                <div className="cta-item">
                    <h2>01 GIVE US A CALL</h2>
                    {/* Add additional content as needed */}
                </div>
                <div className="cta-item">
                    <h2>02 EVALUATE THE COST</h2>
                    {/* Add additional content as needed */}
                </div>
                <div className="cta-item">
                    <h2>03 GET THE JOB DONE!</h2>
                    {/* Add additional content as needed */}
                </div>
            </section>
            {/* Additional JSX elements or closing tags */}
        </div>
    );
};

export default WeldoHomePage;
