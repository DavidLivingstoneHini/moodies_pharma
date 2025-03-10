import useAppContext from "@/context/AppContext"
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react"
import { FaKey } from "react-icons/fa"

function ReviewItems() {
  const {
    state: { checkout },
  } = useAppContext()

  return (
    <Card>
      <CardHeader fontSize={{ base: "md", md: "xl" }} fontWeight={700}>Your Order</CardHeader>

      <CardBody>
        {checkout.map((item, index) => (
          <Flex
            key={index} // Add a key for list rendering
            align="center"
            justify="space-between"
            mb="1rem"
            direction={{ base: "column", md: "row" }} // Stack vertically on mobile
          >
            <Flex align="center" w={{ base: "100%", md: "auto" }}>
              <Image
                src={item.mainImage}
                boxSize={{ base: "80px", md: "100px" }} // Smaller image on mobile
                bgSize="contain"
              />
              <Box mx={{ base: "0.5rem", md: "1rem" }} maxW={{ base: "70%", md: "50%" }}>
                <Text
                  maxW="500px"
                  fontWeight="bold"
                  fontSize={{ base: "sm", md: "md", lg: "lg" }} // Smaller font on mobile
                  noOfLines={2}
                >
                  {item.name}
                </Text>

                <Text color="gray.500" noOfLines={1} fontSize={{ base: "xs", md: "sm" }}>
                  {item.description}
                </Text>
              </Box>
            </Flex>

            <Box
              textAlign={{ base: "left", md: "right" }} // Align left on mobile
              mt={{ base: 2, md: 0 }} // Add margin top on mobile
              w={{ base: "100%", md: "auto" }}
            >
              <Text fontWeight="bold" fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                Ghs {item.price}
              </Text>
              <Flex fontSize={{ base: "xs", md: "sm", lg: "md" }} gap="0 5px">
                <Text>Quantity:</Text>
                <Text as="span">{item.count.toFixed(2)}</Text>
              </Flex>
            </Box>
          </Flex>
        ))}
      </CardBody>
    </Card>
  )
}

export default ReviewItems