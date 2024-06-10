import { useState } from "react";
import { Box, Button, Textarea, FormControl, FormLabel, Avatar, Text } from "@chakra-ui/react";

const UserProfile = ({ user }) => {
    const [editing, setEditing] = useState(false);
    const [newUsername, setNewUsername] = useState(user?.username || '');
    const [newEmail, setNewEmail] = useState(user?.email || '');

    const handleSave = () => {
        // Save changes logic
        console.log("Changes saved:", { newUsername, newEmail });
        setEditing(false);
    };

    return (
        <Box p="4" border="1px solid #E2E8F0" borderRadius="lg" maxW="md" mx="auto" mt={20}>
            <Avatar name={user?.username} src={user?.avatar} mb="4" />
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Textarea
                    value={editing ? newUsername : user?.username}
                    onChange={(e) => setNewUsername(e.target.value)}
                    disabled={!editing}
                />
            </FormControl>
            <FormControl mt="4">
                <FormLabel>Email</FormLabel>
                <Textarea
                    value={editing ? newEmail : user?.email}
                    onChange={(e) => setNewEmail(e.target.value)}
                    disabled={!editing}
                />
            </FormControl>
            {editing && (
                <Button colorScheme="blue" onClick={handleSave} mt="4" mr="2">
                    Save
                </Button>
            )}
            <Button colorScheme={editing ? "gray" : "blue"} onClick={() => setEditing(!editing)} mt="4">
                {editing ? "Cancel" : "Edit"}
            </Button>
            {!editing && (
                <Text mt="4" fontSize="sm" color="gray.500">
                    Click on Edit to update your profile information
                </Text>
            )}
        </Box>
    );
};

export default UserProfile;
