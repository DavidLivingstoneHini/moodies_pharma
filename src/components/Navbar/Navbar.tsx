import { Box } from "@chakra-ui/react"
import { navbarStyles } from "./styles"
import DesktopNav from "./DesktopNav"

function Navbar() {
  return (
    <Box className="navbar-wrapper" h="120px">
      <Box {...navbarStyles}>
        <DesktopNav />
      </Box>
    </Box>
  )
}

export default Navbar
