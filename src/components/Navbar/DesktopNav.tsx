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
  VStack,
  Slide,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaAngleDown, FaShoppingCart, FaEnvelope, FaPhone, FaClock, FaUser, FaCalendarAlt, FaHeart } from "react-icons/fa";
import {
  desktopNavStyles,
  logoSectionStyles,
  cartSectionStyles,
  navItemStyles,
  topBannerStyles,
} from "./styles";
import AppLogo from "../AppLogo";
import { Link } from "@chakra-ui/next-js";
import Search from "../Search/Search";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import React, { useState } from "react";
import AuthModal from "../AuthModal";

// Enhance the animation for a more modern feel
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-15px); }
  to { opacity: 1; transform: translateY(0); }
`;

function DesktopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
    setShowWishlist(false); // Close Wishlist if open
    setShowCart(false); // Close Cart if open
  };

  const toggleWishlist = () => {
    setShowWishlist(!showWishlist);
    setShowMobileSearch(false); // Close Search if open
    setShowCart(false); // Close Cart if open
  };

  const toggleCart = () => {
    setShowCart(!showCart);
    setShowMobileSearch(false); // Close Search if open
    setShowWishlist(false); // Close Wishlist if open
  };

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "", hasDropdown: true },
    { label: "SERVICES", href: "/services" },
    { label: "NEWS", href: "/news" },
    { label: "CONTACT", href: "/contact" },
    { label: "PRODUCTS", href: "/products" },
    { label: "ALL CATEGORIES", href: "/categories" }
  ];

  // About dropdown items
  const aboutDropdownItems = [
    { label: "About Us", href: "/about" },
    { label: "Why Choose Us", href: "/about" },
    { label: "FAQ'S", href: "/faq" }
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
          <Flex align="center" mr={6}>
            <Icon as={FaEnvelope} mr={2} />
            <Text>moodieschemists@gmail.com</Text>
          </Flex>

          <Flex align="center" mr={6}>
            <Icon as={FaPhone} mr={2} />
            <Text>+233 (208) 36 0510</Text>
          </Flex>

          <Flex align="center">
            <Icon as={FaClock} mr={2} />
            <Text>Mon-Fri: 9AM-5PM</Text>
          </Flex>
        </Flex>

        {/* Condensed information for mobile screens */}
        <Flex display={{ base: "flex", md: "none" }} justifyContent="space-between" width="100%" flexDirection="column" align="center">
          <Flex align="center" mx={2}>
            <Icon as={FaPhone} mr={1} />
            <Text fontSize="xs" display={{ base: "block", sm: "block" }}>+233 20836 0510</Text>
          </Flex>

          <Flex align="center">
            <Icon as={FaEnvelope} mr={1} />
            <Text fontSize="xs" display={{ base: "block", sm: "block" }}>moodieschemists@gmail.com</Text>
          </Flex>
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
        {/* Mobile Search Slide-down - Visible when search icon is clicked */}
        <Slide direction='top' in={showMobileSearch} style={{ zIndex: 20 }}>
          <Box
            p={4}
            bg="white"
            shadow="md"
            display={{ base: "block", lg: "none" }}
          >
            <InputGroup>
              <Input placeholder="Search products..." border="1px" borderColor="gray.300" />
              <InputRightElement>
                <IconButton
                  icon={<CloseIcon />}
                  size="sm"
                  variant="ghost"
                  onClick={toggleMobileSearch}
                  aria-label="Close search"
                />
              </InputRightElement>
            </InputGroup>
          </Box>
        </Slide>

        {/* Mobile top navigation (visible only on mobile) */}
        <Flex
          display={{ base: "flex", lg: "none" }}
          justify="space-between"
          align="center"
          p={4}
          borderBottom="1px"
          borderColor="gray.200"
        >
          <Box w={"60px"} h={"30px"}>
            <AppLogo />
          </Box>

          <IconButton
            icon={<HamburgerIcon />}
            variant="ghost"
            onClick={onOpen}
            aria-label="Open navigation"
          />
        </Flex>

        {/* Top section with Logo, Search, Login, Cart, Wishlist - Desktop only */}
        <Flex
          {...desktopNavStyles}
          animation={`${fadeIn} 0.6s ease-out`}
          borderBottomWidth="1px"
          borderColor="gray.100"
          py="0.75rem"
          display={{ base: "none", lg: "flex" }}
        >
          <Box flex="1" display="flex" alignItems="center" w={{ base: "50px", md: "100px" }}>
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
                bgGradient="linear(to-r, pink.400, green.400)"
                size="md"
                paddingY={5}
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

      {/* Mobile Bottom Navigation Bar */}
      <Flex
        position="fixed"
        bottom={0}
        left={0}
        right={0}
        bg="black" // Black background
        boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
        justify="space-around"
        align="center"
        py={3}
        zIndex={10}
        display={{ base: "flex", lg: "none" }}
      >
        <IconButton
          aria-label="Login"
          icon={<FaUser />}
          variant="ghost"
          fontSize="xl" // Increased icon size
          color="pink.500" // White icons
          rounded="full"
          onClick={() => setModalOpen(true)}
        />

        {/* Separator between icons */}
        <Box
          height="40px" // Height of the separator
          borderLeft="1px solid white" // White vertical line
          mx={2} // Add horizontal spacing between icons
        />

        <IconButton
          aria-label="Search"
          icon={<SearchIcon />}
          variant="ghost"
          fontSize="xl" // Increased icon size
          color="pink.500" // White icons
          rounded="full"
          onClick={toggleMobileSearch}
        />

        {/* Separator between icons */}
        <Box
          height="40px" // Height of the separator
          borderLeft="1px solid white" // White vertical line
          mx={2} // Add horizontal spacing between icons
        />

        <Wishlist />

        {/* Separator between icons */}
        <Box
          height="40px" // Height of the separator
          borderLeft="1px solid white" // White vertical line
          mx={2} // Add horizontal spacing between icons
        />

        <Cart />
      </Flex>

      {/* Slide-down components for Search, Wishlist, and Cart */}
      <Slide direction='top' in={showMobileSearch} style={{ zIndex: 20 }}>
        <Box
          p={4}
          bg="white"
          shadow="md"
          display={{ base: "block", lg: "none" }}
        >
          <InputGroup>
            <Input placeholder="Search products..." border="1px" borderColor="gray.300" />
            <InputRightElement>
              <IconButton
                icon={<CloseIcon />}
                size="sm"
                variant="ghost"
                onClick={toggleMobileSearch}
                aria-label="Close search"
              />
            </InputRightElement>
          </InputGroup>
        </Box>
      </Slide>

      <Slide direction='top' in={showWishlist} style={{ zIndex: 20 }}>
        <Box
          p={4}
          bg="white"
          shadow="md"
          display={{ base: "block", lg: "none" }}
        >
          <Wishlist />
        </Box>
      </Slide>

      <Slide direction='top' in={showCart} style={{ zIndex: 20 }}>
        <Box
          p={4}
          bg="white"
          shadow="md"
          display={{ base: "block", lg: "none" }}
        >
          <Cart />
        </Box>
      </Slide>

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

            <Link href="/appointment" onClick={onClose} _hover={{ textDecoration: 'none' }}>
              <Button
                leftIcon={<FaCalendarAlt />}
                bgGradient="linear(to-r, pink.400, green.400)"
                size="md"
                width="full"
                mt={8}
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

      {/* Bottom spacer for mobile to prevent content from being hidden under bottom nav */}
      <Box height={{ base: "60px", lg: "0" }} display={{ base: "block", lg: "none" }}></Box>
    </>
  );
}

export default DesktopNav;