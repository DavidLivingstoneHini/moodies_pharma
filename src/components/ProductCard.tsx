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
      w="100%" // Ensure the card takes up full width of its container
      h="480px" // Fixed height for all cards
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      overflow="hidden"
      transition="all 0.3s ease"
      _hover={{
        borderColor: hoverBorderColor,
        transform: "scale(1.02)",
        boxShadow: "lg",
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
            boxSize="200px" // Fixed size for the image container
            bg={`center / contain no-repeat url(${mainImage})`}
            mx="auto"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Flex justify="space-between" align="center">
              <Heading
                size="sm"
                w="70%" // Limit width for the product name
                noOfLines={2} // Truncate after 2 lines
              >
                {name}
              </Heading>
              <Flex align="center">
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
            <Text noOfLines={2} h="40px"> {/* Fixed height for description */}
              {description}
            </Text>
            {/* <Raiting rating={rating} /> */}
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