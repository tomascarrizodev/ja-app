const Input = (props) => {

  const { 
    type,
    id,
    value,
    name,
    handleChange,
    extraStyles,
    extraParams,
    extraAttributes
   } = props

  return (
    <>
      <input 
        type={type}
        id={id}
        value={value}
        name={name}
        onChange={(event) => handleChange(event, ...extraParams)}
        className=
          {`${type !== 'checkbox' && type !== 'radio' 
            ? 'rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark ' + extraStyles 
            : 'hidden'}
          `}
        {...extraAttributes}
      />
    </>
  )
}

export default Input