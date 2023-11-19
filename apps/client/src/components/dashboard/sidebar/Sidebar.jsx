import { useState } from "react";
import { resources } from "../../../assets/resources";
import {
  faFilePen,
  faCog,
  faDashboard,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "../../uiElements/menuItems/MenuItem";
import { getAuth, signOut } from "firebase/auth";
import "./Sidebar.css";

const Sidebar = ({ onComponentChange }) => {
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
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        window.location.href = "/";
      })
      .catch((error) => {
        console.log("An error happened.");
      });
  }
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
          <MenuItem faIcon={faDashboard} text="Dashboard" hover={hover} />
        </div>
        <div className="sidebar-menu-item" onClick={handleAttendyClick}>
          <MenuItem faIcon={faFilePen} text="Attendy" hover={hover} />
        </div>
        <div className="sidebar-menu-item" onClick={handleProfileClick}>
          <MenuItem faIcon={faCog} text="Profile" hover={hover} />
        </div>
      </div>
      <div className="sidebar-menu-sesion">
        <div
          className="sidebar-menu-item-sesion"
          onClick={handleSignOut}
        >
          <MenuItem faIcon={faDoorOpen} text="Out of sesion" hover={hover} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
