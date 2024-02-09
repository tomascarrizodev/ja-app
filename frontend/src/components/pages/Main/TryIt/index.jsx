import { AiOutlineArrowRight } from 'react-icons/ai'

const TryIt = () => {
  return (
    <>
      <div id='try-it' className='px-4 py-10 text-center flex flex-col gap-4 text-ja-light bg-[url("/img/pattern-1.png")] bg-opacity-50'>
        <h6 className='text-head'>Try it now for free!</h6>
        <p className='text-subhead'>And show yourself to the professional world</p>
        <button
          className='text-subhead bg-[#06D6A0] py-2 px-4 rounded flex flex-row gap-4 items-center mx-auto text-[#00141B] border-2 border-[#06D6A0] shadow-sm transition duration-200 hover:bg-[#073B4C] hover:text-[#118AB2] hover:border-[#118AB2] hover:shadow-lg hover:shadow-[#118AB299]'
        >
          <span className='font-bold text-head'>GO</span>
          <AiOutlineArrowRight className='flex justify-center items-center' />
        </button>
      </div>
    </>
  )
}

export default TryIt