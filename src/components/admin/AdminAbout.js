import React from "react";
import { Box, Text } from "@chakra-ui/react";

class AdminAbout extends React.Component {
  render() {
    return (
      <Box p="6" m={3} borderWidth={2} borderRadius={10}>
        <Text fontSize="3xl" textAlign="center">
          About
        </Text>
      </Box>
    );
  }
}

export default AdminAbout;
