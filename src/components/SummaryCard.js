import React from "react";
import { FaBullseye, FaUtensils, FaConciergeBell, FaChevronRight } from "react-icons/fa";
// import './RightSideContent.css';

const items = [
  { icon: <FaBullseye />, label: "Goals" },
  { icon: <FaUtensils />, label: "Popular Dishes" },
  { icon: <FaConciergeBell />, label: "Menus" },
];

const RightSideContent = () => {
  return (
    <div className="right-side-container">
      {items.map((item, index) => (
        <div key={index} className="right-side-item">
          <div className="icon">{item.icon}</div>
          <div className="label">{item.label}</div>
          <div className="arrow"><FaChevronRight /></div>
        </div>
      ))}
    </div>
  );
};

export default RightSideContent;
