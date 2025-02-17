import logoSm from '../../assets/daksh/logoSm.png'
import dakshTextSm from '../../assets/daksh/dakshTextSm.png'
import mobileBg from '../../assets/daksh/mobileBg.png'
import mobileAmazing from '../../assets/daksh/mobileAmazing.png'
import founder from '../../assets/daksh/founder.png'
import mobileBg2 from '../../assets/daksh/mobileBg2.png'
import location from '../../assets/daksh/location.png'
import { TbBrandLinkedin } from 'react-icons/tb'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { RiInstagramLine } from 'react-icons/ri'

const Main = () => {
  return (
    <div className="bg-[#d7bca6]">
      <div className="relative flex min-h-screen flex-col items-center  ">
        {/* Background image positioned behind the content */}
        <img
          src={mobileBg}
          loading="lazy"
          alt="Mobile Background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Content container with a higher stacking context */}
        <div className="relative z-10 flex w-full flex-grow flex-col items-center justify-center">
          {/* Logo on the top right with a margin of about 10-20px */}
          <img src={logoSm} alt="Logo" className="absolute right-4 top-0 w-20 md:right-10 md:w-auto" />

          {/* Main content */}
          <img src={dakshTextSm} alt="Daksh Text" className=" md:w-70 mt-[60px] w-3/4" />
          {/* Paragraph placed right after dakshTextSm with a 10px top margin */}
          <p className="mt-[10px] text-center font-semibold text-[#231F20]">A WOMEN EMPOWERMENT GROUP</p>
        </div>
      </div>

      {/* about */}
      <div className="flex flex-col items-center justify-center gap-4">
        <img src={mobileAmazing} />
        <img src={founder} className="rounded-full border-8 border-[#951B20] " />
        <p className="text-center font-inter">
          <span className="text-lg font-bold text-[#000000] ">-Founded by</span> <br />
          <span className="text-lg font-bold text-[#951B20]"> INAYAT </span>
        </p>
        <p className="p-4 text-center font-inter font-semibold ">
          Imagine a world where knowledge isn't limited, where everyone has a chance to learn and grow. That's the dream
          behind our amazing book club We believe books are like magic keys - they unlock incredible stories, open doors
          to new ideas, and equip you with the power to succeed. But for some, these keys are out of That's where Daksh
          and I reach.come in. Together, we're on a mission to bring the magic of books to women and children in
          underprivileged communities.
        </p>

        <p className="p-4 text-center font-inter font-semibold">
          By joining our book club, you're not just reading a story - you're making a difference. You're helping women
          and children unlock their potential, build brighter futures, and chase their dreams. Are you ready to be a
          part of some- thing special? Join us today and be the reason someone discovers the joy of reading and the
          power of knowledge.
        </p>

        <button
          className="-mt-[10px] rounded-xl bg-[#951B20] font-inter text-lg text-white "
          style={{ paddingBottom: '5px', paddingTop: '5px', paddingLeft: '25px', paddingRight: '25px' }}
        >
          CLICK TO JOIN
        </button>
        <img src={mobileBg2} className="mt-10" />
      </div>
      <footer className="bg-[#d7bca6] p-4 ">
        {/* Contacts */}
        <div className="flex flex-row items-center justify-center gap-2 text-center">
          {/* Phone Numbers */}
          <p className="flex flex-col text-xs font-semibold">
            <span>+91 93104 11544</span>
            <span>+91 70113 61501</span>
          </p>
          {/* Email */}
          <p className="border-l border-black p-2 text-xs font-semibold">contactdaksh.org@gmail.com</p>
        </div>

        {/* Location */}
        <p className="mt-4 flex  items-center justify-center gap-1 text-center text-xs font-semibold ">
          <img src={location} alt="Location Icon" />
          <span>Bharat Nagar, Near Ashok Vihar, New Delhi -110052</span>
        </p>

        {/* Social Media Icons */}
        <div className="mt-4 flex justify-center gap-4">
          <TbBrandLinkedin size={40} />
          <TiSocialFacebookCircular size={40} />
          <RiInstagramLine size={40} />
        </div>
      </footer>
    </div>
  )
}

export default Main
