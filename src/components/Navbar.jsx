import { Box, Heading, HStack } from "@chakra-ui/react";
import { Login } from "./Login";
import { Register } from "./Register";

export const Navbar = () => {
  return (
    <Box display="flex" w="full" justifyContent="space-between">
      <Heading>Ada Modal</Heading>
      <HStack>
        <Login />
        <Register />
      </HStack>
    </Box>
  );
};
