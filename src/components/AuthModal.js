import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Text,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="lg" boxShadow="lg">
        <ModalHeader textAlign="center">
          <Image src="/moodieslogo.png" alt="Pharmacy Logo" boxSize="70px" mx="auto" mb={2} />
          {isLogin ? "Login to Your Account" : "Sign Up for an Account"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="sm" textAlign="center" mb={4} textColor={"pink.600"}>
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
