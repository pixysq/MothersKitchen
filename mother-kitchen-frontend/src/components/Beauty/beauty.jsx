import BorderDiv from '../custom/BorderDiv'
import desktopImage from '../../assets/beauty/desktop.png'
import logo from '../../assets/beauty/mkLogo.png'
import smallScreen from '../../assets/beauty/smallScreen.png'
import LastSection from '../LastSection'

const backgroundStyle = {
  background: 'radial-gradient(67.68% 67.56% at 50.21% 50%, #F8AFAE 0%, #F4ADB1 34.4%, #EF8383 74.9%)',
}

const SmallScreenContent = (
  <div className="block p-3 md:hidden">
    <BorderDiv className="overflow-hidden">
      <div className="flex flex-col items-center justify-center p-4 pt-12 " style={backgroundStyle}>
        <img src={logo} alt="Logo" className="w-1/2 text-center" />
        <h2 className=" black-shadow white-stroke  my-8 text-center font-gluten text-3xl font-black md:my-20 md:text-5xl">
          Coming Soon
        </h2>

        <img src={smallScreen} alt="Small Screen" />
        <p className="text-center font-lexend text-white">
          Introducing MK Beauty London – beauty powered by nature! Our new products are crafted with turmeric, known for
          its natural glow-boosting benefits. Designed to be gentle yet effective, MK London brings you skincare that
          reveals your true radiance, simply and purely.
        </p>

        <p className="text-center text-center font-lexend text-white">Stay tuned – your glow-up is coming soon!</p>
      </div>
    </BorderDiv>
  </div>
)

const LargeScreenContent = (
  <div className="hidden p-20 md:flex">
    <BorderDiv className="overflow-hidden ">
      <div className="flex flex-col items-center justify-center p-8 pl-12 pr-12 pt-12 " style={backgroundStyle}>
        <img src={logo} className="h-auto w-1/12.5" alt="Logo" />
        <h2 className="black-shadow white-stroke  text-center  font-gluten text-6xl font-bold text-white md:my-4 md:text-6xl">
          Coming Soon
        </h2>

        <img src={desktopImage} alt="Desktop View" className="h-auto w-screen text-center" />

        <p className="text-center text-center font-lexend text-white">
          Introducing MK Beauty London – beauty powered by nature! Our new products are crafted with turmeric, known for
          its natural glow-boosting benefits. Designed to be gentle yet effective, MK London brings you skincare that
          reveals your true radiance, simply and purely.
        </p>

        <p className="mt-6 text-center text-center font-lexend text-white">Stay tuned – your glow-up is coming soon!</p>
      </div>
    </BorderDiv>
  </div>
)

const Beauty = () => {
  return (
    <>
      {SmallScreenContent}
      {LargeScreenContent}
      <LastSection elements={['Home', 'Comic', 'Contact']} />
    </>
  )
}

export default Beauty
