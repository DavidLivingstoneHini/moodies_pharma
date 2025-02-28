"use client"
import { Box, Flex, Stack } from "@chakra-ui/react"
import PaymentDetails from "./PaymentDetails"
import ReviewItems from "./ReviewItems"
import DeliveryInformation from "./DeliveryInformation"

function CheckoutPageContent() {
  return (
    <Flex
      w={{ base: "100%", lg: "90%" }}
      mt={{ base: "2rem", lg: "6rem" }}
      mx="auto"
      flexDir={{ base: "column", lg: "row" }} >
      <Stack spacing={10} w={{ base: "100%", lg: "60%" }} mr="2rem">
        <ReviewItems />
        <DeliveryInformation />
      </Stack>
      <Box w={{ base: "100%", lg: "40%" }}>
        <PaymentDetails />
      </Box>
    </Flex>
  )
}

export default CheckoutPageContent
