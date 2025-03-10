import useAppContext from "@/context/AppContext"
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  FormLabel,
  Input,
  Stack,
  Text,
  VStack,
  Select, // For dropdown
} from "@chakra-ui/react"

function DeliveryInformation() {
  const {
    state: { checkout },
  } = useAppContext()

  // Sample list of regions in Ghana (you can replace this with actual data from your source)
  const ghanaRegions = [
    "Greater Accra",
    "Ashanti",
    "Western",
    "Central",
    "Eastern",
    "Volta",
    "Northern",
    "Upper East",
    "Upper West",
    "Bono",
    "Bono East",
    "Ahafo",
    "Oti",
    "Western North",
  ]

  return (
    <Card>
      <CardHeader fontSize={{ base: "sm", md: "md" }}>Billing Information</CardHeader>

      <CardBody>
        <Stack spacing={{ base: "1rem", md: "2rem" }}>
          <Box>
            <FormLabel fontSize={{ base: "sm", md: "md" }} htmlFor="full-name">
              Full Name <Text as="span" color="red.500">*</Text>
            </FormLabel>
            <Input
              id="full-name"
              type="text"
              placeholder="Full Name"
              size={{ base: "sm", md: "md" }}
              w="100%"
              isRequired
            />
          </Box>

          <Box>
            <FormLabel fontSize={{ base: "sm", md: "md" }} htmlFor="address">
              Address <Text as="span" color="red.500">*</Text>
            </FormLabel>
            <Input
              id="address"
              type="text"
              placeholder="Address"
              size={{ base: "sm", md: "md" }}
              w="100%"
              isRequired
            />
          </Box>

          <Box>
            <FormLabel fontSize={{ base: "sm", md: "md" }} htmlFor="phone">
              Phone <Text as="span" color="red.500">*</Text>
            </FormLabel>
            <Input
              id="phone"
              type="text"
              placeholder="Phone Number"
              size={{ base: "sm", md: "md" }}
              w="100%"
              isRequired
            />
          </Box>

          <Box>
            <FormLabel fontSize={{ base: "sm", md: "md" }} htmlFor="email">
              Email <Text as="span" color="red.500">*</Text>
            </FormLabel>
            <Input
              id="email"
              type="text"
              placeholder="Email"
              size={{ base: "sm", md: "md" }}
              w="100%"
              isRequired
            />
          </Box>

          {/* Country Field */}
          <Box>
            <FormLabel fontSize={{ base: "sm", md: "md" }} htmlFor="country">
              Country <Text as="span" color="red.500">*</Text>
            </FormLabel>
            <Input
              id="country"
              type="text"
              value="Ghana"
              isReadOnly
              size={{ base: "sm", md: "md" }}
              w="100%"
              isRequired
            />
          </Box>

          {/* Postal Code Field (Optional) */}
          <Box>
            <FormLabel fontSize={{ base: "sm", md: "md" }} htmlFor="postal-code">
              Postal Code (Optional)
            </FormLabel>
            <Input
              id="postal-code"
              type="text"
              placeholder="Postal Code"
              size={{ base: "sm", md: "md" }}
              w="100%"
            />
          </Box>

          {/* Region Dropdown */}
          <Box>
            <FormLabel fontSize={{ base: "sm", md: "md" }} htmlFor="region">
              Region <Text as="span" color="red.500">*</Text>
            </FormLabel>
            <Select
              id="region"
              placeholder="Select Region"
              size={{ base: "sm", md: "md" }}
              w="100%"
              isRequired
            >
              {ghanaRegions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </Select>
          </Box>

          {/* Town/City Field */}
          <Box>
            <FormLabel fontSize={{ base: "sm", md: "md" }} htmlFor="town-city">
              Town/City <Text as="span" color="red.500">*</Text>
            </FormLabel>
            <Input
              id="town-city"
              type="text"
              placeholder="Town/City"
              size={{ base: "sm", md: "md" }}
              w="100%"
              isRequired
            />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default DeliveryInformation
