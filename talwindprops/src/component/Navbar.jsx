import { Box, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <Box bg="teal" p={4}>
      <Flex align="center" maxW="800px" m="auto">
        <Link to="/" color="white" fontSize="xl" fontWeight="bold" mr={4}>
          Home
        </Link>
        <Link to="/login" color="white" fontSize="xl" fontWeight="bold" mr={4}>
          Login
        </Link>
        <Link to="/signup" color="white" fontSize="xl" fontWeight="bold">
          Signup
        </Link>
        <Spacer />
        {/* Add any additional elements on the right side of the Navbar */}
      </Flex>
    </Box>
  );
};

export default Navbar;
