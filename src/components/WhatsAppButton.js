"use client";
import React, { useState } from 'react';

const WhatsAppButton = () => {
    const phoneNumber = "+233208360510"; // Replace this with the actual phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    const [hovered, setHovered] = useState(false);

    // Button styles
    const buttonStyles = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25d366',
        borderRadius: hovered ? '50px' : '50%',
        width: hovered ? '220px' : '50px', // Fixed width instead of auto
        height: '50px',
        boxShadow: hovered
            ? '0px 10px 20px rgba(0, 0, 0, 0.2)'
            : '0px 4px 10px rgba(0, 0, 0, 0.1)',
        // Separate transitions for different properties
        transition: 'width 0.3s ease, border-radius 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
        zIndex: 1000,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
    };

    // Content container to handle layout
    const contentContainerStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: hovered ? '0 20px 0 10px' : '0', // Add padding only when hovered
    };

    // Icon styles
    const iconStyles = {
        width: '30px',
        height: '30px',
        borderRadius: '50%', // Ensures the icon is circular
        flexShrink: 0, // Prevents the icon from shrinking
    };

    // Text styles
    const textStyles = {
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold',
        opacity: hovered ? 1 : 0, // Show text on hover
        transition: 'opacity 0.3s ease',
        whiteSpace: 'nowrap', // Prevent text from wrapping
        marginLeft: '10px', // Add space between icon and text
        display: hovered ? 'block' : 'none', // Hide text completely when not hovered
    };

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyles}
            onMouseEnter={() => setHovered(true)} // Set hover state to true
            onMouseLeave={() => setHovered(false)} // Set hover state to false
        >
            <div style={contentContainerStyles}>
                <img
                    src="/whatsapp.png" // Path relative to the public folder
                    alt="WhatsApp"
                    style={iconStyles}
                />
                <span style={textStyles}>Chat on WhatsApp</span>
            </div>
        </a>
    );
};

export default WhatsAppButton;