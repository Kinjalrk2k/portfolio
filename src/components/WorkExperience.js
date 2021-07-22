import React from "react";
import { connect } from "react-redux";
import CommentedHeading from "./partials/CommentedHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import {
  Box,
  Heading,
  Text,
  Badge,
  List,
  ListItem,
  ListIcon,
  Button,
  Link,
  Flex,
  Image,
  LinkOverlay,
} from "@chakra-ui/react";

import { AiFillApi } from "react-icons/ai";
import { MdCheckCircle, MdWork } from "react-icons/md";
import * as si from "react-icons/si";

class WorkExperience extends React.Component {
  onGoingBadge(work) {
    if (work.isOngoing) {
      return (
        <Badge fontSize="0.7em" ml={2} p={2} colorScheme="purple">
          Ongoing
        </Badge>
      );
    }
    return null;
  }

  renderDetailsList(details, color) {
    return details.map((detail) => {
      return (
        <ListItem color={color}>
          <ListIcon as={MdCheckCircle} color="green.500" />
          {detail}
        </ListItem>
      );
    });
  }

  renderTech(tech) {
    return tech.map((t) => {
      return (
        <div style={{ marginLeft: "15px" }}>{React.createElement(si[t])}</div>
      );
    });
  }

  renderPositionList(work, color) {
    return work.positions.map((pos) => {
      return (
        <div>
          <Text fontSize="xl" color="#718096">
            {pos.designation}
            <br />
            {pos.date}
          </Text>

          <List spacing={1} fontSize={14} mt={3} mb={3}>
            {this.renderDetailsList(pos.details, color)}
          </List>

          <Heading
            as="h5"
            fontSize={20}
            color="#4A5568"
            d="flex"
            justifyContent="flex-end"
          >
            {this.renderTech(pos.tech)}
          </Heading>
        </div>
      );
    });
  }

  renderWorkList() {
    const headingColors = [
      "cyan.300",
      "green.300",
      "blue.300",
      "yellow.300",
      "purple.300",
    ];

    const detailsColors = [
      "cyan.100",
      "green.100",
      "blue.100",
      "yellow.100",
      "purple.100",
    ];

    return this.props.workExperience.map((work, idx) => {
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentArrowStyle={{ borderRight: "7px solid  #4A5568" }}
          contentStyle={{ backgroundColor: "#171923" }}
          iconStyle={{ background: "#171923", color: "#fff" }}
          icon={<MdWork />}
        >
          <div style={{ marginBottom: "15px" }}>
            <Flex alignItems="center">
              <Image
                mr={2}
                // borderRadius="full"
                boxSize="40px"
                src={work.logo}
              />
              <Heading
                as="h3"
                size="lg"
                color={headingColors[idx % headingColors.length]}
              >
                {work.organization}
                {this.onGoingBadge(work)}
              </Heading>
            </Flex>
          </div>

          {this.renderPositionList(
            work,
            detailsColors[idx % headingColors.length]
          )}
        </VerticalTimelineElement>
      );
    });
  }

  render() {
    console.log(this.props.workExperience);
    return (
      <div>
        <CommentedHeading body="Work Experience" />
        <VerticalTimeline animate={false}>
          {this.renderWorkList()}
        </VerticalTimeline>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return { workExperience: state.data.workExperience };
};

export default connect(mapStateToprops)(WorkExperience);
