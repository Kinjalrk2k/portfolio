import React from "react";
import { connect } from "react-redux";
import CommentedHeading from "./partials/CommentedHeading";

import {
  Box,
  Heading,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  Flex,
  Image,
} from "@chakra-ui/react";

import { MdCheckCircle } from "react-icons/md";

class VolunteerExperience extends React.Component {
  renderDetails(details) {
    return details.map((detail) => {
      return (
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          {detail}
        </ListItem>
      );
    });
  }

  renderCards() {
    return this.props.volunteerExperience.map((vE) => {
      return (
        <Box className="shadowThis" borderRadius="lg" overflow="hidden" p={5}>
          <Flex alignItems="center">
            <Image mr={2} borderRadius="full" boxSize="40px" src={vE.logo} />
            <Heading as="h4" size="md">
              {vE.organization}
            </Heading>
          </Flex>
          <List spacing={1} fontSize={14} mt={3} mb={3}>
            {this.renderDetails(vE.details)}
          </List>
        </Box>
      );
    });
  }

  render() {
    return (
      <div>
        <CommentedHeading body="Volunteer Experience" />

        <SimpleGrid minChildWidth="300px" spacingX={20} spacingY={10}>
          {this.renderCards()}
        </SimpleGrid>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return { volunteerExperience: state.data.volunteerExperience };
};

export default connect(mapStateToprops)(VolunteerExperience);
