"use client"
import AddTocartButton from "@/components/AddTocartButton"
import CustomBreadcrumb from "@/components/Breadcrumb"
import LinkButton from "@/components/LinkButton"
import Quantity from "@/components/Quantity"
import Raiting from "@/components/Raiting"
import Wishlist from "@/components/Wishlist/Wishlist"
import useAppContext from "@/context/AppContext"
import { defaultBreadcrumbItems } from "@/helpers"
import { IProduct, NavItem } from "@/models"
import { Link } from "@chakra-ui/next-js"
import {
  Box,
  Breadcrumb,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react"
import { useState } from "react"
import { FaWhatsapp, FaPhone } from "react-icons/fa"

interface IProductDetailsProps {
  product: IProduct
}

function ProductDetails({ product }: IProductDetailsProps) {
  const [quantity, setQuantity] = useState(0)
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" })
  const buttonWidth = useBreakpointValue({ base: "100%", sm: "auto" })
  const buttonDirection = useBreakpointValue({ base: "column", sm: "row" }) as "column" | "row"

  const { resetItems, addItem } = useAppContext()

  const handleBuyNow = () => {
    resetItems("checkout")
    addItem("checkout", product, quantity)
  }

  const handleWhatsAppOrder = () => {
    const whatsappNumber = "+233208360510"
    const message = `Hello, I'm interested in ordering ${product.name}. Quantity: ${quantity}`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handlePhoneOrder = () => {
    const phoneNumber = "+233208360510"
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <>
      <CustomBreadcrumb
        items={[
          ...defaultBreadcrumbItems,
          {
            label: product.category.name,
            href: `/categories/${product.category.id}`,
          },
          {
            label: product.name,
            href: `/products/${product.slug}`,
          },
        ]}
      />
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        w={{ base: "100%", lg: "90%" }}
        mx="auto"
        p={{ base: "1rem", lg: "2rem" }}
        gap={{ base: "4", lg: "20" }}
      >
        <GridItem>
          <Image src={product.mainImage} alt={product.name} w="100%" />
        </GridItem>
        <GridItem>
          <Heading as="h1" fontSize={{ base: "xl", md: "2xl" }} mb="1rem">
            {product.name}
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} mb="1rem">
            {product.description}
          </Text>
          {/* <Raiting rating={product.rating} /> */}

          <Text fontWeight="bold" fontSize={{ base: "xl", md: "2rem" }} mb="1rem">
            Ghs {product.price}
          </Text>
          <Divider my="1rem" />
          <Box mb="1rem">
            <Quantity
              setQuantity={(valueAsString, valueAsNumber) => {
                setQuantity(valueAsNumber)
              }}
            />
          </Box>
          <Divider my="1rem" />
          <Flex
            align="center"
            gap="1rem"
            flexDirection={buttonDirection}
            mb="1rem"
          >
            <LinkButton
              args={{ onClick: () => handleBuyNow() }}
              label="Buy Now"
              href="/checkout"
              width={buttonWidth}
            />
            <AddTocartButton product={product} count={quantity} width={buttonWidth} />
          </Flex>

          <Flex
            mt="1rem"
            gap="1rem"
            flexDirection={buttonDirection}
            width="100%"
            flexWrap="wrap"
            mb="1rem"
          >
            <Button
              leftIcon={<Icon as={FaWhatsapp} />}
              onClick={handleWhatsAppOrder}
              bg="#25D366"
              borderRadius={100}
              borderWidth={1.6}
              borderColor={"#000"}
              color="white"
              _hover={{ bg: "#128C7E" }}
              size={buttonSize}
              width={buttonWidth}
              minW="120px"
              maxW={{ base: "100%", sm: "200px" }}
            >
              Order On WhatsApp
            </Button>
            <Button
              leftIcon={<Icon as={FaPhone} />}
              onClick={handlePhoneOrder}
              bg="#4285F4"
              borderRadius={100}
              borderWidth={1.6}
              borderColor={"#000"}
              color="white"
              _hover={{ bg: "#3367D6" }}
              size={buttonSize}
              width={buttonWidth}
              minW="120px"
              maxW={{ base: "100%", sm: "200px" }}
            >
              Call to Order
            </Button>
          </Flex>

          <Stack py="2rem">
            <Box>
              <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                Free Delivery
              </Text>
              <Link href="#" textDecor="underline" color="gray.500" fontSize={{ base: "sm", md: "md" }}>
                Enter your postal Code for Delivery Availability
              </Link>
            </Box>

            <Box>
              <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                Return Delivery
              </Text>
              <Text color="gray.500" fontSize={{ base: "sm", md: "md" }}>
                Free 30 Days Delivery Returns{" "}
                <Link href="#" textDecor="underline">
                  Details
                </Link>
              </Text>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </>
  )
}

export default ProductDetails