import { AiFillGithub } from "react-icons/ai"

const Founders = () => {
  return (
    <>
      <div id="founders" className='text-ja-light p-4'>
          <h6 className='font-semi text-head text-center'>Founders</h6>
          <div>
            <div className='text-center mb-4'>
              <img src='https://github.com/tomascarrizodev.png' className='w-[170px] rounded-full mx-auto my-4' />
              <p className="text-subhead">Tomás Carrizo</p>
              <p className="text-body text-ja-green">Developer</p>
            </div>
            <div className='text-body p-2 flex flex-col'>
              <p className='mb-2'>Fullstack developer especialized in ReactJS</p>
              <p className='mb-4'>Creator and designer of Jä</p>
              <div className='flex gap-2 items-center hover:opacity-50'>
                <AiFillGithub />
                <a>tomascarrizodev</a>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Founders