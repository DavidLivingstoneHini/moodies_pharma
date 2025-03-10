import useAppContext from "@/context/AppContext";
import { Button } from "@chakra-ui/react";
import { IProduct } from "@/models";

interface IAddTocartButtonProps {
  product: IProduct;
  count?: number;
  width?: string; // Add width prop
}

function AddTocartButton({ product, count = 1, width }: IAddTocartButtonProps) {
  const { isAdded, addItem, removeItem } = useAppContext();

  return !isAdded("cart", product.id) ? (
    <Button
      variant="outline"
      borderColor="brand.primary"
      color="brand.primary"
      rounded="full"
      size="sm"
      width={width} // Apply width prop
      onClick={() => addItem("cart", product, count)}
    >
      Add to cart
    </Button>
  ) : (
    <Button
      variant="outline"
      borderColor="gray.400"
      color="gray.400"
      px="1rem"
      rounded="full"
      size="sm"
      width={width} // Apply width prop
      onClick={() => removeItem("cart", product.id)}
    >
      Remove from cart
    </Button>
  );
}

export default AddTocartButton;