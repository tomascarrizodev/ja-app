import { Link } from "react-router-dom"
const Anchor = (props) => {
  const {
    srcTo,
    text,
    handleClick,
    extraParams,
    children
  } = props

  return (
    <>
      <Link to={srcTo} onClick={(event) => handleClick(event, ...extraParams)}>
        {
          text &&
          <p>{text}</p>
        }
        {children}
      </Link>
    </>
  )
}

export default Anchor