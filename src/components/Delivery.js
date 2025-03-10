"use client";
import { Box, Text, Grid, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Wrap components with motion for animations
const MotionBox = motion(Box);

function DeliveryInformation() {
    const gradientBg = useColorModeValue(
        "linear(to-r, #FF1493, #32CD32)", // Pink-Green Gradient for light mode
        "linear(to-r, #FF1493, #32CD32)" // Pink-Green Gradient for dark mode
    );

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
                <Text fontSize="3xl" fontWeight="bold" ml={6} textAlign="left" color="white">Shipping & Delivery Policy</Text>
            </MotionBox>

            {/* Delivery Information Content Section */}
            <MotionBox
                p={8}
                bg="white"
                borderRadius="lg"
                mx={{ base: 4, sm: 8, md: 16 }} // Adjust margins to fit mobile screens
                mb={8}
                mt={12}
                boxShadow="md"
            >
                <Text fontSize="md" color="gray.700">
                    <Text fontSize={"25px"} fontWeight={700} color={"green"}>Last updated March 5th, 2025</Text><br /><br />

                    Please carefully review our Shipping & Delivery Policy when purchasing our products. This policy will apply to any order you place with us.<br /><br />

                    <strong>WHAT ARE MY DELIVERY OPTIONS?</strong><br />
                    <strong>IN-STORE PICKUP (SAME DAY OR NEXT DAY)</strong><br />
                    Same day Click & Collect and Next day Click & Collect. In-store pickup is available for all purchases. Orders can be picked up daily, from 8am to 8pm GMT. Order online before 8pm and pick up for free in any of our branches closest to you. After placing your order, select the store location most convenient for you during checkout. Orders placed after 8pm would be due for collection the next day. We will send you a text message or give you a call when your order is ready for collection.<br /><br />

                    <strong>LOCAL DELIVERY (WITHIN TEMA AND ACCRA)</strong><br />
                    Same day delivery and Next day delivery. Buy online before 8pm and have it delivered to your doorstep. We will deliver on the same day if the product is available. Purchases made online after 8pm and products not readily available would be delivered the next day. We will send you a text message or call you when your order is dispatched.<br /><br />

                    <strong>STANDARD DELIVERY (DELIVERIES OUTSIDE TEMA AND ACCRA)</strong><br />
                    Orders outside Tema and Accra will be dispatched the next day subject to availability. Orders should arrive within 2 – 5 days. Delivery charges are based on size, weight of the package and the delivery destination.<br /><br />

                    <strong>FLAT RATE SHIPPING</strong><br />
                    Orders are generally shipped within 2hrs using our in-house delivery service. Flat rate delivery fee of 30ghc applies to orders delivered within Tema and Accra. Overweight packages may attract an additional fee.<br /><br />

                    <strong>DELIVERY CHARGES</strong><br />
                    We offer delivery at the following rates:<br />
                    <ul>
                        <li><strong>Same Day In-store Pickup:</strong> Free</li>
                        <li><strong>Next Day In-store Pickup:</strong> Free</li>
                        <li><strong>Same Day Delivery (Accra & Tema):</strong> 30ghc</li>
                        <li><strong>Next Day Delivery (Accra & Tema):</strong> 30ghc</li>
                        <li><strong>Standard Delivery (Outside Accra & Tema) 2 – 5 Business Days:</strong> Varies</li>
                    </ul>
                    <strong>DO YOU DELIVER INTERNATIONALLY?</strong><br />
                    International delivery can be arranged. Please call us at +233 (0) 50 153 7575 or send us an email via <a href="mailto:shop@top-uppharmacy.com">shop@top-uppharmacy.com</a> for more information.<br /><br />

                    <strong>ARE THERE OTHER SHIPPING RESTRICTIONS?</strong><br />
                    Orders cannot be shipped to P. O. Boxes. Not all shipping methods are available for certain times. To ensure same-day delivery, orders must be placed before 8pm GMT. Same day in-store pickup (Click & Collect) and same day delivery are subject to product availability.<br /><br />

                    <strong>WHAT HAPPENS IF MY ORDER DELAYS?</strong><br />
                    In the unlikely event of a delay in delivering your order, we will alert you as soon as possible and advise you of a revised estimated date and time of delivery.<br /><br />

                    <strong>REFUNDS, RETURNS AND EXCHANGES</strong><br />
                    All purchases made on our website are final and no refund will be issued. In the event that your order arrives damaged in any way, or you receive the wrong product, please email us as soon as possible at <a href="mailto:info@top-uppharmacy.com">info@top-uppharmacy.com</a> with your order number and a photo of the item’s condition. You can also call us at +233 (0) 50 153 7575. We address these on a case-by-case basis but will try our best to work towards a satisfactory solution.<br /><br />

                    <strong>HOW CAN YOU CONTACT US ABOUT THIS POLICY?</strong><br />
                    If you have any further questions, please don’t hesitate to contact us by:<br />
                    <ul>
                        <li>Email: <a href="mailto:info@top-uppharmacy.com">info@top-uppharmacy.com</a></li>
                        <li>Online Contact form: Click Here</li>
                    </ul>
                </Text>
            </MotionBox>

            {/* Reference to Terms Page */}
            <MotionBox
                p={8}
                bg="white"
                borderRadius="lg"
                mx={{ base: 4, sm: 8, md: 16 }}
                mb={8}
                mt={12}
                boxShadow="md"
            >
                <Text fontSize="md" color="gray.700">
                    For more information, please refer to our <a href="/terms">Terms & Conditions</a> page.
                </Text>
            </MotionBox>
        </>
    );
}

export default DeliveryInformation;
