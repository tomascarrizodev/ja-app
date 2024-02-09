import { AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineCheck, AiOutlineClose, AiOutlinePlus, AiOutlineEdit } from 'react-icons/ai'

const MainButton = (props) => {
  const {
    color,
    bgcolor,
    content,
    handleClick,
    order,
    icon,
    extraParams,
    extraStyles,
    extraAttributes
  } = props
  return (
    <>
      <button
        className={`flex ${order} justify-center gap-4 items-center font-[700] text-body text-ja-${color} py-2 px-4 rounded bg-ja-${bgcolor} ${extraStyles}`}
        onClick={(event) => handleClick(event, ...extraParams)}
        {...extraAttributes}
      >
        <span>{content}</span>
        {
          icon === 'arrowRight' &&
          <AiOutlineArrowRight />
          ||
          icon === 'arrowLeft' &&
          <AiOutlineArrowLeft />
          ||
          icon === 'check' &&
          <AiOutlineCheck />
          || 
          icon === 'close' &&
          <AiOutlineClose />
        }
      </button>
    </>
  )
}

const IconButton = (props) => {
  const {
    icon,
    color,
    bgcolor,
    handleClick,
    extraParams
  } = props
  return (
    <>
      <button 
        className={`text-ja-${color} bg-ja-${bgcolor} flex justify-center gap-4 items-center py-2 px-4 rounded`}
        onClick={(e) => handleClick(e, ...extraParams)}
      >
        {
          icon === 'close' &&
          <AiOutlineCLose />
          ||
          icon === 'check' &&
          <AiOutlineCheck />
          ||
          icon === 'plus' &&
          <AiOutlinePlus />
          ||
          icon === 'edit' &&
          <AiOutlineEdit />
        }
      </button>
    </>
  )
}

const Buttons = {
  MainButton,
  IconButton,
}

export default Buttons