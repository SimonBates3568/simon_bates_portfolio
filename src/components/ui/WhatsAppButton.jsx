import { Button } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    const phoneNumber = "0628855680"; // Your phone number
    const message = encodeURIComponent("Hello! I’d like to chat with you.");
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <Button 
            as="a" 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            leftIcon={<FaWhatsapp />} 
            colorScheme="green"
        >
            Chat on WhatsApp
        </Button>
    );
};

export default WhatsAppButton;
