import { Girl, HHLeft, HHLeftMobile, HHRight, HHRightMobile, HeroLVec, ScrollDown } from '../../assets'
import { HeroBgSm } from '../../assets/mobile'
import Button from '../custom/Button'
import whatsapp from '../../assets/whatsapp.png'
import WhatsAppButton from './Whatsapp'
import { Link } from 'react-router-dom'
const HeroSm = () => {
  return (
    <div className="flex flex-col">
      <div className="pb-10">
        <img loading="lazy" src={HeroBgSm} alt="vec" className="absolute left-0 -z-10 w-screen" />
        <div className="relative">
          {/* <img loading="lazy" src={HHLeft} alt="elem" className="absolute  -top-4 left-24 hidden w-8 md:block" /> */}
          <img loading="lazy" src={HHLeftMobile} alt="elem" className="absolute  -top-5 left-20 w-8" />
          <h2 className="mt-14 text-center font-gluten text-4xl font-black sm:text-7xl">
            <span className="text-red-base">Mindful</span> <br /> eating for <br /> well being.
          </h2>
          {/* <img loading="lazy" src={HHRight} alt="elem" className="absolute -top-7 right-24 hidden w-8 md:block" /> */}
          <img loading="lazy" src={HHRightMobile} alt="elem" className="absolute  -top-7 right-20 w-8" />
        </div>
        <p className="px-13  text-center font-gluten text-xs md:text-sm">
          Bringing the warmth of mom&rsquo;s cooking to <br /> every kitchen, one delicious bite at a time.
        </p>
      </div>
      <div className=" -mt-10 flex items-start justify-end">
        <img loading="lazy" src={Girl} alt="gitl" />
      </div>
      <Button className="flex-1font-semibold mx-auto my-5 ">Scroll Down</Button>
      <img
        loading="lazy"
        src={ScrollDown}
        alt="scroll"
        className="mx-auto  h-5 w-5 animate-bounce object-contain md:hidden"
      />

      {/* whatsapp */}
      {/* <a className="fixed bottom-4 right-4 z-50 w-14" href="https://wa.me/919310411544/?text=Hii">
        <img src={whatsapp} alt="WhatsApp" />
      </a> */}
      <WhatsAppButton />
    </div>
  )
}
const HeroMd = () => {
  return (
    <div className="flex pl-14">
      <div className="left-section flex-1 py-14">
        <div className="relative">
          <img loading="lazy" src={HeroLVec} alt="vec" className="absolute -left-28 top-5 -z-10 w-[55%]" />
          <img loading="lazy" src={HHLeft} alt="elem" className="absolute -left-10 -top-7 w-10" />
          <h2 className="font-gluten text-6xl font-bold">
            <span className="text-red-base">Mindful</span> <br /> eating for <br /> well being.
          </h2>
          <img loading="lazy" src={HHRight} alt="elem" className="absolute -top-9 left-[17rem] w-10" />
        </div>
        <p className="mt-5  font-lexend text-lg">
          Bringing the warmth of mom&rsquo;s cooking to every kitchen, one delicious bite at a time.
        </p>
        <Button className="flex-1font-semibold mt-5 !px-8 text-2xl">
          <Link to="https://rzp.io/rzp/motherskitchen">Shop Now </Link>{' '}
        </Button>
      </div>
      <div className="flex flex-1 items-start justify-end pt-4">
        <img loading="lazy" src={Girl} alt="gitl" />
      </div>

      {/* whatsapp */}
      {/* <a className="fixed bottom-4 right-4 z-50 w-14" href="https://wa.me/919310411544/?text=Hii">
        <img src={whatsapp} alt="WhatsApp" />
      </a> */}
      <WhatsAppButton />
    </div>
  )
}
const HeroLg = () => {
  return (
    <div className="flex pl-28 2xl:px-[10rem]">
      <div className="left-section flex-1 py-14">
        <div className="relative">
          <img loading="lazy" src={HeroLVec} alt="vec" className="absolute -left-28 top-5 -z-10 w-[55%]" />
          <img loading="lazy" src={HHLeftMobile} alt="elem" className="absolute -left-10 -top-7 w-10" />
          <h2 className="font-gluten text-6xl font-bold">
            <span className="text-red-base">Mindful</span> <br /> eating for <br /> well being.
          </h2>
          <img loading="lazy" src={HHRightMobile} alt="elem" className="absolute -top-9 left-[17rem] w-10" />
        </div>
        <p className="mt-5  font-lexend text-xl">
          Bringing the warmth of mom&rsquo;s <br /> cooking to every kitchen, one <br /> delicious bite at a time.
        </p>
        <Button className="flex-1font-semibold mt-5 !px-8 text-2xl">
          <Link to="https://rzp.io/rzp/motherskitchen">Shop Now</Link>
        </Button>
      </div>
      <div className="flex flex-1 items-start justify-end pt-4">
        <img loading="lazy" src={Girl} alt="gitl" />
      </div>

      {/* whatsapp */}
      {/* <a className="fixed bottom-4 right-4 z-50 w-14" href="https://wa.me/919310411544/?text=Hii">
        <img src={whatsapp} alt="WhatsApp" />
      </a> */}
      <WhatsAppButton />
    </div>
  )
}

const Hero = () => {
  return (
    <div>
      <div className="md:hidden ">
        {/*Small Screen*/}
        <HeroSm />
      </div>

      <div className="hidden md:block lg:hidden">
        {/*Medium Screen*/}
        <HeroMd />
      </div>
      <div className="hidden lg:block">
        {/*Large Screen*/}
        <HeroLg />
      </div>
    </div>
  )
}

export default Hero
