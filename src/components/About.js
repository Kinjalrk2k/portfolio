import React from "react";
import {
  Heading,
  Image,
  Flex,
  Spacer,
  Box,
  Text,
  Center,
} from "@chakra-ui/react";

import CommentedHeading from "./partials/CommentedHeading";

const About = (props) => {
  return (
    <div>
      <CommentedHeading body="About Me" />
      <Flex direction={{ base: "column", md: "row" }}>
        <Box order={{ base: 2, md: 0 }}>
          <Heading
            as="h1"
            size="3xl"
            color="orange.500"
            mt="2"
            textAlign={{ base: "center", md: "left" }}
          >
            {props.name}
          </Heading>
          <Heading color="green.400" mt="3" mb="5">
            {props.designation}
          </Heading>
          <Text color="red.100" align="justify">
            {props.summary}
          </Text>
        </Box>
        <Spacer />
        <Center w="100%">
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://avatars.githubusercontent.com/u/34955854?s=460&u=fe89bd3d58fff60867dc0937fe3017b253399954&v=4"
            alt="Segun Adebayo"
          />
        </Center>
      </Flex>
    </div>
  );
};

export default About;
