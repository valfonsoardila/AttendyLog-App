import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import useAttendeeStore from "../../../store/useAttendeeStore";
import "./ContentItemRight.css";

const ContentItemRight = (props) => {
  const { eventType, type } = props;
  const { sum, increment, decrement } = useAttendeeStore();
  
  const handleIncrement = () => {
    increment(eventType, type);
    sum(eventType);
  };
  
  const handleDecrement = () => {
    decrement(eventType, type);
    sum(eventType);
  };

  return (
    <>
      <div className="form-body-content-button">
        <div className="form-body-content-button-item">
          <button onClick={handleDecrement}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button onClick={handleIncrement}>
            <FontAwesomeIcon icon={faAdd} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ContentItemRight;
