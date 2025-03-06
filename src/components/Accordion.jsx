import { Accordion as ChakraAccordion } from "@chakra-ui/react"
import React from "react";
import { AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from "@chakra-ui/react";

const CustomAccordion = () => {
    return (
        <ChakraAccordion allowToggle>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex="1" textAlign="left">
                            Section 1
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Content for section 1
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex="1" textAlign="left">
                            Section 2
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Content for section 2
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default CustomAccordion;