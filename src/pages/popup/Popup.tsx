import React, { useEffect } from "react";
import "@pages/popup/Popup.css";
import { Box, Heading, Button, Text } from "@chakra-ui/react";

const Popup = () => {
  useEffect(() => {
    fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
      .then((data) => data.json())
      .then((quoteData) => {
        const quoteText = quoteData.quotes[0].text;
        const quoteElement = document.getElementById("quotePopup");

        quoteElement.innerHTML = quoteText;
      });
  });

  return (
    <Box className="App" color="white">
      <Heading>Quote A Day</Heading>
      <Text>Hi buddies</Text>
      <Text id="quotePopup"></Text>
    </Box>
  );
};

export default Popup;
