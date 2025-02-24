import logoSm from '../../assets/daksh/logoSm.png'
import dakshTextSm from '../../assets/daksh/dakshTextSm.png'
import mobileBg from '../../assets/daksh/mobileBg.png'
import mobileAmazing from '../../assets/daksh/mobileAmazing.png'
import founder from '../../assets/daksh/founder.png'
import mobileBg2 from '../../assets/daksh/mobileBg2.png'
import location from '../../assets/daksh/location.png'
import bgLg from '../../assets/daksh/bgLg.png'
import textLg from '../../assets/daksh/textLg.png'
import logoLg from '../../assets/daksh/logoLg.png'
import facebook from '../../assets/daksh/facebook.png'
import linkedin from '../../assets/daksh/linkedin.png'
import insta from '../../assets/daksh/insta.png'

const Main = () => {
  return (
    <>
      {/* large screen */}
      <div className="hidden bg-[#d7bca6] md:block">
        {/* ḍaksh text */}
        <div className="absolute left-[500px] top-[250px] mb-20 ">
          <img src={textLg} style={{ width: '50%' }} />
          <p className="font-notoserif ml-5 mt-2  text-xl font-semibold text-[#231F20]">A WOMEN EMPOWERMENT GROUP</p>
        </div>

        {/* founder section */}
        <div className="absolute left-[50px] top-[300px] flex overflow-hidden mt-80 ">
          <div className="flex flex-col items-center justify-end  ">
            <img src={founder} className=" rounded-full border-8 border-[#951B20]  " style={{ height: '50%' }} />
            <p className="-mb-1 mt-2 font-inter font-bold text-black ">-Founded by</p>
            <p className="font-inter font-bold text-[#951B20]   ">INAYAT</p>
          </div>

          <div className="flex w-[50%] flex-col">
            <img src={mobileAmazing} style={{ width: '20%' }} />
            <p className="mt-4 font-inter text-xs font-semibold text-black" style={{ lineHeight: '14px' }}>
              Imagine a world where knowledge isn't limited, where everyone has a chance to learn and grow. That's the
              dream behind our amazing book club We believe books are like magic keys - they unlock incredible stories,
              open doors to new ideas, and equip you with the power to succeed. But for some, these keys are out of
              That's where Daksh and I reach.come in. Together, we're on a mission to bring the magic of books to women
              and children in underprivileged communities.
            </p>

            <div>
              <p className="mt-4 font-inter text-xs font-semibold text-black" style={{ lineHeight: '14px' }}>
                By joining our book club, you're not just reading a story - you're making a difference. You're helping
                women and children unlock their potential, build brighter futures, and chase their dreams. Are you ready
                to be a part of some- thing special? Join us today and be the reason someone discovers the joy of
                reading and the power of knowledge.
              </p>

              <button
                className="mt-2 rounded-xl bg-[#951B20] font-inter text-lg text-white"
                style={{ paddingBottom: '5px', paddingTop: '5px', paddingLeft: '20px', paddingRight: '20px' }}
                onClick={() => (window.location.href = 'mailto:contactdaksh.org@gmail.com')}
              >
                CLICK TO JOIN
              </button>
            </div>
          </div>
        </div>

        {/* contact */}
        <div className="absolute mt-[900px] right-4 flex items-center gap-2 ">
          <p className="font-notoSerif font-semibold text-[#030303] ">+91 93104 11544 &nbsp; &nbsp; +91 70113 61501</p>
          <p className="border-l-2 border-[#030303] p-2 font-notoSerif font-semibold text-[#030303] ">
            contactdaksh.org@gmail.com
          </p>
          <p className="flex items-center gap-1 font-notoSerif font-semibold text-black ">
            {' '}
            <img src={location} /> Bharat Nagar, Near Ashok Vihar, New Delhi -110052
          </p>
        </div>

        <div className="absolute m-5 flex gap-4">
          <img src={linkedin} style={{ height: '25px' }} />
          <img src={facebook} style={{ height: '25px' }} />
          <img src={insta} style={{ height: '25px' }} />
        </div>
        <img src={logoLg} className="absolute ml-[1200px] h-[150px]" />
        <img src={bgLg} style={{ height: '150vmin', width: '100vw' }} />
      </div>

      {/* small screen */}
      <div className="bg-[#d7bca6] md:hidden">
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
            <img src={dakshTextSm} alt="Daksh Text" className=" md:w-70 mt-[10px] w-3/4" />
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
            Imagine a world where knowledge isn't limited, where everyone has a chance to learn and grow. That's the
            dream behind our amazing book club We believe books are like magic keys - they unlock incredible stories,
            open doors to new ideas, and equip you with the power to succeed. But for some, these keys are out of That's
            where Daksh and I reach.come in. Together, we're on a mission to bring the magic of books to women and
            children in underprivileged communities.
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
            <img src={linkedin} style={{ height: '25px' }} />
            <img src={facebook} style={{ height: '25px' }} />
            <img src={insta} style={{ height: '25px' }} />
          </div>
        </footer>
      </div>
    </>
  )
}

export default Main
