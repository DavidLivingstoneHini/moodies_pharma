"use client";
import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, Grid, Container, useBreakpointValue, useColorModeValue, Button, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // For + and - icons
import { useState } from "react";

// Wrap components with motion for animations
const MotionBox = motion(Box);

function FaqPage() {
    const gradientBg = useColorModeValue(
        "linear(to-r, #FF1493, #32CD32)", // Pink-Green Gradient for light mode
        "linear(to-r, #FF1493, #32CD32)" // Pink-Green Gradient for dark mode
    );

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const [openIndex, setOpenIndex] = useState(null); // State to keep track of opened FAQ

    const handleToggle = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index)); // Toggle open/close
    };

    const faqData = [
        {
            question: "What services do you offer?",
            answer: "We offer a wide range of pharmaceutical services, including prescription medication, over-the-counter remedies, health consultations, and more."
        },
        {
            question: "How can I place an order online?",
            answer: "Simply visit our website, browse our products, add them to your cart, and proceed to checkout. We offer delivery to your location."
        },
        {
            question: "Do you offer delivery services?",
            answer: "Yes, we offer delivery services for all orders placed through our website or by phone. Delivery times may vary depending on your location."
        },
        {
            question: "Can I return or exchange products?",
            answer: "For unused, unopened products, we offer a return or exchange within 30 days of purchase. Please contact customer support for more details."
        },
        {
            question: "Are your products safe to use?",
            answer: "Yes, all our products are sourced from reputable manufacturers and are approved by health authorities. We ensure the highest quality and safety standards."
        },
        {
            question: "Do you offer any discounts or promotions?",
            answer: "Yes, we regularly offer promotions, discounts, and special offers. Keep an eye on our website or subscribe to our newsletter for the latest updates."
        }
    ];

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
                <Text fontSize="3xl" fontWeight="bold" ml={6} textAlign="left" color="white">Frequently Asked Questions</Text>
            </MotionBox>

            {/* FAQ Section */}
            <Box px={4} py={8} mt={{ base: "20px", lg: "50px" }} mx={{ base: "4", lg: "20" }}>
                <Container maxW="container.lg">
                    <Accordion allowToggle>
                        {faqData.map((faq, index) => (
                            <MotionBox key={index} mb={4} initial="hidden" animate="visible" variants={fadeIn}>
                                <AccordionItem border="none">
                                    <h2>
                                        <AccordionButton onClick={() => handleToggle(index)}>
                                            {/* Custom + / - icons */}
                                            <Box mr={4}>
                                                <Icon
                                                    as={openIndex === index ? FaMinus : FaPlus} // Conditional icon
                                                    boxSize={3}
                                                    color="green.500"
                                                />
                                            </Box>
                                            <Box flex="1" textAlign="left" fontSize="lg" fontWeight="bold">
                                                {faq.question}
                                            </Box>
                                        </AccordionButton>
                                    </h2>
                                    {/* Conditional Accordion Panel rendering */}
                                    {openIndex === index && (
                                        <AccordionPanel pb={4} fontSize="md">
                                            {faq.answer}
                                        </AccordionPanel>
                                    )}
                                </AccordionItem>
                            </MotionBox>
                        ))}
                    </Accordion>
                </Container>
            </Box>

            {/* Banner Section */}
            <Box
                position="relative"
                bgImage="url('/bgpharm.jpg')" // Replace with your image link
                bgSize="cover"
                bgPosition="center"
                py={24}
                mt={16}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                {/* Overlay Box */}
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="rgba(0, 0, 0, 0.4)"  // Semi-transparent black overlay (you can adjust opacity here)
                    zIndex={1}
                />

                {/* Content Box */}
                <Container textAlign="center" color="white" zIndex={2}>
                    <Text fontSize="4xl" fontWeight="bold" mb={4}>Have more questions?</Text>
                    <Button
                        bg="white"
                        color="black"
                        _hover={{ bg: "green.600" }}
                        size="sm"
                        py={6}
                        px={8}
                        borderRadius="full"
                    >
                        GET IN TOUCH
                    </Button>
                </Container>


            </Box>
            {/* Contact Section */}
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
        </>
    );
}

export default FaqPage;
