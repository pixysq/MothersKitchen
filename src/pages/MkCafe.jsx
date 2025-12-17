import LastSection from '../components/LastSection'
import { ComingSoon } from '../components/Mk Cafe'

const MkCafe = () => {
  return (
    <div className="2xl:mx-36">
      <ComingSoon />
      <p className="font=[#442E1E] p-5 text-center font-lexend font-semibold md:pb-10 md:pl-20 md:pr-20 md:pt-10">
        Mother's Kitchen is excited to announce the upcoming launch of our new cafe! We are passionate about providing
        our customers with nutritious and wholesome Satvik food options. Our cafe will feature a menu filled with
        healthy Satvik meals and snacks made from the freshest and highest quality ingredients.
      </p>
      <LastSection />
    </div>
  )
}

export default MkCafe
