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
          width={80} // Default width for larger screens
          height={30} // Default height for larger screens
          style={{
            width: '100%', // Make it responsive
            maxWidth: '100px', // Maximum width on larger screens
            height: 'auto', // Maintain aspect ratio
          }}
        />
      </Box>
    </Link>
  );
}

export default AppLogo;
