import Empowerment from '../components/Pledge/empowement'
import FarmerCard from '../components/Pledge/farmerCard'
import farmerData from '../components/Pledge/farmerData'
import Moments from '../components/Pledge/momentCard'
import Hero from '../components/Pledge/hero'
import farmerLeft from '../assets/vectors/farmerLeft.png'
import farmerRight from '../assets/vectors/farmerRight.png'
const Pledge = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Moments />
      {/* farmer section */}
      <p className="text-center font-gluten text-3xl font-bold md:text-5xl" style={{ color: '#171717' }}>
        Know your
      </p>
      <p
        className="flex items-end justify-center text-center font-gluten text-3xl font-bold md:text-5xl"
        style={{ color: '#039860' }}
      >
        <img src={farmerLeft} className="mb-4 w-6 md:mb-7 md:w-8" /> farmers{' '}
        <img src={farmerRight} className="mb-4 w-4 md:mb-7 md:w-6" />
      </p>
      <div className="m-4 flex flex-col flex-wrap justify-center gap-4 sm:flex-row sm:justify-around">
        {farmerData.map((data, index) => (
          <FarmerCard key={index} photo={data.photo} name={data.name} village={data.village} />
        ))}
      </div>

      <Empowerment />
    </div>
  )
}

export default Pledge
