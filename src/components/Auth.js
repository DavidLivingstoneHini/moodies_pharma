import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <Image src="/moodieslogo.png" alt="Pharmacy Logo" boxSize="70px" mx="auto" mb={4} />
      <Heading as="h2" size="lg" textAlign="center" mb={4}>
        {isLogin ? "Login to Your Account" : "Sign Up for an Account"}
      </Heading>
      <Text fontSize="sm" textAlign="center" mb={4} color="pink.600">
        {isLogin ? "Welcome back! Please sign in to continue." : "Join us today! Create your account to get started."}
      </Text>
      <Stack spacing={4}>
        <FormControl id="email" isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        {!isLogin && (
          <FormControl id="phone-number" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input type="text" placeholder="Enter your phone number" />
          </FormControl>
        )}
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>
        {!isLogin && (
          <FormControl id="confirm-password" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" placeholder="Confirm your password" />
          </FormControl>
        )}
        <Button colorScheme="green" width="full">
          {isLogin ? "Login" : "Sign Up"}
        </Button>
        <Text textAlign="center" onClick={toggleForm} cursor="pointer" color="green.500">
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </Text>
      </Stack>
    </Box>
  );
};

export default AuthPage;
