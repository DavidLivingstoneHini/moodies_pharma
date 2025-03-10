"use client";
import { Box, Text, Grid, Container, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Wrap components with motion for animations
const MotionBox = motion(Box);

function Terms() {
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
                <Text fontSize="3xl" fontWeight="bold" ml={6} textAlign="left" color="white">Terms & Conditions</Text>
            </MotionBox>

            {/* Terms and Conditions Content Section */}
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
                    <Text fontSize={"25px"} fontWeight={700} color={"green"}>Welcome to <a href="#">moodieschemists.com</a>!</Text><br /><br />

                    These terms and conditions outline the rules and regulations for the use of Moodies Chemists Website, located at <a href="#">https://moodieschemists.com/</a>.<br /><br />

                    By accessing this website we assume you accept these terms and conditions. Do not continue to use moodieschemists.com if you do not agree to take all of the terms and conditions stated on this page.<br /><br />

                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing to the laws of Ghana. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to the same.<br /><br />

                    <strong>Cookies</strong><br />
                    We employ the use of cookies. By accessing moodieschemists.com, you agreed to use cookies in agreement with the Moodies Chemists Privacy Policy.<br /><br />

                    Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.<br /><br />

                    <strong>License</strong><br />
                    Unless otherwise stated, Moodies Chemists and/or its licensors own the intellectual property rights for all material on moodieschemists.com. All intellectual property rights are reserved. You may access this from moodieschemists.com for your own personal use subjected to restrictions set in these terms and conditions.<br /><br />

                    You must not:<br />
                    <ul>
                        <li>Republish material from moodieschemists.com</li>
                        <li>Sell, rent or sub-license material from moodieschemists.com</li>
                        <li>Reproduce, duplicate or copy material from moodieschemists.com</li>
                        <li>Redistribute content from moodieschemists.com</li>
                    </ul>
                    This Agreement shall begin on the date hereof.<br /><br />

                    <strong>Comments</strong><br />
                    Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Moodies Chemists does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Moodies Chemists, its agents and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, Moodies Chemists shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.<br /><br />

                    Moodies Chemists reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.<br /><br />

                    <strong>Your Warranties</strong><br />
                    You warrant and represent that:<br />
                    <ul>
                        <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                        <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
                        <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy;</li>
                        <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                    </ul>
                    You hereby grant Moodies Chemists a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.<br /><br />

                    <strong>Hyperlinking to our Content</strong><br />
                    The following organizations may link to our Website without prior written approval:<br />
                    <ul>
                        <li>Government agencies;</li>
                        <li>Search engines;</li>
                        <li>News organizations;</li>
                        <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses;</li>
                        <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Website.</li>
                    </ul>
                    These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.<br /><br />

                    We may consider and approve other link requests from the following types of organizations:<br />
                    <ul>
                        <li>commonly-known consumer and/or business information sources;</li>
                        <li>dot.com community sites;</li>
                        <li>associations or other groups representing charities;</li>
                        <li>online directory distributors;</li>
                        <li>internet portals;</li>
                        <li>Pharmaceutical institutions, health institutions;</li>
                        <li>accounting, law and consulting firms; and</li>
                        <li>educational institutions and trade associations.</li>
                    </ul>
                    We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Moodies Chemists; and (d) the link is in the context of general resource information.<br /><br />

                    <strong>iFrames</strong><br />
                    Without prior approval and written permission, you may not create frames around our Web Pages that alter in any way the visual presentation or appearance of our Website.<br /><br />

                    <strong>Content Liability</strong><br />
                    We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.<br /><br />

                    <strong>Reservation of Rights</strong><br />
                    We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.<br /><br />

                    <strong>Removal of Links</strong><br />
                    If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.<br /><br />

                    We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.<br /><br />

                    <strong>Disclaimer</strong><br />
                    To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:<br />
                    <ul>
                        <li>limit or exclude our or your liability for death or personal injury;</li>
                        <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                        <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                        <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                    </ul>
                    The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.<br /><br />

                    As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
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

export default Terms;
