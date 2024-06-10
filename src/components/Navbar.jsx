import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.800" w="100%" p={4} color="white">
      <Flex align="center" justify="space-between">
        <Heading as="h1" size="lg">Todo App</Heading>
      <Link to="/confetti">
          <Button colorScheme="teal" variant="outline">Confetti Page</Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;