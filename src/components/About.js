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

const About = () => {
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
            Kinjal Raykarmakar
          </Heading>
          <Heading color="green.400" mt="3" mb="5">
            Backend Developer
          </Heading>
          <Text color="red.100" align="justify">
            After done being an Undergrad Engineering student of the Junior
            (3rd) Year, I love to solve problems through developing software.
            I'm always exploring new ways and technologies. Digging code,
            laughing at memes and writing my personal journal are constants from
            the universal set of hobbies! Physics and Space make me nerdy.
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
