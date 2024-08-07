import React from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

const stats = [
  {
    icon: <FaShoppingCart />,
    label: "Total Orders",
    value: 75,
    percentage: 3,
    isIncrease: true,
  },
  {
    icon: <FaTruck />,
    label: "Total Delivered",
    value: 70,
    percentage: 3,
    isIncrease: false,
  },
  {
    icon: <FaBan />,
    label: "Total Cancelled",
    value: 5,
    percentage: 3,
    isIncrease: true,
  },
  {
    icon: <FaDollarSign />,
    label: "Total Revenue",
    value: "12",
    percentage: 3,
    isIncrease: false,
  },
];

const OrderStatistics = () => {
  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <div className="icon">{stat.icon}</div>

          <p>{stat.label}</p>
          <div className="stat-info">
            <h3>{stat.value}</h3>
            <div
              className={`percentage ${
                stat.isIncrease ? "increase" : "decrease"
              }`}
            >
              {stat.isIncrease ? <MdArrowDropUp /> : <MdArrowDropDown />}
              {stat.percentage}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStatistics;
