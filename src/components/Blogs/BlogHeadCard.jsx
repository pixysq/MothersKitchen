import React from 'react'
import { Link } from 'react-router-dom'
import backwardIcon from '../../assets/blogs/backwardIcon.png'

const BlogHeadCard = ({ imageSrc, date, heading }) => {
  return (
    <div className="ml-10 mr-10 mt-5 rounded-lg md:ml-20 md:mr-20 md:mt-10 ">
      {/* Top Section: Back Button & Image in the Same Line */}
      <div className="flex items-start">
        {/* Back Button */}
        <div className="inline-block  w-fit rounded-lg border-[2px] border-black bg-[#039860] p-1">
          <Link to="/blogs" className="flex justify-center">
            <img src={backwardIcon} alt="Go Back" className="w-3/4" />
          </Link>
        </div>

        {/* Image Wrapper */}
        <div className="relative  ml-10 h-auto w-3/4 overflow-hidden md:ml-60 md:w-1/2">
          <div className="rounded-xl border border-b-[11px] border-l-4 border-r-[11px] border-t-4 border-black">
            <div className="rounded-xl border-4 border-white">
              <img src={imageSrc} alt="Blog" className="w-full object-cover" />
            </div>
          </div>

          {/* Date Overlay (bottom-right) */}
          {date && (
            <div className="absolute bottom-2 right-2 rounded bg-opacity-90 px-4 py-4 font-lexend text-[10px] font-bold text-white">
              {date}
            </div>
          )}
        </div>
      </div>

      {/* Heading */}
      <div className="p-4 md:mt-10">
        {heading && (
          <h1 className="text-center  font-gluten text-lg font-bold text-[#171717] md:text-start md:text-6xl ">
            {heading}
          </h1>
        )}
      </div>
    </div>
  )
}

export default BlogHeadCard
