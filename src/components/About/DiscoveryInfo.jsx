import { DetailWire, Heart, InfoImg1, InfoImg2, InfoImg3, NumberBg } from '../../assets'
import DetailCard from './DetailCard'

const details = [
  {
    image: InfoImg1,
    heading: 'The Rise of',
    headingwhite: " Mother's Kitchen",
    description:
      "In 2018, Shivani Malik founded Mother's Kitchen. With her passion and hard work, Mother's Kitchen quickly became popular. The brand expanded to Canada and the UK, providing customers in those countries with healthy and nutritious options",
  },
  {
    image: InfoImg2,
    heading: 'The Global',
    headingwhite: ' Expansion',
    description:
      "Over the next few years, the idea of Mother's Kitchen continued to spread globally, reaching many other countries such as Hong Kong, New Zealand, Australia, Oman, The USA and turkey. Cementing its status as a global leader in the FMCG industry.",
  },
  {
    image: InfoImg3,
    heading: 'LANNDED TO',
    headingwhite: ' INDIA',
    description:
      "In 2022, Mother's Kitchen made its entry into India, and Rohit Kharbanda, the founder of Lyallpur Bakers, joined forces as a co-founder. With his contribution, Mother's Kitchen successfully diversified its business into new FMCG domains",
  },
]

const DiscoveryInfo = () => {
  return (
    <div className="relative mt-5 flex flex-col gap-10 md:mt-52 md:gap-20 md:px-10 lg:mt-40 lg:gap-56 lg:px-20">
      <img src={NumberBg} alt="number" className="absolute top-[20rem] -z-20 hidden md:block" />
      <img src={DetailWire} alt="wire" className="absolute left-[11rem] top-[17rem] -z-20 h-[30rem] md:hidden" />
      <img src={Heart} alt="heart" className="absolute left-48 top-8" />
      {details.map((detail, idx) => {
        return <DetailCard key={detail.heading} {...detail} index={idx} even={(idx + 1) % 2 === 0} />
      })}
    </div>
  )
}

export default DiscoveryInfo
