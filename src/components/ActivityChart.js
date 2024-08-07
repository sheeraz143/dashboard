import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Data for weekly view
const weeklyData = {
  labels: Array.from({ length: 27 }, (_, i) => i + 1),
  datasets: [
    {
      label: "Activity",
      data: [
        0, 0, 0, 0, 0, 5000, 3000, 2000, 2000, 5000, 10000, 4000, 3000, 5000,
        6000, 10000, 11000, 5000, 12000, 13000, 11000, 10000, 9000, 12000,
        11000, 9000, 8000,
      ],
      backgroundColor: "#4e73df",
      borderRadius: 5,
    },
  ],
};

// Data for yearly view
const yearlyData = {
  labels: Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`),
  datasets: [
    {
      label: "Activity",
      data: [
        20000, 18000, 25000, 22000, 26000, 24000, 27000, 23000, 25000, 28000,
        29000, 30000,
      ],
      backgroundColor: "#4e73df",
      borderRadius: 5,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        beginAtZero: true,
        stepSize: 5000,
        callback: function (value) {
          return value / 1000 + "k"; 
        },
      },
    },
  },
};

const ActivityChart = () => {
  const [view, setView] = useState("weekly");

  const handleViewChange = (event) => {
    setView(event.target.value);
  };

  const data = view === "weekly" ? weeklyData : yearlyData;

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h2>Activity</h2>
        <select
          className="select-report"
          onChange={handleViewChange}
          value={view}
        >
          <option value="weekly">Weekly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <Bar
        data={data}
        options={options}
        style={{ height: "300px" }}
        className="bar-bar"
      />
    </div>
  );
};

export default ActivityChart;
