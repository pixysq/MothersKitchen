import AwardsData from '../components/Awards/AwardsData'
import AwardsCard from '../components/Awards/AwardsCard'
import LastSection from '../components/LastSection'
const Awards = () => {
  return (
    <div>
      <h2 className="white-stroke white-shadow my-8 text-center font-gluten text-3xl font-black text-red-base md:my-20 md:text-5xl">
        Awards and Recognition
      </h2>

      <div
        className="m-4 rounded-[40px] border-black sm:m-6 md:m-8 lg:m-10 xl:m-12 "
        style={{ border: '15px solid black', backgroundColor: '#E11C63' }}
      >
        <div className="rounded-2xl p-4" style={{ border: '5px solid white' }}>
          {AwardsData.map((data, index) => (
            <AwardsCard
              key={index}
              year={data.year}
              title={data.title}
              description={data.description}
              awardImage={data.awardImage}
            />
          ))}
        </div>
      </div>

      <LastSection elements={['Comic', 'Brands', 'Contact']} />
    </div>
  )
}

export default Awards
