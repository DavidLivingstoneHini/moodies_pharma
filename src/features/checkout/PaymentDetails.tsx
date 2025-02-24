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
  VStack,
} from "@chakra-ui/react"
import { useState, useRef } from "react"

function PaymentDetails() {
  const {
    state: { checkout },
  } = useAppContext()

  const total = useRef(calculateItemsTotalPrice(checkout))
  const tax = total.current * 0.1

  return (
    <Card>
      <CardHeader fontSize={{ base: "sm", md: "md" }}>Payment Details</CardHeader>

      <CardBody>
        <Stack spacing={4}>
          {/* Coupon Input and Button */}
          <Flex
            direction={{ base: "column", md: "row" }} // Stack vertically on mobile
            align={{ base: "stretch", md: "center" }}
            justify="space-between"
          >
            <Input
              type="text"
              placeholder="Enter Coupon Code"
              rounded="full"
              mb={{ base: 2, md: 0 }} // Add margin bottom on mobile
            />
            <Button
              bgColor="brand.primary"
              color="white"
              rounded="full"
              px={{ base: "1rem", md: "2rem" }} // Adjust padding for mobile
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
              direction={{ base: "column", md: "row" }} // Stack vertically on mobile
              justify="space-between"
              align="center"
              my="1rem"
            >
              <Text fontWeight="bold">Sub Total</Text>
              <Text fontWeight="bold">Ghs{total.current.toFixed(2)}</Text>
            </Flex>

            <Flex
              direction={{ base: "column", md: "row" }} // Stack vertically on mobile
              justify="space-between"
              align="center"
              my="1rem"
            >
              <Text fontWeight="bold">Tax(10%)</Text>
              <Text fontWeight="bold">Ghs{tax.toFixed(2)}</Text>
            </Flex>

            <Flex
              direction={{ base: "column", md: "row" }} // Stack vertically on mobile
              justify="space-between"
              align="center"
              my="1rem"
            >
              <Text fontWeight="bold">Coupon Discount</Text>
              <Text fontWeight="bold">-Ghs{tax.toFixed(2)}</Text>
            </Flex>

            <Flex
              direction={{ base: "column", md: "row" }} // Stack vertically on mobile
              justify="space-between"
              align="center"
              my="1rem"
            >
              <Text fontWeight="bold">Shipping Cost</Text>
              <Text fontWeight="bold">-Ghs0.00</Text>
            </Flex>
            <Divider />
            <Flex
              direction={{ base: "column", md: "row" }} // Stack vertically on mobile
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
          >
            Pay Ghs{total.current.toFixed(2)}
          </Button>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default PaymentDetails