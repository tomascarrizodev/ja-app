import { useEffect } from "react"
import Header from "../Main/Header"
import { Link } from "react-router-dom"
import { AiOutlineArrowRight } from 'react-icons/ai' 

const SignUp = () => {

  useEffect(() => {
    document.title = 'Sign up'
  }, [])

  return (
    <>
      <div className="bg-ja-dark">
        <Header />
        <div className="text-ja-light pt-24 pb-20">
          <h3 className="text-head font-semi text-center">Register to Jä</h3>
          <form className="flex flex-col items-stretch py-4 px-9 gap-4">
            <fieldset className="flex flex-col gap-2">
              <label className="text-body">First name</label>
              <input type="text" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " />
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label className="text-body">Last name</label>
              <input type="text" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " />
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label className="text-body">Email</label>
              <input type="email" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " />
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label className="text-body">Username</label>
              <input type="text" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " />
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label className="text-body">Password</label>
              <input type="password" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " />
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label className="text-body">Repeat Password</label>
              <input type="password" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " />
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label className="text-body">Birthday</label>
              <input type="date" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " />
            </fieldset>
            <button className="flex justify-center gap-4 items-center font-[700] text-head text-ja-dark py-2 px-4 rounded bg-ja-green my-6">
              <span>Sign Up</span>
              <AiOutlineArrowRight />
            </button>
          </form>
          <div>
            <p className="text-center text-body">I already have an account, <Link to='/login' className="text-ja-green">log in</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp