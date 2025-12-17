import { LoadingGirl, LoadingItems } from '../assets'

const Loader = () => {
  return (
    <div className="relative mt-0 flex h-screen items-center justify-center">
      <img src={LoadingGirl} alt="girl" className="w-[55vw] md:w-[20vw]" />
      <img src={LoadingItems} alt="items" className="absolute w-[90vw] animate-spin duration-700 md:w-[40vw]" />
    </div>
  )
}

export default Loader
