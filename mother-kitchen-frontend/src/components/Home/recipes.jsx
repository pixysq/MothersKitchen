import recipesData from './recipesData'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const recipes = () => {
  return (
    <div
      className="m-4 rounded-2xl border-b-[12px] border-l-4 border-r-[12px] border-t-4  border-black  sm:m-6 md:m-8 lg:m-10 xl:m-12"
      style={{ backgroundColor: '#7B1238' }}
    >
      <div className="rounded-2xl p-4" style={{ border: '5px solid white' }}>
        <p className="text-center font-gluten text-2xl sm:text-3xl md:text-4xl" style={{ color: '#FFFFFF' }}>
          Deliciously Crafted: Recipes{' '}
        </p>
        <p className="mb-6 text-center font-gluten text-2xl sm:text-3xl md:text-4xl" style={{ color: '#FFFFFF' }}>
          from Mother&apos;s Kitchen
        </p>
        <div className="flex flex-wrap justify-center">
          {recipesData.map((data, index) => (
            <div key={index} className="mb-6 flex w-full flex-col items-center justify-evenly gap-2 sm:w-1/2 lg:w-1/4">
              <img
                src={data.photo}
                alt="photo"
                className="h-auto w-full rounded-md sm:mr-6 sm:h-[200px] sm:w-[200px]"
              />
              <div className="flex flex-col flex-wrap items-center justify-evenly">
                <p className="font-gluten text-xl sm:text-2xl md:text-3xl" style={{ color: '#FFFFFF' }}>
                  {data.heading}
                </p>
                <p
                  className="text-center   font-gluten sm:text-base md:text-lg"
                  style={{ color: '#FFFFFF', fontSize: '15px', lineHeight: '15px' }}
                >
                  {data.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* button */}
        <div className="flex items-center justify-center ">
          <Link
            to="/recipes"
            className="flex w-fit items-center rounded-full border-b-8 border-l-2 border-r-8 border-t-2 border-black p-3 text-center font-gluten text-sm md:justify-center  md:text-3xl"
            style={{ background: '#41041A', color: '#FFFFFF' }}
            onClick={() => scroll(0, 0)}
          >
            <span>Click for more Recipes</span>
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default recipes
