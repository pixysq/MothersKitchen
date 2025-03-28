import React from 'react'
import LastSection from '../components/LastSection'
import MainSection from '../components/Packaging/MainSection'
function Packaging() {
  return (
    <div>
      {/* heading */}
      <h2 className="white-stroke white-shadow  mt-8  text-center font-gluten text-2xl font-black text-red-base md:my-20 md:text-5xl">
        MOTHER’S KITCHEN <br />
        <span className="black-shadow font-lexend text-white">Beyond a Brand</span>
      </h2>

      <MainSection />

      <LastSection />
    </div>
  )
}

export default Packaging
