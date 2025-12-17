import React from 'react'
import Hero from '../components/Ambassador/Hero'
import ProductsInfiniteScroll from '../components/Home/ProductsInfiniteScroll.jsx'
import InstagramSection from '../components/Home/InstagramSection.jsx'
import LastSection from '../components/LastSection.jsx'
import ReferralProgram from '../components/Ambassador/ReferralProgram.jsx'

function Ambassador() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <ReferralProgram />
      <ProductsInfiniteScroll />
      <InstagramSection />
      <LastSection />
    </div>
  )
}

export default Ambassador
