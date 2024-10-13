// LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Performance",
        data: data.values,
        borderColor: "#9BEC00",
        backgroundColor: "rgba(155, 236, 0, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Value: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
