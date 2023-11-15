import { motion } from "framer-motion";
import "./AttendyPage.css";

const AttendyPage = () => {

  return (
    <div className="attendy-container">
      <div className="attendy-container-header">
        <h3>Assist Control</h3>
      </div>
      <div className="attendy-container-body">
        <div className="attendy-container-form">
          <div className="form">
            <div className="form-header">
              <h3>New attendy register</h3>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="form-body"
            >
              
            </motion.div>
          </div>
        </div>
        <div className="assistance-inquiries">
          <div className="assistance-inquiries-header">
            <h3>Attendances registered</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendyPage;
