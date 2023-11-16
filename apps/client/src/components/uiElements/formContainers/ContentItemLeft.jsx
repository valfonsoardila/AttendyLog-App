import './ContentItemLeft.css'
import useCounterStore from '../../../store/counterStore'

const ContentItemLeft = (props) => {
    const {text} = props
  return (
    <>
        <div className="form-body-content-item">
            <label htmlFor={text}>{text}</label>
            <input type="text" name={text} id={text} placeholder='0' readOnly  />
        </div>
    </>
  )
}

export default ContentItemLeft