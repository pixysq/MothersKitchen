import { Detail1, Detail2, Detail3 } from '../../assets'

const DetailCardSm = ({ even, image, heading, headingwhite, description, index }) => {
  if (!even) {
    return (
      <div className={`grid grid-cols-5 px-4`}>
        <div className="relative col-span-3 px-4">
          <h3
            className={`${index !== 0 ? 'mt-14 pr-8' : ''} mb-4 font-gluten text-2xl font-bold leading-6 text-red-900`}
          >
            <span>{heading}</span> <span className="text-white">{headingwhite}</span>
          </h3>
          <img
            src={image}
            alt="imaze"
            className={`h-full w-full object-contain object-top ${index == 0 ? 'relative -top-8' : ''}`}
          />
          {index == 0 ? (
            <img src={Detail1} alt="detail1" className="absolute -bottom-3 left-0 w-12" />
          ) : (
            <img src={Detail3} alt="detail1" className="absolute -bottom-3 right-5 w-12" />
          )}
        </div>
        <div className="col-span-2">
          <h3
            className={`${
              index !== 0 ? 'mt-10' : ''
            } pt-20 text-left font-lexend text-[10px] font-semibold leading-3 text-white`}
          >
            {description}
          </h3>
        </div>
      </div>
    )
  }
  return (
    <div className={`grid grid-cols-5 px-4`}>
      <div className="col-span-2">
        <h3 className="pt-16 text-right font-lexend text-[10px] font-semibold leading-3 text-white">
          {description.slice(0, 250)}
        </h3>
      </div>
      <div className=" col-span-3 pl-10">
        <h3 className="mb-4 pl-7 font-gluten text-2xl font-bold leading-6 text-red-900">
          <span>{heading}</span> <span className="text-white">{headingwhite}</span>
        </h3>
        <div className="relative my-auto flex h-[85%] w-full items-center justify-center rounded-2xl border-2 border-b-4 border-r-4 border-black bg-[#FFBF37] object-contain">
          <img src={image} alt="imaze" className="mr-4 mt-10 h-full w-full scale-[1.15] object-contain object-top" />
          {index == 1 && <img src={Detail2} alt="detail1" className="absolute -bottom-10 -left-2 w-12" />}
        </div>
      </div>
    </div>
  )
}
const DetailCardMd = ({ even, image, heading, headingwhite, description }) => {
  if (even) {
    return (
      <div
        className={`relative grid w-[80%] grid-cols-2 rounded-2xl border-4 border-b-8 border-r-8 border-black bg-[#FFBF37] p-10 shadow-2xl before:absolute before:left-[0.8px] before:top-[0.8px] before:h-full before:w-full before:rounded-2xl before:rounded-tl-2xl before:border-[3px] before:border-white ${
          even && 'ml-auto'
        }`}
      >
        <div className="px-4">
          <h3 className="break-words font-gluten text-5xl font-bold text-red-900">
            <span>{heading}</span> <span className="text-white">{headingwhite}</span>
          </h3>
          <h3 className="pt-10 font-gluten text-xs font-semibold">{description}</h3>
        </div>
        <div>
          <img src={image} alt="imaze" className="h-full w-full object-contain object-top" />
        </div>
      </div>
    )
  }
  return (
    <div
      className={`relative grid w-[80%] grid-cols-2 rounded-2xl border-4 border-b-8 border-r-8 border-black bg-[#FFBF37] p-10 shadow-2xl before:absolute before:left-[0.8px] before:top-[0.8px] before:h-full before:w-full before:rounded-2xl before:rounded-tl-2xl before:border-[3px] before:border-white ${
        even && 'ml-auto'
      }`}
    >
      <div>
        <img src={image} alt="imaze" className="h-full w-full object-contain object-top" />
      </div>
      <div className="px-4">
        <h3 className="break-words font-gluten text-5xl font-bold text-red-900">
          <span>{heading}</span> <span className="text-white">{headingwhite}</span>
        </h3>
        <h3 className="pt-10 font-gluten text-xs font-semibold">{description}</h3>
      </div>
    </div>
  )
}
const DetailCardLg = ({ even, image, heading, headingwhite, description }) => {
  if (even) {
    return (
      <div
        className={`relative grid w-[80%] grid-cols-2 rounded-2xl border-4 border-b-8 border-r-8 border-black bg-[#FFBF37] p-10 shadow-2xl before:absolute before:left-[0.8px] before:top-[0.8px] before:h-full before:w-full before:rounded-2xl before:rounded-tl-2xl before:border-[3px] before:border-white ${
          even && 'ml-auto'
        }`}
      >
        <div className="px-4">
          <h3 className=" font-gluten text-6xl font-bold text-red-900">
            {heading} <span className="text-white">{headingwhite}</span>
          </h3>
          <h3 className="pt-10 font-gluten text-lg font-semibold">{description}</h3>
        </div>
        <div>
          <img src={image} alt="imaze" />
        </div>
      </div>
    )
  }
  return (
    <div
      className={`relative grid w-[80%] grid-cols-2 rounded-2xl border-4 border-b-8 border-r-8 border-black bg-[#FFBF37] p-10 pr-5 pt-10 shadow-2xl before:absolute before:left-[0.8px] before:top-[0.8px] before:h-full before:w-full before:rounded-2xl before:rounded-tl-2xl before:border-[3px] before:border-white ${
        even && 'ml-auto'
      }`}
    >
      <div>
        <img src={image} alt="imaze" />
      </div>
      <div className="px-4">
        <h3 className="font-gluten text-6xl font-bold text-red-900">
          <span>{heading}</span> <span className="text-white">{headingwhite}</span>
        </h3>
        <h3 className="pt-10 font-gluten text-lg font-semibold">{description}</h3>
      </div>
    </div>
  )
}
const DetailCard = (props) => {
  return (
    <div>
      <div className="md:hidden">
        {/*Small Screen*/}
        <DetailCardSm {...props} />
      </div>

      <div className="hidden md:block lg:hidden">
        {/*Medium Screen*/}
        <DetailCardMd {...props} />
      </div>
      <div className="hidden lg:block">
        {/*Large Screen*/}
        <DetailCardLg {...props} />
      </div>
    </div>
  )
}

export default DetailCard
