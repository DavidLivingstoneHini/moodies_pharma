import useAppContext from "@/context/AppContext"
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { useRef } from "react"
import { BsCart4 } from "react-icons/bs"
import CartItem from "./CartItem"
import {
  cartButtonStyles,
  checkoutButtonStyles,
  cleanCartButtonStyles,
  notificationItemsCount,
} from "./styles"
import { calculateItemsTotalPrice } from "@/helpers"
import { Link } from "@chakra-ui/next-js"

function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)
  const {
    state: { cart },
    resetItems,
    addItem,
  } = useAppContext()

  const handleCheckout = () => {
    resetItems("checkout")
    cart.forEach(item => {
      addItem("checkout", item, item.count)
    })
    onClose()
  }

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} {...cartButtonStyles}>
        <BsCart4 fontSize={"20px"} color="white" fontWeight={"extrabold"} />
        {/* <Text>Cart</Text> */}
        {cart.length > 0 && (
          <Flex {...notificationItemsCount}>{cart.length}</Flex>
        )}
      </Button>
      <Drawer
        size={{ base: "xs", md: "sm", lg: "md" }} // Responsive drawer size
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color="brand.primary" fontSize={{ base: "lg", md: "xl" }}>Cart</DrawerHeader>

          <DrawerBody>
            {cart.length > 0 ? (
              cart.map(item => <CartItem key={item.id} item={item} />)
            ) : (
              <Flex justify="center" fontSize={{ base: "md", md: "lg" }}>Your cart is empty</Flex>
            )}
          </DrawerBody>

          {cart.length > 0 && (
            <DrawerFooter justifyContent="space-between" flexDirection={{ base: "column", md: "row" }}>
              <Box>
                <Button
                  {...cleanCartButtonStyles}
                  onClick={() => resetItems("cart")}
                  mb={{ base: 2, md: 0 }} // Margin bottom on mobile
                >
                  Clear Cart
                </Button>
                <Link
                  {...checkoutButtonStyles}
                  onClick={handleCheckout}
                  href="/checkout"
                  ml={{ base: 0, md: 4 }} // Margin left on desktop
                >
                  Checkout
                </Link>
              </Box>
              <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }} mt={{ base: 2, md: 0 }}>
                Total: Ghs {calculateItemsTotalPrice(cart)}
              </Text>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart