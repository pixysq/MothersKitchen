import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { ContactFormImg } from '../../assets'
import { useModal } from '../../custom-hooks'
import ThankYou from '../custom/ThankYou'

const ContactForm = () => {
  const { isOpen, openModal, closeModal } = useModal()
  const [formData, setFormData] = useState({ name: '', email: '', number: '', message: '' })
  const [isSending, setIsSending] = useState(false) // Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSending(true) // Start loading

    const serviceID = import.meta.env.VITE_MK_SERVICE_ID
    const templateID = import.meta.env.VITE_MK_CONTACT_TEMPLATE_ID
    const userID = import.meta.env.VITE_MK_USER_ID

    if (!serviceID || !templateID || !userID) {
      console.error('Missing EmailJS environment variables')
      setIsSending(false)
      return
    }

    try {
      await emailjs.send(serviceID, templateID, formData, userID)
      console.log('Email sent successfully')
      setFormData({ name: '', email: '', number: '', message: '' })
      openModal()
    } catch (error) {
      console.error('Failed to send email:', error)
    }

    setIsSending(false) // Stop loading
  }

  return (
    <div className="relative mt-20 rounded-3xl border-4 border-b-[12px] border-r-[12px] border-black bg-[#FEF5CE] px-7 pb-10 pt-10 md:pt-14">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 font-lexend md:grid-cols-2">
        <div className="pb-10 md:hidden">
          <img src={ContactFormImg} alt="img" className="w-full" />
        </div>
        <div className="flex flex-col gap-3 md:gap-5 lg:gap-8">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border-2 border-b-4 border-r-4 border-black bg-[#976120] p-2 py-3 text-[10px] font-semibold text-white outline-none placeholder:text-white md:text-sm"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border-2 border-b-4 border-r-4 border-black bg-[#976120] p-2 py-3 text-[10px] font-semibold text-white outline-none placeholder:text-white md:text-sm"
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="w-full rounded-xl border-2 border-b-4 border-r-4 border-black bg-[#976120] p-2 py-3 text-[10px] font-semibold text-white outline-none placeholder:text-white md:text-sm"
            placeholder="Your Number"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            cols="50"
            rows="8"
            className="mt-5 w-full resize-none rounded-xl border-2 border-b-4 border-r-4 border-black bg-[#976120] p-2 text-[10px] font-semibold text-white outline-none placeholder:text-white md:text-sm"
            placeholder="Write your message..."
            required
          ></textarea>

          {/* Mobile Send Button */}
          <button
            type="submit"
            className="ml-auto mt-5 flex items-center justify-center rounded-full border-b-4 border-black bg-[#C40D4F] px-7 py-2 font-semibold text-white md:hidden"
            disabled={isSending}
          >
            {isSending ? (
              <svg
                className="h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : (
              'Send'
            )}
          </button>
        </div>

        {/* Desktop Send Button */}
        <div className="relative hidden md:block">
          <img src={ContactFormImg} alt="img" />
          <button
            type="submit"
            className="absolute bottom-10 right-6 flex items-center justify-center rounded-full border-b-4 border-black bg-[#C40D4F] px-8 py-2 font-semibold text-white md:block"
            disabled={isSending}
          >
            {isSending ? (
              <svg
                className="h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : (
              'Send'
            )}
          </button>
        </div>
      </form>

      <ThankYou isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}

export default ContactForm
