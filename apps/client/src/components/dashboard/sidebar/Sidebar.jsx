import { useState } from "react";
import { resources } from "../../../assets/resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCog,
  faDashboard,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = ({ onComponentChange }) => {
  const [expandedData, setExpandedData] = useState(false);
  const [hover, setHover] = useState(false);

  const handleDashboardClick = () => {
    onComponentChange("dashboard");
    console.log("dashboard");
  };

  const handleAttendyClick = () => {
    onComponentChange("appointment");
  };
  const handleProfileClick = () => {
    onComponentChange("profile");
    console.log("profile");
  };
  const handleOutSesionClick = () => {
    window.location.href = "/";
  };
  const changeHover = () => {
    setHover(!hover);
  };
  return (
    <div
      className="container-sidebar"
      onMouseEnter={changeHover}
      onMouseLeave={changeHover}
    >
      <div className="sidebar-logo" style={{ height: hover ? "0%" : "15%" }}>
        <div
          className="sidebar-logo-circle"
          style={{ display: hover ? "none" : "flex" }}
        >
          <img src={resources.logo} alt="logo" />
        </div>
        <h1 style={{ display: hover ? "none" : "block" }}>Dashboard</h1>
      </div>
      <div className="profile">
        <img src={resources.user} alt="profile" />
        <h1>Admin</h1>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-title">
          <span>Menu</span>
        </div>
        <div className="sidebar-menu-item" onClick={handleDashboardClick}>
          <FontAwesomeIcon icon={faDashboard} />
          <span
            style={{ display: hover ? "flex" : "none" }}
            onClick={handleDashboardClick}
          >
            Statistics
          </span>
        </div>
        <div className="sidebar-menu-item" onClick={handleAttendyClick}>
          <FontAwesomeIcon icon={faCalendar} />
          <span style={{ display: hover ? "flex" : "none" }}>
            Take attendy
          </span>
        </div>
        <div className="sidebar-menu-item" onClick={handleProfileClick}>
          <FontAwesomeIcon icon={faCog} onClick={handleProfileClick} />
          <span
            style={{ display: hover ? "flex" : "none" }}
            onClick={handleProfileClick}
          >
            Settings
          </span>
        </div>
      </div>
      <div className="sidebar-menu-sesion">
        <div
          className="sidebar-menu-item-sesion"
          onClick={handleOutSesionClick}
        >
          <FontAwesomeIcon icon={faDoorOpen} />
          <span style={{ display: hover ? "flex" : "none" }}>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
