import Header from "../header/Header";
import HomePage from "../../../modules/dashboard-modules/home/HomePage";
import ProfilePage from "../../../modules/dashboard-modules/profile/ProfilePage";
import AttendyPage from "../../../modules/dashboard-modules/attendy/AttendyPage";
import { motion } from "framer-motion";
import "./Container.css";

const Container = ({activeComponent}) => {
  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.7 }}
    className="main-container-content">
      <Header />
      <div className="main-container-body">
        <motion.div initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="main-container-body-content">
          {activeComponent === "dashboard" && (
            <HomePage />
          )}
          {
            activeComponent === "appointment" && (
              <AttendyPage />
            )
          }
          {activeComponent === "profile" && (
            <ProfilePage />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Container;
