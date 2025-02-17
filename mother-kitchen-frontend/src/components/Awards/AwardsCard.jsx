import leftMark from '../../assets/awards/leftMark.png'
import rightMark from '../../assets/awards/rightMark.png'

const AwardsCard = ({ year, awardImage, title, description }) => {
  return (
    <div className="mb-8 p-6 pb-4 pl-2 pr-2 sm:pt-10">
      {/* Year + Award Text */}
      <p className="mb-4 flex flex-row items-center justify-center font-gluten text-3xl font-bold text-white sm:text-left sm:text-2xl md:justify-start md:text-4xl">
        {year}
        <div className="relative ml-4 flex items-center sm:inline-block md:ml-4">
          <img src={leftMark} alt="Left Mark" className="absolute -left-2 -top-1  -mt-3 h-4 sm:h-6 md:-top-3" />
          <span className="font-gluten text-3xl  font-extrabold text-white sm:text-4xl">Award</span>
          <img src={rightMark} alt="Right Mark" className="absolute -right-2 -top-1 -mt-3 h-4 sm:h-6 md:-top-3" />
        </div>
      </p>

      {/* Image + Title + Description */}
      <div className="flex flex-col items-center sm:justify-center  md:flex-row md:items-start">
        <img
          src={awardImage}
          alt="Award"
          className=" -mt-2  mr-6 w-40 text-center  sm:w-36  md:-mt-0 md:mr-0 md:w-40 lg:w-48 xl:w-60"
        />
        <div className="mt-4 flex flex-col items-center text-center font-lexend text-white md:ml-6 md:mt-0 md:mt-0 md:items-start md:text-left lg:ml-10">
          <p className="text-lg font-semibold sm:text-xl md:text-2xl">{title}</p>
          <p className="mt-4 text-sm sm:text-base md:text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default AwardsCard
