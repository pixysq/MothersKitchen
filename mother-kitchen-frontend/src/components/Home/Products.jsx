import { useRef } from 'react'
import {
  ProductItemSm1,
  ProductItemSm2,
  ProductItemSm3,
  ProductItemSm4,
  ProductItemSm5,
  ProductItemSm6,
  ProductsHeading,
  product1,
  product2,
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  i,
  j,
  k,
  l,
  m,
  n,
  o,
  p,
  q,
  r,
  s,
  t,
} from '../../assets'
import ginger from '../../assets/products/gingerL.png'
import ProductCard from './ProductCard'
import ProductsInfiniteScroll from './ProductsInfiniteScroll'
import { Slider } from 'infinite-react-carousel'
const productsData = [
  {
    image: a,
    price1: 'INR',
    price2: '499',
    quantity: '300gm',
    title: 'Sanjivani Haldi Barfi',
    desc: 'Immunity Boosters',
    btnText: 'Buy Now',
    color: '#F08D26',
    icon: '',
  },
  {
    image: o,
    price1: 'INR',
    price2: '339',
    price3: '',
    quantity: '100gm',
    title: 'Sanjeevani Immune Booster ',
    desc: '',
    btnText: 'Buy Now',
    color: '#DC7F7D',
    icon: '',
  },
  {
    image: q,
    price1: 'INR',
    price2: '299',
    price3: '',
    quantity: '100gm',
    title: 'Atta Cookies (with ghee)',
    desc: '',
    btnText: 'Buy Now',
    color: '#D7A824',
    icon: '',
  },
  {
    image: b,
    price1: 'INR',
    price2: '499',
    quantity: '300gm',
    title: 'Sanjivani Haldi Barfi(Cardamom)',
    desc: 'Immunity Boosters',
    btnText: 'Buy Now',
    color: '#7AC08A',
    icon: '',
  },
  {
    image: c,
    price1: 'INR',
    price2: '499',
    price3: '',
    quantity: '300gm',
    title: 'Sanjivani Haldi Barfi(Dry Fruits)',
    desc: 'Immunity Boosters',
    btnText: 'Buy Now',
    color: '#E87C61',
    icon: ginger,
  },
  {
    image: product1,
    price1: 'INR',
    price2: '379',
    quantity: '300gm',
    title: 'Atta Biscuit',
    desc: 'Baked Delight',
    btnText: 'Buy Now',
    color: 'bg-green-500',
    icon: '',
  },
  {
    image: product2,
    price1: 'INR',
    price2: '379',
    quantity: '300gm',
    title: 'Honey and nuts rose brittle',
    desc: '',
    btnText: 'Buy Now',
    color: '#D44C8B',
    icon: '',
  },
  {
    image: d,
    price1: 'INR',
    price2: '379',
    quantity: '300gm',
    title: 'Peanut Health Bar',
    desc: '',
    btnText: 'Buy Now',
    color: '#D7586C',
    icon: '',
  },
  {
    image: e,
    price1: 'INR',
    price2: '899',
    quantity: '300gm',
    title: 'Sanjeevani Immune Boost (Energy Drink) with milk',
    desc: '',
    btnText: 'Buy Now',
    color: '#E2CFB4',
    icon: '',
  },
  {
    image: f,
    price1: 'INR',
    price2: '599',
    quantity: '300gm',
    title: 'Protein Power-balls',
    desc: '',
    btnText: 'Buy Now',
    color: '#DD754D',
    icon: '',
  },
  {
    image: g,
    price1: 'INR',
    price2: '899',
    price3: '',
    quantity: '300gm',
    title: 'Sanjeevani Immune Boost (Energy Drink) without milk',
    desc: '',
    btnText: 'Buy Now',
    color: '#E2CFB4',
    icon: '',
  },
  {
    image: i,
    price1: 'INR',
    price2: '599',
    price3: '',
    quantity: '300gm',
    title: 'Sanjivani Masala Haldi Barfi',
    desc: 'Immunity Boosters',
    btnText: 'Buy Now',
    color: '#DA6A2A',
    icon: '',
  },
  {
    image: j,
    price1: 'INR',
    price2: '379',
    price3: '',
    quantity: '300gm',
    title: 'Buckwheat Cookies',
    desc: '',
    btnText: 'Buy Now',
    color: '#C08A78',
    icon: '',
  },
  {
    image: k,
    price1: 'INR',
    price2: '1299',
    price3: '',
    quantity: '600gm',
    title: 'MK Gift Hamper',
    desc: '',
    btnText: 'Buy Now',
    color: '#E9C46B',
    icon: '',
  },
  {
    image: l,
    price1: 'INR',
    price2: '599',
    price3: '',
    quantity: '300gm',
    title: 'Sanjivani Haldi Barfi(Saffron & Almond)',
    desc: 'Immunity Boosters',
    btnText: 'Buy Now',
    color: '#EBBD65',
    icon: '',
  },
  {
    image: m,
    price1: 'INR',
    price2: '379',
    price3: '',
    quantity: '300gm',
    title: 'Kaju Pista Cookies',
    desc: 'Baked Delight',
    btnText: 'Buy Now',
    color: '#D6E641',
    icon: '',
  },
  {
    image: n,
    price1: 'INR',
    price2: '899',
    price3: '',
    quantity: '300gm',
    title: 'Sanjeevani Haldi Powder',
    desc: '',
    btnText: 'Buy Now',
    color: '#FF9145',
    icon: '',
  },
  {
    image: p,
    price1: 'INR',
    price2: '330',
    price3: '',
    quantity: '100gm',
    title: 'Sanjeevani Immune Booster',
    desc: '',
    btnText: 'Buy Now',
    color: '#DBC81C',
    icon: '',
  },
  {
    image: r,
    price1: 'INR',
    price2: '299',
    price3: '',
    quantity: '100gm',
    title: 'Pearl Millet Cookies',
    desc: '',
    btnText: 'Buy Now',
    color: '#E96D8E',
    icon: '',
  },
  {
    image: s,
    price1: 'INR',
    price2: '299',
    price3: '',
    quantity: '100gm',
    title: 'Ginger Cookies',
    desc: '',
    btnText: 'Buy Now',
    color: '#F2A043',
    icon: '',
  },
  {
    image: t,
    price1: 'INR',
    price2: '299',
    price3: '',
    quantity: '100gm',
    title: 'Peanut Cookies',
    desc: '',
    btnText: 'Buy Now',
    color: '#EC9894',
    icon: '',
  },
]
const ProductsSm = () => {
  return (
    <div className="w-screen overflow-clip pb-14">
      <section className="py-5 md:py-24">
        <div className="flex items-center justify-center">
          <img loading="lazy" src={ProductsHeading} alt="heading" className="absolute -z-20 h-14" />
          <h3 className="text-center font-gluten text-xl font-bold text-red-base">
            &quot;<span className="text-[#553500]"> TOP-</span>rated by taste buds &quot;
          </h3>
        </div>
        <div className="relative pt-10">
          <div className="products w-full">
            <Slider centerMode={true} centerPadding={70} shift={70} arrows={false} dots={true}>
              {productsData.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <ProductsInfiniteScroll />
    </div>
  )
}
const ProductsLg = ({ productsRef }) => {
  return (
    <>
      <section className="pb-24 pt-10 lg:mx-5 2xl:mx-36">
        <div className="flex items-center justify-center">
          <img loading="lazy" src={ProductsHeading} alt="heading" className="absolute -z-20 h-24" />
          <h3 className="text-center font-gluten text-3xl font-bold text-red-base">
            &quot;<span className="text-[#553500]"> TOP-</span>rated by taste buds &quot;
          </h3>
        </div>
        <div className="products relative overflow-x-scroll pt-20 lg:px-10" ref={productsRef}>
          <Slider slidesToShow={3} dots={true} arrows={true} initialSlide={1} centerPadding={0} centerMode={true}>
            {productsData.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </Slider>
        </div>
      </section>

      <ProductsInfiniteScroll />
    </>
  )
}

const Products = () => {
  const productsRef = useRef()
  const handleLeftClick = () => {
    productsRef.current.scrollBy(-380, 0)
  }
  const handleRightClick = () => {
    productsRef.current.scrollBy(380, 0)
  }

  return (
    <>
      <div className="md:hidden ">
        {/*Small Screen*/}
        <ProductsSm productsRef={productsRef} />
      </div>

      <div className="hidden md:block">
        {/*Large Screen*/}
        <ProductsLg handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} productsRef={productsRef} />
      </div>
    </>
  )
}

export default Products
