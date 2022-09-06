import { useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function App() {
  useEffect(() => {
    console.log("content view loaded");
  }, []);

  return (
    <Box className="content-view" textAlign="center" bg="lightcoral">
      <Heading as="h1">This is Content - view</Heading>
      <Heading as="h3">
        This Extension will inject the any additional content into the page that
        matches the url in content_scripts
      </Heading>
      <Text id="jokeElement" fontSize="20px"></Text>
    </Box>
  );
}
