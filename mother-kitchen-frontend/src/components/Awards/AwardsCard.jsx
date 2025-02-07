import leftMark from '../../assets/awards/leftMark.png'
import rightMark from '../../assets/awards/rightMark.png'

const AwardsCard = ({ year, awardImage, title, description }) => {
  return (
    <div className="mb-8 p-6 sm:p-4">
      {/* Item */}
      <p className="mb-4 flex items-center font-gluten text-2xl font-bold text-white sm:text-2xl md:text-4xl">
        {year} &nbsp;
        <img src={leftMark} alt="Left mark" className="h-4 sm:h-5 md:h-6" />
        Award
        <img src={rightMark} alt="Right mark" className="h-4 sm:h-5 md:h-6" />
      </p>
      <div className="flex flex-col justify-evenly  md:flex-row">
        <img src={awardImage} alt="Award" className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-60" />
        <div className="item-center flex flex-col font-lexend text-white md:ml-6 md:mt-0 lg:ml-10">
          <p className="text-lg font-semibold sm:text-xl md:text-2xl">{title}</p>
          <p className="mt-4 text-sm sm:text-base md:text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default AwardsCard
