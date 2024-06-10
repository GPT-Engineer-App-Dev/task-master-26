import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="brand.800" w="100%" p={4} color="white" mt="auto">
      <Flex align="center" justify="center">
        <Text>© 2023 Todo App. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;