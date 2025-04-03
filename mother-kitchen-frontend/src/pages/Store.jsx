import React from 'react'
import comingSoonLg from '../assets/store/comingSoonLg.png'
import LgBg from '../assets/store/LgBg.png'
import SmBg from '../assets/store/SmBg.png'
import comingSoonSm from '../assets/store/comingSoonSm.png'
import LastSection from '../components/LastSection'

const Store = () => {
  return (
    <>
      {/* Large screens only */}
      <div className="-mt-[10%] hidden  md:block  ">
        {/* Store background (mall scene) */}
        <img src={LgBg} alt="Large Background" className="h-auto w-full" />

        {/* "Coming Soon" overlaid on the background */}
        <div className="relative -mt-[75%] flex items-center justify-center">
          <img src={comingSoonLg} alt="Coming Soon" className="h-auto w-auto" />
        </div>

        {/* paragraph */}
        <div className="m-8 text-center font-lexend font-semibold text-[#442E1E] ">
          <p>Mother’s Kitchen Boutique Stores – Coming Soon!</p>

          <p className="mt-5">A place where tradition meets wellness, and every product tells a story.</p>

          <p className="mt-5">
            Mother’s Kitchen is bringing its philosophy of real ingredients, handcrafted recipes, and premium quality to
            life with its soon-to-open boutique stores.
          </p>

          <p className="mt-5">
            Here, you’ll find preservative-free delights like gluten-free turmeric cookies, vegan chocolates, turmeric
            barfi, and aata biscuits—each crafted for authentic taste and mindful eating.
          </p>

          <p className="mt-5">But these stores are more than just a shopping experience. They are a movement.</p>

          <p className="mt-5">
            Owned and run by women, they empower passionate mothers to turn their love for traditional, healthy recipes
            into thriving businesses.
          </p>

          <p className="mt-5">Now, you have the opportunity to be part of this revolution.</p>

          <p className="mt-5">
            If you believe in the power of heritage, health, and women-led entrepreneurship, bring Mother’s Kitchen to
            your city. Join us in making mindful eating accessible to all.
          </p>

          <p className="mt-5 text-[#BA5511] ">For franchise enquiries, contact:</p>
          <p className="text-[#BA5511]">📞 +91 93104 11544 | +91 70113 61501</p>
        </div>
      </div>

      {/* small screens only */}
      <div className="-mt-[50%] block md:hidden">
        <img src={SmBg} className="h-[500px]" alt="Small Background" />

        <div className="relative -mt-[70%] flex items-center justify-center">
          <img src={comingSoonSm} className="relative" alt="Coming Soon" />
        </div>

        {/* paragraph */}
        <div className="m-8 text-center font-lexend font-semibold text-[#442E1E] ">
          <p>Mother’s Kitchen Boutique Stores – Coming Soon!</p>

          <p className="mt-5">A place where tradition meets wellness, and every product tells a story.</p>

          <p className="mt-5">
            Mother’s Kitchen is bringing its philosophy of real ingredients, handcrafted recipes, and premium quality to
            life with its soon-to-open boutique stores.
          </p>

          <p className="mt-5">
            Here, you’ll find preservative-free delights like gluten-free turmeric cookies, vegan chocolates, turmeric
            barfi, and aata biscuits—each crafted for authentic taste and mindful eating.
          </p>

          <p className="mt-5">But these stores are more than just a shopping experience. They are a movement.</p>

          <p className="mt-5">
            Owned and run by women, they empower passionate mothers to turn their love for traditional, healthy recipes
            into thriving businesses.
          </p>

          <p className="mt-5">Now, you have the opportunity to be part of this revolution.</p>

          <p className="mt-5">
            If you believe in the power of heritage, health, and women-led entrepreneurship, bring Mother’s Kitchen to
            your city. Join us in making mindful eating accessible to all.
          </p>

          <p className="mt-5 text-[#BA5511] ">For franchise enquiries, contact:</p>
          <p className="text-[#BA5511]">📞 +91 93104 11544 | +91 70113 61501</p>
        </div>
      </div>

      <LastSection />
    </>
  )
}

export default Store
