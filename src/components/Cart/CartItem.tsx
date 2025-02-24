import { IShopItem } from "@/models"
import { Avatar, Button, Flex, Input, Text } from "@chakra-ui/react"
import Quantity from "../Quantity"
import { BsTrash } from "react-icons/bs"
import useAppContext from "@/context/AppContext"
import { Link } from "@chakra-ui/next-js"
import {
  cartItemFlexContainerStyles,
  cartItemInputStyles,
  trashButtonStyles,
} from "./styles"

interface ICartProps {
  item: IShopItem
}

function CartItem({ item }: ICartProps) {
  const { removeItem, increaseCount, decreaseCount } = useAppContext()

  return (
    <Flex
      {...cartItemFlexContainerStyles}
      direction={{ base: "column", lg: "row" }} // Stack vertically on mobile
      align={{ base: "flex-start", lg: "center" }} // Align items to the start on mobile
      gap={{ base: "0.5rem", lg: "1rem" }} // Reduce gap on mobile
    >
      <Link href={`/products/${item.slug}`}>
        <Avatar src={item.mainImage} size={{ base: "md", lg: "lg" }} />
      </Link>
      <Text
        noOfLines={2}
        flex={{ base: 1, lg: "unset" }}
        fontSize={{ base: "sm", lg: "md" }} // Smaller font on mobile
      >
        {item.description}
      </Text>
      <Flex
        gap={{ base: "0.5rem", lg: "1rem" }} // Reduce gap on mobile
        flex={{ base: 1, lg: 2 }}
        align="center"
      >
        <Button
          size={{ base: "sm", lg: "md" }} 
          onClick={() => increaseCount("cart", item.id)}
        >
          +
        </Button>
        <Input
          value={item.count}
          {...cartItemInputStyles}
          size={{ base: "sm", lg: "md" }} 
        />
        <Button
          size={{ base: "sm", lg: "md" }}
          onClick={() => decreaseCount("cart", item.id)}
        >
          -
        </Button>
      </Flex>
      <Text fontWeight="bold" fontSize={{ base: "sm", lg: "md" }}>
        Ghs {item.price}
      </Text>
      <Button
        {...trashButtonStyles}
        size={{ base: "sm", lg: "md" }}
        onClick={() => removeItem("cart", item.id)}
      >
        <BsTrash />
      </Button>
    </Flex>
  )
}

export default CartItem