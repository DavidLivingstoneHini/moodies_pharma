"use client";
import { Box, Text, Grid, Container, useColorModeValue, Image } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

// Wrap components with motion for animations
const MotionBox = motion(Box);

const services = [
    {
        title: "Specialty Pharmacy | Counseling",
        description: "Receive expert counseling and advice from licensed pharmacists to manage complex medication regimens and improve health outcomes.",
        image: "/services.jpg" // Replace with actual image path in public folder
    },
    {
        title: "Cosmetics | Beauty | Lifestyle & Wellness",
        description: "Explore our range of beauty and wellness services, from skincare to personalized wellness routines to help you feel your best.",
        image: "/services2.png" // Replace with actual image path in public folder
    },
    {
        title: "Massage Therapy | Weight Management",
        description: "Relax and rejuvenate with our professional massage therapy services, and take control of your health with personalized weight management programs.",
        image: "/services3.png" // Replace with actual image path in public folder
    },
    {
        title: "Reflexology | Health Screening",
        description: "Benefit from holistic reflexology treatments designed to enhance wellness, and stay proactive with regular health screenings for early detection.",
        image: "/services.jpg" // Replace with actual image path in public folder
    },
    {
        title: "Home Deliveries | Online Service",
        description: "Enjoy the convenience of having medications and health supplies delivered directly to your door, with easy online ordering and prompt service.",
        image: "/services2.png" // Replace with actual image path in public folder
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
                    px={{ base: 4, md: 4 }} // Adjust padding for mobile view
                    borderRadius="lg"
                    mx={{ base: 4, sm: 8, md: 16 }} // Adjust margins to fit mobile screens
                    mb={8}
                    mt={12}
                >
                    <Grid
                        templateColumns={{ base: "1fr", sm: "1fr", md: "repeat(3, 1fr)" }} // 1 column on mobile, 3 columns on larger screens
                        gap={6}
                        textAlign="center"
                        color="white"
                    >
                        {/* Contact Boxes */}
                        <Box
                            p={4}
                            bg="rgba(255,255,255,0.1)"
                            borderRadius="lg"
                            transition="transform 0.3s ease"
                            _hover={{ transform: "scale(1.05)" }}
                        >
                            <Text fontSize={{ base: "md", lg: "lg" }} textDecoration={"underline"} fontWeight={"bold"}>Email:</Text>
                            <Text><a href="mailto:moodieschemists@gmail.com">moodieschemists@gmail.com</a></Text>
                        </Box>
                        <Box
                            p={4}
                            bg="rgba(255,255,255,0.1)"
                            borderRadius="lg"
                            transition="transform 0.3s ease"
                            _hover={{ transform: "scale(1.05)" }}
                        >
                            <Text fontSize={{ base: "md", lg: "lg" }} textDecoration={"underline"} fontWeight={"bold"}>WhatsApp & Call Us:</Text>
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
                            <Text fontSize={{ base: "md", lg: "lg" }} textDecoration={"underline"} fontWeight={"bold"}>Address:</Text>
                            <Text fontSize={{ base: "sm", lg: "md" }}>Ashongman Estate, Atomic Hills Estate - Mensah Anteh Street, Accra</Text>
                        </Box>
                    </Grid>
                </MotionBox>
            </MotionBox>
        </AnimatePresence>
    );
}

export default ServicesPage;
