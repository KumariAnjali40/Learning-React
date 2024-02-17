import { Flex, Input, Button, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import React from "react";

const Login = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      color="white"
    >
      <Heading mb={6}>Welcome Back!</Heading>

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
        colorScheme="pink"
        size="lg"
        borderRadius="full"
        mt={4}
        _hover={{ bg: "white", color: "#7928CA" }}
      >
        Log In
      </Button>
    </Flex>
  );
};

export default Login;
