import React from "react";
import { Text } from "@chakra-ui/react";

const CommentedHeading = (props) => {
  return (
    <Text
      color="gray.500"
      align={{ base: "center", md: "left" }}
      mb={5}
      mt={10}
      fontSize="lg"
      // as="i"
      style={{ fontWeight: 800 }}
    >
      /* {props.body} */
    </Text>
  );
};

export default CommentedHeading;
