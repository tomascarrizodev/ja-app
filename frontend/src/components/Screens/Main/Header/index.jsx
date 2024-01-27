import { Link } from 'react-router-dom'
import Logo from '/favicon/logo-bi-shaped.svg'
import { AiFillBulb } from 'react-icons/ai'

const Header = () => {
  return (
    <>
      <header className="w-full flex justify-between items-center p-4 absolute top-0 z-10 text-ja-light bg-gradient-to-t from-ja-dark/50 to-ja-dark">
        <div className='flex items-end gap-4'>
          <Link to={'/'}>
            <img src={Logo} className='h-[32px]' alt='Jä logo' />
          </Link>
          <span className='text-head font-title-1'>{document.title}</span>
        </div>
        <button>
          <AiFillBulb className='text-[24px] hover:opacity-75 transition duration-500' />
        </button>
      </header>
    </>
  )
}

export default Header