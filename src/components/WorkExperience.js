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
  LinkOverlay,
} from "@chakra-ui/react";

import { AiFillApi } from "react-icons/ai";
import { MdCheckCircle, MdWork } from "react-icons/md";

class WorkExperience extends React.Component {
  onGoingBadge(work) {
    if (work.isOngoing) {
      return (
        <Badge fontSize="0.7em" ml={2} colorScheme="purple">
          Ongoing
        </Badge>
      );
    }
    return null;
  }

  renderDetailsList(details) {
    return details.map((detail) => {
      return (
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          {detail}
        </ListItem>
      );
    });
  }

  renderPositionList(work) {
    return work.positions.map((pos) => {
      return (
        <div>
          <Text fontSize="xl" color="#718096">
            {pos.designation}
          </Text>
          <List spacing={1} fontSize={14}>
            {this.renderDetailsList(pos.details)}
          </List>
        </div>
      );
    });
  }

  renderWorkList() {
    return this.props.workExperience.map((work) => {
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentArrowStyle={{ borderRight: "7px solid  #4A5568" }}
          contentStyle={{ backgroundColor: "#171923" }}
          iconStyle={{ background: "#171923", color: "#fff" }}
          icon={<MdWork />}
        >
          <div style={{ marginBottom: "15px" }}>
            <Heading as="h3" size="lg">
              {work.organization}
              {this.onGoingBadge(work)}
            </Heading>
          </div>

          {this.renderPositionList(work)}
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
