import React from "react";
import { connect } from "react-redux";

import CommentedHeading from "./partials/CommentedHeading";
import DoughnutChart from "./partials/DoughnutChart";

import { Wrap } from "@chakra-ui/react";

const Skills = (props) => {
  return (
    <div className="section">
      <CommentedHeading body="Skills" />
      <Wrap style={{ justifyContent: "center" }}>
        <DoughnutChart dataObj={props.skills.backend} chartName={"Backend"} />
        <DoughnutChart dataObj={props.skills.database} chartName={"Database"} />
        <DoughnutChart dataObj={props.skills.frontend} chartName={"Frontend"} />
        <DoughnutChart dataObj={props.skills.python} chartName={"Python"} />
        <DoughnutChart dataObj={props.skills.others} chartName={"Others"} />
      </Wrap>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { skills: state.data.skills };
};

export default connect(mapStateToProps)(Skills);
