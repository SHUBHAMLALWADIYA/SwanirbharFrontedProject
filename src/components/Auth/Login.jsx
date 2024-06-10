import { useContext, useState } from "react";
import { Box, Button, Input, FormControl, FormLabel, Heading, Text, VStack, useToast, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { LoginlogoutContext } from "../../context/LoginlogoutContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const toast = useToast();
    const navigate = useNavigate();
    const { toggle, setToggle } = useContext(LoginlogoutContext);

    const handleLogin = () => {
        const storedUserData = JSON.parse(localStorage.getItem("userData"));
        if (storedUserData) {
            const { username: storedUsername, password: storedPassword } = storedUserData;

            if (username === storedUsername && password === storedPassword) {
                console.log("Login successful");
                toast({
                    title: "Login successful.",
                    description: "You have successfully logged in.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
                localStorage.setItem("login", "true");
                setToggle(true);
                navigate("/");
            } else {
                setError("Invalid username or password");
            }
        } else {
            setError("No user found. Please sign up first.");
        }
    };

    const boxBg = useColorModeValue('white', 'gray.700');
    const headingColor = useColorModeValue('blue.500', 'blue.200');
    const textColor = useColorModeValue('gray.500', 'gray.300');
    const inputBorderColor = useColorModeValue('blue.300', 'blue.500');
    const inputHoverBorderColor = useColorModeValue('blue.400', 'blue.600');
    const errorColor = useColorModeValue('red.500', 'red.300');

    return (
        <Box
            maxW="sm"
            mx="auto"
            mt="8"
            p="6"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            bg={boxBg}
        >
            <VStack spacing={3}>
                <Heading as="h1" size="lg" mb="6" color={headingColor}>
                    Login
                </Heading>
                <Text fontSize="lg" mb="4" color={textColor}>
                    Welcome back! Please login to continue.
                </Text>
                <FormControl id="username">
                    <FormLabel>Username</FormLabel>
                    <Input
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        borderColor={inputBorderColor}
                        _hover={{ borderColor: inputHoverBorderColor }}
                    />
                </FormControl>
                <FormControl id="password">
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
                <Button
                    colorScheme="blue"
                    onClick={handleLogin}
                    width="full"
                    mt="4"
                >
                    Login
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

export default Login;
