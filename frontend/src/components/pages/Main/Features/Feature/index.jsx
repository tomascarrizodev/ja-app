const Feature = (props) => {
  const { content, direction, src } = props
  return (
    <>
      <div className={`h-[180px] flex ${direction} font-title-1 text-ja-light p-4 overflow-hidden`}>
        <h5 className='w-1/2 text-subhead px-2'>{content}</h5>
        <picture className='w-1/2 relative'>
          <img src={src} alt='#' className='absolute rounded-md' />
        </picture>
      </div>
    </>
  )
}

export default Feature