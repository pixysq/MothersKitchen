import { AboutBg, AboutHeroTextBg, AboutHeroTextBgPhone, AboutIntroBg, TextLogo } from '../../assets'
import YellowDiv from '../custom/YellowDiv'

const AboutHero = () => {
  return (
    <section className="2xl:mx-36">
      <img src={AboutBg} alt="about" className="absolute -top-10 -z-30" loading="lazy" />
      <h1 className="mt-5 text-center font-lexend text-3xl font-black uppercase leading-5 md:mt-14 md:text-6xl md:leading-[50px]">
        <div className="tracking-tighter  text-red-base">Opening</div>
        <div className="pt-2 font-gluten text-2xl text-red-base md:pt-5 md:text-4xl">the</div>
        <div className="font-bold tracking-tighter ">door</div>
      </h1>
      <div className="px-5 py-10 md:px-24">
        <YellowDiv>
          <img
            src={TextLogo}
            alt="logo"
            className="absolute left-10 top-10 hidden md:block md:w-[100px] lg:w-[150px]"
          />

          <div className=" flex w-full flex-col justify-center md:flex-row">
            <img src={AboutIntroBg} alt="about" className="h-full object-contain md:w-[50%]" loading="lazy" />
          </div>
          <div className="relative px-5 pb-5 md:px-10 md:pb-10 lg:px-24">
            <img src={AboutHeroTextBg} alt="asd" className="hidden h-[220px] w-full  lg:block" loading="lazy" />
            <img
              src={AboutHeroTextBgPhone}
              alt="sdd"
              className="h-[75vh] w-full  object-cover   md:h-[350px]  lg:hidden"
            />
            <div className="absolute left-0 top-3 text-center font-lexend text-[10px] font-semibold tracking-tight md:top-10 md:px-20 md:text-sm md:leading-4 lg:top-10 lg:px-40 lg:font-bold">
              <p className="mx-10 rounded-lg bg-[#FFD272] p-2 md:mx-0 md:mt-0 md:rounded-none">
                At Mother&apos;s Kitchen, we are committed to providing our customers with pure and hygienic products.
                Our brand was born out of a passion for good food and a desire to bring the best of nature&apos;s
                ingredients to every kitchen.
              </p>
              <p className="mx-5 hidden px-5 pt-3 md:mx-0 md:block">
                We take great pride in the quality of our products and are committed to maintaining the highest
                standards of hygiene and safety in our manufacturing processes. We work closely with our suppliers to
                source only the best quality ingredients and we use state-of-the-art technology and equipment to ensure
                that our products are of the highest quality.
              </p>
              <p className="mx-5 px-5 pt-3 md:mx-0 md:hidden">
                We take great pride in the quality of our products and are committed to maintaining the highest
                standards of hygiene and safety in our manufacturing processes. We work closely with our suppliers to
                source only the best quality ingredients.
              </p>
            </div>
          </div>
        </YellowDiv>
      </div>
    </section>
  )
}

export default AboutHero
