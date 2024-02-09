import { AiOutlineArrowRight } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "../../organisms/Header"
import { useForm } from "react-hook-form"
import login from '../../../services/login'
import bcrypt from 'bcrypt'

const LogIn = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors }
  } = useForm()

  const [username, setUsername] = useState('')
  const [invalidInput, setInvalidInput] = useState(false)
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const onSubmit = async () => {
    try {
      const valid = await trigger()
      if (!valid) {
        throw new Error(setInvalidInput(true))
      }
      const newLogin = {
        username,
        password
      }
      const response = await login(newLogin)
      if (remember) {
        localStorage.setItem('token', response.token)
        localStorage.setItem('username', response.token)
        const hashPassword = await bcrypt.hash(password, 10)
        localStorage.setItem('hash', hashPassword)
      }
      // navigate('/home')
    } catch (error) {
      setInvalidInput(true)
    }
  }
  return (
    <>
      <div className="bg-ja-dark min-h-screen flex items-center">
        {/* <Header /> */}
        <div className="text-ja-light pt-24 pb-20">
          <h3 className="text-head font-semi text-center">Enter to Jä</h3>
          <form className="flex flex-col items-stretch py-4 px-9 gap-4" onSubmit={e => handleSubmit(onSubmit(e))}>
            <fieldset className="flex flex-col gap-2">
              <label className="text-body">Username</label>
              <input type="text" 
                className={`rounded-lg py-2 px-4 border-2 border-ja-blue outline-ja-green bg-ja-blue-dark ${errors.username && "border-ja-magenta outline-ja-magenta"}`}
                {...register('username', {
                  value: username,
                  onChange: e => setUsername(e.target.value),
                  required: "Username can't be empty",
                  minLength: {
                    value: 4,
                    message: "Usernames are at least 4 characters long"
                  },
                  maxLenght: {
                    value: 20,
                    message: "Usernames aren't more than 20 characters long"
                  },
                  pattern: {
                    value: /^[a-z1-9]+$/,
                    message: "Username is invalid"
                  },
                  onBlur: async () => await trigger('username')
                })}
              />
              {
                errors.username &&
                <p className="p-2 rounded-md bg-ja-magenta mt-2 flex items-center">{errors.username.message}</p>
              }
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label className="text-body">Password</label>
              <input type="password" 
                className={`rounded-lg py-2 px-4 border-2 border-ja-blue outline-ja-green bg-ja-blue-dark ${errors.password && "border-ja-magenta outline-ja-magenta"}`} 
                {...register('password', {
                  value: password,
                  onChange: e => setPassword(e.target.value),
                  required: "Password can't be empty",
                  onBlur: async () => await trigger('password')
                })}
              />
              {
                errors.password &&
                <p className="p-2 rounded-md bg-ja-magenta mt-2 flex items-center">{errors.password.message}</p>
              }
              {
                invalidInput &&
                <p className="p-2 rounded-md bg-ja-magenta mt-2 flex items-center">Invalid username or password</p>
              }
            </fieldset>
            <fieldset className="flex gap-2">
              <input type="checkbox" name="remember" id="remember" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark" onChange={() => setRemember(!remember)} />
              <label className="text-body" htmlFor="remember">Remember me</label>
            </fieldset>
            <button type="submit" className="flex justify-center gap-4 items-center font-[700] text-head text-ja-dark py-2 px-4 rounded bg-ja-green my-6">
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