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
              At Mother&rsquo;s Kitchen, love is always the first ingredient. Our top-quality ingredients and
              easy-to-use products make cooking a breeze, so you can spend more time with the people who matter most.
              From seasonings and spices to baking mixes and ready-to-eat meals, we&rsquo;ve got everything you need to whip up something delicious.
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
              At Mother&apos;s Kitchen, love is always the first ingredient. We believe that food is not just fuel for
              the body, but also nourishment for the soul. We are passionate about creating products that are not only
              healthy and delicious, but also bring people together and foster a sense of community and connection. Our
              recipes are passed down through generations of moms, ensuring that every food product is packed with
              warmth and love.
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
      <section className="md:mx-20 2xl:mx-56">
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
            <h3 className="mb-5 font-lexend text-4xl font-semibold tracking-[-0.2rem]">
              Pouring nutrition <br />{' '}
              <span className="mt-2 font-gluten text-4xl font-black tracking-normal text-red-base"> in your dish</span>
            </h3>
            <p className="pr-4 text-justify font-lexend text-base font-medium tracking-[-0.1rem]">
              At Mother&apos;s Kitchen, love is always the first ingredient. We believe that food is not just fuel for
              the body, but also nourishment for the soul. We are passionate about creating products that are not only
              healthy and delicious, but also bring people together and foster a sense of community and connection. Our
              recipes are passed down through generations of moms, ensuring that every food product is packed with
              warmth and love.so whether you&apos;re whipping up a quick snack or preparing a feast for your loved ones,
              We&apos;ve has got you covered with our range of pure and hygienic products.
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
