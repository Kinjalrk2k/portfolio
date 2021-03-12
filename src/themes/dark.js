import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "dark",
  },
  fonts: {
    heading: "Jetbrains Mono",
    body: "Jetbrains Mono",
  },
});

export default theme;
