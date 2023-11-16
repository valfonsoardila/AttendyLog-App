import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import useCounterStore from "../../../store/counterStore";
import "./ContentItemRight.css";

const ContentItemRight = () => {
  // Estado local para almacenar el valor actual
  const [counter, setCounter] = useState(0);
  // Función para incrementar el contador
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  // Función para decrementar el contador, pero no menos de 0
  const handleSubtract = () => {
    if (counter >= 0) {
      setCounter(counter - 1);
    }
  };
  
  return (
    <>
      <div className="form-body-content-button">
        <div className="form-body-content-button-item">
          <button onClick={handleSubtract}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button onClick={handleAdd}>
            <FontAwesomeIcon icon={faAdd} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ContentItemRight;
