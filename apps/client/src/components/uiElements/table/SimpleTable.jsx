import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SimpleTable.css";

function SimpleTable(prop) {
  const { data } = prop;

  return (
    <div className="container-table">
      <div className="table-wrapper">
        <div className="table-wrapper-boddy">
          <AnimatePresence>
            {data.map((item) => (
              <motion.div
                className="user-box"
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="user-name">{item.username}</div>
                <div className="user-regist">{item.registrationDate}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default SimpleTable;
