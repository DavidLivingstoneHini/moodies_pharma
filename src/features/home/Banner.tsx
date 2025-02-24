"use client"

import { Box, Button, Flex, Heading, Text, keyframes } from "@chakra-ui/react"
import {
  bannerButtonStyles,
  bannerDescriptionStyles,
  bannerHeadingStyles,
  bannerImageStyles,
  bannerStyles,
} from "./styles"
import { Link } from "@chakra-ui/next-js"

// Add a subtle animation for the banner content
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

function Banner() {
  return (
    <Flex {...bannerStyles}>
      <Box w={{ base: "100%", lg: "50%" }} animation={`${fadeIn} 1s ease-out`}>
        <Heading {...bannerHeadingStyles}>
          Quality, Affordable <br /> Reliable
        </Heading>
        <Text {...bannerDescriptionStyles}>
          Experience the convenience of pharmacy shopping from the comfort of your home. Browse our wide range of medicines, wellness products, and expert advice, all just a click away. Discover a healthier you with Moodies Chemist, your trusted online pharmacy partner.
        </Text>
        <Link {...bannerButtonStyles} href={"/products"}>
          Shop Now
        </Link>
      </Box>
      <Box w={{ base: "100%", lg: "50%" }} animation={`${fadeIn} 1.5s ease-out`}>
        <Box {...bannerImageStyles} />
      </Box>
    </Flex>
  )
}

export default Banner