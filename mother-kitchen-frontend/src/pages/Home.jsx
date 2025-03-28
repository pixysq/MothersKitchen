import { Hero, InstagramSection, LastSection, Nutrition, Products, Reviews, Welcome, Recipes} from '../components'
import ProductsInfiniteScroll from '../components/Home/ProductsInfiniteScroll'
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
