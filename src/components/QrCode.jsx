import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import QRCode from 'qrcode.react';

const QrCode = ({ value, size = 128, bgColor = "#ffffff", fgColor = "#000000", padding = 10, logoUrl, logoSize = 30 }) => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={5} position="relative">
            <Box p={padding} bg={bgColor} position="relative">
                <QRCode value={value} size={size} bgColor={bgColor} fgColor={fgColor} renderAs="svg" />
                {logoUrl && (
                    <Image
                        src={logoUrl}
                        alt="Logo"
                        boxSize={`${logoSize}px`}
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                    />
                )}
            </Box>
            <Text mt={2}>My GitHub</Text>
        </Box>
    );
};

export default QrCode;