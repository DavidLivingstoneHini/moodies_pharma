import { BoxProps, FlexProps, HeadingProps, LinkProps, TextProps, HTMLChakraProps } from "@chakra-ui/react"

export const bannerStyles: FlexProps = {
  justify: "center",
  align: "center",
  gap: { base: "4", lg: "8" }, // Increased gap for better spacing
  direction: { base: "column", lg: "row" }, // Stack vertically on mobile, row on desktop
  w: { base: "100%", lg: "90%" }, // Full width on mobile, 90% on desktop
  mx: "auto", // Center the banner
  p: { base: "1rem", lg: "2rem" }, // Adjusted padding for responsiveness
  bg: "brand.lightBackground", // Add a light background color
  borderRadius: "xl", // Rounded corners for the banner
  boxShadow: "lg", // Subtle shadow for depth
  textAlign: { base: "center", lg: "left" }, // Center text on mobile, left-align on desktop
}

export const bannerHeadingStyles: HeadingProps = {
  as: "h1",
  size: { base: "2xl", md: "3xl", lg: "3xl" }, // Responsive font sizes
  color: "brand.primary",
  lineHeight: { base: "1.2", lg: "1.3" }, // Improved line height for better readability
  mt: { base: "1.0rem", lg: "1.5rem" },
  mb: { base: "0.8rem", lg: "1.5rem" }, // Added margin bottom for spacing
}

export const bannerDescriptionStyles: TextProps = {
  fontSize: { base: "sm", md: "md", lg: "lg" }, // Responsive font sizes
  py: "1rem",
  maxW: { base: "100%", lg: "600px" }, // Full width on mobile, max width on desktop
  color: "gray.600", // Slightly muted text color for contrast
  lineHeight: { base: "1.5", lg: "1.6" }, // Improved line height for readability
}

export const bannerButtonStyles: LinkProps = {
  rounded: "full",
  minW: { base: "8rem", lg: "10rem" }, // Smaller button on mobile
  bgColor: "brand.primary",
  color: "white",
  _hover: { bgColor: "brand.primaryDark", transform: "scale(1.05)" }, // Added scale effect on hover
  py: { base: ".5rem", lg: ".75rem" }, // Slightly increased padding
  px: { base: "1.5rem", lg: "2rem" }, // Adjusted padding for responsiveness
  fontWeight: "semibold",
  transition: "all 0.2s ease-in-out", // Smooth transition for hover effects
  fontSize: { base: "sm", lg: "md" }, // Responsive font size for the button
}

export const bannerImageStyles: HTMLChakraProps<"img"> = {
  as: "img",
  mx: { base: "0", lg: "2rem" }, // Remove horizontal margin on mobile
  boxSize: { base: "300px", sm: "300px", lg: "600px" }, // Responsive image size
  src: "pharmd.jpg",
  borderRadius: "lg", // Rounded corners for the image
  boxShadow: "md", // Subtle shadow for the image
  objectFit: "cover", // Ensure the image covers the box nicely
  mt: { base: "2rem", lg: "0" }, // Add margin top on mobile to separate image from text
}