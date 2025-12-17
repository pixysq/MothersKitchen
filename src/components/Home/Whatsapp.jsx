import { useState, useRef, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

import whatsapp from '../../assets/whatsapp.png'
import popUp from '../../assets/home/popUp.png'
import closePopUp from '../../assets/home/closePopUp.png'
import message from '../../assets/home/message.png'
import shopBtn from '../../assets/home/ShopButton.png'

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const popupRef = useRef(null)

  // Close the popup when clicking outside it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        {/* Popup */}
        {isOpen && (
          <div
            ref={popupRef}
            className="absolute bottom-16 right-0 flex h-[200px] w-[200px] flex-col justify-between p-3 text-black"
            style={{
              backgroundImage: `url(${popUp})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            {/* Top Section: Icon and Text */}
            <div className="flex flex-col gap-4 ">
              <img src={message} alt="message" className="ml-3 h-10 w-10" />
              <p className="ml-3 mt-1 font-lexend text-xs font-semibold">Happy to help at Mother’s Kitchen!</p>
              <a
                href="https://wa.me/919310411544/?text=Hi"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 mt-0 flex items-center justify-between gap-2 whitespace-nowrap rounded-lg border border-b-4 border-l-2 border-r-4 border-t-2 border-black bg-[#9F2700] px-2 py-1 text-white"
              >
                <span className="flex items-center gap-1 text-sm">
                  <FaWhatsapp className="h-4" />
                  <span className="font-lexend">Let's Chat</span>
                </span>
                <IoIosArrowForward />
              </a>
            </div>

            {/* Chat Button immediately below the text */}
          </div>
        )}

        {/* Floating Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-4 right-4 w-14">
          <img src={isOpen ? closePopUp : whatsapp} alt="WhatsApp Toggle" />
        </button>

        <a
          href="https://product.motherskitchen.co.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-20 w-14 cursor-pointer"
        >
          <img src={shopBtn} alt="Shop Now" className="h-auto w-full" />
        </a>
      </div>
    </>
  )
}

export default WhatsAppButton
