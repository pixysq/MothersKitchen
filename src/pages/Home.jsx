/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import Hero from '../components/Home/Hero'
import InstagramSection from '../components/Home/InstagramSection'
import Nutrition from '../components/Home/Nutrition'
import Products from '../components/Home/Products'
import ProductsInfiniteScroll from '../components/Home/ProductsInfiniteScroll'
import Recipes from '../components/Home/Recipes'
import Reviews from '../components/Home/Reviews'
import Welcome from '../components/Home/Welcome'
import LastSection from '../components/LastSection'

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Nutrition />
      <Products />
      <ProductsInfiniteScroll/>
      <Welcome />
      <Recipes />
      <Reviews />
      <InstagramSection />
      <LastSection elements={['Comic', 'Brands', 'Contact']} />
    </div>
  )
}

export default Home
