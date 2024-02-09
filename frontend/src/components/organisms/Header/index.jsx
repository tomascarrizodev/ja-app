import Logo from '/favicon/logo-bi-shaped.svg'
import Button from '../../atoms/Buttons'
import { useState } from 'react'
import Anchor from '../../molecules/Anchor'

const Header = () => {

  const [theme, setTheme] = useState('light')

  const toggleTheme = (e) => {
    e.preventDefault()
    theme === 'light' 
      ? setTheme('dark')
      : setTheme('light')
  }

  return (
    <>
      <header className="w-full flex justify-between items-center p-4 absolute top-0 z-10 text-ja-light bg-gradient-to-t from-ja-dark/50 to-ja-dark">
        <div className='flex items-end gap-4'>
          <Anchor srcTo='/' imgUrl={Logo} imgStyles="h-[32px]" imgAlt="Jä logo" />
          <span className='text-head font-bold'>{document.title}</span>
        </div>
        <Button 
          bold={false} icon="light" 
          iconStyles="text-[24px] hover:opacity-75 transition duration-500" 
          handleClick={toggleTheme}
        />
      </header>
    </>
  )
}

export default Header