import React from "react";
import { connect } from "react-redux";

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
    <div id="about">
      <CommentedHeading body="About Me" />
      <Flex direction={{ base: "column" }}>
        <Box order={{ base: 2 }}>
          <Heading
            as="h1"
            size="2xl"
            color="orange.500"
            mt="2"
            textAlign={{ base: "center" }}
          >
            {props.about.name}
          </Heading>
          <Heading
            color="green.400"
            mt="3"
            mb="5"
            textAlign={{ base: "center" }}
          >
            {props.about.designation}
          </Heading>
          <Text color="red.100" align="justify">
            {props.about.summary}
          </Text>
        </Box>
        <Spacer />
        <Center w="100%">
          <Image
            borderRadius="full"
            boxSize="300px"
            src={props.about.profilePic}
            alt={props.about.name}
            style={{ zIndex: 100 }}
          />
        </Center>
      </Flex>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { about: state.data.about };
};

export default connect(mapStateToProps)(About);
