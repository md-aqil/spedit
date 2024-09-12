'use client'
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const PnLCurve = () => {
  // Sample data for PnL curve
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "PnL Curve",
        data: [12000, 14500, 16500, 11000, 19500, 21500, 17500, 22500, 23500, 24500],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4, // Smoother curve
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `PnL: ${context.raw.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "PnL (INR)",
        },
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0,
            });
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col self-stretch p-5 text-xl font-bold bg-white rounded-xl shadow-sm w-full">
      <div className="gap-2 self-start px-9 max-md:px-5">PnL Curve</div>
      <div className="mt-6 w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default PnLCurve;
