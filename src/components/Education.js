import React from "react";

import CommentedHeading from "./partials/CommentedHeading";

import { Flex, Box, Spacer, Heading, Text } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { FaSchool, FaUniversity } from "react-icons/fa";

const Education = () => {
  return (
    <div className="section">
      <CommentedHeading body="Education" />
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
      >
        <Box w={{ base: "100%", md: "40%" }}>
          <Box display="flex" mb={3}>
            <h1 className="eduLogo">
              <FaSchool
                style={{ fontSize: "xxx-large", marginRight: "30px" }}
              />
            </h1>
            <Heading as="h3" size="lg">
              B.D.M. International
            </Heading>
          </Box>
          <Text color="gray.500" mb={2}>
            AISCE(2016) | AISSCE(2018)
          </Text>
          <Text>
            Basic Studies till Class X, followed by Science (Physics, Chemistry,
            Mathematics, Computer Science) in Classes XI and XII
          </Text>
        </Box>

        <Spacer />

        <Box m={{ base: 5 }}>
          <ArrowForwardIcon
            w={10}
            h={10}
            display={{ base: "none", md: "flex" }}
          />
          <ArrowDownIcon w={10} h={10} display={{ base: "flex", md: "none" }} />
        </Box>

        <Spacer />

        <Box w={{ base: "100%", md: "40%" }}>
          <Box display="flex" mb={3}>
            <Heading as="h3" size="lg" textAlign="right">
              University of Engineering and Management
            </Heading>
            <h1 className="eduLogo">
              <FaUniversity
                style={{ fontSize: "xxx-large", marginLeft: "30px" }}
              />
            </h1>
          </Box>
          <Text textAlign="right" color="gray.500" mb={2}>
            2018 - 2022
          </Text>
          <Text textAlign="right">
            Pursuing Bachelor of Techonology in Computer Science Engineering
          </Text>
        </Box>
      </Flex>
    </div>
  );
};

export default Education;
