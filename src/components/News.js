"use client";
import {
    Box,
    Text,
    Grid,
    Container,
    useColorModeValue,
    Image,
    Button,
    Flex,
    SimpleGrid,
    Card,
    CardBody,
    Heading,
    Stack,
    StackDivider,
    keyframes,
    useStyleConfig
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

// Mock News Data (Replace with actual data fetching)
const newsArticles = [
    {
        title: "New Breakthrough in Diabetes Treatment",
        excerpt: "Researchers announce a promising new therapy for managing type 2 diabetes...",
        image: "url_to_diabetes_image.jpg", // Replace with actual image URL
        link: "/news/diabetes-breakthrough"
    },
    {
        title: "The Importance of Regular Health Checkups",
        excerpt: "Experts emphasize the need for routine health screenings to detect diseases early...",
        image: "url_to_checkup_image.jpg", // Replace with actual image URL
        link: "/news/health-checkups"
    },
    // Add more articles...
];

// Keyframes for fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

function NewsPage() {
    const containerBg = useColorModeValue("gray.50", "gray.900"); // Very light gray or dark gray
    const cardBg = useColorModeValue("white", "gray.800"); // White or dark gray
    const textColor = useColorModeValue("gray.700", "gray.300"); // Dark gray or light gray
    const accentColor = useColorModeValue("green.500", "green.300"); // Use green as an accent

    const animation = `${fadeIn} 0.5s ease-in-out`;

    return (
        <AnimatePresence>
            <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                bg={containerBg} // Apply background to the entire page
                minHeight="100vh" // Ensure full height
            >
                <Container maxW="container.xl" py={8}>
                    {/* Hero Section */}
                    <Box
                        bgImage="url('/images/pharmacy_banner.jpg')" // Replace with a banner image
                        bgSize="cover"
                        bgPosition="center"
                        height="400px" // Increased height
                        borderRadius="xl" // More rounded corners
                        mb={8}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        textAlign="center"
                        color="white"
                        boxShadow="md"
                    >
                        <Text fontSize="5xl" fontWeight="bold" mb={4}>
                            Health & Pharmacy News
                        </Text>
                        <Text fontSize="xl" fontWeight="medium">
                            Stay informed with the latest updates in health and pharmacy.
                        </Text>
                        <Button colorScheme="green" mt={6} size="lg">
                            Explore More
                        </Button>
                    </Box>

                    {/* News Grid */}
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                        {newsArticles.map((article, index) => (
                            <Card
                                key={index}
                                bg={cardBg}
                                boxShadow="lg" // Increased shadow
                                _hover={{ transform: "scale(1.03)", boxShadow: "xl" }} // Enhanced hover effect
                                borderRadius="xl"
                                animation={animation} // Apply fade-in animation
                            >
                                <CardBody>
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        borderRadius="xl"
                                        mb={4}
                                        height="220px" // Slightly increased height
                                        objectFit="cover"
                                    />
                                    <Stack divider={<StackDivider />} spacing="3">
                                        <Box>
                                            <Heading size="lg" color={textColor}>
                                                {article.title}
                                            </Heading>
                                            <Text mt={2} color={textColor} fontSize="sm">
                                                {article.excerpt}
                                            </Text>
                                        </Box>
                                        <Button colorScheme="green" size="md" as="a" href={article.link} variant="outline">
                                            Read More
                                        </Button>
                                    </Stack>
                                </CardBody>
                            </Card>
                        ))}
                    </SimpleGrid>

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
                </Container>
            </MotionBox>
        </AnimatePresence>
    );
}

export default NewsPage;

