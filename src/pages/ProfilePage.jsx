import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Button, Input, FormControl, FormLabel, Flex, Spacer, Center } from '@chakra-ui/react';

const ProfilePage = () => {
    const [user, setUser] = useState({ username: '', email: '' });
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        // Retrieve user data from local storage
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            setUser(userData);
            setUsername(userData.username);
            setEmail(userData.email);
        }
    }, []);

    const handleSave = (e) => {
        e.preventDefault();
        // Save changes logic
        setEditing(false);
        console.log('Changes saved:', { username, email });

        // Update local storage with the new user data
        const updatedUserData = { ...user, username, email };
        localStorage.setItem('userData', JSON.stringify(updatedUserData));
        setUser(updatedUserData); // Update the user state with the new data
    };

    return (
        <Center>
            <Box borderWidth="1px" borderRadius="lg" p="6" maxW="xl" mt="8">
                <Heading as="h1" fontSize="3xl" textAlign="center">User Profile</Heading>
                <Box mt="8">
                    {editing ? (
                        <form onSubmit={handleSave}>
                            <FormControl>
                                <FormLabel>Username</FormLabel>
                                <Input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </FormControl>
                            <FormControl mt="4">
                                <FormLabel>Email</FormLabel>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormControl>
                            <Button type="submit" colorScheme="teal" mt="4">Save</Button>
                        </form>
                    ) : (
                        <Box>
                            <Flex direction="column" mb="4">
                                <Text fontSize="xl" fontWeight="bold" mb="2">Username</Text>
                                <Text>{user.username || 'No username available'}</Text>
                            </Flex>
                            <Spacer />
                            <Flex direction="column">
                                <Text fontSize="xl" fontWeight="bold" mb="2">Email</Text>
                                <Text>{user.email || 'No email available'}</Text>
                            </Flex>
                        </Box>
                    )}
                </Box>
                <Center mt="8">
                    <Button colorScheme="blue" onClick={() => setEditing(!editing)}>
                        {editing ? 'Cancel' : 'Edit Profile'}
                    </Button>
                </Center>
            </Box>
        </Center>
    );
};

export default ProfilePage;
