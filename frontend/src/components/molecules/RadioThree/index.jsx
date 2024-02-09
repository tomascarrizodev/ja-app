import { useEffect, useState } from "react"
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai"
import { LiaTransgenderAltSolid } from "react-icons/lia"
import Input from "../../Atoms/Input"
import Label from "../../atoms/Label"

const RadioThree = (props) => {

  const [selected, setSelected] = useState()

  const {
    firstOp,
    secondOp,
    thirdOp,
    name
  } = props

  useEffect(() => {
    setSelected(firstOp)
  }, [])

  return (
    <>
      <div
        className={`flex justify-center items-center w-1/3 py-3 bg-ja-blue-dark border-2 border-ja-blue rounded-s-lg ${firstOp === selected && "bg-ja-green text-ja-dark border-ja-green font-semi"}`}
      >
        <Label labelFor={firstOp}>
          {
            name === 'gender' &&
            <AiOutlineWoman className="mx-auto" />
          }
          <span>{firstOp}</span>
        </Label>
        <Input type="radio" id={firstOp} value={firstOp} name={name} />
      </div>
      <div
        className={`flex justify-center items-center w-1/3 py-3 bg-ja-blue-dark border-t-2 border-b-2 border-ja-blue ${secondOp === selected && "bg-ja-green text-ja-dark border-ja-green font-semi"}`}
      >
        <Label labelFor={secondOp}>
          {
            name === 'gender'
          }
          <AiOutlineMan className="mx-auto" />
          <span>{secondOp}</span>
        </Label>
        <Input type="radio" id={secondOp} value={secondOp} name={name} />
      </div>
      <div
        className={`flex justify-center items-center w-1/3 py-3 bg-ja-blue-dark border-2 border-ja-blue rounded-e-lg ${thirdOp === selected && "bg-ja-green text-ja-dark border-ja-green font-semi"}`}
      >
        <Label labelFor={thirdOp}>
          {
            name === 'gender' &&
            <LiaTransgenderAltSolid className="mx-auto" />
          }
          <span>{thirdOp}</span>
        </Label>
        <Input type="radio" id={thirdOp} value={thirdOp} name={name} />
      </div>
    </>
  )
}

export default RadioThree