const Textarea = (props) => {
  const {
    value,
    cols,
    rows,
    onChange,
    moreParams,
    extraStyles,
    extraAttributes
  } = props

  return (
    <>
      <textarea
        value={value}
        cols={cols}
        rows={rows}
        onChange={(event) => onChange(event, ...moreParams)}
        className={`rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark ${extraStyles}`}
        {...extraAttributes}
      ></textarea>
    </>
  )
}

export default Textarea