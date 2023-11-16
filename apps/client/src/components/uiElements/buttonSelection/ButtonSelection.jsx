import './ButtonSelection.css'
const ButtonSelection = (props) => {
    const { handleDialogOpen, eventType } = props;
  return (
    <div className='button-selection-container'>
      <button onClick={handleDialogOpen}>
        <h3>{eventType === "faith" ? "Faith Event" : "Social Event"}</h3>
      </button>
    </div>
  );
};

export default ButtonSelection;
