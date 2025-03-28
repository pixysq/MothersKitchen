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
        <div className="m-8 text-center font-lexend font-bold text-[#442E1E] ">
          <p>A place where tradition meets wellness, and every product tells a story.</p>

          <p className="mt-5">
            Mother’s Kitchen is bringing its philosophy of real ingredients, handcrafted recipes, and premium quality to
            life with its soon-to-open boutique stores. Here, you’ll find preservative-free delights like gluten-free
            turmeric cookies, vegan chocolates, turmeric barfi, and aata biscuits—each crafted for authentic taste and
            mindful eating.But these stores are more than just a shopping experience. They are a movement. Owned and run
            by women, they empower passionate mothers to turn their love for traditional, healthy recipes into thriving
            businesses.
          </p>

          <p className="mt-5 font-black">Heritage. Health. Women-led.</p>
          <p>Mother’s Kitchen is not just a brand—it’s a revolution. And now, it has a home near you. Stay tuned.</p>
        </div>
      </div>

 
      {/* small screens only */}
<div className="-mt-[50%] block md:hidden">
  <img src={SmBg} className="h-[500px]" alt="Small Background" />

  <div className="relative -mt-[70%] flex items-center justify-center">
    <img src={comingSoonSm} className="relative" alt="Coming Soon" />
  </div>


     {/* paragraph */}
     <div className="m-8 text-center font-lexend font-bold text-[#442E1E] ">
          <p>A place where tradition meets wellness, and every product tells a story.</p>

          <p className="mt-5">
            Mother’s Kitchen is bringing its philosophy of real ingredients, handcrafted recipes, and premium quality to
            life with its soon-to-open boutique stores. Here, you’ll find preservative-free delights like gluten-free
            turmeric cookies, vegan chocolates, turmeric barfi, and aata biscuits—each crafted for authentic taste and
            mindful eating.But these stores are more than just a shopping experience. They are a movement. Owned and run
            by women, they empower passionate mothers to turn their love for traditional, healthy recipes into thriving
            businesses.
          </p>

          <p className="mt-5 font-black">Heritage. Health. Women-led.</p>
          <p>Mother’s Kitchen is not just a brand—it’s a revolution. And now, it has a home near you. Stay tuned.</p>
        </div>
</div>


      <LastSection />
    </>
  )
}

export default Store
