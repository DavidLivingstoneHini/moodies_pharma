import {
  Flex,
  Stack,
  Box,
  Text,
  keyframes,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  VStack
} from "@chakra-ui/react"
import { ChevronDownIcon, SearchIcon, HamburgerIcon } from "@chakra-ui/icons"
import { FaAngleDown, FaShoppingCart, FaEnvelope, FaPhone, FaClock, FaUser, FaCalendarAlt } from "react-icons/fa"
import {
  desktopNavStyles,
  logoSectionStyles,
  cartSectionStyles,
  navItemStyles,
  topBannerStyles,
} from "./styles"
import AppLogo from "../AppLogo"
import { Link } from "@chakra-ui/next-js"
import Search from "../Search/Search"
import Cart from "../Cart/Cart"
import Wishlist from "../Wishlist/Wishlist"
import React from "react"
import AuthModal from "../AuthModal"

// Enhance the animation for a more modern feel
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-15px); }
  to { opacity: 1; transform: translateY(0); }
`

function DesktopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalOpen, setModalOpen] = React.useState(false);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about", hasDropdown: true },
    { label: "SERVICES", href: "/services" },
    { label: "NEWS", href: "/news" },
    { label: "CONTACT", href: "/contact" },
    { label: "PRODUCTS", href: "/products" },
    { label: "ALL CATEGORIES", href: "/categories" }
  ];

  // About dropdown items
  const aboutDropdownItems = [
    { label: "Our Story", href: "/about/our-story" },
    { label: "Team", href: "/about/team" },
    { label: "Mission & Vision", href: "/about/mission" },
    { label: "Careers", href: "/about/careers" }
  ];

  return (
    <>
      {/* Top banner with contact info */}
      <Flex
        bg="green.500"
        color="white"
        py={2}
        px={{ base: 4, md: 8 }}
        fontSize="sm"
        justifyContent="space-between"
        width="100%"
        position="fixed"
        top={0}
        zIndex={11}
      >
        {/* Left side content - Full information on larger screens */}
        <Flex display={{ base: "none", md: "flex" }}>
          <Link href="mailto:moodieschemists@gmail.com" _hover={{ textDecoration: 'none', color: 'gray.100' }}>
            <Flex align="center" mr={6}>
              <Icon as={FaEnvelope} mr={2} />
              <Text>moodieschemists@gmail.com</Text>
            </Flex>
          </Link>

          <Link href="tel:+233208360510" _hover={{ textDecoration: 'none', color: 'gray.100' }}>
            <Flex align="center" mr={6}>
              <Icon as={FaPhone} mr={2} />
              <Text>+233 (208) 36 0510</Text>
            </Flex>
          </Link>

          <Flex align="center">
            <Icon as={FaClock} mr={2} />
            <Text>Mon-Fri: 9AM-5PM</Text>
          </Flex>
        </Flex>

        {/* Condensed information for mobile screens */}
        <Flex display={{ base: "flex", md: "none" }} justifyContent="space-between" width="100%" flexDirection="column" align="center">
        <Link href="tel:+233208360510" _hover={{ textDecoration: 'none', color: 'gray.100' }}>
            <Flex align="center" mx={2}>
              <Icon as={FaPhone} mr={1} />
              <Text fontSize="xs" display={{ base: "block", sm: "block" }}>+233 20836 0510</Text>
            </Flex>
          </Link>
          
          <Link href="mailto:moodieschemists@gmail.com" _hover={{ textDecoration: 'none', color: 'gray.100' }}>
            <Flex align="center">
              <Icon as={FaEnvelope} mr={1} />
              <Text fontSize="xs" display={{ base: "block", sm: "block" }}>moodieschemists@gmail.com</Text>
            </Flex>
          </Link>

        
        </Flex>
      </Flex>

      {/* Main Navigation */}
      <Flex
        direction="column"
        width="100%"
        bg="white"
        boxShadow="md"
        position="fixed"
        zIndex={10}
        top={{ base: "40px", md: "40px" }}
      >
        {/* Mobile hamburger menu (visible only on mobile) */}
        <Flex
          display={{ base: "flex", lg: "none" }}
          justify="space-between"
          align="center"
          p={4}
          borderBottom="1px"
          borderColor="gray.200"
        >
          <Flex>
           
           <IconButton
             icon={<HamburgerIcon />}
             variant="ghost"
             onClick={onOpen}
             aria-label="Open navigation"
           />
         </Flex>

          <Box w={"60px"} h={"30px"} mr={"10px"}>
            <AppLogo />
          </Box>

          <Box>
              <Search />
            </Box>
        </Flex>

        {/* Top section with Logo, Search, Login, Cart, Wishlist */}
        <Flex
          {...desktopNavStyles}
          animation={`${fadeIn} 0.6s ease-out`}
          borderBottomWidth="1px"
          borderColor="gray.100"
          py="0.75rem"
          display={{ base: "none", lg: "flex" }}
        >
          <Box flex="1" display="flex" alignItems="center" w={{base: "50px", md: "100px"}}>
            <AppLogo />
          </Box>

          <Box flex="2" maxW="500px" mx="auto">
            <Search />
          </Box>

          <Stack
            direction="row"
            spacing={2}
            align="center"
            justify="flex-end"
            flex="1"
          >
            <Button
              leftIcon={<FaUser />}
              variant="ghost"
              size="sm"
              colorScheme="green"
              onClick={() => setModalOpen(true)}
            >
              Login / Sign Up
            </Button>

            <Box position="relative">
              <Wishlist />
            </Box>

            <Box position="relative">
              <Cart />
            </Box>
          </Stack>
        </Flex>

        {/* Bottom section with navigation items (desktop) */}
        <Flex
          px={{ base: "1rem", lg: "2rem" }}
          py="0.75rem"
          justifyContent="space-between"
          borderBottomWidth="1px"
          borderColor="gray.200"
          display={{ base: "none", lg: "flex" }}
          bg="gray.50"
        >
          <Flex justify="center" flex="1">
            {navItems.map((item) => (
              <Box key={item.href} mx={4}>
                {item.hasDropdown ? (
                  <Menu>
                    <Link href={item.href} _hover={{ textDecoration: 'none' }}>
                      <MenuButton
                        as={Box}
                        fontWeight="600"
                        fontSize="sm"
                        letterSpacing="wider"
                        color="green.500"
                        _hover={{ color: "green.500" }}
                        cursor="pointer"
                        display="flex"
                        alignItems="center"
                        py={0.5}
                      >
                        {item.label} <ChevronDownIcon ml={1} />
                      </MenuButton>
                    </Link>
                    <MenuList zIndex={20} boxShadow="lg" borderRadius="md" p={2}>
                      {aboutDropdownItems.map((dropItem) => (
                        <Link
                          key={dropItem.href}
                          href={dropItem.href}
                          _hover={{ textDecoration: 'none' }}
                        >
                          <MenuItem
                            _hover={{
                              bg: "green.500",
                              color: "white"
                            }}
                            borderRadius="md"
                            py={2}
                          >
                            {dropItem.label}
                          </MenuItem>
                        </Link>
                      ))}
                    </MenuList>
                  </Menu>
                ) : (
                  <Link
                    href={item.href}
                    fontWeight="600"
                    fontSize="sm"
                    letterSpacing="wider"
                    color="green.500"
                    _hover={{
                      color: "green.500",
                      textDecoration: "none",
                      pb: "2px",
                      borderBottom: "2px solid",
                      borderColor: "green.500"
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </Box>
            ))}
          </Flex>

          {/* Book Appointment Button */}
          <Box pr={4}>
            <Link href="/appointment" _hover={{ textDecoration: 'none' }}>
              <Button
                bgGradient="linear(to-r, pink.400, green.400)" // Adjusted gradient
                size="md" // Increased size
                paddingY={5} // Increased vertical padding for height
                leftIcon={<FaCalendarAlt />}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "md"
                }}
                transition="all 0.2s"
                textColor={"white"}
              >
                Book Appointment
              </Button>
            </Link>
          </Box>
        </Flex>
      </Flex>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch" mt={4}>
              {navItems.map((item) => (
                <Box key={item.href}>
                  {item.hasDropdown ? (
                    <Menu>
                      <Link href={item.href} onClick={onClose} _hover={{ textDecoration: 'none' }}>
                        <MenuButton
                          as={Box}
                          fontWeight="600"
                          fontSize="md"
                          color="green.500"
                          _hover={{ color: "gray.500" }}
                          cursor="pointer"
                          display="flex"
                          alignItems="center"
                        >
                          {item.label} <ChevronDownIcon ml={1} />
                        </MenuButton>
                      </Link>
                      <MenuList zIndex={20} boxShadow="lg" borderRadius="md" p={2}>
                        {aboutDropdownItems.map((dropItem) => (
                          <Link
                            key={dropItem.href}
                            href={dropItem.href}
                            onClick={onClose}
                            _hover={{ textDecoration: 'none' }}
                          >
                            <MenuItem
                              _hover={{
                                bg: "green.500",
                                color: "white"
                              }}
                              borderRadius="md"
                              py={2}
                            >
                              {dropItem.label}
                            </MenuItem>
                          </Link>
                        ))}
                      </MenuList>
                    </Menu>
                  ) : (
                    <Link
                      href={item.href}
                      fontWeight="600"
                      fontSize="md"
                      color="green.500"
                      onClick={onClose}
                      _hover={{
                        color: "green.500",
                        textDecoration: "none"
                      }}
                      display="block"
                      py={2}
                    >
                      {item.label}
                    </Link>
                  )}
                </Box>
              ))}
            </VStack>

            <Link href="/auth" onClick={onClose} _hover={{ textDecoration: 'none' }}>
              <Button
                leftIcon={<FaUser />}
                colorScheme="green"
                variant="outline"
                size="md"
                width="full"
                mt={8}
              >
                Login / Sign Up
              </Button>
            </Link>

            <Link href="/appointment" onClick={onClose} _hover={{ textDecoration: 'none' }}>
              <Button
                leftIcon={<FaCalendarAlt />}
                bgGradient="linear(to-r, pink.400, green.400)" // Adjusted gradient
                size="md"
                width="full"
                mt={4}
                textColor={"white"}
              >
                Book Appointment
              </Button>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Auth Modal */}
      <AuthModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <Box height={{ base: "110px", md: "150px", lg: "150px" }}></Box>
    </>
  )
}

export default DesktopNav