import { KitchenBg, kitchen1, kitchen2, kitchen3 } from '../../assets'
import KitchenCard from './KitchenCard'
import KitchenMenu from './KitchenMenu'

const KitchenItems = [
  {
    largeHeading: 'Health in the Kitchen',
    smallHeading: 'Gravy By Mother’s Kitchen',
    image: kitchen1,
    color: 'bg-[#7B4512]',
  },
  {
    largeHeading: 'Health in the Kitchen',
    smallHeading: 'Spreads By Mother’s Kitchen',
    image: kitchen2,
    color: 'bg-[#7B3212]',
  },
  {
    largeHeading: 'Health in the Kitchen',
    smallHeading: 'Bites By Mother’s Kitchen',
    image: kitchen3,
    color: 'bg-[#DAA235]',
  },
]

const WelcomeSm = () => {
  return (
    <section className="my-10 px-5 ">
      <h3 className="text-center font-gluten text-4xl font-medium text-red-base">Welcome to Mother’s Kitchen</h3>
      <img
        loading="lazy"
        src={KitchenBg}
        alt="bg"
        className="absolute left-0 -z-30 h-[120vh] w-full object-cover object-top"
      />
      <div className="mx-3 mt-10 grid grid-cols-1 gap-10 md:mt-24">
        <KitchenCard />
      </div>
      {/* <KitchenMenu /> */}
    </section>
  )
}
const WelcomeLg = () => {
  return (
    <section className="px-5 md:my-40 lg:px-20 2xl:mx-56">
      <h3 className="text-center font-gluten text-5xl font-bold text-red-base">Welcome to Mother’s Kitchen</h3>

      <KitchenCard />
    </section>
  )
}

const Welcome = () => {
  return (
    <div>
      <div className="md:hidden ">
        {/*Small Screen*/}
        <WelcomeSm />
      </div>

      <div className="hidden md:block">
        {/*Large Screen*/}
        <WelcomeLg />
      </div>
    </div>
  )
}

export default Welcome
