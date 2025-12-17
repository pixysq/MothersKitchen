import cafe from '../../assets/cafe/cafe.png'
import cafeMobile from '../../assets/cafe/cafeMobile.png'

const ComingSoon = () => {
  return (
    <div className="-mt-50 md:-mt-[125px]">
      {/* Show on small screens only */}
      <img src={cafeMobile} alt="Cafe Mobile" className="w-full md:hidden" />
      {/* Show on medium screens and larger */}
      <img src={cafe} alt="Cafe" className="hidden w-full md:block" />
    </div>
  )
}

export default ComingSoon
