import useAppContext from "@/context/AppContext"
import { calculateItemsTotalPrice } from "@/helpers"
import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Input,
  Radio,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Image,
} from "@chakra-ui/react"
import { useState, useRef } from "react"

function PaymentDetails() {
  const {
    state: { checkout },
  } = useAppContext()

  const total = useRef(calculateItemsTotalPrice(checkout))
  const tax = total.current * 0.1

  // Modal state
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Card>
      <CardBody>
        <Stack spacing={6}>
          {/* Coupon Input and Button */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "stretch", md: "center" }}
            justify="space-between"
            gap={3}
          >
            <Input
              type="text"
              placeholder="Enter Coupon Code"
              rounded="full"
              flexGrow={1}
            />
            <Button
              bgColor="brand.primary"
              color="white"
              rounded="full"
              px={{ base: 6, md: 8 }}
              flexShrink={0}
              _hover={{ bgColor: "brand.primaryDark" }}
              _active={{ bgColor: "brand.primaryDark" }}
            >
              Apply Coupon
            </Button>
          </Flex>
          <Divider />

          {/* Pay After Confirmation Section with Radio Button */}
          <Card padding={8} backgroundColor={"#fafafa"}>
            <Box py={2}>
              <Flex align="flex-start" mb={4}>
                <Radio
                  isChecked
                  isDisabled
                  colorScheme="brand"
                  size="lg"
                  mt={1}
                  mr={3}
                />
                <Box>
                  <Heading size={{ base: "xs", md: "sm" }} mb={2}>
                    Pay After Confirmation
                  </Heading>
                  <Text fontSize={15} color="gray.600" mb={2}>
                    A member of our staff will contact you to confirm your order.
                  </Text>
                  <Text fontSize="sm" color="gray.600" marginTop={10}>
                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{" "}
                    <Text as="span" color="brand.primary" textDecoration="underline" cursor="pointer">
                      Privacy policy.
                    </Text>
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Card>
          <Divider />

          {/* Totals Section */}
          <Box>
            <Stack spacing={3}>
              <Flex justify="space-between" align="center">
                <Text fontWeight="medium">Sub Total</Text>
                <Text fontWeight="bold">Ghs{total.current.toFixed(2)}</Text>
              </Flex>

              <Flex justify="space-between" align="center">
                <Text fontWeight="medium">Tax (10%)</Text>
                <Text fontWeight="bold">Ghs{tax.toFixed(2)}</Text>
              </Flex>

              <Flex justify="space-between" align="center">
                <Text fontWeight="medium">Coupon Discount</Text>
                <Text fontWeight="bold">-Ghs{tax.toFixed(2)}</Text>
              </Flex>

              <Flex justify="space-between" align="center">
                <Text fontWeight="medium">Shipping Cost</Text>
                <Text fontWeight="bold">Ghs0.00</Text>
              </Flex>

              <Divider />

              <Flex justify="space-between" align="center" pt={2}>
                <Text fontWeight="bold" fontSize="lg">Total</Text>
                <Text fontWeight="bold" fontSize="lg" color="brand.primary">
                  Ghs{total.current.toFixed(2)}
                </Text>
              </Flex>
            </Stack>
          </Box>

          {/* Place Order Button */}
          <Button
            bgColor="brand.primary"
            color="white"
            w="100%"
            rounded="full"
            size="lg"
            mt={2}
            _hover={{
              bgColor: "brand.primaryDark",
            }}
            _active={{
              bgColor: "brand.primaryDark",
            }}
            onClick={onOpen}
          >
            Place Order
          </Button>
        </Stack>
      </CardBody>

      {/* Confirmation Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent borderRadius="lg">
          <ModalHeader textAlign="center">Order Confirmed Successfully!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" align="center" justify="center" py={4}>
              <Image
                src="/success.jpg"
                alt="Order Confirmed"
                boxSize="200px"
                objectFit="cover"
              />
              <Text mt={6} textAlign="center" fontSize="md" fontWeight="bold">
                Thank you for your purchase, a member of our staff will reach out to you shortly!
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              bgColor="brand.primary"
              color="white"
              w="100%"
              rounded="full"
              size="lg"
              _hover={{
                bgColor: "brand.primaryDark",
              }}
              _active={{
                bgColor: "brand.primaryDark",
              }}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  )
}

export default PaymentDetails