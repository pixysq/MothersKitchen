import LastSection from '../LastSection'
import BorderDiv from '../custom/BorderDiv'
import logo from '../../assets/logo_text.png'
import FileDropZone from './fileDropZone'
import magzine from '../../assets/living/magzine.png'

const Living = () => {
  return (
    <div className="p-4 sm:m-6 md:m-8 lg:m-10 xl:m-12">
      <BorderDiv className="flex flex-col items-center justify-center bg-[#FFB3AE] p-6">
        <img src={logo} alt="logo" className="md:h-auto md:w-1/6" />
        <h2 className="black-shadow white-stroke  text-center  font-gluten text-3xl font-bold text-white md:my-4 md:text-9xl">
          Coming Soon
        </h2>
        <img src={magzine} alt="living image" className="md:pl-40 md:pr-40" />
        <p className="text-center font-lexend font-semibold md:pl-20 md:pl-20 " style={{ lineHeight: '18px' }}>
          MK Living: Your guide to designing a life you don’t need a vacation from. Bite-sized tips, actionable
          insights, and fresh perspectives to help you live fully, work smart, and find joy in every moment.
        </p>
      </BorderDiv>

      {/* heading */}
      <h2 className="mt-10 text-center font-gluten text-2xl font-bold md:text-3xl" style={{ color: '#5B3202' }}>
        Got a golden secret?
      </h2>
      <h2 className="text-center font-gluten text-2xl font-bold text-white md:text-3xl">
        Share your recipes, gardening tips, or lifestyle
      </h2>
      <h2 className="text-center font-gluten  text-2xl font-bold text-white md:text-3xl">
        hacks and inspire others to shine!
      </h2>

      {/* form */}
      <BorderDiv className="mt-10 flex flex-col items-center justify-around gap-4 bg-[#FEF5CE] p-6 md:flex-row">
        {/* Optionally adjust FileDropZone if needed */}
        <FileDropZone />

        <form className="relative z-10 flex flex-col gap-3">
          <input
            type="text"
            className="w-full rounded-xl border-2 border-black bg-[#976120] p-2 py-3 text-sm font-semibold text-white outline-none placeholder:text-white"
            placeholder="Your Name"
          />
          <input
            type="text"
            className="w-full rounded-xl border-2 border-b-4 border-r-4 border-black bg-[#976120] p-2 py-3 text-[10px] font-semibold text-white outline-none placeholder:text-white md:text-sm"
            placeholder="Your Email"
          />
          <input
            type="text"
            className="w-full rounded-xl border-2 border-b-4 border-r-4 border-black bg-[#976120] p-2 py-3 text-[10px] font-semibold text-white outline-none placeholder:text-white md:text-sm"
            placeholder="Your Number"
          />
          <textarea
            name="contact"
            id="contact"
            cols="50"
            rows="8"
            className="mt-5 w-full resize-none rounded-xl border-2 border-b-4 border-r-4 border-black bg-[#976120] p-2 text-[10px] font-semibold text-white outline-none placeholder:text-white md:text-sm"
            placeholder="Write your message..."
          ></textarea>
          <button
            type="button"
            className="w-fit rounded-full border-b-4 border-black bg-[#C40D4F] px-8 py-2 font-semibold text-white md:block"
          >
            Send
          </button>
        </form>
      </BorderDiv>

      <LastSection elements={['Comic', 'Brands', 'Contact']} />
    </div>
  )
}

export default Living
