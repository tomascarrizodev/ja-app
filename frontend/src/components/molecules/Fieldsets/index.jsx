const Fieldset = (props) => {

  const {
    extraStyles,
    extraAttributes,
    children
  } = props

  return (
    <>
      <fieldset
        className={`flex flex-col gap-2 ${extraStyles}`}
        {...extraAttributes}
      >
        {children}
      </fieldset>
    </>
  )
}

export default Fieldset