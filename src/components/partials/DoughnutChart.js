import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-labels";
// import randomColor from "randomcolor";

import "./DoughnutChart.css";

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

const DoughnutChart = (props) => {
  // const colors = randomColor({
  //   luminosity: "random",
  //   count: props.dataObj.length,
  //   hue: "random",
  // });

  const data = {
    labels: props.dataObj.map((d) => d.name),
    datasets: [
      {
        data: props.dataObj.map((d) => d.xp),
        backgroundColor: props.dataObj.map((d) => d.color),
      },
    ],
  };

  return (
    <div className="chartWrapper">
      <Doughnut
        data={data}
        options={{
          rotation: 0.75 * Math.PI,
          circumference: 1.5 * Math.PI,
          title: {
            display: true,
            position: "bottom",
            text: props.chartName,
            fontSize: 20,
            fontFamily: "Jetbrains Mono",
            fontColor: "#fff",
          },
          cutoutPercentage: 40,
          plugins: {
            labels: {
              position: "top",
              render: "label",
              fontColor: function (data) {
                var rgb = hexToRgb(data.dataset.backgroundColor[data.index]);
                var threshold = 140;
                var luminance = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
                return luminance > threshold ? "black" : "white";
              },
              fontSize: 15,
              fontFamily: "Jetbrains Mono",
            },
            position: "outside",
          },
          tooltips: {
            enabled: false,
          },
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
};

export default DoughnutChart;
