import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { MdArrowDropUp } from "react-icons/md";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Completed", "Remaining"],
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ["#4caf50", "#f44336"],
      borderWidth: 0,
    },
  ],
};

const options = {
  cutout: "80%",
  plugins: {
    legend: {
      display: false,
    },
  },
};

const NetProfit = () => {
  return (
    <div className="net-profit-container">
      <div className="net-profit-info">
        <p>Net Profit</p>
        <h2>$6759.25</h2>
        <div className="percentage increase">
          {/* <span style={{ position: "absolute", right: "60px", top: "70px", color: "#00FF00" }}> */}

          <span>
            <MdArrowDropUp />
            3%
          </span>
        </div>
      </div>
      <div className="net-profit-chart">
        <Doughnut data={data} options={options} />
        <div className="chart-percentage">
          <span>
            70%
            <br />
            Goal
            <br />
            Completed
          </span>
        </div>
        <p className="note">* The values here has been rounded off.</p>
      </div>
    </div>
  );
};

export default NetProfit;
