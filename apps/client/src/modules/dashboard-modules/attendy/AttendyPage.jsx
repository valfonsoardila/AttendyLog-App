import { useState } from "react";
import { resources } from "../../../assets/resources";
import { motion, AnimatePresence } from "framer-motion";
import ContentItemLeft from "../../../components/uiElements/formContainers/ContentItemLeft";
import ContentItemRight from "../../../components/uiElements/formContainers/ContentItemRight";
import ButtonSelection from "../../../components/uiElements/buttonSelection/ButtonSelection";
import useAttendeeStore from "../../../store/useAttendeeStore";
import SimpleTable from "../../../components/uiElements/table/SimpleTable";
import "./AttendyPage.css";

const AttendyPage = () => {
  const [showDialog, setShowDialog] = useState(true);
  const [eventType, setEventType] = useState(null);
  const [hoverFaith, setHoverFaith] = useState(false);
  const [hoverSocial, setHoverSocial] = useState(false);
  const [image, setImage] = useState(resources.attend); // Set the image to the default one
  const attendeeStore = useAttendeeStore(); // Use the store
  const totalValue = attendeeStore[eventType]?.total || 0; // Get the total value from the store
  
  // Mostrar el valor de total en la consola
  // console.log("Total value:", totalValue);

  const handleDialogClose = (selectedType) => {
    setShowDialog(false);
    setEventType(selectedType);
  };
  const handleDialogOpen = () => {
    setShowDialog(true);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // if (name === "date") {
    //   setDate(value);
    // } else if (name === "detail") {
    //   setDetail(value);
    // }
  };
  const handleMouseEnterFaith = () => {
    setHoverFaith(true);
    setImage(resources.church);
  };
  const handleMouseLeaveFaith = () => {
    setHoverFaith(false);
    setImage(resources.attend);
  };
  const handleMouseEnterSocial = () => {
    setHoverSocial(true);
    setImage(resources.staff);
  };
  const handleMouseLeaveSocial = () => {
    setHoverSocial(false);
    setImage(resources.attend);
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
              <button
                onClick={() => handleDialogClose("faith")}
                onMouseEnter={handleMouseEnterFaith}
                onMouseLeave={handleMouseLeaveFaith}
              >
                Faith Event
              </button>
              <button
                onClick={() => handleDialogClose("social")}
                onMouseEnter={handleMouseEnterSocial}
                onMouseLeave={handleMouseLeaveSocial}
              >
                Social Event
              </button>
              <div className="dialog-content-image">
                <motion.img
                  key={eventType} // Asegura que la animación se dispare al cambiar el eventType
                  src={image}
                  alt="attendy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
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
                  <ButtonSelection
                    handleDialogOpen={handleDialogOpen}
                    eventType={eventType}
                  />
                  <div className="form-body-subheader">
                    <div className="form-body-header-calendar">
                      <label htmlFor="date">Date</label>
                      <input type="date" name="date" id="date" />
                    </div>
                    <div className="form-body-header-detail">
                      <label htmlFor="detail">Detail</label>
                      <input
                        type="text"
                        name="detail"
                        id="detail"
                        placeholder="Detail on event"
                      />
                    </div>
                    <div className="form-body-header-total">
                      <label htmlFor="total">Total</label>
                      <input
                        type="text"
                        name="total"
                        id="total"
                        placeholder="0"
                        value={totalValue} // Vincula el valor del estado al atributo 'value'
                        onChange={(e) => handleInputChange(e)} // Maneja el cambio del input
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="form-body-content">
                  <div className="form-body-in">
                    <div className="form-body-subcontent">
                      <div className="form-body-content-left">
                        {eventType === "faith" ? (
                          <>
                            <ContentItemLeft
                              text={"Hermanos"}
                              eventType="faith"
                              type="Hermanos"
                            />
                            <ContentItemLeft
                              text={"Hermanas"}
                              eventType="faith"
                              type="Hermanas"
                            />
                            <ContentItemLeft
                              text={"Niños"}
                              eventType="faith"
                              type="Niños"
                            />
                            <ContentItemLeft
                              text={"Amigos"}
                              eventType="faith"
                              type="Amigos"
                            />
                          </>
                        ) : (
                          <>
                            <ContentItemLeft
                              text={"Ancianos"}
                              eventType="social"
                              type="Ancianos"
                            />
                            <ContentItemLeft
                              text={"Caballeros"}
                              eventType="social"
                              type="Caballeros"
                            />
                            <ContentItemLeft
                              text={"Damas"}
                              eventType="social"
                              type="Damas"
                            />
                            <ContentItemLeft
                              text={"Niños"}
                              eventType="social"
                              type="Niños"
                            />
                            <ContentItemLeft
                              text={"Niñas"}
                              eventType="social"
                              type="Niñas"
                            />
                          </>
                        )}
                      </div>
                      <div className="form-body-content-right">
                        {eventType === "faith" ? (
                          <>
                            <ContentItemRight
                              eventType={eventType}
                              type={"Hermanos"}
                            />
                            <ContentItemRight
                              eventType={eventType}
                              type={"Hermanas"}
                            />
                            <ContentItemRight
                              eventType={eventType}
                              type={"Niños"}
                            />
                            <ContentItemRight
                              eventType={eventType}
                              type={"Amigos"}
                            />
                          </>
                        ) : (
                          <>
                            <ContentItemRight
                              eventType={eventType}
                              type={"Ancianos"}
                            />
                            <ContentItemRight
                              eventType={eventType}
                              type={"Caballeros"}
                            />
                            <ContentItemRight
                              eventType={eventType}
                              type={"Damas"}
                            />
                            <ContentItemRight
                              eventType={eventType}
                              type={"Niños"}
                            />
                            <ContentItemRight
                              eventType={eventType}
                              type={"Niñas"}
                            />
                          </>
                        )}
                      </div>
                    </div>
                    <div className="form-body-subcontent-button">
                      <button>Save</button>
                    </div>
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
          <div className="assistance-inquiries-body">
            <SimpleTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendyPage;
