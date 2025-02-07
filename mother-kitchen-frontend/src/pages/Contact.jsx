import { Bird, SmallCookie } from '../assets'
import { LastSection } from '../components'
import { ContactDetails, ContactForm, ContactInfo, ContactLastPhone } from '../components/Contact'
import NavigationIndicator from '../components/NavigationIndicator'
import bird from '../assets/contact/bird.png'
const Contact = () => {
  return (
    <div className="m-5 md:mt-10 md:px-10 lg:mt-16 lg:px-20 2xl:mx-36">
      <div className="flex items-end justify-between">
        <div className="relative w-full rounded-3xl bg-[#FABF5F] p-3 pb-20 text-center md:hidden">
          <span className="flex flex-wrap justify-center font-gluten text-2xl font-bold text-[#5B3202]">
            JOIN US T
            <img src={SmallCookie} alt="chotu" className=" h-7 w-7 object-contain" />
            &nbsp;
            <span>ENTER&nbsp;</span> <span>THE&nbsp;</span> <span>KITCHEN</span>
          </span>
          <p className="font-gluten text-white">Don’t be shy - just drop us a line</p>
          <img src={Bird} alt="bird" className="absolute -bottom-32 left-[55%] w-44 translate-x-[-50%] -scale-x-100" />
        </div>
        {/* <NavigationIndicator /> */}

        <div className="hidden w-full items-center justify-center space-x-10 md:flex">
          <div className="flex flex-col items-center justify-center">
            <p className="flex items-center font-gluten font-bold text-[#5B3202] lg:text-4xl">
              <span>JOIN US&nbsp;</span>
              <span className="flex items-center">
                T<img src={SmallCookie} className="mx-1 inline-block h-10 w-10" alt="cookie" />
              </span>
              <span>&nbsp;ENTER THE KITCHEN</span>
            </p>
            <p className="text-center font-gluten font-bold text-white lg:text-2xl">
              Don&apos;t be shy - Just drop us a line
            </p>
          </div>
          <img src={bird} className="h-24 w-24" />
        </div>
      </div>
      <ContactForm />
      <ContactInfo />
      <ContactDetails />
      {/* <ContactLastPhone /> */}
      <LastSection elements={['Home', 'About', 'Comic']} />
    </div>
  )
}

export default Contact
