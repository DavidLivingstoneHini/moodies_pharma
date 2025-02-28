import { BoxProps, FlexProps, StackProps } from "@chakra-ui/react"

export const navbarStyles: BoxProps = {
  pos: "fixed",
  w: "100%",
  bgColor: "white",
  mb: "1rem",
  zIndex: 10,
  boxShadow: "lg",
}

export const desktopNavStyles: FlexProps = {
  justify: "space-between",
  align: "center",
  px: { base: "1rem", lg: "2rem" },
  py: "0.75rem",
  maxW: "1440px",
  mx: "auto", 
  width: "100%",
}

export const logoSectionStyles: StackProps = {
  direction: "row",
  gap: 4,
  align: "center",
}

export const cartSectionStyles: StackProps = {
  direction: "row",
  gap: 6,
  align: "center",
}

export const navItemStyles: BoxProps = {
  px: 4,
  py: 2,
  fontWeight: "600",
  fontSize: "sm",
  letterSpacing: "wider",
  color: "gray.700",
  transition: "all 0.2s ease",
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

export const topBannerStyles: FlexProps = {
  bg: "green.500",
  color: "white",
  py: 2,
  px: { base: 4, md: 8 },
  fontSize: "sm",
  justifyContent: "space-between",
  width: "100%",
}