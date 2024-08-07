import React from "react";
import { FaBell, FaEnvelope, FaUser, FaCog } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";

const Topbar = ({ toggleSidebar }) => {
  const iconStyle = {
    width: "24px",
    height: "24px",
    color: "#7295fc",
  };
  return (
    <div className="topbar">
      <div className="topbar-left">
        <RxDashboard
          className="menu-icon"
          onClick={toggleSidebar}
          style={iconStyle}
        />
        <div className="d-flex align-items-center gap-2 search-input">
          <CiSearch />
          <input type="text" className="search-bar" placeholder="Search" />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-right-icons">
          <FaEnvelope className="topbar-icon" />
        </div>
        <div className="topbar-right-icons">
          <FaCog className="topbar-icon" />
        </div>
        <div className="topbar-right-icons">
          <FaBell className="topbar-icon" />
        </div>
        <div className="topbar-right-icons">
          <FaUser className="topbar-icon" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
