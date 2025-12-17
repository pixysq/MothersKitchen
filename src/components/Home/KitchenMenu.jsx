import { HiArrowNarrowRight } from 'react-icons/hi'
import { Kitchen1, kitchenMenu2, kitchenMenu3 } from '../../assets'
import Button from '../custom/Button'
// import Slider from 'infinite-react-carousel'

const KithchenMenuSm = () => {
  return (
    <section className="py-20">
      <div className="overflow-clip rounded-xl border-4 border-b-8 border-r-8 border-black bg-[#7B1238]">
        <h3 className="py-5 text-center font-gluten font-bold leading-5 text-white">
          Droolworthy Recipes by <br /> Mother’s Kitchen
        </h3>
        <div className="kitchen">
          {/* <Slider centerMode={true} centerPadding={70} shift={70} arrows={false} dots={true}>
            <div>
              <div className="!flex !flex-col !items-center justify-center">
                <img loading="lazy" src={Kitchen1} alt="k1" className="w-full object-cover" />
                <Button className=" mx-auto !flex !items-center !justify-center gap-2 !bg-[#41041A] text-xs  font-bold hover:!bg-green-base">
                  Veg Biryani <HiArrowNarrowRight />
                </Button>
              </div>
            </div>
            <div>
              <div className=" flex flex-col items-center justify-center">
                <img loading="lazy" src={kitchenMenu2} alt="k1" className="w-full object-cover" />
                <Button className="!flex !items-center !justify-center gap-2 !bg-[#41041A] text-xs font-bold hover:!bg-green-base">
                  Dal Makhni
                  <HiArrowNarrowRight />
                </Button>
              </div>
            </div>
            <div>
              {' '}
              <div className="  flex flex-col items-center justify-center">
                <img loading="lazy" src={kitchenMenu3} alt="k1" className="w-full object-cover" />
                <Button className=" !flex !items-center !justify-center gap-2 !bg-[#41041A] text-xs  font-bold hover:!bg-green-base">
                  Palak Paneer <HiArrowNarrowRight />
                </Button>
              </div>
            </div>
          </Slider> */}
        </div>
      </div>
    </section>
  )
}
const KithchenMenuLg = () => {
  return (
    <section className="md:mt-20 md:py-24">
      <div className="rounded-3xl border-4 border-b-[14px] border-r-[14px] border-black bg-[#7B1238]">
        <h3 className="py-5 text-center font-gluten text-3xl font-bold leading-9 text-white">
          Droolworthy Recipes by <br /> Mother’s Kitchen
        </h3>
        <div className="grid grid-cols-3 pb-7">
          <div className="flex flex-col items-center p-3">
            <img loading="lazy" src={Kitchen1} alt="k1" className="w-[67%]" />
            <Button className="flex items-center gap-2 !bg-[#41041A] text-xl font-bold hover:!bg-green-base">
              Veg Biryani <HiArrowNarrowRight />
            </Button>
          </div>
          <div className="flex flex-col items-center p-3">
            <img loading="lazy" src={kitchenMenu2} alt="k1" className="w-[80%]" />
            <Button className="flex items-center gap-2 !bg-[#41041A] text-xl font-bold hover:!bg-green-base">
              Dal Makhni <HiArrowNarrowRight />
            </Button>
          </div>
          <div className="flex flex-col items-center p-3">
            <img loading="lazy" src={kitchenMenu3} alt="k1" className="w-[80%]" />
            <Button className="flex items-center gap-2 !bg-[#41041A] text-xl font-bold hover:!bg-green-base">
              Palak Paneer <HiArrowNarrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

const KitchenMenu = () => {
  return (
    <div>
      <div className="md:hidden ">
        {/*Small Screen*/}
        <KithchenMenuSm />
      </div>

      <div className="hidden md:block">
        {/*Large Screen*/}
        <KithchenMenuLg />
      </div>
    </div>
  )
}

export default KitchenMenu
