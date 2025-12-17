import { useRef } from 'react'
import {
  BigWheel,
  Camera,
  CameraAndGirl,
  DiscoverBg1,
  DiscoverBg1Phone,
  Film,
  ProductsHeading,
  SmallWheel,
  Wiring,
  YellowBg,
} from '../../assets'
import DiscoveryInfo from './DiscoveryInfo'

const Discover = () => {
  const ref = useRef()
  return (
    <section className="max-w-screen overflow-hidden pb-20 2xl:mx-36">
      <div className="flex justify-center ">
        <img src={ProductsHeading} alt="heading" className="absolute  -z-20 mt-5 h-[3.3rem] md:mt-10 md:h-24" />
        <h2 className="text-center font-gluten text-2xl font-bold text-[#790000] md:text-5xl md:leading-[60px]">
          HOW?
          <br /> WE DISCOVERED THE <br /> <span className="black-shadow font-lexend text-white">MASCOT</span>
        </h2>
      </div>
      <div className="relative">
        <img src={DiscoverBg1} alt="dbg" className="absolute -z-30 hidden md:block" />
        <img
          src={DiscoverBg1Phone}
          alt="dbg"
          className="absolute -top-3 left-7 -z-30 h-full w-[90%] object-contain md:hidden"
        />
        <div className="flex justify-end pr-3 pt-5 md:pr-24 md:pt-20">
          <div className="w-[55%] border-b-2 border-r-4 border-black/70 bg-[#039860] p-2 text-center font-lexend text-[10px] text-white md:w-[50%] md:border-b-4 md:border-r-8 md:p-7 md:text-xs lg:text-base">
            <span className="hidden md:block">
              Inspired by the image of the daughter of our founder and owner Shivani Malik, Inayat represents everything
              that we stand for - love, purity, and goodness
            </span>
            <span className="md:hidden">
              We&apos;re proud to introduce our beloved mascot, the heart and soul of our brand - Inayat
            </span>
          </div>
        </div>
        <div className="shoot relative -top-16 -mb-16 md:-top-52 md:px-20 md:pr-52">
          <div className="hidden lg:block">
            <img src={Camera} alt="camera" />
            <img
              src={Wiring}
              alt="wiring"
              className="absolute right-[1.5rem] top-[5.5rem] w-20 md:right-[18rem] md:top-[15.3rem] md:w-56"
            />
            <div className="rotation" ref={ref}>
              <img
                src={SmallWheel}
                alt="wiring"
                className="wheel_rotate  absolute right-[4rem] top-[5.7rem] w-[3.4rem] md:right-[415px] md:top-[16rem] md:w-24 lg:w-36"
              />
              <img
                src={BigWheel}
                alt="wiring"
                className="wheel_rotate absolute -right-[0.2rem] top-[5.5rem] w-[4.5rem] md:right-[11rem] md:top-[14rem]  md:w-[12rem] lg:w-[15rem]"
              />
            </div>
          </div>
          <div className="md:mt-32 lg:hidden">
            <img src={CameraAndGirl} alt="camera" />
          </div>
        </div>
      </div>
      <div className="relative h-full py-20  2xl:-mx-36">
        <img
          src={YellowBg}
          alt="bg"
          className="absolute top-0 -z-50 h-[490px]  md:-top-[20rem] md:h-auto md:w-screen 2xl:h-[160vh]"
        />
        <h2 className="discover-shadow my-5 -rotate-6 pl-10 font-gluten text-3xl font-bold text-red-base md:-mt-40 md:mb-0 md:pl-40 md:text-7xl">
          A Tale of <span className="text-black">Discovery!</span>
        </h2>
        <div className="flex flex-col items-end justify-end  md:pt-20">
          <img src={Film} alt="film" className="w-[90%] md:w-[80%]" />
          <p className="mt-3 w-[85vw] -rotate-3 text-center font-lexend text-xs font-bold text-white md:mr-20 md:w-[45rem] md:text-xl">
            From a simple crayon drawing on a piece of paper to an iconic brand symbol.
          </p>
        </div>
      </div>
      <DiscoveryInfo />
    </section>
  )
}

export default Discover
