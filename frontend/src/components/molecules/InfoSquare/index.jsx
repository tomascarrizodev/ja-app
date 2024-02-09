import Button from "../../atoms/Buttons"

const InfoSquare = (props) => {
  const {
    keyId,
    mainText,
    subText,
    infoText,
    handleClick,
    extraParams
  } = props

  return (
    <>
      <div key={keyId} className="text-info p-2 mt-1 bg-ja-blue rounded flex justify-between gap-2 items-center relative">
        <p className="text-body font-semi">{mainText}</p>
        <p className="font-medium">{subText}</p>
        <p>{infoText}</p>
        <Button bold={false} handleClick={handleClick} extraParams={extraParams} extraStyles="absolute top-2 right-2" icon="close" />
      </div>
    </>
  )
}

export default InfoSquare