import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Notifications = ({ notifications }) => {
    return (
        <Box>
            <Text fontSize="xl" fontWeight="bold" mb="4">Notifications</Text>
            {notifications && notifications.map((notification, index) => (
                <Box key={index} bg="gray.100" p="2" mb="2" borderRadius="md">
                    <Text>{notification.message}</Text>
                </Box>
            ))}
        </Box>
    );
};

export default Notifications;
