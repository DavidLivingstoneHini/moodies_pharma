import Link from "next/link"; 
import { Box } from "@chakra-ui/react"; 
import Image from "next/image";

function AppLogo() {
  return (
    <Link href="/" passHref> 
      <Box as="a" _hover={{ textDecor: "none" }}> 
        <Image
          src="/moodieslogo.png"
          alt="Moodies Logo"
          width={100}
          height={30}
        /> 
      </Box>
    </Link>
  );
}

export default AppLogo;
