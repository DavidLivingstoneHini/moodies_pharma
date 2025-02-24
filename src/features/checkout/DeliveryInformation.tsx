import useAppContext from "@/context/AppContext"
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  FormLabel,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"

function DeliveryInformation() {
  const {
    state: { checkout },
  } = useAppContext()

  return (
    <Card>
      <CardHeader fontSize={{ base: "sm", md: "md" }}>Delivery Information</CardHeader>

      <CardBody>
        <Stack spacing={{ base: "1rem", md: "2rem" }}>
          <Box>
            <FormLabel fontSize={{ base: "sm", md: "md" }}>Full Name</FormLabel>
            <Input
              type="text"
              placeholder="Full Name"
              size={{ base: "sm", md: "md" }} // Smaller input on mobile
              w="100%" // Full width on all screens
            />
          </Box>

          <Box>
            <FormLabel fontSize={{ base: "sm", md: "md" }}>Address</FormLabel>
            <Input
              type="text"
              placeholder="Address"
              size={{ base: "sm", md: "md" }} // Smaller input on mobile
              w="100%" // Full width on all screens
            />
          </Box>

          <Box>
            <FormLabel fontSize={{ base: "sm", md: "md" }}>Phone</FormLabel>
            <Input
              type="text"
              placeholder="Phone Number"
              size={{ base: "sm", md: "md" }} // Smaller input on mobile
              w="100%" // Full width on all screens
            />
          </Box>

          <Box>
            <FormLabel fontSize={{ base: "sm", md: "md" }}>Email</FormLabel>
            <Input
              type="text"
              placeholder="Email"
              size={{ base: "sm", md: "md" }} // Smaller input on mobile
              w="100%" // Full width on all screens
            />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default DeliveryInformation