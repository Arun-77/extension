import { render, screen } from "@testing-library/react";
import App from "@pages/content/components/Demo/app";
import { ChakraProvider } from "@chakra-ui/react";

describe("appTest", () => {
  test("render text", () => {
    // given
    const text = "content view";

    // when
    render(
      <ChakraProvider>
        <App />
      </ChakraProvider>
    );

    // then
    screen.getByText(text);
  });
});
