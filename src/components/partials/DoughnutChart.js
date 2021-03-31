import { connect } from "react-redux";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = (props) => {
  return (
    <Doughnut
      data={props.data}
      options={{
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        title: {
          display: true,
          position: "bottom",
          text: "My Chart",
          fontSize: 50,
          fontFamily: "Jetbrains Mono",
        },
        legend: {
          display: true,
          position: "bottom",
          text: "My Chart",
          fontFamily: "Jetbrains Mono",
        },
      }}
    />
  );
};

export default DoughnutChart;
