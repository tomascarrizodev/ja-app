import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from "react-router-dom"
import { AiFillCalendar, AiFillCaretDown, AiFillEye, AiOutlineArrowRight, AiOutlineEyeInvisible } from 'react-icons/ai'
import data from '../../../data/data'
import './styles.css'
import userServices from "../../../services/users"

const SignUp = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    setError
  } = useForm()

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [birthday, setBirthday] = useState("")
  const [country, setCountry] = useState("")

  const [repeatEmail, setRepeatEmail] = useState(false)
  const [repeatUsername, setRepeatUsername] = useState(false)

  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false)

  useEffect(() => {
    const getUsernames = async () => {
      const usernames = await userServices.getUsers()
      const usernamesArr = usernames.map(u => u.username).filter(u => u.includes(username))
      usernamesArr.length === 1 && usernamesArr[0] === username
        ? setRepeatUsername(true)
        : setRepeatUsername(false)
    }
    username.length >= 4 && getUsernames()
  }, [username])

  useEffect(() => {
    const getEmails = async () => {
      const emails = await userServices.getUsers()
      const emailsArr = emails.map(e => e.email).filter(e => e.includes(email))
      emailsArr.length === 1 && emailsArr[0] === email
        ? setRepeatEmail(true)
        : setRepeatEmail(false)
    }
    getEmails()
  }, [email])

  const validateEmailUser = async (field) => {
    await trigger(field)

    if (!errors[field]) {
      field === 'email'
        ? repeatEmail && setError(field, { type: "registered", message: "Email is already registered" })
        : repeatUsername && setError(field, { type: "registered", message: "Username is already taken" })
    }
  }

  const validatePassword = async () => {
    await trigger('password')

    const rxLowerCase = /[a-z]/
    const rxUpperCase = /[A-Z]/
    const rxNumber = /[1-9]/
    const rxSpecialCharacter = /[?.,:;-]/

    if (!errors.password) {
      if (!password.match(rxLowerCase)) {
        return setError('password', { type: "noLowerCase", message: "Password must contain atleast 1 lowercase character" })
      } else if (!password.match(rxUpperCase)) {
        return setError('password', { type: "noUpperCase", message: "Password must contain atleast 1 uppercase character" })
      } else if (!password.match(rxNumber)) {
        return setError('password', { type: "noNumber", message: "Password must contain atleast 1 number" })
      } else if (!password.match(rxSpecialCharacter)) {
        return setError('password', { type: "noSpecialCharacter", message: "Password must contain atleast 1 special character" })
      }
    }
  }

  const passwordToRegex = () => {
    const specialCharacters = /[.*+?^${}()|[\]\\]/g;
    return password.replace(specialCharacters, '\\$&')
  }

  const validateBirthday = async () => {
    await trigger('birthday')
    console.log(birthday)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const newUser = {
      firstname,
      lastname,
      email,
      username,
      password,
      repeatPassword,
      birthday,
      country
    }
    try {
      const valid = await trigger()
      if (!valid) {
        throw new Error(console.error(errors))
      }
      validateEmailUser('email')
      validateEmailUser('username')
      await userServices.register(newUser)
      navigate('/login')
    } catch (error) {
      console.log({ error: error.message })
    }
  }

  return (
    <>
      <div className="bg-ja-dark">
        {/* <Header /> */}
        <div className="text-ja-light pt-24 pb-20">
          <h3 className="text-head font-semi text-center">Register to Jä</h3>
          <form onSubmit={e => handleSubmit(onSubmit(e))} className="flex flex-col items-stretch py-4 px-9 gap-4">
            <fieldset className="flex flex-col gap-2">
              <label className="text-body">First name</label>
              <input type="text"
                className={`rounded-lg py-2 px-4 border-2 border-ja-blue outline-ja-green bg-ja-blue-dark ${errors.firstname && "border-ja-magenta outline-ja-magenta"}`}
                {...register('firstname', {
                  value: firstname,
                  onChange: (e) => setFirstname(e.target.value),
                  required: "Firstname field can't be empty",
                  maxLength: {
                    value: 30,
                    message: "Your firstname can't be larger than 30 characters long"
                  },
                  pattern: {
                    value: /^[a-zA-ZÀ-ÖØ-öø-ÿ ]+$/,
                    message: "The firstname field only accept letters"
                  },
                  onBlur: async () => await trigger('firstname')
                })}
              />
              {
                errors.firstname &&
                <p className="p-2 rounded-md bg-ja-magenta mt-2 flex items-center">{errors.firstname.message}</p>
              }
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label className="text-body">Last name</label>
              <input type="text"
                className={`rounded-lg py-2 px-4 border-2 border-ja-blue outline-ja-green bg-ja-blue-dark ${errors.lastname && "border-ja-magenta outline-ja-magenta"}`}
                {...register('lastname', {
                  value: lastname,
                  onChange: e => setLastname(e.target.value),
                  required: "Lastname field can't be empty",
                  maxLength: {
                    value: 30,
                    message: "Your lastname can't be larger than 30 characters long"
                  },
                  pattern: {
                    value: /^[a-zA-ZÀ-ÖØ-öø-ÿ ]+$/,
                    message: "The lastname field only accept letters"
                  },
                  onBlur: async () => await trigger('lastname')
                })}
              />
              {
                errors.lastname &&
                <p className="p-2 rounded-md bg-ja-magenta mt-2 flex items-center">{errors.lastname.message}</p>
              }
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label className="text-body">Email</label>
              <input type="email"
                className={`rounded-lg py-2 px-4 border-2 border-ja-blue outline-ja-green bg-ja-blue-dark ${errors.email && "border-ja-magenta outline-ja-magenta"}`}
                {...register('email', {
                  value: email,
                  onChange: e => setEmail(e.target.value),
                  required: "Email field can't be empty",
                  pattern: {
                    value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm,
                    message: "Email direction is invalid"
                  },
                  onBlur: async () => await validateEmailUser('email')
                })}
              />
              {
                errors.email &&
                <p className="p-2 rounded-md bg-ja-magenta mt-2 flex items-center">{errors.email.message}</p>
              }
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label className="text-body">Username</label>
              <input type="text"
                className={`rounded-lg py-2 px-4 border-2 border-ja-blue outline-ja-green bg-ja-blue-dark ${errors.username && "border-ja-magenta outline-ja-magenta"}`}
                {...register('username', {
                  value: username,
                  onChange: e => setUsername(e.target.value),
                  required: "Username field can't be empty",
                  minLength: {
                    value: 4,
                    message: "Username must be atleast 4 characters long"
                  },
                  maxLength: {
                    value: 20,
                    message: "Username can't be larger than 20 characters long"
                  },
                  pattern: {
                    value: /^[a-z1-9]+$/,
                    message: "Username is invalid"
                  },
                  onBlur: async () => await validateEmailUser('username')
                })}
              />
              {
                errors.username &&
                <p className="p-2 rounded-md bg-ja-magenta mt-2 flex items-center" >
                  {errors.username.message}
                </p>
              }
            </fieldset>
            <fieldset className="flex flex-col gap-2 relative">
              <label className="text-body">Password</label>
              <input type={showPassword ? "text" : "password"}
                className={`rounded-lg py-2 px-4 border-2 border-ja-blue outline-ja-green bg-ja-blue-dark ${errors.password && "border-ja-magenta outline-ja-magenta"}`}
                {...register('password', {
                  value: password,
                  onChange: e => setPassword(e.target.value),
                  required: "Password field can't be empty",
                  minLength: {
                    value: 8,
                    message: "Password must be atleast 8 characters long"
                  },
                  maxLength: {
                    value: 30,
                    message: "Password can't be larger than 30 characters long"
                  },
                  onBlur: async () => await validatePassword()
                })}
              />
              {
                errors.password &&
                <p className="p-2 rounded-md bg-ja-magenta mt-2 flex items-center">{errors.password.message}</p>
              }
              {
                showPassword
                  ? <AiFillEye className="text-ja-green absolute right-2 top-1" onClick={() => setShowPassword(!showPassword)} />
                  : <AiOutlineEyeInvisible className="absolute right-2 top-1" onClick={() => setShowPassword(!showPassword)} />
              }
            </fieldset>
            <fieldset className="flex flex-col gap-2 relative">
              <label className="text-body">Repeat Password</label>
              <input type={showPasswordRepeat ? "text" : "password"}
                className={`rounded-lg py-2 px-4 border-2 border-ja-blue outline-ja-green bg-ja-blue-dark ${errors.repeatPassword && "border-ja-magenta outline-ja-magenta"}`}
                {...register('repeatPassword', {
                  value: repeatPassword,
                  onChange: e => setRepeatPassword(e.target.value),
                  required: "Repeat Password field can't be empty",
                  pattern: {
                    value: new RegExp(passwordToRegex()),
                    message: "The passwords don't match"
                  },
                  onBlur: async () => await trigger('repeatPassword')
                })}
              />
              {
                errors.repeatPassword &&
                <p className="p-2 rounded-md bg-ja-magenta mt-2 flex items-center">{errors.repeatPassword.message}</p>
              }
              {
                showPasswordRepeat
                  ? <AiFillEye className="text-ja-green absolute right-2 top-1" onClick={() => setShowPasswordRepeat(!showPasswordRepeat)} />
                  : <AiOutlineEyeInvisible className="absolute right-2 top-1" onClick={() => setShowPasswordRepeat(!showPasswordRepeat)} />
              }
            </fieldset>
            <fieldset className="flex flex-col gap-2 relative">
              <label className="text-body">Birthday</label>
              <input type="date"
                className={`rounded-lg py-2 px-4 border-2 border-ja-blue outline-ja-green bg-ja-blue-dark appearance-none ${errors.birthday && "border-ja-magenta outline-ja-magenta"}`}
                {...register('birthday', {
                  value: birthday,
                  onChange: e => setBirthday(e.target.value),
                  required: "Birthday field can't be empty",
                  onBlur: async () => await validateBirthday()
                })}
              />
              {
                errors.birthday &&
                <p className="p-2 rounded-md bg-ja-magenta mt-2 flex items-center">{errors.birthday.message}</p>
              }
              <AiFillCalendar className="absolute right-4 top-11" />
            </fieldset>
            <fieldset className="flex flex-col gap-2 relative">
              <label className="text-body">Country</label>
              <select name="country" defaultValue={country}
                className={`rounded-lg w-full py-2 px-4 border-2 border-ja-blue outline-ja-green bg-ja-blue-dark appearance-none ${errors.country && "border-ja-magenta outline-ja-magenta"}`}
                {...register('country', {
                  value: country,
                  onChange: e => setCountry(e.target.value),
                  required: "You must select your country",
                  onBlur: async () => await trigger('country')
                })}
              >
                {
                  data.countries.map((country) => {
                    return <option value={country.name.toLowerCase()} key={country.id}>{country.name}</option>
                  })
                }
              </select>
              {
                errors.country &&
                <p className="p-2 rounded-md bg-ja-magenta mt-2 flex items-center">{errors.country.message}</p>
              }
              <AiFillCaretDown className="absolute right-4 top-11" />
            </fieldset>
            <button type="submit" className="flex justify-center gap-4 items-center font-[700] text-head text-ja-dark py-2 px-4 rounded bg-ja-green my-6">
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