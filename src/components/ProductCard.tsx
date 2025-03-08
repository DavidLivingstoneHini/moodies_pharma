import { Box } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Raiting from "./Raiting";
import AddTocartButton from "./AddTocartButton";
import { IProduct } from "@/models";
import AddWishlistButton from "./AddWishlistButton";
import { Link } from "@chakra-ui/next-js";

interface Props {
  product: IProduct;
}

function ProductCard({ product }: Props) {
  const { description, mainImage, price, name, rating, slug } = product;

  // Define border and hover colors based on the theme (light/dark mode)
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const hoverBorderColor = useColorModeValue("blue.500", "blue.200");

  return (
    <Card
      maxW="sm"
      borderWidth="1px" // Add a visible border
      borderColor={borderColor} // Set border color
      borderRadius="lg" // Rounded corners
      overflow="hidden" // Ensure content doesn't overflow
      transition="all 0.3s ease" // Smooth transition for hover effects
      _hover={{
        borderColor: hoverBorderColor, // Change border color on hover
        transform: "scale(1.02)", // Slightly scale up on hover
        boxShadow: "lg", // Add a shadow on hover
      }}
    >
      <Link
        href={`/products/${slug}`}
        cursor="default"
        _hover={{ textDecor: "none", cursor: "default" }}
      >
        <CardBody pos="relative">
          <AddWishlistButton product={product} />
          <Box
            boxSize="200px"
            bg={`center / contain no-repeat url(${mainImage})`}
            mx="auto"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Flex justify="space-between">
              <Heading size="sm" w={{ base: "60%", md: "auto" }} noOfLines={2}>
                {name}
              </Heading>
              <Flex>
                <Text fontSize="sm" color="brand.primary" fontWeight="bold">
                  Ghs{" "}
                </Text>
                <Text
                  color="brand.primary"
                  fontWeight="bold"
                  as="span"
                  fontSize="lg"
                >
                  {price}
                </Text>
              </Flex>
            </Flex>
            <Text noOfLines={2}>{description}</Text>
            <Raiting rating={rating} />
          </Stack>
        </CardBody>
      </Link>

      <CardFooter>
        <AddTocartButton product={product} />
      </CardFooter>
    </Card>
  );
}

export default ProductCard;