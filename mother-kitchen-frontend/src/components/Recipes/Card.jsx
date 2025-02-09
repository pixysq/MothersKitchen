import React from 'react'
import BorderDiv from '../custom/BorderDiv'
const RecipeCard = ({ number, image, title, subtitle, ingredients, instructions, colors }) => {
  const renderList = (items, itemColor) => {
    const result = []
    let currentSubheading = null

    items.forEach((item, index) => {
      if (/:$/.test(item)) {
        currentSubheading = (
          <h4
            key={`subheading-${index}`}
            className="mb-2 mt-4  font-lexend text-sm sm:text-base"
            style={{ color: colors.subheading }}
          >
            {item}
          </h4>
        )
        result.push(currentSubheading)
      } else {
        if (currentSubheading) {
          const lastSubheadingIndex = result.length - 1

          if (!Array.isArray(result[lastSubheadingIndex].props.children)) {
            result[lastSubheadingIndex] = React.cloneElement(result[lastSubheadingIndex], {
              children: [
                result[lastSubheadingIndex].props.children,
                <ul key={`list-${index}`} className="pl-4">
                  <li key={`item-${index}`} className="mb-2 text-sm sm:text-base" style={{ color: itemColor }}>
                    {item}
                  </li>
                </ul>,
              ],
            })
          } else {
            result[lastSubheadingIndex] = React.cloneElement(result[lastSubheadingIndex], {
              children: [
                ...result[lastSubheadingIndex].props.children,
                <ul key={`list-${index}`} className="pl-4">
                  <li key={`item-${index}`} className="mb-2 text-sm sm:text-base" style={{ color: itemColor }}>
                    {item}
                  </li>
                </ul>,
              ],
            })
          }
        } else {
          result.push(
            <li key={`item-${index}`} className="mb-2 text-sm sm:text-base" style={{ color: itemColor }}>
              {item}
            </li>,
          )
        }
      }
    })

    return result
  }

  return (
    <>
      <div className="md:mr-20s mb-5 ml-4 mr-4 overflow-hidden rounded-2xl border-b-[15px] border-l-8 border-r-[15px] border-t-8 border-black md:mb-20 md:ml-20">
        <div className="overflow-hidden rounded-lg border-4 border-white">
          <div
            style={{ backgroundColor: colors.bg }}
            className="overflow-hidden pb-4 pl-4 pr-4 pt-4  md:pb-10 md:pl-10 md:pr-5 md:pt-10 "
          >
            {/* Recipe number */}
            <div
              className="flex h-[3.5rem] w-[3.5rem]
          items-center justify-center rounded-full border-b-4 border-r-2 border-black bg-white
          font-gluten text-4xl text-black sm:h-[4rem] 
          sm:w-[4rem] md:h-[4.5rem] md:w-[4.5rem] md:text-4xl lg:h-[5rem] lg:w-[5rem] lg:text-5xl"
            >
              {number}.
            </div>

            {/* Top Section */}
            <div className={`mb-6 flex flex-col items-center ${number >= 9 && number <= 12 ? '' : ''} sm:flex-row`}>
              <img loading="lazy" src={image} alt="Recipe" className="md:h-auto md:w-1/3" />
              <div className="sm:ml-6 lg:ml-12">
                {/* Title */}
                <h2
                  className="mb-4 font-jua text-3xl  sm:text-left sm:text-4xl  lg:text-5xl"
                  style={{ color: colors.title }}
                >
                  {title}
                </h2>

                <h2 className="mb-4 font-jua text-2xl  sm:text-left sm:text-3xl " style={{ color: colors.subtitle }}>
                  {subtitle}
                </h2>

                {/* Ingredients Section */}
                <h3
                  className="mb-2 mt-4 font-jua text-2xl  text-gray-700 sm:text-3xl"
                  style={{ color: colors.ingredientsTitle }}
                >
                  INGREDIENTS:
                </h3>
                <div className="mb-6 pl-6 font-lexend text-sm sm:text-base">
                  {renderList(ingredients, colors.ingredients)}
                </div>
              </div>
            </div>

            {/* Instructions Section */}
            <h3
              className="mb-2 font-jua text-2xl  text-gray-700 sm:text-3xl"
              style={{ color: colors.instructionsTitle }}
            >
              INSTRUCTIONS
            </h3>
            <div className="list-disc pl-6 font-lexend text-sm sm:text-base">
              {renderList(instructions, colors.instructions)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecipeCard
