import RecipeCard from './Card'
import RecipesData from './RecipesData'

const Index = () => {
  return (
    <>
      <h2 className="white-stroke white-shadow my-8 text-center font-gluten text-3xl font-black text-red-base md:my-20 md:text-5xl">
        OUR <span className="black-shadow font-lexend text-2xl uppercase text-white md:text-4xl">RECIPES</span>
      </h2>
      {RecipesData.map((recipe, index) => (
        <RecipeCard
          key={index}
          number={recipe.number}
          image={recipe.image}
          title={recipe.title}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          subtitle={recipe.subtitle}
          colors={recipe.colors}
        />
      ))}
    </>
  )
}
export default Index
