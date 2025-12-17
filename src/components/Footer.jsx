import Button from './custom/Button'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { RiInstagramLine, RiTwitterLine, RiUser3Fill } from 'react-icons/ri'
import { FiYoutube } from 'react-icons/fi'
import { TbBrandLinkedin } from 'react-icons/tb'
import { BsQuestionCircle } from 'react-icons/bs'
import { TextLogo, footerImg } from '../assets'
import { Link, useLocation } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
const FooterSm = ({ location }) => {
  const [email, setEmail] = useState('')
  const [isSending, setIsSending] = useState(false)

  const handleSignUp = () => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.')
      return
    }
    // Set sending state to true
    setIsSending(true)

    const serviceID = import.meta.env.VITE_MK_SERVICE_ID
    const templateID = import.meta.env.VITE_MK_SIGNIN_TEMPLATE
    const userID = import.meta.env.VITE_MK_USER_ID

    // Prepare the template parameters – these must match the variables in your EmailJS template
    const templateParams = {
      user_email: email,
      // You can add more template variables here if needed.
    }

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((result) => {
        console.log('Email successfully sent!', result.text)
        alert('Thank you for signing up!')
        setEmail('') // Clear the input on success
        setIsSending(false) // Reset the sending state
      })
      .catch((error) => {
        console.error('There was an error sending the email:', error.text)
        alert('Oops! Something went wrong. Please try again later.')
        setIsSending(false) // Reset the sending state on error as well
      })
  }

  return (
    <footer className="m-1 mt-20 rounded-bl-3xl rounded-br-3xl border-4 border-b-[14px] border-l-4 border-r-[10px] border-black bg-[#031E29] p-2 pb-0 text-white">
      <div className="mb-5 mt-2 flex w-full justify-between rounded-full border-2 border-b-4 border-r-4 border-black bg-white p-1">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-[60%] bg-transparent py-1 pl-3 font-lexend text-sm tracking-tighter text-black outline-none"
          placeholder="EMAIL ADDRESS"
        />
        <Button
          className="!bg-green-base !py-2 font-lexend text-sm tracking-tighter hover:!bg-red-base"
          onClick={handleSignUp}
          disabled={isSending}
        >
          {isSending ? (
            <svg
              className="h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            'Sign Up'
          )}
        </Button>
      </div>

      <div className=" relative grid grid-cols-2 gap-5 font-gluten">
        <div className="text-xs">
          <div className="social-medias flex gap-3">
            <Link to="https://www.instagram.com/motherskitchen.co?igsh=MXRlaWJoYXFmcXY2MQ==">
              <RiInstagramLine className="h-8 w-6" />
            </Link>
            <Link to="https://m.facebook.com/motherskitchen.co/">
              {' '}
              <TiSocialFacebookCircular className="h-8 w-6" />
            </Link>
            <Link to="https://www.linkedin.com/company/mother%27s-kitchen/">
              {' '}
              <TbBrandLinkedin className="h-8 w-6" />
            </Link>
            <Link to="">
              <RiTwitterLine className="h-8 w-6" />
            </Link>
            <Link to="https://www.youtube.com/@MothersKitchen2023">
              {' '}
              <FiYoutube className="h-8 w-6" />
            </Link>
          </div>
          <div className="my-5">
            <a href="mailto:contact@motherskitchen.co.in" className="font-gluten">
              Contact@motherskitchen.co.in
            </a>
          </div>
          <div className="mb-5 flex items-center  justify-center  rounded-full border-2  border-b-8 border-r-8 border-black bg-green-base py-2 font-lexend text-xs uppercase tracking-tighter">
            <p className="flex justify-center pl-1  pr-1 text-center font-bold">
              <span>Contact Us </span> <RiUser3Fill className="h-3 w-3" />
            </p>
          </div>
          <p className="mb-20 font-gluten text-sm">+91 1800 270 4009</p>
        </div>
        <img src={footerImg} alt="footer" className="absolute bottom-0 left-[45%] w-[220px] translate-x-[-50%]" />

        <div className=" ml-auto flex  flex-col text-xl">
          <div className="pr- flex justify-end text-xs">
            <div className="relative">
              <div className="border-b-2  border-r-2 p-2">
                <Link
                  to={'/'}
                  className={`${location.pathname === '/' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  Home
                </Link>
              </div>
              <div className="border-r-2 p-2">
                <Link
                  to={'/team'}
                  className={`${location.pathname === '/team' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  Team
                </Link>
              </div>
              <div className="absolute bottom-[43%] left-[87%] h-3 w-3 rounded-full bg-[#031E29] "></div>
            </div>
            <div>
              <div className="p-2 ">
                <Link
                  to={'/about'}
                  className={`${location.pathname === '/about' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  About
                </Link>
              </div>
              <div className="border-t-2  p-2">
                <Link
                  to={'/comic'}
                  className={`${location.pathname === '/comic' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  Comic
                </Link>
              </div>
            </div>
          </div>
          <img src={TextLogo} alt="logo" className="absolute bottom-10 right-2 w-20" />
        </div>
      </div>
    </footer>
  )
}
const FooterMd = ({ location }) => {
  const [email, setEmail] = useState('')
  const [isSending, setIsSending] = useState(false)

  const handleSignUp = () => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.')
      return
    }
    // Set sending state to true
    setIsSending(true)

    const serviceID = import.meta.env.VITE_MK_SERVICE_ID
    const templateID = import.meta.env.VITE_MK_SIGNIN_TEMPLATE
    const userID = import.meta.env.VITE_MK_USER_ID

    // Prepare the template parameters – these must match the variables in your EmailJS template
    const templateParams = {
      user_email: email,
      // You can add more template variables here if needed.
    }

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((result) => {
        console.log('Email successfully sent!', result.text)
        alert('Thank you for signing up!')
        setEmail('') // Clear the input on success
        setIsSending(false) // Reset the sending state
      })
      .catch((error) => {
        console.error('There was an error sending the email:', error.text)
        alert('Oops! Something went wrong. Please try again later.')
        setIsSending(false) // Reset the sending state on error as well
      })
  }
  return (
    <footer className="m-1 mt-20 rounded-bl-3xl rounded-br-3xl border-4 border-b-[15px] border-l-[10px] border-r-[10px] border-black bg-[#031E29] p-4 pb-0 text-white">
      <a href="mailto:contact@motherskitchen.co.in" className="font-gluten text-xs">
        Contact@motherskitchen.co.in
      </a>
      <div className="relative grid grid-cols-2 pl-5 font-gluten">
        <div>
          <div className="my-5 flex w-[300px] justify-between rounded-full border-2 border-b-4 border-r-4 border-black bg-white p-1">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
              className="w-[70%] bg-transparent py-1 pl-4 font-lexend text-[8px] tracking-tighter text-black outline-none"
              placeholder="EMAIL ADDRESS"
            />
            <Button className="bg-green-base text-[8px]" onClick={handleSignUp} disabled={isSending}>
              {isSending ? (
                <svg
                  className="h-4 w-4 animate-spin text-white"
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
                'Sign Up'
              )}
            </Button>
          </div>
          <div className="social-medias flex gap-7">
            <Link to="https://www.instagram.com/motherskitchen.co?igsh=MXRlaWJoYXFmcXY2MQ==">
              {' '}
              <RiInstagramLine className="h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10" />
            </Link>
            <Link to="https://m.facebook.com/motherskitchen.co/">
              {' '}
              <TiSocialFacebookCircular className="h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10" />
            </Link>
            <Link to="https://www.linkedin.com/company/mother%27s-kitchen/">
              {' '}
              <TbBrandLinkedin className="h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10" />
            </Link>
            <Link to="">
              <RiTwitterLine className="h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10" />
            </Link>
            <Link to="https://www.youtube.com/@MothersKitchen2023">
              {' '}
              <FiYoutube className="h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10" />
            </Link>
          </div>
        </div>
        <img src={TextLogo} alt="logo" className="absolute bottom-0 left-[2%] w-[10rem]" />
        <img src={footerImg} alt="footer" className="absolute bottom-0 left-[50%] w-[350px] translate-x-[-50%]" />
        <div className=" ml-auto flex  flex-col text-xl">
          <div className="flex justify-end pr-10">
            <div className="relative">
              <div className="border-b-2  border-r-2 p-4">
                <Link
                  to={'/'}
                  className={`${location.pathname === '/' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  Home
                </Link>
              </div>
              <div className="border-r-2 p-4">
                <Link
                  to={'/team'}
                  className={`${location.pathname === '/team' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  Team
                </Link>
              </div>
              <div className="absolute bottom-[45%] left-[92%] h-3 w-3 rounded-full bg-[#031E29] "></div>
            </div>
            <div>
              <div className="p-4 ">
                <Link
                  to={'/about'}
                  className={`${location.pathname === '/about' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  About
                </Link>
              </div>
              <div className="border-t-2  p-4">
                <Link
                  to={'/comic'}
                  className={`${location.pathname === '/comic' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  Comic
                </Link>
              </div>
            </div>
          </div>
          <div className="ml-auto mt-10 pr-5">
            <div className="flex  items-center  rounded-full border-2  border-b-8 border-r-8 border-black bg-green-base py-2 font-lexend text-xs uppercase tracking-tighter">
              <p className="flex p-1">
                <span>Contact Us</span> <RiUser3Fill className="h-5 w-8" />
              </p>
            </div>
            <p className="mt-5 text-sm">+91 1800 270 4009</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
const FooterLg = ({ location }) => {
  const [email, setEmail] = useState('')
  const [isSending, setIsSending] = useState(false)

  const handleSignUp = () => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.')
      return
    }
    // Set sending state to true
    setIsSending(true)

    const serviceID = import.meta.env.VITE_MK_SERVICE_ID
    const templateID = import.meta.env.VITE_MK_SIGNIN_TEMPLATE
    const userID = import.meta.env.VITE_MK_USER_ID

    // Prepare the template parameters – these must match the variables in your EmailJS template
    const templateParams = {
      user_email: email,
      // You can add more template variables here if needed.
    }

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((result) => {
        console.log('Email successfully sent!', result.text)
        alert('Thank you for signing up!')
        setEmail('') // Clear the input on success
        setIsSending(false) // Reset the sending state
      })
      .catch((error) => {
        console.error('There was an error sending the email:', error.text)
        alert('Oops! Something went wrong. Please try again later.')
        setIsSending(false) // Reset the sending state on error as well
      })
  }
  return (
    <footer className="m-3 mt-20 rounded-bl-3xl rounded-br-3xl border-4 border-b-[15px] border-l-[10px] border-r-[10px] border-black bg-[#031E29] p-4 pb-0 text-white">
      <a href="mailto:contact@motherskitchen.co.in" className="font-gluten">
        Contact@motherskitchen.co.in
      </a>
      <div className="relative grid grid-cols-2 pl-20 font-gluten">
        <div>
          <div className="my-5 flex w-[400px] justify-between rounded-full border-2 border-b-4 border-r-4 border-black bg-white p-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
              className="w-[60%] bg-transparent py-2 pl-4 font-lexend text-sm tracking-tighter text-black outline-none"
              placeholder="EMAIL ADDRESS"
            />
            <Button
              onClick={handleSignUp}
              className="flex items-center justify-center !bg-green-base !py-2 font-lexend text-sm tracking-tighter hover:!bg-red-base"
              disabled={isSending} // Disable button while sending
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
                'Sign Up'
              )}
            </Button>
          </div>
          <div className="social-medias flex gap-7">
            <Link to="https://www.instagram.com/motherskitchen.co?igsh=MXRlaWJoYXFmcXY2MQ==">
              <RiInstagramLine className="h-10 w-10 cursor-pointer duration-300 hover:text-green-base" />
            </Link>
            <Link to="https://m.facebook.com/motherskitchen.co/">
              {' '}
              <TiSocialFacebookCircular className="h-10 w-10 cursor-pointer duration-300 hover:text-green-base" />
            </Link>
            <Link to="https://www.linkedin.com/company/mother%27s-kitchen/">
              {' '}
              <TbBrandLinkedin className="h-10 w-10 cursor-pointer duration-300 hover:text-green-base" />
            </Link>
            <Link to="">
              <RiTwitterLine className="h-10 w-10 cursor-pointer duration-300 hover:text-green-base" />
            </Link>
            <Link to="https://www.youtube.com/@MothersKitchen2023">
              {' '}
              <FiYoutube className="h-10 w-10 cursor-pointer duration-300 hover:text-green-base" />
            </Link>
          </div>
        </div>
        <img src={TextLogo} alt="logo" className="absolute bottom-0 left-[6%] w-[13rem] " />
        <img src={footerImg} alt="footer" className="absolute bottom-0 left-[50%] w-[550px] translate-x-[-50%]" />
        <div className=" ml-auto flex  flex-col text-xl">
          <div className="flex justify-end pr-20">
            <div className="relative">
              <div className="border-b-2  border-r-2 p-4">
                <Link
                  to={'/'}
                  className={`${location.pathname === '/' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  Home
                </Link>
              </div>
              <div className="border-r-2 p-4">
                <Link
                  to={'/team'}
                  className={`${location.pathname === '/team' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  Team
                </Link>
              </div>
              <div className="absolute bottom-[45%] left-[92%] h-3 w-3 rounded-full bg-[#031E29] "></div>
            </div>
            <div>
              <div className="p-4 ">
                <Link
                  to={'/about'}
                  className={`${location.pathname === '/about' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  About
                </Link>
              </div>
              <div className="border-t-2  p-4">
                <Link
                  to={'/comic'}
                  className={`${location.pathname === '/comic' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  Comic
                </Link>
              </div>
            </div>
          </div>
          <div className="ml-auto mt-20 pr-5">
            <Link
              to={'/contact'}
              className="flex items-center rounded-full border-2 border-b-8 border-r-8 border-black bg-green-base p-4 py-3 font-lexend text-sm uppercase tracking-tighter duration-300 hover:bg-red-base"
              onClick={() => scroll(0, 0)}
            >
              <p className="flex">
                <span>Contact Us</span> <RiUser3Fill className="h-5 w-8" />
              </p>
            </Link>
            <p className="mt-10">+91 1800 270 4009</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

const Footer = () => {
  const location = useLocation()
  return (
    <div>
      <div className="md:hidden ">
        {/*Small Screen*/}
        <FooterSm location={location} />
      </div>

      <div className="hidden md:block lg:hidden">
        <FooterMd location={location} />
      </div>
      <div className="hidden lg:block">
        <FooterLg location={location} />
      </div>
    </div>
  )
}

export default Footer
