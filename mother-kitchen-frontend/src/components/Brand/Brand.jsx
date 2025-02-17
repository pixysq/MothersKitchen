import { Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7 } from '../../assets'
import BorderDiv from '../custom/BorderDiv'
import ImageBox from '../custom/ImageBox'
import { Link } from 'react-router-dom'
import img1 from '../../assets/brands/a.png'
import img2 from '../../assets/brands/b.png'
import img3 from '../../assets/brands/c.png'
import img4 from '../../assets/brands/d.png'
import img5 from '../../assets/brands/e.png'
import img6 from '../../assets/brands/f.png'

const Brand = () => {
  return (
    <>
      {/* Desktop / Tablet Version */}
      <BorderDiv className="mx-7 hidden bg-[#516AC0] p-5 md:mx-14 md:block md:p-10 lg:mx-24">
        <p className="mb-10 pl-20 pr-20 text-center font-gluten text-white" style={{ lineHeight: '15px' }}>
          "Bringing Culinary Excellence Home: Discover the Culinary Partnerships of Mother's Kitchen - Trusted Brands,
          Unmatched Quality, and Exceptional Taste. Explore the Unrivaled Selections That Make Every Meal Memorable.
        </p>
        {/* first row */}
        <div className="mb-20 flex justify-center gap-20">
          <Link to="/" onClick={() => scroll(0, 0)}>
            <ImageBox
              image={img3}
              className="max-w-full overflow-hidden object-contain !p-2 sm:!p-3 md:px-6"
              clickable={true}
              boxClassName="!h-[100px] !w-[100px] sm:!h-[120px] sm:!w-[120px] md:!h-[160px] md:!w-[160px] lg:!h-[200px] lg:!w-[200px] bg-[#244238]"
            />
          </Link>

          <Link to="http://Coachshivanimalik.com">
            <ImageBox
              image={img4}
              className="max-w-full overflow-hidden object-contain !p-2 sm:!p-3 md:px-6"
              clickable={true}
              boxClassName="!h-[100px] !w-[100px] sm:!h-[120px] sm:!w-[120px] md:!h-[160px] md:!w-[160px] lg:!h-[200px] lg:!w-[200px] bg-[#F5D09E]"
            />
          </Link>

          <Link to="/cafe" onClick={() => scroll(0, 0)}>
            <ImageBox
              image={img1}
              className="max-w-full overflow-hidden object-contain !p-2 sm:!p-3 md:px-6"
              clickable={true}
              boxClassName="!h-[100px] !w-[100px] sm:!h-[120px] sm:!w-[120px] md:!h-[160px] md:!w-[160px] lg:!h-[200px] lg:!w-[200px] bg-[#0F1C1A]"
            />
          </Link>
        </div>

        {/* second row */}
        <div className="mb-20 flex justify-center gap-20">
          <Link to="/living" onClick={() => scroll(0, 0)}>
            <ImageBox
              image={img5}
              className="max-w-full overflow-hidden object-contain !p-2 sm:!p-3 md:px-6"
              clickable={true}
              boxClassName="!h-[100px] !w-[100px] sm:!h-[120px] sm:!w-[120px] md:!h-[160px] md:!w-[160px] lg:!h-[200px] lg:!w-[200px] bg-[#FFFFFE]"
            />
          </Link>

          <Link to="/daksh">
            <ImageBox
              image={img6}
              className="max-w-full overflow-hidden object-contain !p-2 sm:!p-3 md:px-6"
              clickable={true}
              boxClassName="!h-[100px] !w-[100px] sm:!h-[120px] sm:!w-[120px] md:!h-[160px] md:!w-[160px] lg:!h-[200px] lg:!w-[200px] bg-[#FFFFFE]"
            />
          </Link>

          <Link to="/comic" onClick={() => scroll(0, 0)}>
            <ImageBox
              image={img2}
              className="max-w-full overflow-hidden object-contain !p-2 sm:!p-3 md:px-6"
              clickable={true}
              boxClassName="!h-[100px] !w-[100px] sm:!h-[120px] sm:!w-[120px] md:!h-[160px] md:!w-[160px] lg:!h-[200px] lg:!w-[200px] bg-[#FFFFFE]"
            />
          </Link>
        </div>

        {/* third row (center row) */}
        <div className="flex justify-center gap-20">
          <Link to="/beauty" onClick={() => scroll(0, 0)}>
            <ImageBox
              image={Brand7}
              className="max-w-full overflow-hidden object-cover !p-0.5 md:px-6"
              clickable={true}
              boxClassName="!h-[100px] !w-[100px] sm:!h-[120px] sm:!w-[120px] md:!h-[160px] md:!w-[160px] lg:!h-[200px] lg:!w-[200px]"
              style={{
                background: 'radial-gradient(67.68% 67.56% at 50.21% 50%, #F8AFAE 0%, #F4ADB1 34.4%, #EF8383 74.9%)',
              }}
            />
          </Link>

          <Link to="/cafe" onClick={() => scroll(0, 0)}>
            <ImageBox
              image={Brand6}
              className="max-w-full overflow-hidden object-contain !p-2 sm:!p-3 md:px-6"
              clickable={true}
              boxClassName="!h-[100px] !w-[100px] sm:!h-[120px] sm:!w-[120px] md:!h-[160px] md:!w-[160px] lg:!h-[200px] lg:!w-[200px] bg-[#FFDEC7] text-black"
            />
          </Link>
        </div>
      </BorderDiv>

      {/* Mobile Version (Small Screens Only) */}
      <BorderDiv className="mx-4 block bg-[#516AC0] p-5 md:hidden">
        <p className="mb-5 text-center font-gluten text-white" style={{ lineHeight: '15px' }}>
          "Bringing Culinary Excellence Home: Discover the Culinary Partnerships of Mother's Kitchen - Trusted Brands,
          Unmatched Quality, and Exceptional Taste. Explore the Unrivaled Selections That Make Every Meal Memorable.
        </p>
        {/* Grid with two columns, centered items */}
        <div className="grid grid-cols-2 justify-items-center gap-4">
          <Link to="/" onClick={() => scroll(0, 0)}>
            <ImageBox
              image={img3}
              className="max-w-full overflow-hidden object-contain !p-1"
              clickable={true}
              boxClassName="h-[100px] w-[100px] bg-[#244238]"
            />
          </Link>

          <Link to="http://Coachshivanimalik.com">
            <ImageBox
              image={img4}
              className="max-w-full overflow-hidden object-contain !p-1"
              clickable={true}
              boxClassName="h-[100px] w-[100px] bg-[#F5D09E]"
            />
          </Link>

          <Link to="/cafe" onClick={() => scroll(0, 0)}>
            <ImageBox
              image={img1}
              className="max-w-full overflow-hidden object-contain !p-1"
              clickable={true}
              boxClassName="h-[100px] w-[100px] bg-[#0F1C1A]"
            />
          </Link>

          <Link to="/living" onClick={() => scroll(0, 0)}>
            <ImageBox
              image={img5}
              className="max-w-full overflow-hidden object-contain !p-1"
              clickable={true}
              boxClassName="h-[100px] w-[100px] bg-[#FFFFFE]"
            />
          </Link>
          <Link to="/daksh" onClick={() => scroll(0, 0)}>
            <ImageBox
              image={img6}
              className="max-w-full overflow-hidden object-contain !p-1"
              clickable={true}
              boxClassName="h-[100px] w-[100px] bg-[#FFFFFE]"
            />
          </Link>

          <Link to="/comic" onClick={() => scroll(0, 0)}>
            <ImageBox
              image={img2}
              className="max-w-full overflow-hidden object-contain !p-1"
              clickable={true}
              boxClassName="h-[100px] w-[100px] bg-[#FFFFFE]"
            />
          </Link>

          <Link to="/beauty" onClick={() => scroll(0, 0)}>
            <ImageBox
              image={Brand7}
              className="max-w-full overflow-hidden object-cover !p-0.5"
              clickable={true}
              boxClassName="h-[100px] w-[100px]"
              style={{
                background: 'radial-gradient(67.68% 67.56% at 50.21% 50%, #F8AFAE 0%, #F4ADB1 34.4%, #EF8383 74.9%)',
              }}
            />
          </Link>

          <Link to="/cafe" onClick={() => scroll(0, 0)}>
            <ImageBox
              image={Brand6}
              className="max-w-full overflow-hidden object-contain !p-1"
              clickable={true}
              boxClassName="h-[100px] w-[100px] bg-[#FFDEC7] text-black"
            />
          </Link>
        </div>
      </BorderDiv>
    </>
  )
}

export default Brand
