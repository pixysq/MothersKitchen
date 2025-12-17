import React from 'react'
import { Link } from 'react-router-dom'
import exploreIcon from '../../assets/exploreIcon.png'

function StckyExploreBtn() {
  return (
    <div className="fixed ml-14 md:ml-0 md:left-1/2 md:top-2/3 z-50 md:-translate-x-1/2 md:-translate-y-1/2">
      <p
        className="flex w-fit cursor-pointer items-center md:justify-between rounded-full border-b-8 border-l-2 border-r-8 border-t-2 border-black font-gluten text-xs sm:text-2xl md:p-3 md:pl-10 p-4 md:pr-10 md:text-center md:text-3xl"
        style={{ background: '#9F2700', color: '#FFFFFF' }}
      >
        <Link to="https://product.motherskitchen.co.in/" className="flex items-center justify-between gap-8">
          <span>Explore our Shop</span>
          <img src={exploreIcon} className="w-[25px] md:w-[50px] " alt="Explore Icon" />
        </Link>
      </p>
    </div>
  )
}

export default StckyExploreBtn
