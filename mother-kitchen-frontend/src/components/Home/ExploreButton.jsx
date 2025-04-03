import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import exploreIcon from '../../assets/exploreIcon.png'
function ExploreButton() {
  return (
    <div className="-mt-10 mb-20  flex items-center justify-center">
      <p
        className="flex w-fit cursor-pointer items-center justify-between rounded-full border-b-8 border-l-2 border-r-8 border-t-2 border-black p-3 pl-10 pr-10 text-center font-gluten text-xl sm:text-2xl md:text-3xl"
        style={{ background: '#9F2700', color: '#FFFFFF' }}
      >
        <Link to="https://product.motherskitchen.co.in/" className="flex items-center justify-between gap-8">
          <span>Explore our Shop</span>

          <img src={exploreIcon} className="w-[50px]" />
        </Link>
      </p>
    </div>
  )
}

export default ExploreButton
