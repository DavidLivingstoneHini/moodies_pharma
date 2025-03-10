import {
  Box,
  chakra,
  Container,
  IconButton,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react"
import { ReactNode } from "react"
import { BiMailSend } from "react-icons/bi"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import AppLogo from "./AppLogo"

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg="blackAlpha.100"
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "blackAlpha.200",
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  )
}

export const Footer = () => {
  return (
    <Box bg="pink.100" color="gray.700" mt="2rem" py={{ base: 6, md: 10 }}>
      <Container as={Stack} maxW={"8xl"}>
        <SimpleGrid
          templateColumns={{ sm: "1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={{ base: 8, md: 16 }}>
          <Stack spacing={6}>
            <Box>
              <AppLogo />
              <Text fontSize="sm" mt={3}>
                Moodies Chemist is one of the best pharmacies in Ghana. <br /> We are a leading Retail and Wholesale pharmaceutical company.
              </Text>
            </Box>
            <Text fontSize="sm">© 2025 Moodies Chemist. All rights reserved</Text>
          </Stack>

          <Stack align="flex-start">
            <ListHeader>Information</ListHeader>
            <Link href={"/terms"}>Terms & Conditions</Link>
            <Link href={"/privacy"}>Privacy Policy</Link>
            <Link href={"faq"}>FAQ</Link>
          </Stack>

          <Stack align="flex-start">
            <ListHeader>Support</ListHeader>
            <Link href={"/delivery"}>Delivery Information</Link>
            <Link href={"/contact"}>Contact Us</Link>
            <Link href={"#"}>Site Map</Link>
          </Stack>

          <Stack align="flex-start" spacing={4}>
            <ListHeader>Follow Us</ListHeader>
            <VStack align="flex-start" spacing={3}>
              <Stack direction="row" spacing={3} align="center">
                <SocialButton label="Twitter" href={"#"}>
                  <FaTwitter />
                </SocialButton>
                <Text>Twitter</Text>
              </Stack>
              <Stack direction="row" spacing={3} align="center">
                <SocialButton label="Facebook" href={"#"}>
                  <FaFacebook />
                </SocialButton>
                <Text>Facebook</Text>
              </Stack>
              <Stack direction="row" spacing={3} align="center">
                <SocialButton label="Instagram" href={"#"}>
                  <FaInstagram />
                </SocialButton>
                <Text>Instagram</Text>
              </Stack>
            </VStack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
