import { useState } from "react";
import axios from "axios";
import { Box, Input, Button, VStack, Text, Spinner } from "@chakra-ui/react";

const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: "Hi! Ask me anything.", sender: "bot" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "system", content: "You are a helpful chatbot answering questions about my portfolio." }, 
                     { role: "user", content: input }],
        },
        {
          headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const botResponse = response.data.choices[0].message.content;
      setMessages([...newMessages, { text: botResponse, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages([...newMessages, { text: "Oops! Something went wrong.", sender: "bot" }]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <Box p={4} w="400px" borderWidth="1px" borderRadius="lg" bg="black.50">
      <VStack align="stretch" spacing={3}>
        {messages.map((msg, i) => (
          <Text key={i} bg={msg.sender === "bot" ? "black.100" : "blue.100"} p={2} borderRadius="md">
            {msg.text}
          </Text>
        ))}
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me something..."
        />
        <Button onClick={sendMessage} colorScheme="blue" isDisabled={loading}>
          {loading ? <Spinner size="sm" /> : "Send"}
        </Button>
      </VStack>
    </Box>
  );
};

export default Chatbot;
