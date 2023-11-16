import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContentItemLeft from "../../../components/uiElements/formContainers/ContentItemLeft";
import ContentItemRight from "../../../components/uiElements/formContainers/ContentItemRight";
import ButtonSelection from "../../../components/uiElements/buttonSelection/ButtonSelection";
import "./AttendyPage.css";

const AttendyPage = () => {
  const [showDialog, setShowDialog] = useState(true);
  const [eventType, setEventType] = useState(null);
  const [eventDate, setEventDate] = useState(null);

  const handleDialogClose = (selectedType) => {
    setShowDialog(false);
    setEventType(selectedType);
  };
  const handleDialogOpen = () => {
    setShowDialog(true);
  };

  return (
    <div className="attendy-container">
      <div className="attendy-container-header">
        <h3>Assist Control</h3>
      </div>
      <div className="attendy-container-body">
        <AnimatePresence>
          {showDialog && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="dialog"
            >
              <h3>Choose event type:</h3>
              <button onClick={() => handleDialogClose("faith")}>
                Faith Event
              </button>
              <button onClick={() => handleDialogClose("social")}>
                Social Event
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        {!showDialog && (
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
                <div className="form-body-header">
                  <ButtonSelection handleDialogOpen={handleDialogOpen} eventType={eventType} />
                  <div className="form-body-header-calendar">
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" />
                  </div>
                </div>
                <div className="form-body-content">
                  <div className="form-body-content-left">
                    <ContentItemLeft text={"Hermanos"} />
                    <ContentItemLeft text={"Hermanas"} />
                    <ContentItemLeft text={"Niños"} />
                    <ContentItemLeft text={"Amigos"} />
                  </div>
                  <div className="form-body-content-right">
                    <ContentItemRight />
                    <ContentItemRight />
                    <ContentItemRight />
                    <ContentItemRight />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
        <div className="assistance-inquiries">
          <div className="assistance-inquiries-header">
            <h3>Attendances registered</h3>
          </div>
          <div className="assistance-inquiries-body"></div>
        </div>
      </div>
    </div>
  );
};

export default AttendyPage;
