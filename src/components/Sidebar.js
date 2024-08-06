import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { MdInsertChartOutlined } from "react-icons/md";
import { BsClipboard2Check } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";

const Sidebar = ({ isOpen }) => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
  };

  const iconStyle = {
    width: "24px",
    height: "24px"
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <div
        className={`menu-item ${activeItem === "dashboard" ? "active" : ""}`}
        onClick={() => handleMenuItemClick("dashboard")}
      >
        <GoHome className={activeItem === "dashboard" ? "active-icon" : ""} style={iconStyle} />
        {isOpen && <span>Dashboard</span>}
      </div>
      <div
        className={`menu-item ${activeItem === "analytics" ? "active" : ""}`}
        onClick={() => handleMenuItemClick("analytics")}
      >
        <MdInsertChartOutlined className={activeItem === "analytics" ? "active-icon" : ""} style={iconStyle} />
        {isOpen && <span>Analytics</span>}
      </div>
      <div
        className={`menu-item ${activeItem === "orders" ? "active" : ""}`}
        onClick={() => handleMenuItemClick("orders")}
      >
        <BsClipboard2Check className={activeItem === "orders" ? "active-icon" : ""} style={iconStyle} />
        {isOpen && <span>Orders</span>}
      </div>
      <div
        className={`menu-item ${activeItem === "menu" ? "active" : ""}`}
        onClick={() => handleMenuItemClick("menu")}
      >
        <CiWallet className={activeItem === "menu" ? "active-icon" : ""} style={iconStyle} />
        {isOpen && <span>Menu</span>}
      </div>
      <div
        className={`menu-item ${activeItem === "products" ? "active" : ""}`}
        onClick={() => handleMenuItemClick("products")}
      >
        <IoBagCheckOutline className={activeItem === "products" ? "active-icon" : ""} style={iconStyle} />
        {isOpen && <span>Products</span>}
      </div>
    </div>
  );
};

export default Sidebar;
