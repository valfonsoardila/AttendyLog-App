import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./ContentItemRight.css";

const ContentItemRight = () => {
  return (
    <>
      <div className="form-body-content-button">
        <div className="form-body-content-button-item">
          <button>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button>
            <FontAwesomeIcon icon={faAdd} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ContentItemRight;
