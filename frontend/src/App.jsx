import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainScreen from './components/Screens/Main/Main';
import SignUp from './components/Screens/SignUp';
import LogIn from './components/Screens/LogIn';
import Home from './components/Screens/Home';

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
