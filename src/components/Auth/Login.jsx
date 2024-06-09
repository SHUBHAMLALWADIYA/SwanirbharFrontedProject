import { useContext, useState } from "react";
import { Box, Button, Input, FormControl, FormLabel, Heading, Text, VStack, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { LoginlogoutContext } from "../../context/LoginlogoutContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const toast = useToast();
    const navigate = useNavigate();
    const {toggle,setToggle}=useContext(LoginlogoutContext)

//     const handleLogin = () => {
//         // Retrieve username and password from local storage
//         const storedUsername = JSON.parse(localStorage.getItem("userData")).username;
//         const storedPassword = JSON.parse(localStorage.getItem("userData")).password;
// console.log("pass : ",storedPassword,"  username :",storedUsername)
//         // Check if entered username and password match the stored values
//         if (username === storedUsername && password === storedPassword) {
//             // Successful login logic (for demonstration purposes)
//             console.log("Login successful");
//             toast({
//                 title: "Login successful.",
//                 description: "You have successfully logged in.",
//                 status: "success",
//                 duration: 5000,
//                 isClosable: true,
//             });
//             setToggle(true)
//             localStorage.setItem("login",true)
//             console.log(localStorage.getItem("login"))
//             navigate("/"); // Redirect to homepage after login
//         } else {
//             setError("Invalid username or password");
//         }
//     };
const handleLogin = () => {
    // Retrieve username and password from local storage
    const storedUsername = JSON.parse(localStorage.getItem("userData")).username;
    const storedPassword = JSON.parse(localStorage.getItem("userData")).password;

    // Check if entered username and password match the stored values
    if (username === storedUsername && password === storedPassword) {
        // Successful login logic
        console.log("Login successful");
        toast({
            title: "Login successful.",
            description: "You have successfully logged in.",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
        localStorage.setItem("login", "true"); // Store login state
        setToggle(true); // Update login state in context
        navigate("/"); // Redirect to homepage
    } else {
        setError("Invalid username or password");
    }
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
            <VStack spacing={3}>
                <Heading as="h1" size="lg" mb="6" color="blue.500">
                    Login
                </Heading>
                <Text fontSize="lg" mb="4" color="gray.500">
                    Welcome back! Please login to continue.
                </Text>
                <FormControl id="username">
                    <FormLabel>Username</FormLabel>
                    <Input
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        borderColor="blue.300"
                        _hover={{ borderColor: "blue.400" }}
                    />
                </FormControl>
                <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        borderColor="blue.300"
                        _hover={{ borderColor: "blue.400" }}
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
                    <Box mt="4" color="red.500">
                        {error}
                    </Box>
                )}
            </VStack>
        </Box>
    );
};

export default Login;
