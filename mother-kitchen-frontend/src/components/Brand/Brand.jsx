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
    <BorderDiv className="mx-7 bg-[#516AC0] p-5 md:mx-14 md:p-10 lg:mx-24">
     <div className="mt-10 grid grid-cols-2 place-items-center gap-4 sm:gap-6 md:grid-cols-3 md:gap-6 lg:grid-cols-3 lg:gap-8">
  {/* First Row */}
  <Link to="/" onClick={() => scroll(0, 0)} className="border">
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

  {/* Second Row */}
  <Link to="/cafe" onClick={() => scroll(0, 0)}>
    <ImageBox
      image={img1}
      className="max-w-full overflow-hidden object-contain !p-2 sm:!p-3 md:px-6"
      clickable={true}
      boxClassName="!h-[100px] !w-[100px] sm:!h-[120px] sm:!w-[120px] md:!h-[160px] md:!w-[160px] lg:!h-[200px] lg:!w-[200px] bg-[#0F1C1A]"
    />
  </Link>

  <Link to="/living" onClick={() => scroll(0, 0)}>
    <ImageBox
      image={img5}
      className="max-w-full overflow-hidden object-contain !p-2 sm:!p-3 md:px-6"
      clickable={true}
      boxClassName="!h-[100px] !w-[100px] sm:!h-[120px] sm:!w-[120px] md:!h-[160px] md:!w-[160px] lg:!h-[200px] lg:!w-[200px] bg-[#FFFFFE]"
    />
  </Link>

  {/* Third Row */}
  <Link to="/comic" onClick={() => scroll(0, 0)}>
    <ImageBox
      image={img2}
      className="max-w-full overflow-hidden object-contain !p-2 sm:!p-3 md:px-6"
      clickable={true}
      boxClassName="!h-[100px] !w-[100px] sm:!h-[120px] sm:!w-[120px] md:!h-[160px] md:!w-[160px] lg:!h-[200px] lg:!w-[200px] bg-[#FFFFFE]"
    />
  </Link>

  <ImageBox
    image={img6}
    className="max-w-full overflow-hidden object-contain !p-2 sm:!p-3 md:px-6"
    clickable={true}
    boxClassName="!h-[100px] !w-[100px] sm:!h-[120px] sm:!w-[120px] md:!h-[160px] md:!w-[160px] lg:!h-[200px] lg:!w-[200px] bg-[#FFFFFE]"
  />

  {/* Centered Last Row with Equal Gap */}
  <div className="flex flex-row justify-center gap-4 sm:gap-6 md:gap-6 lg:gap-8">
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
</div>

    </BorderDiv>
  )
}

export default Brand
