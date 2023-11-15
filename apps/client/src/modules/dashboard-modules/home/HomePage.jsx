import React, { useEffect } from "react";
import "./HomePage.css";
import { motion } from "framer-motion";

const HomePage = () => {

  return (
    <motion.div className="home-page" initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}>
      <div className="columnOne">
        <div className="columnOne-rowOne">
          
        </div>
        <div className="columnOne-rowTwo"></div>
      </div>
      <div className="columnTwo"></div>
    </motion.div>
  );
};

export default HomePage;
