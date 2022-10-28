import React from "react";
import { connect } from "react-redux";
import CommentedHeading from "./partials/CommentedHeading";

import {
  Box,
  Heading,
  List,
  ListItem,
  ListIcon,
  Grid,
  GridItem,
  Flex,
  Image,
} from "@chakra-ui/react";

import { MdCheckCircle } from "react-icons/md";

class VolunteerExperience extends React.Component {
  renderDetails(details) {
    return details.map((detail, idx) => {
      return (
        <ListItem key={idx}>
          <ListIcon as={MdCheckCircle} color="green.500" />
          {detail}
        </ListItem>
      );
    });
  }

  renderCards() {
    return this.props.volunteerExperience.map((vE, idx) => {
      return (
        <GridItem
          rowSpan={1}
          colSpan={{ base: 3, md: idx === 0 || idx === 1 ? 2 : 1, sm: 2 }}
          marginTop={{ base: "1rem", md: "initial" }}
          key={idx}
        >
          <Box
            borderWidth="3px"
            borderRadius="lg"
            overflow="hidden"
            p={5}
            height="100%"
          >
            <Flex alignItems="center">
              <Image mr={2} borderRadius="full" boxSize="40px" src={vE.logo} />
              <Heading as="h4" size="md" color="blue.200">
                {vE.organization}
              </Heading>
            </Flex>
            <List spacing={1} fontSize={14} mt={3} mb={3}>
              {this.renderDetails(vE.details)}
            </List>
          </Box>
        </GridItem>
      );
    });
  }

  render() {
    return (
      <div>
        <CommentedHeading body="Volunteer Experience" />

        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
          display={{ base: "initial", md: "grid" }}
        >
          {this.renderCards()}
        </Grid>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return { volunteerExperience: state.data.volunteerExperience };
};

export default connect(mapStateToprops)(VolunteerExperience);
