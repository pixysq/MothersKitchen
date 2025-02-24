import { useState, lazy } from 'react'
import { BackArrow } from '../../assets/comics'
const ChapterCover = lazy(() => import('./ChapterCover'))
import ReactPaginate from 'react-paginate'
import Comics from './comicData'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { InayatHeadingImg, MummyHeadingImg } from '../../assets'

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((comicPage, idx) => <ChapterCover key={comicPage.title} {...comicPage} idx={idx + 1} />)}
    </>
  )
}

function PaginatedItems({ itemsPerPage, itemOffset, setItemOffset, page, setPage }) {
  const endOffset = itemOffset + itemsPerPage
  const currentItems = Comics.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(Comics.length / itemsPerPage)

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setPage(event.selected)
    const newOffset = (event.selected * itemsPerPage) % Comics.length
    scrollTo(0, 400)
    setItemOffset(newOffset)
  }

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="flex w-full justify-center">
        <ReactPaginate
          breakLabel="..."
          previousLabel={<FaChevronLeft />}
          nextLabel={<FaChevronRight />}
          previousLinkClassName="text-white"
          nextLinkClassName="text-white"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          className="flex gap-3 font-gluten text-base font-bold text-white/60 md:gap-10 md:text-3xl"
          pageLinkClassName="m-auto bg-[#A5763F] px-3 pt-3 pb-2 rounded"
          activeLinkClassName="!bg-[#031E29] text-white"
          previousClassName="my-auto"
          nextClassName="my-auto"
          forcePage={page}
        />
      </div>
    </>
  )
}
const Comic = () => {
  const itemPerPage = 4
  const [itemOffset, setItemOffset] = useState(0)
  const [page, setPage] = useState(0)
  const handlePageBack = () => {
    if (itemOffset === 0) return
    else {
      setItemOffset((prev) => prev - itemPerPage)
      setPage((prev) => prev - 1)
    }
  }
  return (
    <div className="px-3 py-5 md:px-20 md:pt-10 ">
      <div className="flex px-5 md:justify-between">
        <div className="w-full font-gluten font-bold text-white">
          <h2 className="black-shadow -ml-4 flex items-end gap-2 text-xl text-green-base md:ml-0 md:gap-4 md:text-6xl">
            <img src={InayatHeadingImg} className="h-14 md:h-24 md:w-20" alt="inat" /> INayat
            <span className="flex items-end text-white">
              {' '}
              & M
              <img
                src={MummyHeadingImg}
                className="-mb-5  h-[100px] w-20 object-contain md:-mb-20 md:h-[250px] md:w-[150px]"
                alt="mummy"
              />
              mmy
            </span>
          </h2>
          <p className=" mt-2 md:mt-5 md:text-2xl">PRINCIPLE OF SUCCESS</p>
          <p className="text-green-base md:text-xl">Mini Series</p>
        </div>
        <div className="flex select-none flex-col items-end justify-start pt-3 md:items-start md:justify-center">
          <div
            className="w-[3rem] cursor-pointer rounded-r-[3rem] rounded-tl-[2rem] border-2 border-b-4 border-r-4 border-black bg-green-base p-3 duration-300 hover:scale-95 md:mx-auto md:w-[5rem] md:border-4 md:border-b-[6px] md:border-r-[6px] md:p-5"
            onClick={handlePageBack}
          >
            <img src={BackArrow} alt="arrow" />
          </div>
          <p className="mt-2 text-center font-lexend text-[10px] font-semibold tracking-tighter text-white md:text-left md:text-base">
            <div className="block w-20 md:w-40 ">Press here </div>
            <div>to go Back</div>
          </p>
        </div>
      </div>
      <PaginatedItems
        itemsPerPage={itemPerPage}
        itemOffset={itemOffset}
        setItemOffset={setItemOffset}
        page={page}
        setPage={setPage}
      />
    </div>
  )
}

export default Comic
