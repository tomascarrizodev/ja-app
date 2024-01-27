import { AiOutlineArrowRight } from "react-icons/ai"

const HeroDescription = () => {
  return (
    <>
      <h4 className='font-body text-subhead leading-7 mb-4 text-center'>Fast and easy resume maker</h4>
      <h5 className="font-body font-light text-body mb-8 text-center">Try it for free and share yourself with the professional world with just one link</h5>
      <button 
        className='text-subhead bg-[#06D6A0] py-2 px-4 rounded flex flex-row gap-4 items-center mx-auto text-[#00141B] border-2 border-[#06D6A0] shadow-sm transition duration-200 hover:bg-[#073B4C] hover:text-[#118AB2] hover:border-[#118AB2] hover:shadow-lg hover:shadow-[#118AB299]'
      >
        <span className='font-semi'>Get started</span>
        <AiOutlineArrowRight className='flex justify-center items-center' />
      </button>
    </>
  )
}

export default HeroDescription