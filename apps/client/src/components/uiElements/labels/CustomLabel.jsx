import './CustomLabel.css';

const CustomLabel = (props) => {
    const { text, htmlFor} = props;
  return (
    <>
        <label className="custom-label" htmlFor={htmlFor}>{text}</label>
    </>
  )
}

export default CustomLabel