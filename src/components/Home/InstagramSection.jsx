import Button from '../custom/Button'
import { Containers, InstaIcon, InstaImg, Squirrel } from '../../assets'
import { HiArrowNarrowRight } from 'react-icons/hi'

const InstagramSectionSm = () => {
  return (
    <section className="mt-16 px-4 ">
      <div className="rounded-2xl border-4 border-b-8 border-r-8 border-black bg-[#EF3D69] px-5 py-4 text-white">
        <img src={InstaIcon} alt="insta" className="h-10 w-10 object-contain" />
        <h2 className=" text-2xl">
          <div className="font-lexend text-base font-medium tracking-tighter text-black">Find us on</div>
          <div className="font-gluten text-xl font-black ">Instagram</div>
        </h2>
        <div className="">
          <img loading="lazy" src={InstaImg} alt="instagrid" className="w-full" />
        </div>
        <p className="mt-4 text-justify font-lexend text-xs font-medium leading-[14px]">
          &quot;Join our Instagram family to never miss a beat on what we&apos;re cooking up next! Get a
          behind-the-scenes look at the love and passion that goes into every Mother&apos;s Kitchen product, and see how
          we&apos;re bringing the warmth of mom&apos;s cooking to your table.&quot;
        </p>
        <div className="flex justify-end">
          <Button className="ml-auto mt-5">
            <a
              className="flex items-center justify-center gap-2 text-xl font-semibold"
              href="https://www.instagram.com/motherskitchen.co/"
              target="_blank"
              rel="noreferrer"
            >
              Explore <HiArrowNarrowRight />
            </a>
          </Button>
        </div>
        <div className="relative grid h-24 grid-cols-2">
          <div>
            <img loading="lazy" src={Squirrel} alt="squirrel" className="h-28 w-28 object-contain object-top" />
          </div>
          <div className="flex items-end justify-end">
            <img loading="lazy" src={Containers} alt="containers" className="absolute bottom-0 right-10 w-[100px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
const InstagramSectionMd = () => {
  return (
    <section className="px-10 pt-20">
      <div className="rounded-2xl border-[6px] border-b-[16px] border-r-[16px] border-black bg-[#EF3D69] px-8 py-4 text-white">
        <div className="grid grid-cols-6 gap-10 font-lexend">
          <div className="icon col-span-2">
            <img src={InstaIcon} alt="insta" className="h-20 w-20 object-contain" />
            <h2 className="py-5 text-2xl">
              <div className="font-semibold tracking-tighter text-black">Find us on</div>
              <div className="mt-2 font-gluten text-3xl font-black ">Instagram</div>
            </h2>
            <p className="text-justify text-xs font-semibold">
              &quot;Join our Instagram family to never miss a beat on what we&apos;re cooking up next! Get a
              behind-the-scenes look at the love and passion that goes into every Mother&apos;s Kitchen product, and see
              how we&apos;re bringing the warmth of mom&apos;s cooking to your table.&quot;
            </p>
            <Button className="mt-5 ">
              <a
                className="flex items-center justify-center gap-3 text-xl font-semibold"
                href="https://www.instagram.com/motherskitchen.co/"
                target="_blank"
                rel="noreferrer"
              >
                Explore <HiArrowNarrowRight />
              </a>
            </Button>
            <div className="relative grid grid-cols-2">
              <div>
                <img loading="lazy" src={Squirrel} alt="squirrel" />
              </div>
              <div className="flex items-end justify-end">
                <img
                  loading="lazy"
                  src={Containers}
                  alt="containers"
                  className="absolute -bottom-5 -right-10 w-[120px]"
                />
              </div>
            </div>
          </div>
          <div className="icon col-span-4 px-10">
            <img loading="lazy" src={InstaImg} alt="instagrid" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
const InstagramSectionLg = () => {
  return (
    <section className="md:px-24 md:pt-24 2xl:mx-32">
      <div className="rounded-2xl border-[6px] border-b-[14px] border-r-[14px] border-black bg-[#EF3D69] px-8 text-white">
        <div className="grid grid-cols-6 gap-10 font-lexend">
          <div className="icon col-span-2 pt-10">
            <img src={InstaIcon} alt="insta" className="h-20 w-20 object-contain" />
            <h2 className="py-5 text-3xl">
              <div className="font-lexend  font-semibold tracking-tighter text-black">Find us on</div>
              <div className="font-gluten text-5xl font-black ">Instagram</div>
            </h2>
            <p className="text-justify text-sm font-semibold">
              &quot;Join our Instagram family to never miss a beat on what we&apos;re cooking up next! Get a
              behind-the-scenes look at the love and passion that goes into every Mother&apos;s Kitchen product, and see
              how we&apos;re bringing the warmth of mom&apos;s cooking to your table.&quot;
            </p>
            <Button className="mt-5 ">
              <a
                className="flex items-center justify-center gap-3 text-xl font-semibold"
                href="https://www.instagram.com/motherskitchen.co/"
                target="_blank"
                rel="noreferrer"
              >
                Explore <HiArrowNarrowRight />
              </a>
            </Button>
            <div className="relative grid grid-cols-2">
              <div>
                <img loading="lazy" src={Squirrel} alt="squirrel" />
              </div>
              <div className="flex items-end justify-end">
                <img
                  loading="lazy"
                  src={Containers}
                  alt="containers"
                  className="absolute -bottom-5 -right-10 w-[150px]"
                />
              </div>
            </div>
          </div>
          <div className="icon col-span-4 px-10 pb-10">
            <img loading="lazy" src={InstaImg} alt="instagrid" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
const InstagramSection = () => {
  return (
    <div>
      <div className="md:hidden ">
        {/*Small Screen*/}
        <InstagramSectionSm />
      </div>

      <div className="hidden md:block lg:hidden">
        {/*Large Screen*/}
        <InstagramSectionMd />
      </div>
      <div className="hidden lg:block">
        {/*Large Screen*/}
        <InstagramSectionLg />
      </div>
    </div>
  )
}

export default InstagramSection
