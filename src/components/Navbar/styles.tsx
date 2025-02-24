import { BoxProps, FlexProps, StackProps } from "@chakra-ui/react"

export const navbarStyles: BoxProps = {
  pos: "fixed",
  w: "100%",
  bgColor: "white",
  mb: "1rem",
  zIndex: 10,
  boxShadow: "sm", // Add a subtle shadow for depth
}

export const desktopNavStyles: FlexProps = {
  justify: "space-between",
  align: "center",
  px: { base: "1rem", lg: "2rem" }, // Adjusted padding for responsiveness
  py: "1rem",
  borderBottomWidth: "1px",
  borderColor: "gray.200",
  display: { base: "none", lg: "flex" },
  maxW: "1440px", // Limit the max width for better alignment on large screens
  mx: "auto", // Center the navbar
}

export const logoSectionStyles: StackProps = {
  direction: "row",
  gap: 8, // Increased gap for better spacing
  flex: 1,
  align: "center",
}

export const cartSectionStyles: StackProps = {
  direction: "row",
  gap: 6,
  align: "center",
}

export const mobileNavContainerStyles: FlexProps = {
  justify: "space-between",
  align: "center",
  px: "1rem",
  py: "1rem",
  borderBottom: "1px",
  borderColor: "gray.200",
  display: { base: "flex", lg: "none" },
}

export const mobileSearchWrapper: BoxProps = {
  px: "1rem",
  py: "0.5rem",
  my: "0.8rem",
  display: { base: "flex", lg: "none" },
}

