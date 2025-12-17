/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useRef } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BB, CC, ProductsHeading, a, b, c, d, e, f, g, i, j, k, l, n, p, product2, r, s, t } from '../../assets'
import attaBiscuit from '../../assets/home/attaBiscuit.png'
import kajuPista from '../../assets/home/kajuPista.png'
import leaf from '../../assets/leaf.png'
import ginger from '../../assets/products/gingerL.png'
import ExploreButton from './ExploreButton'
import ProductCard from './ProductCard'

// Product Data
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
    image: BB,
    price1: 'INR',
    price2: '339',
    price3: '',
    quantity: '100gm',
    title: 'Sanjeevani Immune Booster ',
    desc: '',
    btnText: 'Buy Now',
    color: '#F2DF22',
    icon: '',
  },

  {
    image: CC,
    price1: 'INR',
    price2: '299',
    price3: '',
    quantity: '100gm',
    title: 'Atta Cookies (with ghee)',
    desc: '',
    btnText: 'Buy Now',
    color: '#FFA33B',
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
    image: attaBiscuit,
    price1: 'INR',
    price2: '379',
    quantity: '300gm',
    title: 'Atta Biscuit',
    desc: 'Baked Delight',
    btnText: 'Buy Now',
    color: '#FD8CAA',
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
    image: kajuPista,
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

// For small screens
const ProductsSm = () => {
  return (
    <div style={{ width: '100vw', overflow: 'hidden', paddingBottom: '56px' }}>
      <section style={{ padding: '20px 0' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <img
            loading="lazy"
            src={ProductsHeading}
            alt="heading"
            style={{ position: 'absolute', zIndex: -1, height: '56px' }}
          />
          <h3
            style={{
              textAlign: 'center',
              fontFamily: 'Gluten, sans-serif',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: '#d70000',
            }}
          >
            "<span style={{ color: '#553500' }}> TOP-</span>rated by taste buds"
          </h3>
        </div>
        <div style={{ position: 'relative', paddingTop: '40px' }}>
          <div style={{ width: '100%' }}>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1.3}
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 1.5, spaceBetween: 30 },
                768: { slidesPerView: 2, spaceBetween: 40 },
                1024: { slidesPerView: 3, spaceBetween: 50 },
              }}
            >
              {productsData.map((product, idx) => (
                <SwiperSlide key={product.title + idx}>
                  <ProductCard {...product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <ExploreButton />
      {/* <ProductsInfiniteScroll /> */}
    </div>
  )
}

// For large screens
const ProductsLg = ({ productsRef }) => {
  return (
    <>
      <section style={{ padding: '40px 20px 96px', position: 'relative' }}>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Leaf image positioned in the background */}
          <img
            loading="lazy"
            src={leaf}
            alt="heading"
            className="mt-16"
            style={{ position: 'absolute', height: '96px', zIndex: 1 }}
          />

          {/* Heading text positioned absolutely on top of the leaf image */}
          <h3
            className="mt-16"
            style={{
              position: 'absolute',
              zIndex: 2,
              textAlign: 'center',
              fontFamily: 'Gluten, sans-serif',
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#B13912',
            }}
          >
            <span style={{ color: '#553500' }}>" Wellness</span> in every bite "
          </h3>
        </div>

        <div
          style={{
            position: 'relative',
            paddingTop: '80px',
          }}
          ref={productsRef}
        >
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={20}
            navigation
            loop={true}
            centeredSlides={true}
            initialSlide={1}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="px-[40px]"
          >
            {productsData.map((product, idx) => (
              <SwiperSlide key={product.title + idx}>
                <ProductCard {...product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <ExploreButton />
    </>
  )
}

const Products = () => {
  const productsRef = useRef(null)

  return (
    <>
      <div className="md:hidden">
        {/* Small Screen */}
        <ProductsSm productsRef={productsRef} />
      </div>
      <div className="fs_product_slider m-20 mb-10 hidden rounded-[50px] bg-[#FBD68C]    pb-5 md:block">
        {/* Large Screen */}
        <ProductsLg productsRef={productsRef} />
      </div>
    </>
  )
}

export default Products
