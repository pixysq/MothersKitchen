import leftMark from '../../assets/about/mission-left.webp'
import rightMark from '../../assets/about/mission-right.webp'
import LastSection from '../../components/LastSection.jsx'
const Empowerment = () => {
  return (
    <>
      <div
        className="m-4   border-black sm:m-6 md:m-8 lg:m-10 xl:m-12"
        style={{
          borderStyle: 'solid',
          borderColor: 'black',
          borderTopWidth: '10px',
          borderLeftWidth: '10px',
          borderRightWidth: '18px',
          borderBottomWidth: '18px',
          borderRadius: '22px',
          backgroundColor: '#FCAF0B',
        }}
      >
        <div className="rounded-2xl p-4 sm:p-6 md:p-8" style={{ border: '5px solid white',overflow:'hidden' }}>
          {/* Heading 1 */}
          <div className="text-center font-gluten text-2xl md:text-3xl font-bold sm:text-4xl md:text-5xl">
            <p style={{ color: '#171717' }}>Empowerment and</p>
            <p  style={{ color: '#A11506' }}>Sustainability</p>
          </div>

          {/* Description 1 */}
          <p className="mt-4 text-center font-lexend text-sm font-normal sm:text-base md:text-lg">
            By producing turmeric powder, Badabon Harvest not only provided a premium product but also empowered the
            farmers of Gorankati Joiba BFIG. They received fair wages and sustainable livelihood opportunities,
            strengthening the mangrove value chain and supporting the conservation of the Sundarbans’ unique ecosystem.
          </p>

          {/* Heading 2 */}
          <div className="mt-8 text-center font-gluten text-3xl font-bold sm:text-4xl md:text-5xl">
            <p className="flex items-center justify-center text-center" style={{ color: '#171717' }}>
              <img src={leftMark} className="mb-10 hidden md:block md:w-10" alt="Left mark" />
              Bringing Turmeric
              <img src={rightMark} className="mb-10 hidden md:block md:w-10" alt="Right mark" />
            </p>

            <p className="md:-mt-4" style={{ color: '#A11506' }}>
              to You
            </p>
          </div>

          {/* Description 2 */}
          <p className="mt-4 text-center font-lexend text-sm font-normal sm:text-base md:text-lg">
            Today, Badabon Harvest Turmeric Powder brings the essence of the Sundarbans to kitchens around the world.
            Each jar of turmeric powder tells the story of the Gorankati Joiba BFIG, a community of 18 farmers dedicated
            to sustainable agriculture and the preservation of their land. When you choose Badabon Harvest Turmeric
            Powder, you are not only adding a burst of flavor and health to your dishes but also supporting the
            preservation of a remarkable region and its people. Experience the vibrant color, rich aroma, and
            unparalleled health benefits of our turmeric. From the heart of Gorankati to your kitchen, our turmeric is a
            testament to the power of sustainable farming and community empowerment.
          </p>
        </div>
      </div>

      {/* last section  */}
      <LastSection elements={['Comics', 'Brands', 'Contact']} />
    </>
  )
}

export default Empowerment
