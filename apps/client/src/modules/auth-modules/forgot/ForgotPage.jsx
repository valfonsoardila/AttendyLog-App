import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CustomInput from "../../../components/uiElements/inputs/CustomInput";
import CustomButton from "../../../components/uiElements/buttons/CustomButton";
import "./ForgotPage.css";

const ForgotPage = ({ onComponentChange }) => {
  const [message, setMessage] = useState(""); // Para mostrar mensajes al usuario
  const [alertView, setAlertView] = useState(false); // Para mostrar mensajes al usuario
  

  const handleSendClick = async () => {
    try {
      // Obtener el valor del campo de correo electrónico
      const email = document.getElementById("email").value;

      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      const data = await response.json();
      onComponentChange("login");
      setMessage(`Password reset link sent successfully to ${email}`);
      setAlertView(true);
    } catch (error) {
      setMessage("Error sending password reset link. Please try again.");
      setAlertView(true);
    }
  };
  const handleLoginPage = () => {
    onComponentChange("login");
  };
  return (
    <>
      <div className="back-arrow">
        <FontAwesomeIcon icon={faArrowLeft} onClick={handleLoginPage} />
      </div>

      <div className="form-container">
        <div className="form-header">
          <h3>Did you forget your password?</h3>
        </div>
        <div className="form-paragraph">
          <p>
            If you have forgotten your password, plsease enter your email address
            to send you an access recovery link.
          </p>
        </div>
        <div className="form-body">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <CustomInput type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <CustomButton type="submit" text="Send" onClick={handleSendClick} />
          </div>
        </div>
        <div className="form-footer-alert">
          {alertView && (
            <div
              className="form-message"
              style={{
                background: message.includes("error")
                  ? "#f23030"
                  : message.includes("ingresa")
                  ? "#f23030"
                  : "green",
              }}
            >
              {message && <p>{message}</p>}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ForgotPage;
