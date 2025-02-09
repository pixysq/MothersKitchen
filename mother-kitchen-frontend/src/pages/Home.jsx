import { Hero, InstagramSection, LastSection, Nutrition, Products, Reviews, Welcome, Recipes } from '../components'

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Nutrition />
      <Products />
      <Welcome />
      <Recipes />
      <Reviews />
      <InstagramSection />
      <LastSection elements={['Comic', 'Brands', 'Contact']} />
    </div>
  )
}

export default Home
