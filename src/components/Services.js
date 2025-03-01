"use client";
import { Box, Text, Grid, Container, useColorModeValue, Image } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

// Wrap components with motion for animations
const MotionBox = motion(Box);

const services = [
    {
        title: "Consultation Services",
        description: "Get professional health consultations from our experienced pharmacists.",
        image: "/bgpharm.jpg" // Replace with actual image path in public folder
    },
    {
        title: "Medication Management",
        description: "We help you manage your medications effectively to ensure optimal health.",
        image: "/images/medication_management.jpg" // Replace with actual image path in public folder
    },
    {
        title: "Health Screenings",
        description: "Regular health screenings to monitor your health status and prevent diseases.",
        image: "/images/health_screening.jpg" // Replace with actual image path in public folder
    },
    {
        title: "Vaccination Services",
        description: "Stay protected with our vaccination services for various diseases.",
        image: "/images/vaccination.jpg" // Replace with actual image path in public folder
    },
    {
        title: "Nutritional Counseling",
        description: "Receive personalized nutritional advice to maintain a healthy lifestyle.",
        image: "/images/nutrition_counseling.jpg" // Replace with actual image path in public folder
    },
];

function ServicesPage() {
    const gradientBg = useColorModeValue(
        "linear(to-r, #FF1493, #32CD32)", // Pink-Green Gradient for light mode
        "linear(to-r, #FF1493, #32CD32)" // Pink-Green Gradient for dark mode
    );

    return (
        <AnimatePresence>
            <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
            >
                {/* Header Section */}
                <Box
                    bgGradient={gradientBg}
                    py={16}
                    px={4}
                    mb={6}
                    mt={16}
                >
                    <Text fontSize="3xl" fontWeight="bold" ml={6} textAlign="left" color="white">Pharmacy Services</Text>
                </Box>

                {/* Services Sections */}
                <Container maxW="container.xl" px={4}>
                    {services.map((service, index) => (
                        <Grid
                            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                            alignItems="center"
                            mt={10}
                            mb={12}
                            key={index}
                            flexDirection={{ base: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
                        >
                            {index % 2 === 0 ? (
                                <>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        borderRadius="lg"
                                        objectFit="cover"
                                        boxSize={{ base: "100%", md: "400px" }}
                                        mx="auto"
                                    />
                                    <Box p={4}>
                                        <Text fontSize="2xl" fontWeight="bold" color={"green.500"}>{service.title}</Text>
                                        <Text mt={2}>{service.description}</Text>
                                    </Box>
                                </>
                            ) : (
                                <>
                                    <Box p={4}>
                                        <Text fontSize="2xl" fontWeight="bold" color={"green.500"}>{service.title}</Text>
                                        <Text mt={2}>{service.description}</Text>
                                    </Box>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        borderRadius="lg"
                                        objectFit="cover"
                                        boxSize={{ base: "100%", md: "400px" }}
                                        mx="auto"
                                    />
                                </>
                            )}
                        </Grid>
                    ))}
                </Container>

                {/* Contact Section */}
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
            </MotionBox>
        </AnimatePresence>
    );
}

export default ServicesPage;
