import { useState } from "react"
import { AiFillEye, AiFillEyeInvisible, AiOutlineArrowRight, AiOutlineMan, AiOutlineWoman } from "react-icons/ai"
import { LiaTransgenderAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom"

const Home = () => {
  //TODO: consider to create a route '/create/:step' or '/create?step=0'
  //TODO: which will consist on a SINGLE PAGE where the Forms will be passed and showed dinamically
  //TODO: depending on the steps and only continuing if the main fields are valid

  const [step, setStep] = useState(0)
  const [gender, setGender] = useState('woman')
  const [genderHide, setGenderHide] = useState(true)

  const handleSteps = () => {
    setStep(step + 1)
  }

  const handleGender = (e) => {
    const value = e.target.value
    setGender(value)
  }

  const handleGenderHide = (e) => {
    e.preventDefault()
    setGenderHide(!genderHide)
  }

  return (
    <>
      <div className="flex items-center text-ja-light min-h-screen pt-14 pb-10 px-4 bg-[#0E0E0E]">
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
                <input type="email" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " />
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
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">Country</label>
                <input type="text" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">Address</label>
                <input type="text" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label className="text-body">Language/s</label>
                <input type="text" className="rounded-lg py-2 px-4 border-2 border-js-blue outline-ja-green bg-ja-blue-dark " />
              </fieldset>
              <Link onClick={handleSteps} className="flex justify-center gap-4 items-center font-[700] text-head text-ja-dark py-2 px-4 rounded bg-ja-green my-6">
                <span>Continue</span>
                <AiOutlineArrowRight />
              </Link>
            </form>
            <div>Steps</div>
          </div>

        }
      </div>
    </>
  )
}

export default Home