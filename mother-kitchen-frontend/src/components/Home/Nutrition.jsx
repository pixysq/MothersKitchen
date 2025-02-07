import { lazy } from 'react'
import { Nutrition } from '../../assets'
import { useNavigate } from 'react-router-dom'
const NutritionDetails = lazy(() => import('./NutritionDetails'))
const Button = lazy(() => import('../custom/Button'))
const YellowDiv = lazy(() => import('../custom/YellowDiv'))

const NutritionSm = ({ navigate }) => {
  return (
    <>
      <section className="px-5 py-7 md:my-20">
        <YellowDiv className="flex flex-col">
          <div className="relative flex-1">
            <img loading="lazy" src={Nutrition} alt="nutrition" className="relative -top-6 w-[100%]" />
          </div>
          <div className="z-10 flex-1 px-5">
            <h3 className="-mt-8 mb-5 text-center font-lexend text-xl font-semibold tracking-tighter">
              Pouring nutrition <br />{' '}
              <span className="white-shadow font-gluten text-2xl font-black text-red-base"> in your dish</span>
            </h3>
            <p className="text-justify font-lexend text-xs md:text-sm">
            "At Mother's Kitchen, love is our secret ingredient. With simple, high-quality products you are relieved form a lot of worries, leaving you more time for family. Our recipes, passed down by generations of moms, bring comfort and warmth to every bite. Join us in the kitchen and taste the love in every meal!
            </p>
            <div className="flex justify-end">
              <Button className="my-5" onClick={() => navigate('/about')}>
                View More
              </Button>
            </div>
          </div>
        </YellowDiv>
      </section>
      <NutritionDetails />
    </>
  )
}

const NutritionMd = ({ navigate }) => {
  return (
    <>
      <section className="md:mx-10">
        <YellowDiv className="flex">
          <div className="relative flex-1">
            <img
              loading="lazy"
              src={Nutrition}
              alt="nutrition"
              className="absolute -top-10 h-full w-[100%] object-contain object-top"
            />
          </div>
          <div className="z-10 flex-1 p-5">
            <h3 className="mb-5 font-lexend text-2xl font-semibold">
              Pouring nutrition <br />{' '}
              <span className="white-shadow font-gluten text-3xl font-black text-red-base"> in your dish</span>
            </h3>
            <p className="pr-4 text-justify font-lexend text-xs font-medium leading-4 tracking-[-0.01rem]">
            "At Mother's Kitchen, love is our secret ingredient. With simple, high-quality products you are relieved form a lot of worries, leaving you more time for family. Our recipes, passed down by generations of moms, bring comfort and warmth to every bite. Join us in the kitchen and taste the love in every meal!
            </p>
            <Button className="mt-10" onClick={() => navigate('/about')}>
              View More
            </Button>
          </div>
        </YellowDiv>
      </section>
      <NutritionDetails />
    </>
  )
}
const NutritionLg = ({ navigate }) => {
  return (
    <>
      <section className="md:mx-20">
        <YellowDiv className="flex">
          <div className="relative flex-1">
            <img
              loading="lazy"
              src={Nutrition}
              alt="nutrition"
              className="absolute -top-10 h-full w-[100%]  object-top"
            />
          </div>
          <div className="z-10 p-4">
            <h3 className="mb-4 font-lexend text-[50px] font-semibold tracking-[-0.2rem] w-[610px]">
              Pouring nutrition <br />{' '}
              <span className="mt-2 font-gluten text-[56px] font-black tracking-normal text-red-base"> in your dish</span>
            </h3>
            <p className="text-justify font-lexend text-base font-medium tracking-[-0.1rem] text-[26px] w-[600px] leading-[35px]">
            "At Mother's Kitchen, love is our secret ingredient. With simple, high-quality products you are relieved form a lot of worries, leaving you more time for family. Our recipes, passed down by generations of moms, bring comfort and warmth to every bite. Join us in the kitchen and taste the love in every meal!
            </p>
            <Button className="mt-5 p-2 text-[1rem]" onClick={() => navigate('/about')}>
              View More
            </Button>
          </div>
        </YellowDiv>
      </section>
      <NutritionDetails />
    </>
  )
}
const NutritionSection = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="md:hidden ">
        {/*Small Screen*/}
        <NutritionSm navigate={navigate} />
      </div>
      <div className="hidden md:block lg:hidden">
        {/*Medium Screen*/}
        <NutritionMd navigate={navigate} />
      </div>

      <div className="hidden lg:block">
        {/*Large Screen*/}
        <NutritionLg navigate={navigate} />
      </div>
    </div>
  )
}

export default NutritionSection
