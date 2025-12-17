import { Animals, BigCookie } from '../../assets'

const ContactInfo = () => {
  return (
    <div className="relative mt-20 rounded-xl border-4 border-b-[12px] border-r-[12px] border-black bg-[#C40D4F] px-10 py-12 md:mt-40 md:px-7 md:py-6 lg:mt-60 lg:px-12 lg:py-8 xl:mt-72">
      <img
        src={Animals}
        alt="animals"
        className="absolute top-5 -mt-20 hidden w-[90%] md:-mt-40 md:block lg:-mt-60 xl:-mt-72"
      />
      <p className="text-bold text-center font-gluten text-sm text-white md:text-2xl">
        Hey there, hungry for some wholesome goodness? We&apos;re here to help satisfy your cravings and answer any
        questions you may have about our products. Whether you prefer to shoot us an email or give us a ring, our
        friendly team is always ready to serve up some delicious customer service.
        <img src={BigCookie} alt="cookie" className="relative top-6 mx-auto w-20 md:hidden" />
      </p>
    </div>
  )
}

export default ContactInfo
