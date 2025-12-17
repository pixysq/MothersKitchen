import React from 'react'
import productSm from '../../assets/packaging/productsSm.png'
import smBg from '../../assets/packaging/smBg.png'
import LgBg from '../../assets/packaging/LgBg.png'
import zigzagLg from '../../assets/packaging/zigzagLg.png'

const MainSection = () => {
  return (
    <>
      {/* Small screens only */}
      <div className="m-4 mt-12 block rounded-lg border border-b-[10px] border-l-4 border-r-[10px] border-t-4 border-black bg-[#FCAF0B] p-2 pb-16 md:hidden">
        {/* Product image */}
        <img src={productSm} alt="Product" className="mb-6 mt-8 h-auto w-full" />

        {/* Zigzag background container that scales to fit the text */}
        <div
          className="p-4"
          style={{
            backgroundImage: `url(${smBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%', // Stretches to fill the container
          }}
        >
          <p className="p-2 text-center font-lexend text-base font-semibold  text-black">
            Mother&apos;s Kitchen transcends being just a brand; it embodies an emotion. From its inception, the
            company&apos;s mission has been to provide not only health through its products but also to create a
            platform for raising awareness about WELLBEING. Drawing inspiration from the nurturing role of a mother, we
            aim to impart daily life lessons to children through our packaging. Each product is crafted with meticulous
            attention to both ingredients and the narrative behind it, with all stories personally written. Expanding on
            this food and wellbeing concept, the idea is to create a unique cafe—not just a place for networking, but a
            sanctuary fostering mindfulness. The core purpose is to go beyond culinary delights and contribute to the
            holistic well-being of individuals.
          </p>
        </div>
      </div>

      {/* large screens only */}

      <div className="relative m-20 hidden md:block">
        {/* Large background fills width */}
        <img src={LgBg} alt="Large BG" className="h-auto w-full" />

        {/* Absolute overlay for the zigzag and text */}
        <div className="absolute inset-x-0 bottom-16 top-[325px] mt-12 flex items-center justify-center">
          {/* Container that uses the zigzag as a stretchable background */}
          <div
            className="w-3/4 p-6"
            style={{
              backgroundImage: `url(${zigzagLg})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width:'90%',
              backgroundSize: '100% 100%',
            }}
          >
            <p className="p-6 text-center font-lexend font-semibold leading-tight text-black">
              Mother&apos;s Kitchen transcends being just a brand; it embodies an emotion. From its inception, the
              company&apos;s mission has been to provide not only health through its products but also to create a
              platform for raising awareness about WELLBEING. Drawing inspiration from the nurturing role of a mother,
              we aim to impart daily life lessons to children through our packaging. Each product is crafted with
              meticulous attention to both ingredients and the narrative behind it, with all stories personally written.
              Expanding on this food and wellbeing concept, the idea is to create a unique cafe—not just a place for
              networking, but a sanctuary fostering mindfulness. The core purpose is to go beyond culinary delights and
              contribute to the holistic well-being of individuals.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainSection
