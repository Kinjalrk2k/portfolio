import React from "react";
import { connect } from "react-redux";

import CommentedHeading from "./partials/CommentedHeading";

import { Flex, Box, Spacer, Heading, Text } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { FaSchool, FaUniversity } from "react-icons/fa";

const Education = (props) => {
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
              {props.education.school.name}
            </Heading>
          </Box>
          <Text color="gray.500" mb={2}>
            {props.education.school.period}
          </Text>
          <Text>{props.education.school.details}</Text>
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
              {props.education.college.name}
            </Heading>
            <h1 className="eduLogo">
              <FaUniversity
                style={{ fontSize: "xxx-large", marginLeft: "30px" }}
              />
            </h1>
          </Box>
          <Text textAlign="right" color="gray.500" mb={2}>
            {props.education.college.period}
          </Text>
          <Text textAlign="right">{props.education.college.details}</Text>
        </Box>
      </Flex>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { education: state.data.education };
};

export default connect(mapStateToProps)(Education);
