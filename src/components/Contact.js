"use client";
import {
    Box,
    Text,
    Grid,
    Container,
    useColorModeValue,
    Image,
    FormControl,
    Input,
    Textarea,
    Button,
    Flex,
    SimpleGrid
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

function ContactPage() {
    const gradientBg = useColorModeValue(
        "linear(to-r, #FF1493, #32CD32)", // Pink-Green Gradient for light mode
        "linear(to-r, #FF1493, #32CD32)" // Pink-Green Gradient for dark mode
    );

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you would typically send the data to your backend
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        // Show success message or redirect
    };

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
                    <Text fontSize="3xl" fontWeight="bold" ml={6} textAlign="left" color="white">Contact Us</Text>
                </Box>

                {/* Additional Contact Section after header without gradient */}
                <MotionBox
                    py={5}
                    px={4}
                    borderRadius="lg"
                    mx={{ base: 4, md: 16 }}
                    mb={8}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    boxShadow="md"
                    bg={useColorModeValue("white", "gray.800")}
                    border="1px"
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                >
                    <Grid templateColumns={{ base: "1fr", sm: "repeat(3, 1fr)" }} gap={6} textAlign="center">
                        {/* Contact Boxes */}
                        <Box
                            p={4}
                            borderRadius="lg"
                            transition="transform 0.3s ease"
                            _hover={{ transform: "scale(1.05)" }}
                            bg={useColorModeValue("gray.50", "gray.700")}
                        >
                            <Text fontSize="lg" fontWeight={"bold"} color={useColorModeValue("#FF1493", "#FF1493")}>Address:</Text>
                            <Text fontSize={16}>Ashongman Estate, Atomic Hills Estate - Mensah Anteh Street, Accra</Text>
                        </Box>
                        <Box
                            p={4}
                            borderRadius="lg"
                            transition="transform 0.3s ease"
                            _hover={{ transform: "scale(1.05)" }}
                            bg={useColorModeValue("gray.50", "gray.700")}
                        >
                            <Text fontSize="lg" fontWeight={"bold"} color={useColorModeValue("#FF1493", "#FF1493")}>Email:</Text>
                            <Text><a href="mailto:moodieschemists@gmail.com">moodieschemists@gmail.com</a></Text>
                        </Box>
                        <Box
                            p={4}
                            borderRadius="lg"
                            transition="transform 0.3s ease"
                            _hover={{ transform: "scale(1.05)" }}
                            bg={useColorModeValue("gray.50", "gray.700")}
                        >
                            <Text fontSize="lg" fontWeight={"bold"} color={useColorModeValue("#FF1493", "#FF1493")}>WhatsApp & Call Us:</Text>
                            <Text>+233 (208) 36 0510</Text>
                            <Text>+233 (302) 45 7460</Text>
                            <Text>+233 (543) 19 7876</Text>
                        </Box>

                    </Grid>
                </MotionBox>

                {/* Get in Touch Section with Image and Form */}
                <Container maxW="container.xl" py={10}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        {/* Left Side - Image */}
                        <MotionBox
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            height={{ base: "250px", md: "100%" }}
                            position="relative"
                            overflow="hidden"
                            borderRadius="xl"
                            boxShadow="xl"
                        >
                            <Image
                                src="/about6.jpg"
                                alt="Pharmacy Contact"
                                objectFit="cover"
                                width="100%"
                                height="100%"
                                fallbackSrc="https://via.placeholder.com/600x800?text=Pharmacy+Image"
                            />
                        </MotionBox>

                        {/* Right Side - Contact Form */}
                        <MotionBox
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            p={8}
                            borderRadius="xl"
                            boxShadow="lg"
                            bg={useColorModeValue("white", "gray.800")}
                        >
                            <Text fontSize="2xl" fontWeight="bold" mb={6} color={useColorModeValue("#FF1493", "#FF1493")}>Get in Touch</Text>

                            <form onSubmit={handleSubmit}>
                                <FormControl mb={4} isRequired>
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        size="lg"
                                        borderRadius="md"
                                        borderColor={useColorModeValue("gray.300", "gray.600")}
                                        _focus={{
                                            borderColor: "#FF1493",
                                            boxShadow: "0 0 0 1px #FF1493"
                                        }}
                                    />
                                </FormControl>

                                <FormControl mb={4} isRequired>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        size="lg"
                                        borderRadius="md"
                                        borderColor={useColorModeValue("gray.300", "gray.600")}
                                        _focus={{
                                            borderColor: "#FF1493",
                                            boxShadow: "0 0 0 1px #FF1493"
                                        }}
                                    />
                                </FormControl>

                                <FormControl mb={4}>
                                    <Input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        size="lg"
                                        borderRadius="md"
                                        borderColor={useColorModeValue("gray.300", "gray.600")}
                                        _focus={{
                                            borderColor: "#FF1493",
                                            boxShadow: "0 0 0 1px #FF1493"
                                        }}
                                    />
                                </FormControl>

                                <FormControl mb={6}>
                                    <Textarea
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        size="lg"
                                        borderRadius="md"
                                        rows={6}
                                        resize="vertical"
                                        borderColor={useColorModeValue("gray.300", "gray.600")}
                                        _focus={{
                                            borderColor: "#FF1493",
                                            boxShadow: "0 0 0 1px #FF1493"
                                        }}
                                    />
                                </FormControl>

                                <Button
                                    type="submit"
                                    size="lg"
                                    width="full"
                                    bgGradient={gradientBg}
                                    color="white"
                                    _hover={{
                                        opacity: 0.9,
                                        transform: "translateY(-2px)",
                                        boxShadow: "lg"
                                    }}
                                    _active={{
                                        transform: "translateY(0)",
                                    }}
                                    transition="all 0.3s"
                                >
                                    Submit Message
                                </Button>
                            </form>
                        </MotionBox>
                    </SimpleGrid>
                </Container>

                {/* Contact Information Section (Bottom with gradient) */}
                <MotionBox
                    bgGradient={gradientBg}
                    py={5}
                    px={4}
                    borderRadius="lg"
                    mx={{ base: 4, md: 16 }}
                    mb={8}
                    mt={12}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
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

export default ContactPage;