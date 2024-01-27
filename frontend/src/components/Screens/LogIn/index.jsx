import { AiOutlineArrowRight } from "react-icons/ai"
import Header from "../Main/Header"
import { Link } from "react-router-dom"
import { useEffect } from "react"

const LogIn = () => {
  useEffect(() => {
    document.title = 'Log in'
  }, [])
  return (
    <>
      <div className="bg-ja-dark min-h-screen flex items-center">
        <Header />
        <div className="text-ja-light pt-24 pb-20">
          <h3 className="text-head font-semi text-center">Register to Jä</h3>
          <form className="flex flex-col items-stretch py-4 px-9 gap-4">
            <fieldset className="flex flex-col gap-2">
              <label className="text-body">Email</label>
              <input type="email" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " />
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label className="text-body">Password</label>
              <input type="password" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " />
            </fieldset>
            <button className="flex justify-center gap-4 items-center font-[700] text-head text-ja-dark py-2 px-4 rounded bg-ja-green my-6">
              <span>Log In</span>
              <AiOutlineArrowRight />
            </button>
          </form>
          <div>
            <p className="text-center text-body">Is my first time in Jä, <Link to='/signup' className="text-ja-green">sign up</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogIn