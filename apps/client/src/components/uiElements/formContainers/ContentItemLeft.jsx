import "./ContentItemLeft.css";
import useAttendeeStore from "../../../store/useAttendeeStore";

const ContentItemLeft = (props) => {
  const { text, eventType, type } = props;
  const getState = useAttendeeStore((state) => state[eventType][type]);

  return (
    <>
      <div className="form-body-content-item">
        <label htmlFor={text}>{text}</label>
        <input type="text" name={text} id={text} value={getState} readOnly />
      </div>
    </>
  );
};

export default ContentItemLeft;
