import React from 'react'
import ContactDetailsCard from './ContactDetailsCard'
import { IoLocation } from 'react-icons/io5'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Monkey } from '../../assets'
import globe from '../../assets/contact/globe.png'
import globeSm from '../../assets/contact/globeSm.png'
import addSm from '../../assets/contact/addSm.png'

const contactItems = [
  {
    icon: <IoLocation className="h-8 w-8" />,
    title: 'Location',
    desc: 'Flat No. 104, First Floor, Golf Apartments, Sujan Singh Park, New Delhi - 110003 India',
    color: 'bg-[#20C64F]',
  },
  {
    icon: <MdEmail className="h-8 w-8" />,
    title: 'Email Us',
    desc: 'Contact@motherskitchen.co.in',
    color: 'bg-[#0A70CE]',
  },
  {
    icon: <FaPhoneAlt className="h-8 w-8" />,
    title: 'Phone Number',
    desc: '+91 9310411544 / 70113 61501',
    color: 'bg-[#E08E00]',
  },
]

const ContactDetails = () => {
  return (
    <>
      <div className="relative mb-72 mt-20 hidden rounded-xl bg-[#FFEC9F] px-10 py-20 md:grid md:grid-cols-3 md:gap-6 lg:gap-20">
        {contactItems.map((item) => (
          <ContactDetailsCard key={item.title} {...item} />
        ))}
        <p className="col-span-full hidden text-center font-gluten text-3xl font-bold text-[#000000] sm:hidden md:block">
          Map out all our MK offices – <span className="text-[#8E1736]">connecting dots of success!</span>
        </p>
        <div
          className="col-span-full mx-auto -mt-10 flex hidden w-full items-center justify-center overflow-hidden border-b-[12px] border-l-[6px] border-r-[12px] border-t-[6px] border-black sm:hidden md:-m-6 md:block"
          style={{ borderRadius: '30px' }}
        >
          <img
            src={globe}
            className="h-auto max-h-[600px] w-full object-cover sm:max-h-[350px] md:max-h-[600px]"
            alt="Globe"
          />
        </div>
        <img
          src={Monkey}
          alt="monkey"
          className="absolute left-[50%] top-[82%] -z-10 hidden w-[8rem] translate-x-[-60%] translate-y-[65%] md:block"
        />
        <img src={Monkey} alt="monkey" className="absolute bottom-0 right-[35%] w-32 translate-y-[100%] md:hidden" />
      </div>
      <div className="relative mb-72 mt-20 rounded-xl bg-[#FFEC9F] px-10 py-20 md:hidden">
        <div className="block space-y-6">
          <ContactDetailsCard key={contactItems[0].title} {...contactItems[0]} />
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center font-gluten text-2xl font-bold text-[#000000]">
              Map out all our MK offices – <span className="text-[#8E1736]">connecting dots of success!</span>
            </p>
            <div
              className="overflow-hidden rounded-lg border-b-4 border-l-2 border-r-4 border-t-2 border-black"
              style={{ width: '100%' }}
            >
              <img src={globeSm} alt="Small Globe" className="w-full" />
            </div>
            <img src={addSm} className="block" alt="Small Address" />
          </div>
          <ContactDetailsCard key={contactItems[1].title} {...contactItems[1]} />
          <ContactDetailsCard key={contactItems[2].title} {...contactItems[2]} />
        </div>
        <img
          src={Monkey}
          alt="monkey"
          className="absolute left-[50%] top-[82%] -z-10 hidden w-[8rem] translate-x-[-60%] translate-y-[65%] md:block"
        />
        <img src={Monkey} alt="monkey" className="absolute bottom-0 right-[35%] w-32 translate-y-[100%] md:hidden" />
      </div>
    </>
  )
}

export default ContactDetails
