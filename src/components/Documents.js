import React from "react";
import { connect } from "react-redux";

import { Flex, Button, Link } from "@chakra-ui/react";

import CommentedHeading from "./partials/CommentedHeading";
import { FaExternalLinkAlt } from "react-icons/fa";

const Documents = (props) => {
  return (
    <div>
      <CommentedHeading body="Documents" />
      {props.documents.map((document) => (
        <Flex direction={{ base: "row" }} justifyContent="center">
          <Link href={document.link} isExternal>
            <Button
              colorScheme="orange"
              variant="outline"
              size="lg"
              rightIcon={<FaExternalLinkAlt />}
            >
              {document.name}
            </Button>
          </Link>
        </Flex>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { documents: state.data.documents };
};

export default connect(mapStateToProps)(Documents);
