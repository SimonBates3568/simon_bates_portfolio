import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import QRCode from 'qrcode.react';

const QrCode = ({ value, size = 128, bgColor = "#ffffff", fgColor = "#000000", padding = 10 }) => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={5}>
            <Box p={padding} bg={bgColor}>
                <QRCode value={value} size={size} bgColor={bgColor} fgColor={fgColor} />
            </Box>
            <Text mt={2}>My GitHub</Text>
        </Box>
    );
};

export default QrCode;