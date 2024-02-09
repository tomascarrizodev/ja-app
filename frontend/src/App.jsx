import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainScreen from './components/pages/Main/Main';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';
import Home from './components/pages/Home';

function App() {

  return (
    <>
      <div id="container" className='bg-ja-dark'>
        <BrowserRouter>
          <Routes>
            <Route path='/' index element={<MainScreen />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
