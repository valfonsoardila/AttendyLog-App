import { useState } from "react";
import { resources } from "../../../assets/resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import CustomInput from "../../../components/uiElements/inputs/CustomInput";
import CustomButton from "../../../components/uiElements/buttons/CustomButton";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./LoginPage.css";

const LoginPage = ({ onComponentChange }) => {
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [message, setMessage] = useState(""); // Para mostrar mensajes al usuario
  const [alertView, setAlertView] = useState(false); // Para mostrar mensajes al usuario
  //Prueba JsonPlaceHolder
  // const handleLogin = async () => {
  //   try {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         emailValue,
  //         passwordValue,
  //       }),
  //     });

  //     if (response.ok) {
  //       // Manejar la respuesta exitosa, por ejemplo, redirigir a otra página
  //       console.log("Inicio de sesión exitoso");
  //       window.location.href = "/dashboard";
  //     } else {
  //       // Manejar errores, por ejemplo, mostrar un mensaje de error
  //       console.error("Error al iniciar sesión");
  //     }
  //   } catch (error) {
  //     console.error("Error de red:", error);
  //   }
  // };
  const handleRegisterClick = () => {
    onComponentChange("register");
  };
  const handleForgotClick = () => {
    onComponentChange("forgot");
  };
  const handleInputChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };
  const handleInputChangePassword = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleLogin = () => {
    if (emailValue === "" || passwordValue === "") {
      setMessage("Por favor, ingresa todos los campos");
      setAlertView(true);
      setTimeout(() => {
        setAlertView(false);
      }, 2600);
      return;
    } else {
      if (emailValue === "" && passwordValue !== "") {
        setMessage("No ha ingresado el correo electrónico");
        setAlertView(true);
        setTimeout(() => {
          setAlertView(false);
        }, 2600);
        return;
      } else {
        if (emailValue !== "" && passwordValue === "") {
          setMessage("No ha ingresado la contraseña");
          setAlertView(true);
          setTimeout(() => {
            setAlertView(false);
          }, 2600);
          return;
        } else {
          if (!emailValue.includes("@")) {
            setMessage("El correo ingresado no es válido");
            setAlertView(true);
            setTimeout(() => {
              setAlertView(false);
            }, 2600);
            return;
          } else {
            if (passwordValue.length < 6) {
              setMessage("La contraseña debe tener al menos 6 caracteres");
              setAlertView(true);
              setTimeout(() => {
                setAlertView(false);
              }, 2600);
              return;
            } else {
              const auth = getAuth();
              signInWithEmailAndPassword(auth, emailValue, passwordValue)
                .then((userCredential) => {
                  const user = userCredential.user;
                  window.location.href = "/dashboard";
                })
                .catch((error) => {
                  const errorMessage = error.message;
                  if (errorMessage.includes("Firebase") || error === "Error: The email address is badly formatted.") {
                    setMessage("Email o contraseña incorrectos");
                    setAlertView(true);
                    setTimeout(() => {
                      setAlertView(false);
                    }, 2600);
                  }
                });
            }
          }
        }
      }
    }
  };



  return (
    <>
      <div className="logocontainer">
        <img src={resources.logo} alt="logo" />
        <div className="logotext-container">
          <span className="logotext">AttendyLog</span>
          <span className="logintext">Login</span>
        </div>
      </div>
      <div className="formcontainer">
        <div className="form">
          <div className="form-group">
            <label htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} />
              Email
            </label>
            <CustomInput
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={emailValue}
              onChange={handleInputChangeEmail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <FontAwesomeIcon icon={faKey} />
              Password
            </label>
            <CustomInput
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={passwordValue}
              onChange={handleInputChangePassword}
            />
            <span className="forgotpassword" onClick={handleForgotClick}>
              Forgot password?
            </span>
          </div>
          <div className="form-group">
            <CustomButton type="button" onClick={handleLogin} text={"Login"}  />
          </div>
        </div>
        <div className="form-footer">
          <span className="form-footer-text">
            Dont have an account?{" "}
            <span onClick={handleRegisterClick}>Sign up</span>
          </span>
          {/* <div className="form-footer-divider" />
          <div className="form-footer-google">
            <ApiGoogle />
          </div> */}
        </div>
        <div className="form-footer-alert">
          {alertView && (
            <div
              className="form-message"
              style={{
                background: message.includes("Error")
                  ? "#f23030"
                  : message.includes("ingresa")
                  ? "#f23030"
                  : message.includes("incorrectos") ? "#f23030" : message.includes("válido") ? "#f23030" : message.includes("caracteres") ? "#f23030" : "green",
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

export default LoginPage;
