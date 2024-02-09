import { useState } from "react"
import { AiFillStar } from "react-icons/ai"
import { TypeAnimation } from "react-type-animation"

const HeroTitle = () => {
  const [item1, setItem1] = useState('Apps')
  const [item2, setItem2] = useState('Websites')
  const [item3, setItem3] = useState('Tech-stack')

  const items = [
    {
      item1: 'Apps',
      item2: 'Websites',
      item3: 'Tech'
    },
    {
      item2: 'Projects',
      item1: 'Plains',
      item3: 'References'
    },
    {
      item1: 'Designs',
      item2: 'Projects',
      item3: 'Portfolio'
    },
    {
      item1: 'Plays',
      item2: 'Videos',
      item3: 'Auditions'
    },
    {
      item1: 'Projects',
      item2: 'Works',
      item3: 'References'
    }
  ]

  return (
    <>
      <div className='flex flex-col justify-center'>
        <h3 className="font-title-1 font-light text-head-lg h-14">I&apos;m a</h3>
        <h3 className={`font-title-1 font-semi text-head-lg mb-4 text-ja-gold`} >
          <TypeAnimation
            sequence={[
              'Programmer',
              () => {
                setItem1(items[0].item1)
                setItem2(items[0].item2)
                setItem3(items[0].item3)
              },
              2000,
              'Architect',
              () => {
                setItem1(items[1].item1)
                setItem2(items[1].item2)
                setItem3(items[1].item3)
              },
              2000,
              'Designer',
              () => {
                setItem1(items[2].item1)
                setItem2(items[2].item2)
                setItem3(items[2].item3)
              },
              2000,
              'Actor',
              () => {
                setItem1(items[3].item1)
                setItem2(items[3].item2)
                setItem3(items[3].item3)
              },
              2000,
              'Engineer',
              () => {
                setItem1(items[4].item1)
                setItem2(items[4].item2)
                setItem3(items[4].item3)
              },
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h3>
        <div className='flex w-full px-2 text-info text-[#06D6A0] mb-4'>
          <div
            className='flex w-1/3 gap-[8px] p-2 items-center border-[2px] rounded-l-xl border-[#06D6A0] bg-[#00141BAA]'
          >
            <AiFillStar />
            <span>{item1}</span>
          </div>
          <div
            className='flex w-1/3 gap-[8px] p-2 items-center border-y-[2px] border-[#06D6A0] bg-[#00141BAA]'
          >
            <AiFillStar />
            <span>{item2}</span>
          </div>
          <div
            className='flex w-1/3 gap-[8px] p-2 items-center border-[2px] rounded-r-xl border-[#06D6A0] bg-[#00141BAA]'
          >
            <AiFillStar />
            <span>{item3}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroTitle