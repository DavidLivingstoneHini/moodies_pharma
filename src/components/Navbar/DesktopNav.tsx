import { Flex, Stack, Box, Text, keyframes } from "@chakra-ui/react"
import {
  desktopNavStyles,
  logoSectionStyles,
  cartSectionStyles,
} from "./styles"
import AppLogo from "../AppLogo"
import { navItems } from "@/helpers"
import { Link } from "@chakra-ui/next-js"
import Search from "../Search/Search"
import Cart from "../Cart/Cart"
import Wishlist from "../Wishlist/Wishlist"

// Add a subtle animation for the navbar
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`

function DesktopNav() {
  return (
    <Flex {...desktopNavStyles} animation={`${fadeIn} 0.5s ease-out`}>
      <Stack {...logoSectionStyles}>
        <Box>
          <AppLogo />
        </Box>
        <Box display="flex" gap={8} alignItems="center">
          {navItems.map(({ label, href }) => (
            <Box key={href}>
              <Link
                href={href}
                fontSize="md"
                fontWeight="medium"
                color="gray.700"
                _hover={{ color: "brand.primary", textDecoration: "underline" }}
              >
                {label}
              </Link>
            </Box>
          ))}
        </Box>
        <Box flex={1} maxW="400px">
          <Search />
        </Box>
      </Stack>
      <Stack {...cartSectionStyles}>
        <Wishlist />
        <Cart />
      </Stack>
    </Flex>
  )
}

export default DesktopNav