import React from 'react'
import ImageBox from '../custom/ImageBox'

const TeamInfoCard = ({ image, name, desc }) => {
  return (
    <div className="flex flex-col items-center font-gluten text-white">
      <ImageBox image={image} />
      <h5 className="m-2 text-center text-[12px] capitalize leading-3 md:mb-5 md:mt-4 md:text-2xl md:leading-5">
        {name}
      </h5>
      <p
        className="text-center font-lexend text-[8px] font-light leading-[10px] md:text-xs md:leading-5"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    </div>
  )
}

export default TeamInfoCard
