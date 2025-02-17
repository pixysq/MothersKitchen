import Button from '../custom/Button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import mother1 from '../../assets/kitchen/mother1.png'
import mother2 from '../../assets/kitchen/mother2.png'
import mother3 from '../../assets/kitchen/mother3.png'

const kitchen = [mother1, mother2, mother3]

const KitchenCard = () => {
  return (
    <div className="mt-6 grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {kitchen.map((data, index) => (
        <div
          key={index}
          className="relative w-full overflow-hidden rounded-3xl border-2 border-b-8 border-r-8 border-black md:border-4 md:border-b-[14px] md:border-r-[14px]"
        >
          <img loading="lazy" src={data} alt={`kitchen-image-${index}`} className="h-full w-full object-cover " />
        </div>
      ))}
    </div>
  )
}

export default KitchenCard
