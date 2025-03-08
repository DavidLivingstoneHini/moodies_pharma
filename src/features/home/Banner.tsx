"use client"
import { Box, Flex, Heading, Text, keyframes } from "@chakra-ui/react";
import {
  bannerButtonStyles,
  bannerDescriptionStyles,
  bannerHeadingStyles,
  bannerStyles,
} from "./styles";
import { Link } from "@chakra-ui/next-js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const images = ["about6.jpg", "about3.jpg", "about1.jpg"];

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <Flex {...bannerStyles}>
      <Box
        w={{ base: "100%", lg: "50%" }}
        animation={`${fadeIn} 1s ease-out`}
      >
        <Heading {...bannerHeadingStyles}>
          Quality, Affordable <br /> Reliable
        </Heading>
        <Text {...bannerDescriptionStyles}>
          Experience the convenience of pharmacy shopping from the comfort of
          your home. Browse our wide range of medicines, wellness products,
          and expert advice, all just a click away. Discover a healthier you
          with Moodies Chemist, your trusted online pharmacy partner.
        </Text>
        <Link {...bannerButtonStyles} href={"/products"}>
          Shop Now
        </Link>
      </Box>
      <Box
        w={{ base: "100%", lg: "50%" }}
        animation={`${fadeIn} 1.5s ease-out`}
      >
        <Slider {...settings}>
          {images.map((image, i) => (
            <Box key={i} width="100%">
              <Box
                as="img"
                src={image}
                alt={`Banner Image ${i + 1}`}
                width="100%" // Set width to 100%
                height={{ base: "300px", sm: "300px", lg: "600px" }}
                borderRadius="lg"
                boxShadow="md"
                objectFit="cover"
                mt={{ base: "2rem", lg: "0" }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Flex>
  );
}

export default Banner;
