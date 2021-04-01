import React from "react";
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
import { MdCheckCircle } from "react-icons/md";

const WorkExperience = (props) => {
  return (
    <div>
      <CommentedHeading body="Work Experience" />
      <VerticalTimeline animate={false}>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentArrowStyle={{ borderRight: "7px solid  #4A5568" }}
          contentStyle={{ backgroundColor: "#171923" }}
          iconStyle={{ background: "#171923", color: "#fff" }}
          icon={<AiFillApi />}
        >
          <div style={{ marginBottom: "15px" }}>
            <Heading as="h3" size="lg">
              UNIGO Cabs{" "}
              <Badge fontSize="0.7em" colorScheme="purple">
                Ongoing
              </Badge>
            </Heading>
            <Text fontSize="xl" color="#718096">
              Backend Developer
            </Text>
          </div>

          <List spacing={1} style={{ marginBottom: "15px" }}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Developing Backend APIs for Android app
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Managing and maintaining Databases
            </ListItem>
          </List>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;
