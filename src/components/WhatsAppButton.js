"use client";
import React, { useState } from "react";

const WhatsAppButton = () => {
    const phoneNumber = "+233208360510"; // Replace with actual phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    const [isHovered, setIsHovered] = useState(false);

    // Styles for the button and icon
    const buttonStyles = {
        position: "fixed",
        bottom: "70px", // Adjusted to move the button up more
        right: "20px", // Positioning it from the right
        backgroundColor: "#25d366", // WhatsApp green color
        borderRadius: "50%", // Circular shape
        width: "60px", // Size of the button
        height: "60px", // Size of the button
        boxShadow: isHovered
            ? "0px 12px 25px rgba(0, 0, 0, 0.3)" // Larger shadow on hover
            : "0px 6px 15px rgba(0, 0, 0, 0.2)", // Default shadow
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth animation
        zIndex: 1000,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: isHovered ? "scale(1.1)" : "scale(1)", // Slight zoom effect on hover
    };

    const iconStyles = {
        width: "35px", // Width of the icon
        height: "35px", // Height of the icon
        borderRadius: "50%", // Circular shape for the icon
    };

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyles}
            onMouseEnter={() => setIsHovered(true)} // On hover, enlarge the button
            onMouseLeave={() => setIsHovered(false)} // On mouse leave, return to normal size
        >
            <img
                src="/whatsapp.png" // Path to the WhatsApp icon
                alt="WhatsApp"
                style={iconStyles}
            />
        </a>
    );
};

export default WhatsAppButton;
