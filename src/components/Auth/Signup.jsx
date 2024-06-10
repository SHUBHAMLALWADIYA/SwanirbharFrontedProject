import { useState } from "react";
import { Box, Button, Input, Select, FormControl, FormLabel, Heading, Text, VStack, useToast, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("");
    const [error, setError] = useState("");
    const toast = useToast();
    const navigate = useNavigate();

    const handleSignup = () => {
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (!role) {
            setError("Please select a role");
            return;
        }

        const userData = {
            email,
            username,
            password,
            role
        };
        localStorage.setItem('userData', JSON.stringify(userData));

        toast({
            title: "Signup successful.",
            description: "You have successfully signed up.",
            status: "success",
            duration: 5000,
            isClosable: true,
        });

        navigate("/login");
    };

    const boxBg = useColorModeValue('white', 'gray.700');
    const headingColor = useColorModeValue('teal.500', 'teal.200');
    const textColor = useColorModeValue('gray.500', 'gray.300');
    const inputBorderColor = useColorModeValue('teal.300', 'teal.500');
    const inputHoverBorderColor = useColorModeValue('teal.400', 'teal.600');
    const errorColor = useColorModeValue('red.500', 'red.300');

    return (
        <Box
            maxW="sm"
            mx="auto"
            mt="20"
            p="6"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            bg={boxBg}
        >
            <VStack spacing={0.2}>
                <Heading as="h1" size="lg" mb="2" color={headingColor}>
                    Signup
                </Heading>
                <Text fontSize="lg" mb="2" color={textColor}>
                    Create a new account
                </Text>
                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        borderColor={inputBorderColor}
                        _hover={{ borderColor: inputHoverBorderColor }}
                    />
                </FormControl>
                <FormControl id="username" isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        borderColor={inputBorderColor}
                        _hover={{ borderColor: inputHoverBorderColor }}
                    />
                </FormControl>
                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        borderColor={inputBorderColor}
                        _hover={{ borderColor: inputHoverBorderColor }}
                    />
                </FormControl>
                <FormControl id="confirm-password" isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        borderColor={inputBorderColor}
                        _hover={{ borderColor: inputHoverBorderColor }}
                    />
                </FormControl>
                <FormControl id="role" isRequired>
                    <FormLabel>Role</FormLabel>
                    <Select
                        placeholder="Select your role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        borderColor={inputBorderColor}
                        _hover={{ borderColor: inputHoverBorderColor }}
                    >
                        <option value="student">Student</option>
                        <option value="admin">Admin</option>
                    </Select>
                </FormControl>
                <Button
                    colorScheme="teal"
                    onClick={handleSignup}
                    width="full"
                    mt="4"
                >
                    Signup
                </Button>
                {error && (
                    <Box mt="4" color={errorColor}>
                        {error}
                    </Box>
                )}
            </VStack>
        </Box>
    );
};

export default Signup;

