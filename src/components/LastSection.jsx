import NavigationButton from './custom/NavigationButtons'

const LastSection = ({ elements = ['Comic', 'Brands', 'Contact'] }) => {
  return (
    <div className="navigationButtons mx-5 mt-20 flex flex-col items-center justify-center gap-7 rounded-3xl bg-[#FFD47A] p-5 md:flex-row md:bg-transparent lg:m-24">
      <NavigationButton
        path={`/${elements[0]?.toLowerCase() === 'home' ? '' : elements[0].toLowerCase()}`}
        className="w-40 bg-[#42DE6E] text-center font-lexend text-xl font-extralight tracking-[-0.2rem] md:w-auto lg:px-[3.1rem] lg:py-5 lg:text-xl"
      >
        {elements[0]}
      </NavigationButton>
      <div className="hidden h-20 w-[1.5px] bg-black lg:block" />
      <NavigationButton
        path={`/${elements[1]?.toLowerCase()}`}
        className="w-40 bg-[#42D5DE] text-center font-lexend text-xl font-extralight tracking-[-0.2rem] md:w-auto lg:px-[3.1rem] lg:py-5 lg:text-xl"
      >
        {elements[1]}
      </NavigationButton>
      <div className="hidden h-20 w-[1.5px] bg-black lg:block" />
      <NavigationButton
        path={`/${elements[2]?.toLowerCase()}`}
        className="w-40 bg-[#C842DE] text-center font-lexend text-xl font-extralight tracking-[-0.2rem] md:w-auto lg:px-[3.1rem] lg:py-5 lg:text-xl"
      >
        {elements[2]}
      </NavigationButton>
    </div>
  )
}

export default LastSection
