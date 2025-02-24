import useAppContext from "@/context/AppContext"
import { calculateItemsTotalPrice } from "@/helpers"
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Input,
  Radio,
  RadioGroup,
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
      <CardHeader fontSize={{ base: "sm", md: "md" }}>Payment Details</CardHeader>

      <CardBody>
        <Stack spacing={4}>
          {/* Coupon Input and Button */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "stretch", md: "center" }}
            justify="space-between"
          >
            <Input
              type="text"
              placeholder="Enter Coupon Code"
              rounded="full"
              mb={{ base: 2, md: 0 }}
            />
            <Button
              bgColor="brand.primary"
              color="white"
              rounded="full"
              px={{ base: "1rem", md: "2rem" }}
              _hover={{ bgColor: "brand.primaryDark" }}
              _active={{ bgColor: "brand.primaryDark" }}
            >
              Apply Coupon
            </Button>
          </Flex>
          <Divider mt="1rem" />

          {/* Payment Options */}
          <Box>
            <Heading size={{ base: "xs", md: "sm" }} my="1rem">
              Payment Options
            </Heading>
            <RadioGroup>
              <Stack spacing={3}>
                <Radio value="cashOnDelivery">Cash On Delivery</Radio>
                <Radio value="mobilePayment">Mobile Money Payment</Radio>
                <Radio value="creditCard">Credit Card (Master/Visa)</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Divider mt="1rem" />

          {/* Totals Section */}
          <Box>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align="center"
              my="1rem"
            >
              <Text fontWeight="bold">Sub Total</Text>
              <Text fontWeight="bold">Ghs{total.current.toFixed(2)}</Text>
            </Flex>

            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align="center"
              my="1rem"
            >
              <Text fontWeight="bold">Tax(10%)</Text>
              <Text fontWeight="bold">Ghs{tax.toFixed(2)}</Text>
            </Flex>

            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align="center"
              my="1rem"
            >
              <Text fontWeight="bold">Coupon Discount</Text>
              <Text fontWeight="bold">-Ghs{tax.toFixed(2)}</Text>
            </Flex>

            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align="center"
              my="1rem"
            >
              <Text fontWeight="bold">Shipping Cost</Text>
              <Text fontWeight="bold">-Ghs0.00</Text>
            </Flex>
            <Divider />
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align="center"
              my="1rem"
            >
              <Text fontWeight="bold">Total</Text>
              <Text fontWeight="bold">Ghs{total.current.toFixed(2)}</Text>
            </Flex>
          </Box>

          {/* Pay Button */}
          <Button
            bgColor="brand.primary"
            color="white"
            w="100%"
            rounded="full"
            _hover={{
              bgColor: "brand.primaryDark",
            }}
            _active={{
              bgColor: "brand.primaryDark",
            }}
            onClick={onOpen} // Open the modal on click
          >
            Pay Ghs{total.current.toFixed(2)}
          </Button>
        </Stack>
      </CardBody>

      {/* Confirmation Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order Confirmed Successfully!</ModalHeader>
          <ModalCloseButton /> {/* Button to close the modal */}
          <ModalBody>
            <Flex direction="column" align="center" justify="center">
              <Image
                src="/success.jpg" // Path to your success GIF in the public folder
                alt="Order Confirmed"
                boxSize="200px"
                objectFit="cover"
              />
              <Text mt={4} textAlign="center" fontSize="lg" fontWeight="bold">
                Thank you for your purchase!
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              bgColor="brand.primary"
              color="white"
              w="100%"
              rounded="full"
              _hover={{
                bgColor: "brand.primaryDark",
              }}
              _active={{
                bgColor: "brand.primaryDark",
              }}
              onClick={onClose} // Close the modal
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