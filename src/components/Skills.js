import React from "react";
import { connect } from "react-redux";
import { Doughnut } from "react-chartjs-2";

import CommentedHeading from "./partials/CommentedHeading";
import DoughnutChart from "./partials/DoughnutChart";

const randomColors = (n) => {
  const colors = [];
  for (let j = 0; j < n; j++) {
    const letters = "0123456789ABCDEF".split("");
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    colors.push(color);
  }

  return colors;
};

const data = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: randomColors(3),
    },
  ],
};

const Skills = (props) => {
  return (
    <div className="section">
      <CommentedHeading body="Skills" />
      <DoughnutChart data={data} />
    </div>
  );
};

export default Skills;
