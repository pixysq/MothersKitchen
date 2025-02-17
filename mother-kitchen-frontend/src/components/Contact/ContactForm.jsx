import { Bird, ContactFormImg } from '../../assets'
import { useModal } from '../../custom-hooks'
import ThankYou from '../custom/ThankYou'
const ContactForm = () => {
  const { isOpen, openModal, closeModal } = useModal()
  return (
    <div className="relative mt-20 rounded-3xl border-4 border-b-[12px] border-r-[12px] border-black bg-[#FEF5CE] px-7 pb-10 pt-10 md:pt-14">
      <div className="grid grid-cols-1 font-lexend md:grid-cols-2 ">
        <div className="pb-10 md:hidden">
          <img src={ContactFormImg} alt="img" className="w-full" />
        </div>
        <div className="flex flex-col gap-3 md:gap-5 lg:gap-8">
          <input
            type="text"
            className="w-full rounded-xl border-2 border-b-4 border-r-4 border-black bg-[#976120]  p-2 py-3 text-[10px] font-semibold text-white outline-none placeholder:text-white md:text-sm"
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
            className="ml-auto mt-5 rounded-full border-b-4 border-black bg-[#C40D4F] px-7 py-2 font-semibold text-white md:hidden "
            onClick={openModal}
          >
            Sent
          </button>
        </div>
        <div className="relative hidden md:block">
          <img src={ContactFormImg} alt="img" />
          <button
            type="button"
            className="absolute bottom-10 right-6 hidden rounded-full border-b-4 border-black bg-[#C40D4F] px-8 py-2 font-semibold text-white md:block"
            onClick={openModal}
          >
            Sent
          </button>
        </div>
      </div>
      <ThankYou isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}

export default ContactForm
