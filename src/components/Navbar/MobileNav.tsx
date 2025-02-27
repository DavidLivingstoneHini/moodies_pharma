import { Box, Flex, Stack, Text } from "@chakra-ui/react"
import AppLogo from "../AppLogo"
import { mobileNavContainerStyles, mobileSearchWrapper } from "./styles"
import Search from "../Search/Search"
import MobileNavMenu from "./MobileNavMenu"
import Cart from "../Cart/Cart"
import Wishlist from "../Wishlist/Wishlist"

function MobileNav({ }) {
  return (
    <>
      <Flex {...mobileNavContainerStyles} h="60px">
        <Box>
          <MobileNavMenu />
        </Box>
        <Box w="80px" h="auto">
          <AppLogo />
        </Box>

        <Stack direction="row" spacing={1}>
          <Wishlist />

          <Cart />
        </Stack>
      </Flex>

      <Box {...mobileSearchWrapper}>
        <Search />
      </Box>
    </>
  )
}

export default MobileNav

