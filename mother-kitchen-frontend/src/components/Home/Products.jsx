import React, { useRef } from 'react'
import { Slider } from 'infinite-react-carousel'

// Import your assets & components (adjust paths as needed)
import kajuPista from '../../assets/home/kajuPista.png'
import attaBiscuit from '../../assets/home/attaBiscuit.png'
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

// Custom Next Arrow with inline styling
const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        right: '1px', // adjust as needed
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex: 1000,
      }}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </div>
  )
}

// Custom Prev Arrow with inline styling
const PrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        left: '1px', // adjust as needed
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex: 1000,
      }}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </div>
  )
}

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
            <Slider centerMode={true} centerPadding={70} shift={70} arrows={true} dots={false}>
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
          <img
            loading="lazy"
            src={ProductsHeading}
            alt="heading"
            style={{ position: 'absolute', zIndex: -1, height: '96px' }}
          />
          <h3
            style={{
              textAlign: 'center',
              fontFamily: 'Gluten, sans-serif',
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#d70000',
            }}
          >
            "<span style={{ color: '#553500' }}> TOP-</span>rated by taste buds"
          </h3>
        </div>
        <div
          style={{ position: 'relative', paddingTop: '80px', paddingLeft: '40px', paddingRight: '40px' }}
          ref={productsRef}
        >
          <Slider
            slidesToShow={3}
            dots={false}
            arrows={true}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            initialSlide={1}
            centerPadding={0}
            centerMode={true}
          >
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
  const productsRef = useRef(null)

  const handleLeftClick = () => {
    if (productsRef && productsRef.current) {
      productsRef.current.scrollBy(-380, 0)
    }
  }

  const handleRightClick = () => {
    if (productsRef && productsRef.current) {
      productsRef.current.scrollBy(380, 0)
    }
  }

  return (
    <>
      <div className="md:hidden">
        {/* Small Screen */}
        <ProductsSm productsRef={productsRef} />
      </div>
      <div className="hidden md:block">
        {/* Large Screen */}
        <ProductsLg handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} productsRef={productsRef} />
      </div>
    </>
  )
}

export default Products
