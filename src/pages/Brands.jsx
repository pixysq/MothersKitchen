import { Brand } from '../components/Brand'
import LastSection from '../components/LastSection'

const Brands = () => {
  return (
    <div className="2xl:mx-36">
      <h2 className="white-stroke white-shadow my-8 text-center font-gluten text-3xl font-black text-red-base md:my-20 md:text-5xl">
        OUR <span className="black-shadow font-lexend text-2xl uppercase text-white md:text-5xl">Brands</span>
      </h2>
      <Brand />
      <LastSection elements={['Home', 'About', 'Contact']} />
    </div>
  )
}

export default Brands
