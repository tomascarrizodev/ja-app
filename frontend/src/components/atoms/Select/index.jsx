import { useEffect, useState } from "react"
import { AiFillCaretDown } from "react-icons/ai"

const Select = (props) => {
  const [option, setOption] = useState([])

  const {
    options,
    name,
    id,
    onChange,
    keyOp,
    valueOp,
    textOp,
    moreParams,
    extraStyles,
    extraAttributes
  } = props

  useEffect(() => {
    setOption(options)
  }, [])

  return (
    <div className="relative">
      <select
        name={name}
        id={id}
        onChange={(event) => onChange(event, ...moreParams)}
        className={`rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark w-full appearance-none ${extraStyles}`}
        {...extraAttributes}
      >
        {
          option.map(o => {
            return <option key={o[keyOp]} value={o[valueOp]} >{o[textOp]}</option>
          })
        }
      </select>
      <AiFillCaretDown className="absolute right-4 bottom-3" />
    </div>
  )
}

export default Select