import {  ProductsHeading } from '../../assets'
import YellowDiv from '../custom/YellowDiv'
import DancingWomen from '../../assets/about/DancingWomen.png'
const Support = () => {
  return (
    <section className="px-5 md:my-20 md:px-10  2xl:mx-36">
      <YellowDiv className="z-10">
        <img
          src={ProductsHeading}
          alt="heading"
          className="absolute -z-[1] mx-auto mt-8 h-11 w-full object-contain md:mt-7 md:h-16 lg:mt-5 lg:h-24"
        />
        <h2 className="white-stroke z-[11] py-10 text-center font-gluten text-2xl font-semibold uppercase text-red-base md:text-4xl md:font-semibold lg:text-6xl">
          We <span className="black-shadow text-white">support</span>
        </h2>
        <div className="grid gap-5 md:grid-cols-2 md:gap-0">
          <div className="flex items-center justify-center">
            <img src={DancingWomen} alt="women" className="h-full w-full object-contain" />
          </div>
          <div className="md:px-10">
            <p className="mx-3 rounded-lg bg-[#FFDBA0] p-4 text-center font-lexend text-[10px] font-medium tracking-tighter shadow-md drop-shadow-sm md:mx-0 md:rounded-2xl md:p-8 lg:p-12 lg:text-base">
              At Mother Kitchen, we firmly believe in the power of women and their invaluable contributions to society.
              We understand that women&apos;s empowerment is crucial for the growth and development of individuals,
              families, and communities. <br /> <br />
              That&apos;s why we support and promote women&apos;s empowerment in all aspects of our business. From our
              female-led team to our partnerships with women-owned businesses, we strive to create a supportive and
              inclusive environment for all women.
              <br /> <br />
              We&apos;re committed to using our platform to empower women and inspire positive change. Join us in our
              mission to promote gender equality and create a more equitable world for all.
            </p>
            <div className="py-5 pr-5 text-right font-lexend text-sm md:text-base md:font-bold md:text-white">
              - Mother&apos;s Kitchen
            </div>
          </div>
        </div>
      </YellowDiv>
    </section>
  )
}

export default Support
