import Header from "../Header"
import HeroTitle from "./HeroTitle"
import HeroDescription from "./HeroDescription"

const Hero = () => {
  return (
    <>
      <div className="bg-[url('/img/pattern-9.png')] bg-[length:100%]">
          <Header />
        <div
          className="flex flex-col justify-center p-2 text-[#FFF3DE] w-full h-screen relative bg-[#00141BCC]"
        >
          <HeroTitle />
          <HeroDescription />
        </div>
      </div>
    </>
  )
}

export default Hero