import React, { useState, useEffect } from 'react'
import { RxCross2 } from 'react-icons/rx'
import ImageBox from '../custom/ImageBox'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import img1 from '../../assets/brands/c.png'
import img2 from '../../assets/brands/d.png'
import img3 from '../../assets/brands/a.png'
import img4 from '../../assets/brands/e.png'
import img5 from '../../assets/brands/f.png'
import img6 from '../../assets/brands/b.png'
import img7 from '../../assets/model/storeImage.png'
import img8 from '../../assets/brands/brand6.png'
import img9 from '../../assets/brands/store.png'
import firstO from '../../assets/model/firstO.png'
import secondO from '../../assets/model/secondO.png'
import footerImg from '../../assets/model/footerImg.png'

const brands = [
  { name: 'Mothers Kitchen Food', logo: img1, link: '/mk' , bgClass: 'bg-[#244238]' },
  { name: 'Business Coaching', logo: img2, link: 'https://coachshivanimalik.com/', bgClass: 'bg-[#F5D09E]' },
  { name: 'Wellbeing Cafe', logo: img3, link: '/cafe', bgClass: 'bg-[#0F1C1A]' },
  { name: 'Digital magazine', logo: img4, link: '/living', bgClass: 'bg-white' },
  { name: 'Women Empowerment NGO', logo: img5, link: '/daksh', bgClass: 'bg-white' },
  { name: 'Success Stories', logo: img6, link: '/comic', bgClass: 'bg-white' },
  { name: 'MK Skincare', logo: img7, link: '/beauty', bgClass: 'bg-[#FFBAB7]' },
  { name: 'Wellbeing Cafe', logo: img8, link: '/cafe', bgClass: 'bg-[#FFDEC7]' },
  { name: 'MK Stores', logo: img9, link: '/store', bgClass: 'bg-[#244238]' },
]

export default function BrandModal({ isOpen, onClose }) {
  const [entered, setEntered] = useState(false)
  const [visible, setVisible] = useState(isOpen)
  const location = useLocation()
  const navigate = useNavigate()

  const isHomePage = location.pathname === '/'

  useEffect(() => {
    if (isOpen && isHomePage) {
      setVisible(true)
      const openTimeout = setTimeout(() => setEntered(true), 50)
      return () => clearTimeout(openTimeout)
    } else if (visible) {
      setEntered(false)
      const closeTimeout = setTimeout(() => {
        setVisible(false)
        onClose()
      }, 500)
      return () => clearTimeout(closeTimeout)
    }
  }, [isOpen, visible, onClose, isHomePage])

  if (!visible || !isHomePage) return null

  const handleMothersClick = (e) => {
    e.preventDefault()
    window.scrollTo(0, 0)
    // start exit animation
    setEntered(false)
    // after animation duration, close and navigate
    setTimeout(() => {
      onClose()
      navigate('/')
    }, 100)
  }

  return (
    <>
      {/* Inline CSS to slim only the scrollbar */}
      <style>
        {`
          /* Firefox */
          .no-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: rgba(0,0,0,0.3) transparent;
          }
          /* WebKit */
          .no-scrollbar::-webkit-scrollbar {
            width: 4px;
            height: 4px;
          }
          .no-scrollbar::-webkit-scrollbar-thumb {
            background-color: rgba(0,0,0,0.3);
            border-radius: 2px;
          }
          .no-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
        `}
      </style>

      <div
        onClick={() => setEntered(false)}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 transition-opacity duration-500 ${
          entered ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`no-scrollbar relative max-h-[90vh] w-full max-w-5xl transform overflow-y-auto rounded-[40px] bg-[#FEC66B] p-6 ring-[10px] ring-[#FFFFFF80] ring-offset-4 ring-offset-white transition-all duration-500 md:p-8 ${
            entered ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}
        >
          <button
            onClick={() => setEntered(false)}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#9F2700] text-lg text-white"
          >
            <RxCross2 />
          </button>

          <h2 className="mb-6 mt-6 text-center font-gluten text-xl font-bold md:mt-0 md:text-4xl">
            Welcome to the world of{' '}
            <p className="flex items-center justify-center font-lexend text-lg text-[#9F2700] md:text-6xl">
              M<img src={firstO} alt="o" className="h-10 md:h-24" />
              thers K<img src={secondO} className="h-10 md:h-24 " alt="o" />
              tchen
            </p>
          </h2>

          <div className="mb-6 flex flex-wrap justify-center gap-6">
            {brands.map((brand, idx) => {
              const isMothers = brand.name === 'Mothers Kitchen Fod'
              return (
                <Link
                  key={idx}
                  to={brand.link}
                  onClick={isMothers ? handleMothersClick : () => window.scrollTo(0, 0)}
                  className="flex w-[calc(50%-0.75rem)] flex-col items-center sm:w-auto"
                >
                  <ImageBox
                    image={brand.logo}
                    className={`max-w-full overflow-hidden object-contain !p-2 sm:!p-3 md:px-6 ${brand.bgClass}`}
                    clickable={true}
                    boxClassName="!h-[100px] !w-[100px] sm:!h-[120px] sm:!w-[120px] md:!h-[160px] md:!w-[160px] lg:!h-[180px] lg:!w-[180px]"
                  />
                  <span className="mt-2 text-center font-lexend text-sm font-medium text-[#000000]">
                    {brand.name}
                  </span>
                </Link>
              )
            })}
          </div>

          <div className="text-center">
            <img src={footerImg} className="mx-auto block" alt="Footer graphic" />
            <span className="-mt-1 inline-block rounded-full bg-[#FFE2B2] px-2 py-2 font-lexend text-xs font-bold md:px-[140px] md:py-2 md:text-lg">
              Click on the logo to <span className="text-[#9F2700]">explore our brands</span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
