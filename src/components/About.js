"use client";
import { Box, Flex, Text, Button, Stack, Grid, Image, Icon, Heading, Container, useColorModeValue, List, ListItem, ListIcon } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaShoppingCart,
    FaHandHoldingHeart,
    FaBalanceScale,
    FaLightbulb,
    FaHistory,
    FaCheckCircle
} from "react-icons/fa";
import { motion } from "framer-motion";

// Wrap components with motion for animations
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionGrid = motion(Grid);

// About Us Page
function AboutUsPage() {
    const gradientBg = useColorModeValue(
        "linear(to-r, #FF1493, #32CD32)", // Pink-Green Gradient for light mode
        "linear(to-r, #FF1493, #32CD32)" // Pink-Green Gradient for dark mode (can customize)
    );

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    // Core values with descriptions
    const coreValues = [
        {
            title: "Integrity",
            description: "We uphold the highest standards of honesty and ethical practice in everything we do."
        },
        {
            title: "Customer Care",
            description: "We prioritize customer satisfaction by providing attentive and empathetic service."
        },
        {
            title: "Innovation",
            description: "We embrace creativity and constantly look for new ways to improve our products and services."
        }
    ];

    // Team members
    const teamMembers = [
        { name: "John Doe", position: "Pharmacist", image: "/about3.jpg" },
        { name: "Jane Smith", position: "Customer Care", image: "/about6.jpg" },
        { name: "Mark Lee", position: "Manager", image: "/about1.jpg" }
    ];

    return (
        <>
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
                <Text fontSize="3xl" fontWeight="bold" ml={6} textAlign="left" color="white">About Us</Text>
            </MotionBox>
            <Box px={4} py={8} mt={{ base: "20px", lg: "50px" }} mx={{ base: "4", lg: "20" }}>
                {/* Overview Section */}
                <MotionFlex
                    direction={{ base: "column", md: "row" }}
                    align="center"
                    justify="space-between"
                    mb={16}
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <MotionBox flex="1" variants={fadeIn}>
                        <Text fontSize="2xl" fontWeight="bold" mb={4} fontFamily="serif">
                            Welcome to Our Pharmacy
                        </Text>
                        <Text fontSize="lg" mb={6} fontFamily="sans-serif">
                            We provide high-quality pharmaceutical products, and our mission is to ensure your health and well-being through our trusted services.
                            Experience top-notch customer care in every interaction with us.
                        </Text>
                        <Link href="/products">
                            <Button
                                bgGradient={gradientBg}
                                color="white"
                                _hover={{
                                    transform: "scale(1.05)",
                                    boxShadow: "lg"
                                }}
                                transition="all 0.3s"
                                leftIcon={<FaShoppingCart />}
                                size="lg"
                                px={8}
                            >
                                Shop Now
                            </Button>
                        </Link>
                    </MotionBox>
                    <MotionBox
                        flex="1"
                        ml={{ base: 0, md: 8 }}
                        mt={{ base: 8, md: 0 }}
                        variants={fadeIn}
                    >
                        <Image
                            src="/about.jpg"
                            alt="Pharmacy Store"
                            borderRadius="lg"
                            boxShadow="xl"
                            transition="transform 0.3s ease"
                            _hover={{ transform: "scale(1.02)" }}
                        />
                    </MotionBox>
                </MotionFlex>

                {/* Mission & Vision Section with Core Values */}
                <MotionGrid
                    templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
                    gap={8}
                    mb={16}
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <MotionBox
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        bg="white"
                        variants={fadeIn}
                        _hover={{
                            boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        <Flex align="center" mb={4}>
                            <Icon as={FaBalanceScale} color="green.500" boxSize={8} mr={4} />
                            <Text fontSize="2xl" fontWeight="bold">Our Mission</Text>
                        </Flex>
                        <Text fontSize="lg" mb={4}>
                            To provide accessible, affordable, and trusted pharmaceutical products, ensuring our customers' health and safety at all times.
                        </Text>
                    </MotionBox>

                    <MotionBox
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        bg="white"
                        variants={fadeIn}
                        _hover={{
                            boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        <Flex align="center" mb={4}>
                            <Icon as={FaLightbulb} color="pink.500" boxSize={8} mr={4} />
                            <Text fontSize="2xl" fontWeight="bold">Our Vision</Text>
                        </Flex>
                        <Text fontSize="lg" mb={4}>
                            To be the leading pharmacy store known for excellence, trust, and customer-centered care in the community.
                        </Text>
                    </MotionBox>

                    <MotionBox
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        bg="white"
                        variants={fadeIn}
                        _hover={{
                            boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        <Flex align="center" mb={4}>
                            <Icon as={FaHandHoldingHeart} color="blue.500" boxSize={8} mr={4} />
                            <Text fontSize="2xl" fontWeight="bold">Core Values</Text>
                        </Flex>
                        <List spacing={2}>
                            {coreValues.map((value, index) => (
                                <ListItem key={index} display="flex" alignItems="flex-start">
                                    <ListIcon as={FaCheckCircle} color="green.500" mt={1} />
                                    <Box>
                                        <Text fontWeight="bold" display="inline">
                                            {value.title}:
                                        </Text>{" "}
                                        <Text display="inline" fontSize="md">
                                            {value.description}
                                        </Text>
                                    </Box>
                                </ListItem>
                            ))}
                        </List>
                    </MotionBox>
                </MotionGrid>

                {/* Our Story Section */}
                <MotionFlex
                    direction={{ base: "column-reverse", md: "row" }}
                    align="center"
                    mb={16}
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <MotionBox flex="1" variants={fadeIn}>
                        <Text fontSize="2xl" fontWeight="bold" mb={4} fontFamily="serif" color="green.500">
                            Our Story
                        </Text>
                        <Text fontSize="lg" fontFamily="sans-serif">
                            Founded in 2010, our pharmacy has been dedicated to providing high-quality pharmaceutical services. Over the years, we have earned the trust of thousands of happy customers through our commitment to excellence and customer-centered care.
                        </Text>
                    </MotionBox>
                    <MotionBox
                        flex="1"
                        ml={{ base: 0, md: 8 }}
                        mb={{ base: 8, md: 0 }}
                        variants={fadeIn}
                    >
                        <Image
                            src="/about1.jpg"
                            alt="Our Story"
                            borderRadius="lg"
                            boxShadow="xl"
                            transition="transform 0.3s ease"
                            _hover={{ transform: "scale(1.02)" }}
                        />
                    </MotionBox>
                </MotionFlex>

                {/* Video Section */}
                <MotionBox
                    mb={16}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <Box
                        width="full"
                        maxWidth="1200px"
                        mx="auto"
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="xl"
                    >
                        <iframe
                            width="100%"
                            height="500px"
                            src="https://www.youtube.com/embed/VIDEO_ID"
                            title="About Us Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </Box>
                </MotionBox>

                {/* Our Team Section */}
                <MotionBox
                    mb={16}
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <Text fontSize="2xl" fontWeight="bold" mb={8} textAlign="center" fontFamily="serif" color="green.500">Meet Our Team</Text>
                    <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
                        {teamMembers.map((member, index) => (
                            <MotionBox
                                key={index}
                                textAlign="center"
                                p={6}
                                borderRadius="lg"
                                boxShadow="lg"
                                bg="white"
                                variants={fadeIn}
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                }}
                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    borderRadius="md"
                                    width="100%"
                                    height="250px"
                                    objectFit="cover"
                                    mb={4}
                                    mx="auto"
                                    boxShadow="lg"
                                />
                                <Text fontWeight="bold" fontSize="xl" mb={1}>{member.name}</Text>
                                <Text color="gray.600">{member.position}</Text>
                            </MotionBox>
                        ))}
                    </Grid>
                </MotionBox>

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
            </Box>
        </>
    );
}

export default AboutUsPage;
