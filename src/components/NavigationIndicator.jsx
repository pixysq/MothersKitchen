import { AiFillHome, AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const NavigationIndicator = () => {
  return (
    <div className="relative mr-5 hidden items-center gap-4 rounded-full bg-[#C40D4F] p-2 font-lexend after:absolute after:left-1 after:top-1 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-black md:mr-10 md:flex md:pr-14 lg:pr-20 lg:text-base">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFCD00]">
        <AiFillHome className="h-4 w-4 text-[#C40D4F] " />
      </div>
      <Link to={'/'} className="font-bold text-[#ffcd00]">
        Home
      </Link>
      <AiOutlineRight className="text-[#ffcd00]" />
      <div className="font-semibold text-white">Contact</div>
    </div>
  )
}

export default NavigationIndicator
