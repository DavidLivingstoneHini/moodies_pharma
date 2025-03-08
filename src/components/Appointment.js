"use client";
import { Box, Text, Grid, Stack, Button, Icon, Container, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa"; // Added FaArrowLeft for the back button
import { useState } from "react";
import AppLogo from "./AppLogo";  // Assuming you have an AppLogo component

// Wrap components with motion for animations
const MotionBox = motion(Box);

const Appointment = () => {
    // State for active step
    const [activeStep, setActiveStep] = useState("Location");

    const gradientBg = useColorModeValue(
        "linear(to-r, #FF1493, #32CD32)", // Pink-Green Gradient for light mode
        "linear(to-r, #FF1493, #32CD32)" // Pink-Green Gradient for dark mode
    );

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    // Handle clicking on sidebar items
    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    // Sidebar item styling
    const sidebarItemStyle = {
        cursor: "pointer",
        _hover: {
            backgroundColor: "gray.200",
            borderRadius: "md",
        },
        padding: 3,
        textAlign: "left",
        color: "white",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        gap: 2,
    };

    // Card Style for content
    const cardStyle = {
        bg: "white",
        p: 5,
        borderRadius: "md",
        boxShadow: "lg",
        textAlign: "center",
    };

    // Next step button handler
    const handleNextStep = () => {
        const steps = [
            "Location",
            "Staff",
            "Service",
            "Date & Time",
            "Information",
            "Cart",
            "Confirmation",
        ];
        const currentStepIndex = steps.indexOf(activeStep);
        if (currentStepIndex < steps.length - 1) {
            setActiveStep(steps[currentStepIndex + 1]);
        }
    };

    // Previous step button handler
    const handlePreviousStep = () => {
        const steps = [
            "Location",
            "Staff",
            "Service",
            "Date & Time",
            "Information",
            "Cart",
            "Confirmation",
        ];
        const currentStepIndex = steps.indexOf(activeStep);
        if (currentStepIndex > 0) {
            setActiveStep(steps[currentStepIndex - 1]);
        }
    };

    return (
        <>
            {/* Header Section */}
            <MotionBox
                bgGradient={gradientBg}
                py={16}
                px={4}
                mb={6}
                mt={16}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <Text fontSize="3xl" fontWeight="bold" ml={6} textAlign="left" color="white">Appointment Booking</Text>
            </MotionBox>

            <Container maxW="container.xl" py={8} display="flex" justifyContent="center">
                <Grid
                    templateColumns={{ base: "1fr", md: "250px 1fr" }}
                    gap={6}
                    borderWidth={{ base: "0", md: "1px" }}
                    borderColor="gray.200"
                    width="full"
                    maxWidth="1200px"
                    height="80vh"
                    borderRadius="md"
                    boxShadow="xl"
                    bg="white"
                >
                    {/* Sidebar - Left */}
                    <Box
                        bg="black"
                        color="white"
                        display={{ base: "none", md: "block" }}
                        p={5}
                        borderRight={{ base: "none", md: "1px" }}
                        borderColor="gray.200"
                        height="full"
                        borderTopLeftRadius="md"
                        borderBottomLeftRadius="md"
                    >
                        {/* Logo */}
                        <Box mb={6} display="flex" alignItems="center" gap={2}>
                            <AppLogo />
                        </Box>
                        <Stack spacing={4}>
                            <Box onClick={() => handleStepChange("Location")} sx={sidebarItemStyle}>
                                <Icon as={FaMapMarkerAlt} /> <Text>Location</Text>
                            </Box>
                            <Box onClick={() => handleStepChange("Staff")} sx={sidebarItemStyle}>
                                <Icon as={FaPhone} /> <Text>Staff</Text>
                            </Box>
                            <Box onClick={() => handleStepChange("Service")} sx={sidebarItemStyle}>
                                <Icon as={FaEnvelope} /> <Text>Service</Text>
                            </Box>
                            <Box onClick={() => handleStepChange("Date & Time")} sx={sidebarItemStyle}>
                                <Icon as={FaPlus} /> <Text>Date & Time</Text>
                            </Box>
                            <Box onClick={() => handleStepChange("Information")} sx={sidebarItemStyle}>
                                <Icon as={FaMinus} /> <Text>Information</Text>
                            </Box>
                            <Box onClick={() => handleStepChange("Cart")} sx={sidebarItemStyle}>
                                <Icon as={FaPlus} /> <Text>Cart</Text>
                            </Box>
                            <Box onClick={() => handleStepChange("Confirmation")} sx={sidebarItemStyle}>
                                <Icon as={FaMapMarkerAlt} /> <Text>Confirmation</Text>
                            </Box>
                        </Stack>

                        <hr />
                        {/* Have any questions? Section */}
                        <Box mt={5}>
                            <Text fontSize="lg" fontWeight="bold" textAlign="center">Have any questions?</Text>
                            <Text fontSize="md" textAlign="center" mt={2}>Call us: +1 234 567 890</Text>
                        </Box>
                    </Box>

                    {/* Main Content - Right */}
                    <Box display="flex" flexDirection="column" justifyContent="space-between" p={5} width="full">
                        {/* Content Sections */}
                        <Box>
                            {/* Location Section */}
                            {
                                activeStep === "Location" && (
                                    <MotionBox
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        sx={cardStyle}
                                    >
                                        <Text fontSize="2xl" fontWeight="bold" mb={6}>Choose Your Location</Text>
                                        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
                                            {/* Location Card 1 */}
                                            <Box
                                                p={6}
                                                borderWidth="1px"
                                                borderRadius="lg"
                                                textAlign="center"
                                                cursor="pointer"
                                                _hover={{
                                                    transform: "scale(1.05)",
                                                    boxShadow: "lg",
                                                    borderColor: "teal.500",
                                                }}
                                                transition="all 0.3s ease"
                                                onClick={() => console.log("Location 1 selected")} // Replace with your logic
                                            >
                                                <Icon as={FaMapMarkerAlt} boxSize={8} color="teal.500" mb={4} />
                                                <Text fontSize="xl" fontWeight="bold" mb={2}>Accra Central</Text>
                                                <Text fontSize="md" color="gray.600">123 Main Street, Accra</Text>
                                            </Box>

                                            {/* Location Card 2 */}
                                            <Box
                                                p={6}
                                                borderWidth="1px"
                                                borderRadius="lg"
                                                textAlign="center"
                                                cursor="pointer"
                                                _hover={{
                                                    transform: "scale(1.05)",
                                                    boxShadow: "lg",
                                                    borderColor: "teal.500",
                                                }}
                                                transition="all 0.3s ease"
                                                onClick={() => console.log("Location 2 selected")} // Replace with your logic
                                            >
                                                <Icon as={FaMapMarkerAlt} boxSize={8} color="teal.500" mb={4} />
                                                <Text fontSize="xl" fontWeight="bold" mb={2}>East Legon</Text>
                                                <Text fontSize="md" color="gray.600">456 East Legon Avenue, Accra</Text>
                                            </Box>

                                            {/* Location Card 3 */}
                                            <Box
                                                p={6}
                                                borderWidth="1px"
                                                borderRadius="lg"
                                                textAlign="center"
                                                cursor="pointer"
                                                _hover={{
                                                    transform: "scale(1.05)",
                                                    boxShadow: "lg",
                                                    borderColor: "teal.500",
                                                }}
                                                transition="all 0.3s ease"
                                                onClick={() => console.log("Location 3 selected")} // Replace with your logic
                                            >
                                                <Icon as={FaMapMarkerAlt} boxSize={8} color="teal.500" mb={4} />
                                                <Text fontSize="xl" fontWeight="bold" mb={2}>Osu</Text>
                                                <Text fontSize="md" color="gray.600">789 Osu Road, Accra</Text>
                                            </Box>

                                            {/* Add more location cards as needed */}
                                        </Grid>
                                    </MotionBox>
                                )
                            }

                            {/* Staff Section */}
                            {activeStep === "Staff" && (
                                <MotionBox
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    sx={cardStyle}
                                >
                                    <Text fontSize="2xl" fontWeight="bold">Staff</Text>
                                    <Text mt={4}>Select the staff member you'd like to book the appointment with.</Text>
                                </MotionBox>
                            )}

                            {/* Service Section */}
                            {activeStep === "Service" && (
                                <MotionBox
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    sx={cardStyle}
                                >
                                    <Text fontSize="2xl" fontWeight="bold">Service</Text>
                                    <Text mt={4}>Choose the service you'd like to book for.</Text>
                                </MotionBox>
                            )}

                            {/* Date & Time Section */}
                            {activeStep === "Date & Time" && (
                                <MotionBox
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    sx={cardStyle}
                                >
                                    <Text fontSize="2xl" fontWeight="bold">Date & Time</Text>
                                    <Text mt={4}>Select the date and time for your appointment.</Text>
                                </MotionBox>
                            )}

                            {/* Information Section */}
                            {activeStep === "Information" && (
                                <MotionBox
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    sx={cardStyle}
                                >
                                    <Text fontSize="2xl" fontWeight="bold">Information</Text>
                                    <Text mt={4}>Provide your personal information for the appointment.</Text>
                                </MotionBox>
                            )}

                            {/* Cart Section */}
                            {activeStep === "Cart" && (
                                <MotionBox
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    sx={cardStyle}
                                >
                                    <Text fontSize="2xl" fontWeight="bold">Cart</Text>
                                    <Text mt={4}>Review your appointment details before proceeding.</Text>
                                </MotionBox>
                            )}

                            {/* Confirmation Section */}
                            {activeStep === "Confirmation" && (
                                <MotionBox
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    sx={cardStyle}
                                >
                                    <Text fontSize="2xl" fontWeight="bold">Confirmation</Text>
                                    <Text mt={4}>Your appointment is confirmed! Thank you for booking.</Text>
                                </MotionBox>
                            )}
                        </Box>

                        {/* Navigation Buttons */}
                        <Box display="flex" justifyContent="space-between" mt={8}>
                            <Button
                                leftIcon={<FaArrowLeft />}
                                colorScheme="gray"
                                size="lg"
                                onClick={handlePreviousStep}
                            >
                                Back
                            </Button>
                            <Button
                                colorScheme="teal"
                                size="lg"
                                onClick={handleNextStep}
                            >
                                Next Steps
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Container>

            <MotionBox
                bgGradient={gradientBg}
                py={5}
                px={4}
                borderRadius="lg"
                mx={16}
                mb={8}
                mt={12}
            >
                <Grid templateColumns={{ base: "1fr", sm: "repeat(3, 1fr)" }} gap={6} textAlign="center" color="white">
                    {/* Contact Boxes */}
                    <Box
                        p={4}
                        bg="rgba(255,255,255,0.1)"
                        borderRadius="lg"
                        transition="transform 0.3s ease"
                        _hover={{ transform: "scale(1.05)" }}
                    >
                        <Text fontSize="lg" textDecoration={"underline"} fontWeight={"bold"}>Email:</Text>
                        <Text><a href="mailto:moodieschemists@gmail.com">moodieschemists@gmail.com</a></Text>
                    </Box>
                    <Box
                        p={4}
                        bg="rgba(255,255,255,0.1)"
                        borderRadius="lg"
                        transition="transform 0.3s ease"
                        _hover={{ transform: "scale(1.05)" }}
                    >
                        <Text fontSize="lg" textDecoration={"underline"} fontWeight={"bold"}>WhatsApp & Call Us:</Text>
                        <Text>+233 (208) 36 0510</Text>
                        <Text>+233 (302) 45 7460</Text>
                        <Text>+233 (543) 19 7876</Text>
                    </Box>
                    <Box
                        p={4}
                        bg="rgba(255,255,255,0.1)"
                        borderRadius="lg"
                        transition="transform 0.3s ease"
                        _hover={{ transform: "scale(1.05)" }}
                    >
                        <Text fontSize="lg" textDecoration={"underline"} fontWeight={"bold"}>Address:</Text>
                        <Text fontSize={16}>Ashongman Estate, Atomic Hills Estate - Mensah Anteh Street, Accra</Text>
                    </Box>
                </Grid>
            </MotionBox>
        </>
    );
};

export default Appointment;