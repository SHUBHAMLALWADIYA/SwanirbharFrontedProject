import { useState } from "react";
import { Box, Button, Input, Select, FormControl, FormLabel, Heading, Text, VStack, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState(""); // State for user role
    const [error, setError] = useState("");
    const toast = useToast();
    const navigate = useNavigate(); // Use navigate hook

    const handleSignup = () => {
        // Regular expression to validate email format
        // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
        // // Check if email matches the required format
        // if (!emailRegex.test(email)) {
        //     setError("Invalid email format");
        //     return;
        // }
    
        // Check if username and password are valid
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
    
        // Check if role is selected
        if (!role) {
            setError("Please select a role");
            return;
        }
    
        // Save signup data to local storage
        const userData = {
            email,
            username,
            password,
            role
        };
        localStorage.setItem('userData', JSON.stringify(userData));
    
        // Successful signup logic (for demonstration purposes)
        console.log("Signup successful");
        toast({
            title: "Signup successful.",
            description: "You have successfully signed up.",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
    
        // Navigate to login page after successful signup
        navigate("/login");
    };
    

    return (
        <Box
            maxW="sm"
            mx="auto"
            mt="8"
            p="6"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            backgroundColor="white"
            
        >
            <VStack spacing={0.2}>
                <Heading as="h1" size="lg" mb="2" color="teal.500">
                    Signup
                </Heading>
                <Text fontSize="lg" mb="2" color="gray.500">
                    Create a new account
                </Text>
                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        borderColor="teal.300"
                        _hover={{ borderColor: "teal.400" }}
                    />
                </FormControl>
                <FormControl id="username" isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        borderColor="teal.300"
                        _hover={{ borderColor: "teal.400" }}
                    />
                </FormControl>
                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        borderColor="teal.300"
                        _hover={{ borderColor: "teal.400" }}
                    />
                </FormControl>
                <FormControl id="confirm-password" isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        borderColor="teal.300"
                        _hover={{ borderColor: "teal.400" }}
                    />
                </FormControl>
                <FormControl id="role" isRequired>
                    <FormLabel>Role</FormLabel>
                    <Select
                        placeholder="Select your role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        borderColor="teal.300"
                        _hover={{ borderColor: "teal.400" }}
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
                    <Box mt="4" color="red.500">
                        {error}
                    </Box>
                )}
            </VStack>
        </Box>
    );
};

export default Signup;
