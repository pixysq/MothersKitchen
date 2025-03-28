import React from 'react'
import img1 from '../../assets/ambassador/img1.png'
import img2 from '../../assets/ambassador/img2.png'
import Button from '../custom/Button'

const Hero = () => {
  return (
    <section className="m-5 font-lexend text-black md:ml-20 md:mr-20 md:mt-10">
      {/* Top Section: Title, Intro Text, and Image */}
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-start gap-6 md:flex-row md:gap-12">
        {/* Left Column: Headings & Text */}
        <div className="md:w-1/2">
          <h1 className="mb-2 font-gluten text-2xl  font-bold text-[#262626] md:text-3xl">The MK Ambassador Program</h1>
          <h2 className="mb-4 text-xl font-bold text-[#262626] md:mt-16 md:text-xl">
            Join the Mother&apos;s Kitchen Family!
          </h2>
          <p className="mb-6 font-lexend text-sm font-semibold leading-relaxed md:mt-5 md:text-sm">
            Are you passionate about exploring authentic, homemade flavors? Do you love sharing food experiences with
            your audience? Become a Mother&apos;s Kitchen Ambassador and earn exciting rewards while promoting
            delicious, home-style Indian food products!
          </p>

          <h3 className="mb-4 text-xl font-bold text-[#262626] md:mt-16 md:text-xl">Why Join?</h3>
          <p className="mb-6 font-lexend text-sm font-semibold leading-relaxed md:mt-5 md:text-sm">
            We welcome you to be a key part of our community. Not only will you share the world&apos;s most heartwarming
            homemade flavors, but you&apos;ll also enjoy generous commissions and exclusive perks!
          </p>

          <div className="mb-5 flex justify-center md:mb-0 md:block">
            <Button className="justify-center !bg-[#8E1736] !py-[11px] font-lexend text-sm font-semibold hover:!bg-green-base md:mt-10">
              Join us Today
            </Button>
          </div>
        </div>

        {/* Right Column: Image 1 */}
        <div className="flex justify-center  md:w-1/2">
          <img src={img1} alt="MK Ambassador" className="h-auto w-full rounded-lg object-cover" />
        </div>
      </div>

      {/* Bottom Section: "MK Ambassador Perks" & Second Image */}
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:mt-20 md:flex-row md:gap-12">
        {/* Left Column: Image 2 */}
        <div className="mt-8 flex justify-center md:mt-0 md:w-1/2">
          <img src={img2} alt="Ambassador Perks" className="h-auto w-full rounded-lg object-cover shadow-md" />
        </div>

        {/* Right Column: Perks */}
        <div className="md:w-1/2">
          <h3 className="mb-4 font-gluten text-xl font-bold text-[#2A2A2A] md:text-2xl">MK Ambassador Perks</h3>
          <ul className="list-inside list-disc space-y-8 font-lexend text-xs leading-relaxed text-[#060606] md:text-base">
            <li className="font-lexend text-sm">
              Welcome Kit: Get a curated selection of Mother's Kitchen products to kickstart your journey.
            </li>

            <li className="font-lexend text-sm">Exclusive Discounts: Enjoy up to 15% off on all personal orders.</li>

            <li className="font-lexend text-sm">
              Commission on Sales: Earn 15% commission on every retail order made through your referral link.
            </li>

            <li className="font-lexend text-sm">
              Corporate Order Rewards: For bulk and corporate orders, receive lucrative value-back incentives based on
              order size and volume.
            </li>

            <li className="font-lexend text-sm">
              Feature Opportunities: Get a chance to be showcased on our website, social media, and newsletters.
            </li>

            <li className="font-lexend text-sm">
              Feature Opportunities: Get a chance to be showcased on our website, social media, and newsletters.
            </li>
            <li className="font-lexend text-sm">
              Access to Exclusive Events: Receive invitations to special Mother's Kitchen events, workshops, and product
              launches.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
