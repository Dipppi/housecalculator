// src/components/HomePage.js

import React from 'react';

function HomePage() {
    const heroStyle = {
        backgroundImage: 'url("construction.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        position: 'relative',
        color: 'white',
        paddingTop: '80px', // Increased padding to accommodate the navbar height
        marginTop: '0', // Ensure no margin at the top
    };

    const contentStyle = {
        padding: '20px',
        maxWidth: '600px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '8px',
    };

    const buttonGroupStyle = {
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
    };

    const customButtonStyle = {
        padding: '10px 20px',
        border: '2px solid white',
        backgroundColor: 'transparent',
        color: 'white',
        cursor: 'pointer',
        borderRadius: '0px',
        transition: 'background-color 0.3s, color 0.3s',
    };

    const customButtonHoverStyle = {
        backgroundColor: 'white',
        color: '#2d2d2d',
    };

    const contactInfoStyle = {
        marginTop: '20px',
        color: 'white',
    };

    const contactLinkStyle = {
        color: '#ffcc00',
        textDecoration: 'none',
        transition: 'color 0.3s',
    };

    return (
        <section style={heroStyle}>
            <div style={contentStyle}>
                <h1>Construction of Private Houses</h1>
                <p>
                    All types of work - from designing and laying the foundation to finishing and commissioning.
                    Tight deadlines, reasonable prices, free shipping.
                </p>
                <div style={buttonGroupStyle}>
                    <button
                        style={customButtonStyle}
                        onMouseOver={(e) => Object.assign(e.currentTarget.style, customButtonHoverStyle)}
                        onMouseOut={(e) => Object.assign(e.currentTarget.style, customButtonStyle)}
                        onClick={() => alert('Redirecting to get a quote...')}
                    >
                        Get a quote
                    </button>
                    <button
                        style={customButtonStyle}
                        onMouseOver={(e) => Object.assign(e.currentTarget.style, customButtonHoverStyle)}
                        onMouseOut={(e) => Object.assign(e.currentTarget.style, customButtonStyle)}
                        onClick={() => alert('Showing the showcase...')}
                    >
                        Showcase
                    </button>
                </div>
            </div>
            <div style={contactInfoStyle}>
                <p>+91 1234567890</p>
                <p>
                    <a href="mailto:Const.detail@gmail.com" style={contactLinkStyle}>Const.detail@gmail.com</a>
                </p>
            </div>
        </section>
    );
}

export default HomePage;
