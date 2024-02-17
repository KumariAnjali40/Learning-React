import { Flex, Input, Button, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import React from "react";

const Signup = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      bgGradient="linear(to-l, #ff5858, #f857a6)"
      color="white"
    >
      <Heading mb={6}>Create an Account</Heading>

      <FormControl>
        <FormLabel htmlFor="name">Full Name</FormLabel>
        <Input
          type="text"
          id="name"
          placeholder="Enter your full name"
          size="lg"
          mb={4}
          borderRadius="full"
          _focus={{ borderColor: "white" }}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          type="email"
          id="email"
          placeholder="Enter your email"
          size="lg"
          mb={4}
          borderRadius="full"
          _focus={{ borderColor: "white" }}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          type="password"
          id="password"
          placeholder="Enter your password"
          size="lg"
          mb={4}
          borderRadius="full"
          _focus={{ borderColor: "white" }}
        />
      </FormControl>

      <Button
        colorScheme="purple"
        size="lg"
        borderRadius="full"
        mt={4}
        _hover={{ bg: "white", color: "#ff5858" }}
      >
        Sign Up
      </Button>
    </Flex>
  );
};

export default Signup;
