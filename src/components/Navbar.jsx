import { NavSmall, PaperPlane, TextLogo, TextLogoBlack } from '../assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { RxCross1, RxInstagramLogo } from 'react-icons/rx'
import { RiFacebookFill, RiLinkedinFill } from 'react-icons/ri'
import Drawer from './custom/Drawer'
import { useModal } from '../custom-hooks'
import { BurgerMenuIcon, HomeIcon } from '../assets/icons'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Team', path: '/team' },
  { name: 'Mk Food', path: '/mk' },
  { name: 'Packaging', path: '/packaging' },
  { name: 'Pledge', path: '/pledge' },
  { name: 'Success Stories', path: '/comic' },
  { name: 'Awards', path: '/awards' },
]
const NavSm = () => {
  const location = useLocation()
  const { isOpen, openModal, closeModal } = useModal()
  const navigate = useNavigate()

  return (
    <nav className="px-5 py-8">
      <div className="flex items-center justify-between rounded-full border-[3px] border-b-8 border-r-8 border-black bg-[#C40D4F] pl-4 pr-3 drop-shadow-small">
        <div className="pl-3 text-[#FEF5CE]">
          <img src={BurgerMenuIcon} alt="burger" className="h-[4.5rem] w-[4.5rem] object-contain" onClick={openModal} />
        </div>
        <div className="pt-3">
          <img src={TextLogo} alt="logo" className="mx-auto w-[50%]" />
        </div>
        <img src={HomeIcon} alt="homeicon" className="h-12 w-12 object-contain" onClick={() => navigate('/')} />
      </div>

      <Drawer isOpen={isOpen}>
        <div className="grid grid-cols-2">
          <div className="flex items-start justify-start">
            <img src={TextLogoBlack} alt="nav" className="h-28 w-28 object-contain" />
          </div>
          <div className="flex items-end justify-end">
            <img src={NavSmall} alt="nav" className="h-32 w-32 object-contain" />
          </div>
        </div>

        {/* Scrollable Drawer Content */}
        <div className="max-h-[calc(100vh-160px)] overflow-y-auto pt-4 " style={{ scrollbarWidth: 'thin' }}>
          {/* Adjust the height as needed */}
          {navLinks.map((link) => (
            <Link className="w-full" to={link.path} key={link.name}>
              <div onClick={closeModal}>
                <span
                  className={`${
                    location.pathname === link.path
                      ? 'border-b-2 border-r-4 border-black bg-[#E9787C] font-gluten tracking-widest text-white'
                      : 'font-lexend tracking-[-0.1rem] text-black'
                  } rounded-full p-4   font-gluten text-xl font-extralight`}
                >
                  {link.name}
                </span>
              </div>
              <div className="my-4 h-[1px] bg-[#976120]" />
            </Link>
          ))}
          {/* Contact Us Button */}
          <div>
            <Link className="w-full" to="/contact">
              <div onClick={closeModal}>
                <span
                  className={`${
                    location.pathname === '/contact'
                      ? 'border-b-2 border-r-4 border-black bg-[#E9787C] font-gluten tracking-widest text-white'
                      : 'font-lexend tracking-[-0.1rem] text-black'
                  } rounded-full p-3 text-xl font-extralight`}
                >
                  Contact Us
                </span>
              </div>
              <div className="my-4 h-[1px] bg-[#976120]" />
            </Link>
          </div>
          {/* Social Links */}
          <div className="grid grid-cols-3 pb-5">
            <div className="col-span-1 flex items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black">
                <RxCross1 className="text-white" onClick={closeModal} />
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-b-4 border-black bg-[#FF9E00] text-white">
                  <RiFacebookFill className="h-10 w-10" />
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-b-4 border-black bg-[#FF9E00] text-white">
                  <RiLinkedinFill className="h-10 w-10" />
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-b-4 border-black bg-[#FF9E00] text-white">
                  <RxInstagramLogo className="h-10 w-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </nav>
  )
}

const NavMd = () => {
  const location = useLocation()

  return (
    <>
      <div className="flex justify-center gap-6 bg-[#9F2700] p-4 font-lexend  text-xs text-white">
        <Link to="/about">
          {' '}
          <p>About us</p>{' '}
        </Link>
        <Link to="/ambassador">
          {' '}
          <p>MK Ambassador Program</p>{' '}
        </Link>
        <Link to="/blogs">
          <p>Our Blogs</p>
        </Link>
      </div>
      <nav className="flex w-screen  px-7 py-5" style={{ width: '100vw', boxSizing: 'border-box' }}>
        <div
          className="flex items-center justify-center rounded-tl-[40px] rounded-tr-[40px] border-[3px] border-b-8 border-r-8 border-black px-10 drop-shadow-small md:bg-green-base"
          style={{ width: '100vw', boxSizing: 'border-box' }}
        >
          {/* Logo Section */}
          <div className="pt-3">
            <img src={TextLogo} alt="logo" className="mr-10 w-[6rem]" />
          </div>

          {/* Centering Navigation Links */}
          <div className="flex flex-1 justify-center py-2 pr-7 font-lexend text-base font-medium text-white md:flex-wrap md:gap-3 md:overflow-x-auto">
            <ul className="flex flex-wrap justify-center gap-1">
              {navLinks.map((navLink) => (
                <li
                  key={navLink.path}
                  className={`whitespace-nowrap px-3 py-2 text-xs leading-4 md:text-sm ${
                    location.pathname === navLink.path
                      ? 'rounded border-2 border-b-4 border-r-4 border-black bg-red-base'
                      : ''
                  }`}
                >
                  <Link to={navLink.path}>{navLink.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Link Section */}
          <div className="flex items-center justify-start py-5">
            <Link
              to="/contact"
              className={`rounded-lg border-[2.5px] bg-[#9F2700] p-1 text-white ${
                location.pathname === '/contact' ? 'rounded border-black bg-red-base' : ''
              }`}
            >
              <img src={PaperPlane} alt="plane" className="w-9" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

const NavLg = () => {
  const location = useLocation()

  return (
    <>
      <div className="flex justify-center gap-6 bg-[#9F2700] p-4 font-lexend  text-xs text-white">
        <Link to="/about">
          {' '}
          <p>About us</p>{' '}
        </Link>
        <Link to="/ambassador">
          {' '}
          <p>MK Ambassador Program</p>{' '}
        </Link>
        <Link to="/blogs">
          <p>Our Blogs</p>
        </Link>
      </div>
      <nav className="w-full px-5 py-5 md:px-20 2xl:px-36">
        <div
          className="flex  items-center justify-between rounded-tl-[40px] rounded-tr-[40px] border-[3px] border-b-8 border-r-8 border-black px-10 py-1 drop-shadow-small md:bg-green-base"
          style={{ width: '90vw', boxSizing: 'border-box' }}
        >
          {/* Logo Section */}
          <div className="pt-3">
            <img src={TextLogo} alt="logo" className="mr-1 w-[120px] " />
          </div>

          {/* Centering Navigation Links */}
          <div className="flex flex-1 justify-center py-2 pr-7 font-lexend text-base font-medium text-white">
            <ul className="flex gap-1 whitespace-nowrap">
              {navLinks.map((navLink) => (
                <li
                  key={navLink.path}
                  className={`whitespace-nowrap px-5 py-2 text-sm font-medium ${
                    location.pathname === navLink.path
                      ? 'rounded border-2 border-b-4 border-r-4 border-black bg-red-base'
                      : ''
                  }`}
                >
                  <Link to={navLink.path}>{navLink.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Link Section */}
          <div className="flex items-center justify-start">
            <Link
              to="/contact"
              className={`rounded-lg border-[2.5px] bg-[#9F2700] p-1 text-white ${
                location.pathname === '/contact' ? 'rounded border-black bg-red-base' : ''
              }`}
            >
              <img src={PaperPlane} alt="plane" className="w-6 object-contain" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

const Navbar = () => {
  return (
    <div>
      <div className="md:hidden">
        <NavSm />
      </div>
      <div className="hidden md:block lg:hidden">
        <NavMd />
      </div>
      <div className="hidden lg:block">
        <NavLg />
      </div>
    </div>
  )
}

export default Navbar
