import Input from "../../Atoms/Input";
import { useEffect, useState } from "react"
import { AiFillCaretDown, AiFillEye, AiFillEyeInvisible, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineClose, AiOutlineMan, AiOutlinePlus, AiOutlineWoman } from "react-icons/ai"
import { LiaTransgenderAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom"
import countryServices from '../../../services/countries'
import "../SignUp/styles.css"

const Home = () => {

  const [step, setStep] = useState(0)

  const [gender, setGender] = useState('woman')
  const [genderHide, setGenderHide] = useState(false)
  const [language, setLanguage] = useState('')
  const [languages, setLanguages] = useState([{ lang: 'English', level: 'Native' }])
  const [languagesLevel, setLanguagesLevel] = useState(['Basic', 'Intermediate', 'Advanced', 'Native'])
  const [languageLevel, setLanguageLevel] = useState('Basic')
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')
  const [states, setStates] = useState([])
  const [state, setState] = useState('')
  const [cities, setCities] = useState([])
  const [city, setCity] = useState('')

  const [courses, setCourses] = useState([])
  const [courseName, setCourseName] = useState('')
  const [courseCompany, setCourseCompany] = useState('')
  const [courseStart, setCourseStart] = useState('')
  const [courseEnd, setCourseEnd] = useState('')
  const [courseDesc, setCourseDesc] = useState('')

  const [bootcamps, setBootcamps] = useState([])
  const [bootcampName, setBootcampName] = useState('')
  const [bootcampCompany, setBootcampCompany] = useState('')
  const [bootcampStart, setBootcampStart] = useState('')
  const [bootcampEnd, setBootcampEnd] = useState('')
  const [bootcampDesc, setBootcampDesc] = useState('')

  const [maxLevelEdu, setMaxLevelEdu] = useState(['Elementary', 'High School', 'University'])

  const [job, setJob] = useState('')
  const [jobCompany, setJobCompany] = useState('')
  const [jobRespon, setJobRespon] = useState([])
  const [jobNewRespon, setJobNewRespon] = useState('')
  const [jobStart, setJobStart] = useState('')

  const [prevJob, setPrevJob] = useState('')
  const [prevJobCompany, setPrevJobCompany] = useState('')
  const [prevJobStart, setPrevJobStart] = useState('')
  const [prevJobEnd, setPrevJobEnd] = useState('')
  const [prevJobs, setPrevJobs] = useState([])

  const [desireJob, setDesireJob] = useState('')

  const [email, setEmail] = useState('')
  const [emailHide, setEmailHide] = useState(false)
  const [phone, setPhone] = useState('')
  const [phoneHide, setPhoneHide] = useState(false)
  const [countryCode, setCountryCode] = useState('')
  const [linkedIn, setLinkedIn] = useState('')
  const [linkedInHide, setLinkedInHide] = useState(false)

  const [yourself, setYourself] = useState('')

  useEffect(() => {
    if (step === 1) {
      countryServices
        .getCountries()
        .then(response => {
          setCountries(response)
        })
    }
  }, [])

  useEffect(() => {
    if (step === 1) {
      countryServices
        .getStates(country)
        .then(res => {
          setStates(res)
        })
    }
  }, [country])

  useEffect(() => {
    if (step === 1) {
      countryServices
        .getCities(country, state)
        .then(res => {
          setCities(res)
        })
    }
  }, [state])

  const handleSteps = () => setStep(step + 1)

  const handleGender = (e) => {
    const value = e.target.value
    setGender(value)
  }

  const handleGenderHide = (e) => {
    e.preventDefault()
    setGenderHide(!genderHide)
  }

  const handleChangeLanguages = (e) => {
    const value = e.target.value
    setLanguage(value)
  }

  const handleLevelLanguages = (e) => {
    const value = e.target.value
    setLanguageLevel(value)
  }

  const handleAddLanguages = (e) => {
    e.preventDefault()
    setLanguages([...languages, { lang: language, level: languageLevel }])
    setLanguage('')
  }

  const handleRemoveLanguage = (e, value) => {
    e.preventDefault()
    const newLanguages = [...languages].filter(lang => lang !== value)
    setLanguages(newLanguages)
  }

  const handleCountry = (e) => {
    const value = e.target.value
    setCountry(value)
  }

  const handleState = (e) => {
    const value = e.target.value
    setState(value)
  }

  const handleCity = (e) => {
    const value = e.target.value
    setCity(value)
  }

  const handleAddCourses = (e) => {
    e.preventDefault()
    setCourses([...courses, { name: courseName, company: courseCompany, start: courseStart, end: courseEnd }])
    setCourseCompany('')
    setCourseDesc('')
    setCourseName('')
    setCourseStart('')
    setCourseEnd('')
  }

  const handleRemoveCourse = (e, pos) => {
    e.preventDefault()
    setCourses(courses.filter((c, i) => i !== pos && c))
  }

  const handleDate = (date, ref) => {
    const monthDate = Number(date.slice(5, 7))
    const dayDate = Number(date.slice(8, 10))
    const year = date.slice(0, 4)
    let day
    let month
    if (monthDate === 1)
      month = 'Jan'
    else if (monthDate === 2)
      month = 'Feb'
    else if (monthDate === 3)
      month = 'Mar'
    else if (monthDate === 4)
      month = 'Apr'
    else if (monthDate === 5)
      month = 'May'
    else if (monthDate === 6)
      month = 'Jun'
    else if (monthDate === 7)
      month = 'Jul'
    else if (monthDate === 8)
      month = 'Aug'
    else if (monthDate === 9)
      month = 'Sep'
    else if (monthDate === 10)
      month = 'Oct'
    else if (monthDate === 11)
      month = 'Nov'
    else
      month = 'Dec'

    if (dayDate === 1)
      day = 'st'
    else if (dayDate === 2)
      day = 'nd'
    else if (dayDate === 3)
      day = 'rd'
    else
      day = 'th'

    if (ref === 'start')
      setCourseStart(`${month} ${dayDate}${day} ${year}`)
    else
      setCourseEnd(`${month} ${dayDate}${day} ${year}`)
  }

  const handleCourseStart = (e) => handleDate(e.target.value, 'start')

  const handleCourseEnd = (e) => handleDate(e.target.value, 'end')

  const handleAddBootcamp = (e) => {
    e.preventDefault()
    setBootcamps([...bootcamps, { name: bootcampName, company: bootcampCompany, start: bootcampStart, end: bootcampEnd }])
    setBootcampCompany('')
    setBootcampDesc('')
    setBootcampName('')
    setBootcampStart('')
    setBootcampEnd('')
  }

  const handleRemoveBootcamp = (e, pos) => {
    e.preventDefault()
    setBootcamps(bootcamps.filter((c, i) => i !== pos && c))
  }

  const handleBootcampDate = (date, ref) => {
    const monthDate = Number(date.slice(5, 7))
    const dayDate = Number(date.slice(8, 10))
    const year = date.slice(0, 4)
    let day
    let month
    if (monthDate === 1)
      month = 'Jan'
    else if (monthDate === 2)
      month = 'Feb'
    else if (monthDate === 3)
      month = 'Mar'
    else if (monthDate === 4)
      month = 'Apr'
    else if (monthDate === 5)
      month = 'May'
    else if (monthDate === 6)
      month = 'Jun'
    else if (monthDate === 7)
      month = 'Jul'
    else if (monthDate === 8)
      month = 'Aug'
    else if (monthDate === 9)
      month = 'Sep'
    else if (monthDate === 10)
      month = 'Oct'
    else if (monthDate === 11)
      month = 'Nov'
    else
      month = 'Dec'

    if (dayDate === 1)
      day = 'st'
    else if (dayDate === 2)
      day = 'nd'
    else if (dayDate === 3)
      day = 'rd'
    else
      day = 'th'

    if (ref === 'start')
      setBootcampStart(`${month} ${dayDate}${day} ${year}`)
    else
      setBootcampEnd(`${month} ${dayDate}${day} ${year}`)
  }

  const handleBootcampStart = (e) => handleBootcampDate(e.target.value, 'start')

  const handleBootcampEnd = (e) => handleBootcampDate(e.target.value, 'end')

  const handleAddJobRespon = (e) => {
    e.preventDefault()
    setJobRespon([...jobRespon, jobNewRespon])
    setJobNewRespon('')
  }

  const handleRemoveJobRespon = (e, j) => {
    e.preventDefault()
    setJobRespon(jobRespon.filter(r => r !== j))
  }

  const handleAddPrevJob = (e) => {
    e.preventDefault()
    setPrevJobs([...prevJobs, { job: prevJob, company: prevJobCompany, start: prevJobStart, end: prevJobEnd }])
    setPrevJob('')
    setPrevJobCompany('')
    setPrevJobStart('')
    setPrevJobEnd('')
  }

  const handleRemovePrevJob = (e, pos) => {
    e.preventDefault()
    setPrevJobs(prevJobs.filter((p, i) => i !== pos && p))
  }

  const handleEmailHide = (e) => {
    e.preventDefault()
    setEmailHide(!emailHide)
  }

  const handlePhoneHide = (e) => {
    e.preventDefault()
    setPhoneHide(!phoneHide)
  }

  const handleLinkedInHide = (e) => {
    e.preventDefault()
    setLinkedInHide(!linkedInHide)
  }

  return (
    <>
      <div className="flex items-center justify-center text-ja-light min-h-screen pt-14 pb-10 px-4 bg-[#0E0E0E]">
        {step === 0 &&
          <div className="flex flex-col items-center gap-4 py-8 px-2 bg-ja-dark border-ja-blue border-2 rounded-lg">
            <h6 className="text-center text-head">Welcome to</h6>
            <img src="/logo/logo-bi-square.svg" alt="Jä Logo" className="w-28" />
            <p className="text-center text-subhead">Let&#39;s get you started with your journey of making a job resume perfect to you and your career</p>
            <Link onClick={handleSteps} className="py-2 px-4 bg-ja-green rounded font-bold text-ja-dark flex items-center gap-4 mt-3">
              <span>Continue</span>
              <AiOutlineArrowRight />
            </Link>
            <div>Steps</div>
          </div>
        }
        {step === 1 &&
          <div className="flex flex-col items-center gap-4 py-16 px-2 bg-ja-dark border-ja-blue border-2 rounded-lg">
            <h6 className="text-center text-head">Names</h6>
            <p className="text-center text-subhead">Select the name that will be on your profile along side other fundamental information</p>
            <form className="flex flex-col items-stretch py-4 gap-4">
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">First name</label>
                <Input type="text" />
                {/* <input type="email" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " /> */}
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">Last Name</label>
                <input type="password" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " />
              </fieldset>
              <fieldset className="flex flex-col gap-2" onChange={(e) => handleGender(e)}>
                <div className="flex justify-between items-center">
                  <label className="text-body">Gender</label>
                  <button onClick={(e) => handleGenderHide(e)} title="Make your gender private or public">
                    {genderHide
                      ? <AiFillEyeInvisible className="text-ja-light/50" />
                      : <AiFillEye className="text-ja-green" />
                    }
                  </button>
                </div>
                <div className="flex items-center">
                  <div
                    className={`flex justify-center items-center w-1/3 py-3 bg-ja-blue-dark border-2 border-ja-blue rounded-s-lg ${gender === 'woman' && "bg-ja-green text-ja-dark border-ja-green font-semi"}`}
                  >
                    <label htmlFor="woman">
                      <AiOutlineWoman className="mx-auto" />
                      <span>woman</span>
                    </label>
                    <input type="radio" id="woman" value="woman" name="gender" className="hidden" />
                  </div>
                  <div
                    className={`flex justify-center items-center w-1/3 py-3 bg-ja-blue-dark border-t-2 border-b-2 border-ja-blue ${gender === "man" && "bg-ja-green text-ja-dark border-ja-green font-semi"}`}
                  >
                    <label htmlFor="man">
                      <AiOutlineMan className="mx-auto" />
                      <span>man</span>
                    </label>
                    <input type="radio" id="man" value="man" name="gender" className="hidden" />
                  </div>
                  <div
                    className={`flex justify-center items-center w-1/3 py-3 bg-ja-blue-dark border-2 border-ja-blue rounded-e-lg ${gender === "other" && "bg-ja-green text-ja-dark border-ja-green font-semi"}`}
                  >
                    <label htmlFor="other">
                      <LiaTransgenderAltSolid className="mx-auto" />
                      <span>other</span>
                    </label>
                    <input type="radio" id="other" value="other" name="gender" className="hidden" />
                  </div>
                </div>
              </fieldset>
              {gender === 'other' &&
                <>
                  <fieldset className="flex flex-col gap-2">
                    <label className="text-body">Your gender</label>
                    <input type="text" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " />
                  </fieldset>
                  <fieldset className="flex flex-col gap-2">
                    <label className="text-body">Your pronouns</label>
                    <input type="text" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " />
                  </fieldset>
                </>
              }
              <fieldset className="flex flex-col gap-2 relative">
                <label className="text-body">Country</label>
                <select type="text" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark w-full appearance-none" onChange={(e) => handleCountry(e)}>
                  {
                    countries.map(country => {
                      return <option key={country.id} value={country.iso2}>{country.name}</option>
                    })
                  }
                </select>
                <AiFillCaretDown className="absolute right-4 bottom-3" />
              </fieldset>
              <fieldset className="flex flex-col gap-2 relative">
                <label className="text-body">State</label>
                <select type="text" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark w-full appearance-none" onChange={(e) => handleState(e)}>
                  {states.length &&
                    states.map(state => {
                      return <option key={state.id} value={state.iso2}>{state.name}</option>
                    })
                  }
                </select>
                <AiFillCaretDown className="absolute right-4 bottom-3" />
              </fieldset>
              <fieldset className="flex flex-col gap-2 relative">
                <label className="text-body">City</label>
                <select type="text" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark w-full appearance-none" onChange={e => handleCity(e)}>
                  {cities.length &&
                    cities.map(city => {
                      return <option key={city.id} value={city.iso2}>{city.name}</option>
                    })
                  }
                </select>
                <AiFillCaretDown className="absolute right-4 bottom-3" />
              </fieldset>
              <fieldset className="flex flex-col gap-2 relative">
                <label className="text-body">Language/s</label>
                <input type="text" value={language} className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " onChange={(e) => handleChangeLanguages(e)} />
                <label className="text-body">Language level</label>
                <select type="text" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark appearance-none" onChange={(e) => handleLevelLanguages(e)} >
                  {
                    languagesLevel.map((lang, i) => {
                      return <option key={i} value={lang.toLowerCase()}>{lang}</option>
                    })
                  }
                </select>
                <AiFillCaretDown className="absolute right-4 top-[126px]" />
                <button onClick={(e) => handleAddLanguages(e, language)} className="flex justify-center gap-4 items-center font-[700] text-body text-ja-dark py-2 px-4 rounded bg-ja-green self-end">
                  <span>Add</span>
                  <AiOutlinePlus />
                </button>
                <div className="flex flex-col gap-2">
                  {
                    languages.map((lang, i) => {
                      return (
                        <div key={i} className="text-info p-2 mt-1 bg-ja-blue rounded flex justify-between gap-2 items-center">
                          <span>{lang.lang} - {lang.level}</span>
                          <button onClick={(e) => handleRemoveLanguage(e, lang.lang)}>
                            <AiOutlineClose />
                          </button>
                        </div>
                      )
                    })
                  }
                </div>

              </fieldset>
              <Link onClick={handleSteps} className="flex justify-center gap-4 items-center font-[700] text-head text-ja-dark py-2 px-4 rounded bg-ja-green my-6">
                <span>Continue</span>
                <AiOutlineArrowRight />
              </Link>
            </form>
            <div>Steps</div>
          </div>
        }
        {step === 2 &&
          <div className="flex flex-col items-center gap-4 py-16 px-2 bg-ja-dark border-ja-blue border-2 rounded-lg">
            <h6 className="text-center text-head">Education</h6>
            <p className="text-center text-subhead">Enter your education background</p>
            <form className="flex flex-col items-stretch py-4 gap-4">
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">Title</label>
                <input type="text" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">University</label>
                <input type="text" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">Course name</label>
                <input type="text" value={courseName} className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark" onChange={e => setCourseName(e.target.value)} />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">Company</label>
                <input type="text" value={courseCompany} className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " onChange={e => setCourseCompany(e.target.value)} />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">Description</label>
                <textarea type="text" value={courseDesc} className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark" onChange={e => setCourseDesc(e.target.value)} ></textarea>
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <div className="flex flex-col gap-4 justify-between">
                  <div className="flex flex-col gap-2">
                    <label className="text-body">Start of the course</label>
                    <input type="date" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark" onChange={e => handleCourseStart(e)} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-body">End of the course</label>
                    <input type="date" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark" onChange={e => handleCourseEnd(e)} />
                  </div>
                </div>
                {courses.length >= 1 &&
                  courses.map((course, i) => {
                    return (
                      <div key={i} className="text-info p-2 mt-1 bg-ja-blue rounded flex flex-col justify-between gap-2 relative">
                        <button className="absolute top-2 right-2" onClick={(e) => handleRemoveCourse(e, i)}>
                          <AiOutlineClose />
                        </button>
                        <p className="text-body font-semi">{course.name}</p>
                        <p className="font-medium">{course.company}</p>
                        <p>{course.start} - {course.end}</p>
                      </div>
                    )
                  })
                }
                <button
                  onClick={(e) => handleAddCourses(e)}
                  className="flex justify-center gap-4 items-center font-[700] text-body text-ja-dark py-2 px-4 rounded bg-ja-green self-end"
                >
                  <span>Add</span>
                  <AiOutlinePlus />
                </button>
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">Bootcamp name</label>
                <input type="text" value={bootcampName} className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark" onChange={e => setBootcampName(e.target.value)} />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">Company</label>
                <input type="text" value={bootcampCompany} className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " onChange={e => setBootcampCompany(e.target.value)} />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">Description</label>
                <textarea type="text" value={bootcampDesc} className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark" onChange={e => setBootcampDesc(e.target.value)} ></textarea>
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <div className="flex flex-col gap-4 justify-between">
                  <div className="flex flex-col gap-2">
                    <label className="text-body">Start of the bootcamp</label>
                    <input type="date" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark" onChange={e => handleBootcampStart(e)} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-body">End of the bootcamp</label>
                    <input type="date" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark" onChange={e => handleBootcampEnd(e)} />
                  </div>
                </div>
                {bootcamps.length >= 1 &&
                  bootcamps.map((bootcamp, i) => {
                    return (
                      <div key={i} className="text-info p-2 mt-1 bg-ja-blue rounded flex flex-col justify-between gap-2 relative">
                        <button className="absolute top-2 right-2" onClick={(e) => handleRemoveBootcamp(e, i)}>
                          <AiOutlineClose />
                        </button>
                        <p className="text-body font-semi">{bootcamp.name}</p>
                        <p className="font-medium">{bootcamp.company}</p>
                        <p>{bootcamp.start} - {bootcamp.end}</p>
                      </div>
                    )
                  })
                }
                <button
                  onClick={(e) => handleAddBootcamp(e)}
                  className="flex justify-center gap-4 items-center font-[700] text-body text-ja-dark py-2 px-4 rounded bg-ja-green self-end"
                >
                  <span>Add</span>
                  <AiOutlinePlus />
                </button>
              </fieldset>
              <fieldset className="flex flex-col gap-2 relative">
                <label className="text-body">Max level of education</label>
                <select className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark w-full appearance-none" onChange={e => setMaxLevelEdu(e.target.value)}>
                  {
                    maxLevelEdu.map((max, i) => {
                      return <option key={i} value={max}>{max}</option>
                    })
                  }
                </select>
                <AiFillCaretDown className="absolute bottom-3 right-2" />
              </fieldset>
              <fieldset className="flex gap-2 justify-between mt-8">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    setStep(step - 1)
                  }}
                  className="flex justify-center gap-4 items-center font-[700] text-body text-ja-dark py-2 px-4 rounded bg-ja-green self-end flex-grow"
                >
                  <AiOutlineArrowLeft />
                  <span>Back</span>
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    setStep(step + 1)
                  }}
                  className="flex justify-center gap-4 items-center font-[700] text-body text-ja-dark py-2 px-4 rounded bg-ja-green self-end"
                >
                  <span>Continue</span>
                  <AiOutlineArrowRight />
                </button>
              </fieldset>
            </form>
          </div>
        }
        {step === 3 &&
          <div className="flex flex-col items-center gap-4 py-16 px-2 bg-ja-dark border-ja-blue border-2 rounded-lg">
            <h6 className="text-center text-head">Work Experience</h6>
            <p className="text-center text-subhead">Enter your working experience</p>
            <form className="flex flex-col items-stretch py-4 px-2 gap-4">
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">Job position</label>
                <input type="text" value={job} className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " onChange={e => setJob(e.target.value)} />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">Company</label>
                <input type="text" value={jobCompany} className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " onChange={e => setJobCompany(e.target.value)} />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">Entrace</label>
                <input type="date" value={jobStart} className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " onChange={e => setJobStart(e.target.value)} />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">Responsabilities</label>
                <textarea type="text" value={jobNewRespon} className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " onChange={e => setJobNewRespon(e.target.value)}></textarea>
                <button
                  onClick={(e) => handleAddJobRespon(e)}
                  className="flex justify-center gap-4 items-center font-[700] text-body text-ja-dark py-2 px-4 rounded bg-ja-green self-end"
                >
                  <span>Add</span>
                  <AiOutlinePlus />
                </button>
                {jobRespon !== 0 &&
                  jobRespon.map((j, i) => {
                    return (
                      <div key={i} className="text-info p-2 mt-1 bg-ja-blue rounded flex flex-col justify-between gap-2 relative">
                        <button className="absolute top-2 right-2" onClick={(e) => handleRemoveJobRespon(e, j)}>
                          <AiOutlineClose />
                        </button>
                        <p className="text-body font-semi">{j}</p>
                      </div>
                    )
                  })
                }
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">Previous Experience</label>
                <label className="text-body">Job position</label>
                <input type="text" value={prevJob} className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " onChange={e => setPrevJob(e.target.value)} />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">Company</label>
                <input type="text" value={prevJobCompany} className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " onChange={e => setPrevJobCompany(e.target.value)} />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">From date</label>
                <input type="date" value={prevJobStart} className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " onChange={e => setPrevJobStart(e.target.value)} />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">To date</label>
                <input type="date" value={prevJobEnd} className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " onChange={e => setPrevJobEnd(e.target.value)} />
                <button
                  onClick={(e) => handleAddPrevJob(e)}
                  className="flex justify-center gap-4 items-center font-[700] text-body text-ja-dark py-2 px-4 rounded bg-ja-green self-end"
                >
                  <span>Add</span>
                  <AiOutlinePlus />
                </button>
                {prevJobs !== 0 &&
                  prevJobs.map((p, i) => {
                    return (
                      <div key={i} className="text-info p-2 mt-1 bg-ja-blue rounded flex flex-col justify-between gap-2 relative">
                        <button className="absolute top-2 right-2" onClick={(e) => handleRemovePrevJob(e, i)}>
                          <AiOutlineClose />
                        </button>
                        <p className="text-body font-semi">{p.job}</p>
                        <p className="text-body font-medium">{p.company}</p>
                        <p className="text-body">{p.start} - {p.end}</p>
                      </div>
                    )
                  })
                }
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">Desire Job</label>
                <input type="text" value={desireJob} className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " onChange={e => setDesireJob(e.target.value)} />
              </fieldset>
              <fieldset className="flex gap-2 justify-between mt-8">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    setStep(step - 1)
                  }}
                  className="flex justify-center gap-4 items-center font-[700] text-body text-ja-dark py-2 px-4 rounded bg-ja-green self-end flex-grow"
                >
                  <AiOutlineArrowLeft />
                  <span>Back</span>
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    setStep(step + 1)
                  }}
                  className="flex justify-center gap-4 items-center font-[700] text-body text-ja-dark py-2 px-4 rounded bg-ja-green self-end"
                >
                  <span>Continue</span>
                  <AiOutlineArrowRight />
                </button>
              </fieldset>
            </form>
          </div>
        }
        {step === 4 &&
          <div>
            <div className="flex flex-col items-center gap-4 py-16 px-2 bg-ja-dark border-ja-blue border-2 rounded-lg">
              <h6 className="text-center text-head">Contact channels</h6>
              <p className="text-center text-subhead">Choose the way people can contact you</p>
              <form className="flex flex-col items-stretch py-4 px-2 gap-4">
                <fieldset className="flex flex-col gap-2 relative">
                  <label className="text-body">Email</label>
                  <input type="email" value={email} className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " onChange={e => setEmail(e.target.value)} />
                  <button onClick={(e) => handleEmailHide(e)} className="absolute top-1 right-2" title="Make your email private or public">
                    {emailHide
                      ? <AiFillEyeInvisible className="text-ja-light/50" />
                      : <AiFillEye className="text-ja-green" />
                    }
                  </button>
                  <div className="absolute -bottom-6 right-2 flex items-center gap-2">
                    <label htmlFor="email-registered" className="text-info">use registered email</label>
                    <input type="checkbox" id="email-registered" />
                  </div>
                </fieldset>
                <fieldset className="flex flex-col gap-2 relative mt-2">
                  <label className="text-body">Country&#39;s code</label>
                  <input type="number" value={countryCode} onChange={e => setCountryCode(e.target.value)} className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark" />
                </fieldset>
                <fieldset className="flex flex-col gap-2 relative">
                  <label className="text-body">Phone number</label>
                  <input type="number" value={phone} onChange={e => setPhone(e.target.value)} className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark" />
                  <button onClick={(e) => handlePhoneHide(e)} className="absolute top-1 right-2" title="Make your phone private or public">
                    {phoneHide
                      ? <AiFillEyeInvisible className="text-ja-light/50" />
                      : <AiFillEye className="text-ja-green" />
                    }
                  </button>
                </fieldset>
                <fieldset className="flex flex-col gap-2 relative">
                  <label className="text-body">LinkedIn URL</label>
                  <input type="text" value={linkedIn} className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark" onChange={e => setLinkedIn(e.target.value)} />
                  <button onClick={(e) => handleLinkedInHide(e)} className="absolute top-1 right-2" title="Make your LinkedIn private or public">
                    {linkedInHide
                      ? <AiFillEyeInvisible className="text-ja-light/50" />
                      : <AiFillEye className="text-ja-green" />
                    }
                  </button>
                </fieldset>
                <fieldset className="flex gap-2 justify-between mt-8">
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      setStep(step - 1)
                    }}
                    className="flex justify-center gap-4 items-center font-[700] text-body text-ja-dark py-2 px-4 rounded bg-ja-green self-end flex-grow"
                  >
                    <AiOutlineArrowLeft />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      setStep(step + 1)
                    }}
                    className="flex justify-center gap-4 items-center font-[700] text-body text-ja-dark py-2 px-4 rounded bg-ja-green self-end"
                  >
                    <span>Continue</span>
                    <AiOutlineArrowRight />
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        }
        {step === 5 &&
          <div className="flex flex-col gap-4 py-16 px-2 bg-ja-dark border-ja-blue border-2 rounded-lg">
            <h6 className="text-center text-head">You</h6>
            <p className="text-center text-subhead">Give a small introduction about yourself</p>
            <form className="flex flex-col items-stretch py-4 px-2 gap-4">
              <fieldset className="flex flex-col gap-2 relative mt-2">
                <textarea type="number" value={yourself} onChange={e => setYourself(e.target.value)} className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark" ></textarea>
              </fieldset>
              <fieldset className="flex gap-2 justify-between mt-8">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    setStep(step - 1)
                  }}
                  className="flex justify-center gap-4 items-center font-[700] text-body text-ja-dark py-2 px-4 rounded bg-ja-green self-end flex-grow"
                >
                  <AiOutlineArrowLeft />
                  <span>Back</span>
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    setStep(step + 1)
                  }}
                  className="flex justify-center gap-4 items-center font-[700] text-body text-ja-dark py-2 px-4 rounded bg-ja-green self-end"
                >
                  <span>Finish</span>
                  <AiOutlineArrowRight />
                </button>
              </fieldset>
            </form>
          </div>
        }
      </div>
    </>
  )
}

export default Home