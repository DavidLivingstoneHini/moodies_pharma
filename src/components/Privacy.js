"use client";
import { Box, Text, Grid, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Wrap components with motion for animations
const MotionBox = motion(Box);

function Privacy() {
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
                <Text fontSize="3xl" fontWeight="bold" ml={6} textAlign="left" color="white">Privacy Policy</Text>
            </MotionBox>

            {/* Privacy Policy Content Section */}
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
                    <Text fontSize={"25px"} fontWeight={700} color={"green"}>Privacy Policy for Moodies Chemist</Text><br /><br />

                    At moodieschemists.com, accessible from <a href="https://moodieschemists.com/">https://moodieschemists.com/</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by moodieschemists.com and how we use it.<br /><br />

                    If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.<br /><br />

                    This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in moodieschemists.com. This policy is not applicable to any information collected offline or via channels other than this website.<br /><br />

                    <strong>Consent</strong><br />
                    By using our website, you hereby consent to our Privacy Policy and agree to its terms.<br /><br />

                    <strong>Information we collect</strong><br />
                    The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.<br /><br />

                    If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.<br /><br />

                    When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.<br /><br />

                    <strong>How we use your information</strong><br />
                    We use the information we collect in various ways, including to:<br />
                    <ul>
                        <li>Provide, operate, and maintain our website</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>Develop new products, services, features, and functionality</li>
                        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                        <li>Send you emails</li>
                        <li>Find and prevent fraud</li>
                    </ul>
                    <strong>Log Files</strong><br />
                    moodieschemists.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and as part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.<br /><br />

                    <strong>Cookies and Web Beacons</strong><br />
                    Like any other website, moodieschemists.com uses “cookies”. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information.<br /><br />

                    <strong>Google DoubleClick DART Cookie</strong><br />
                    Google is a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a><br /><br />

                    <strong>Advertising Partners Privacy Policies</strong><br />
                    You may consult this list to find the Privacy Policy for each of the advertising partners of moodieschemists.com.<br /><br />

                    Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on moodieschemists.com, which are sent directly to users’ browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.<br /><br />

                    Note that moodieschemists.com has no access to or control over these cookies that are used by third-party advertisers.<br /><br />

                    <strong>Third Party Privacy Policies</strong><br />
                    moodieschemists.com’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.<br /><br />

                    You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites.<br /><br />

                    <strong>CCPA Privacy Rights (Do Not Sell My Personal Information)</strong><br />
                    Under the CCPA, among other rights, California consumers have the right to:<br />
                    <ul>
                        <li>Request that a business that collects a consumer’s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
                        <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
                        <li>Request that a business that sells a consumer’s personal data, not sell the consumer’s personal data.</li>
                    </ul>
                    If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.<br /><br />

                    <strong>GDPR Data Protection Rights</strong><br />
                    We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:<br />
                    <ul>
                        <li>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                        <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
                        <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                        <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                        <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
                        <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                    </ul>
                    If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.<br /><br />

                    <strong>Children’s Information</strong><br />
                    Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.<br /><br />

                    moodieschemists.com does not knowingly collect any Personal Identifiable Information from children under the age of 15. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.<br /><br />

                    <strong>Changes to This Privacy Policy</strong><br />
                    We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.<br /><br />

                    <strong>Contact Us</strong><br />
                    If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
                </Text>
            </MotionBox>

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
        </>
    );
}

export default Privacy;
