import leftPerson from '../../assets/pledge/heroPersonLeft.png'
import rightPerson from '../../assets/pledge/heroPersonRight.png'
import turmericLeft from '../../assets/vectors/turmericLeft.png'
import turmericRight from '../../assets/vectors/turmericRight.png'
const Hero = () => {
  return (
    <>
      <div className="relative -mt-40 hidden flex-col items-center justify-between md:flex md:flex-row">
        {/* Left Person Image */}
        <div className="w-full md:w-1/2">
          <img src={leftPerson} alt="left person" className="h-[240px] rounded-lg object-cover md:mt-60 md:h-[500px]" />
        </div>

        {/* Text Content in the Center */}
        <div className="px-4 text-center text-white md:absolute md:left-1/2 md:z-10 md:-translate-x-1/2 md:transform">
          <p
            className="whitespace-nowrap font-gluten text-xl font-bold md:text-3xl lg:text-6xl"
            style={{ color: '#171717' }}
          >
            Story of Badabon Harvest
          </p>

          <p
            className="flex items-end justify-center font-gluten text-xl font-bold md:text-4xl lg:text-6xl"
            style={{ color: '#BF6432' }}
          >
            <img src={turmericLeft} alt="turmeric left" className="mb-4 " />
            Turmeric Powder <img src={turmericRight} alt="turmeric right" className="mb-4 w-10" />
          </p>
          <p className="mt-3 font-lexend text-sm md:text-sm lg:text-lg" style={{ color: '#000000' }}>
            In the lush landscapes of the Sundarbans, where the land meets the sea and the air is filled with the
            melodies of nature, lies a village called Gorankati. This village is home to a dedicated group of farmers
            known as the Gorankati Joiba BFIG. These 18 farmers, united by their passion for sustainable agriculture,
            embarked on a remarkable journey that would lead to the creation of Badabon Harvest Turmeric Powder.
          </p>
        </div>

        {/* Right Person Image */}
        <div className="mt-20 w-full text-left md:mt-40 md:w-1/4">
          <img
            src={rightPerson}
            alt="right person"
            className="ml-auto h-[240px] rounded-lg object-cover md:h-[400px]"
          />
        </div>
      </div>

      <div className="mb-20 block md:hidden">
        {/* heading */}
        <p className="p-4 text-center font-gluten text-2xl font-extrabold text-[#171717]">
          <span>
            Story of Badabon Harvest <span className="text-[#BF6432]">Turmeric Powder</span>
          </span>
        </p>
        {/* desc */}
        <p className="pl-6 pr-6 text-center font-lexend text-[#000000]">
          In the lush landscapes of the Sundarbans, where the land meets the sea and the air is filled with the melodies
          of nature, lies a village called Gorankati. This village is home to a dedicated group of farmers known as the
          Gorankati Joiba BFIG. These 18 farmers, united by their passion for sustainable agriculture, embarked on a
          remarkable journey that would lead to the creation of Badabon Harvest Turmeric Powder.
        </p>
        {/* images */}
        <div>
          <img
            src={leftPerson}
            className="absolute"
            style={{ width: '50%', height: '60%', marginTop: '-10%' }}
            alt="Left Person"
          />
          <img
            src={rightPerson}
            style={{ width: '50%', height: '60%', marginLeft: '60%', marginTop: '-30%' }}
            alt="Right Person"
          />
        </div>
      </div>
    </>
  )
}

export default Hero
