import { ContinuedBg, ContinuedSmBg } from '../../assets/comics'
import { FaLongArrowAltDown } from 'react-icons/fa'
import arrowdownload from '../../assets/comics/arrowdownload.png'

const ChapterCover = ({
  seriesName,
  baseTextColor,
  baseBgColor,
  chapter,
  idx,
  title,
  downloadPDFPath,
  images = [],
}) => {
  return (
    <div className="my-16 ">
      <div
        className={`w-[45vw] rounded-t-xl border-4 border-b-0 border-r-8 border-black px-3 py-1 font-gluten text-xs font-bold text-white md:w-[30vw] md:rounded-t-3xl md:px-5 md:py-3 md:pl-10 md:text-2xl ${
          idx % 2 == 0 ? 'ml-auto mr-3 md:mr-10' : 'ml-3 mr-auto md:ml-10'
        }  ${baseBgColor}`}
      >
        {seriesName}
      </div>
      <div className="rounded-xl border-8 border-b-[12px] border-r-[14px] border-black bg-[#FFEABF] md:rounded-3xl">
        <div className="flex justify-between pl-7 pr-3 md:px-20 md:pb-20">
          {chapter % 2 == 0 && (
            <div
              className={`max-h-13 rounded-b-lg border-b-4 border-l-2 border-r-2 border-black px-3 pt-4 md:rounded-b-xl md:border-b-8 md:px-6 ${baseBgColor} font-gluten font-bold text-white md:text-6xl`}
            >
              {chapter}
            </div>
          )}
          <div className="flex">
            <ol
              className={`flex ${
                chapter % 2 != 0 ? 'w-[50vw]' : 'w-[30vw]'
              }  list-decimal ${baseTextColor} comic-text-shadow relative top-3 mt-auto font-gluten text-lg font-semibold md:top-20 md:text-4xl  `}
            >
              <li value={chapter}>
                <span className="relative">{title}</span>
              </li>
            </ol>
          </div>
          {chapter % 2 != 0 && (
            <div
              className={`max-h-13 rounded-b-lg border-b-4 border-l-2 border-r-2 border-black px-3 pt-4 md:rounded-b-xl md:border-b-8 md:px-6 ${baseBgColor} font-gluten font-bold text-white md:text-6xl`}
            >
              {chapter}
            </div>
          )}
        </div>
        <div className="mx-5 my-10 grid grid-cols-1 gap-10 md:ml-20 md:mr-28 md:grid-cols-2 md:gap-20">
          {images.map((image, idx) => {
            return (
              <div key={idx} className="relative">
                <img src={image.source} alt="imaze" />
                <div
                  className={`h-[2rem] w-[2rem] rounded-full md:h-[4.5rem] md:w-[4.5rem] ${
                    image.color
                  } absolute -top-3 flex items-center justify-center border-b-4 border-r-2 border-black font-gluten text-white md:-top-5 md:text-4xl ${
                    idx % 2 == 0 ? '-left-3 md:-left-7' : '-right-3 md:-right-7'
                  }`}
                >
                  {idx + 1}.
                </div>
              </div>
            )
          })}

          <div className="relative flex items-center md:justify-center">
            <img src={ContinuedBg} alt="continue" className="absolute hidden md:block" />
            <img src={ContinuedSmBg} alt="continue" className="absolute w-[12rem] md:hidden" />

            {/* Wrap the text and download link in a flex container with gap */}
            <div className="flex items-center gap-6 pl-5 sm:flex-col md:gap-4 md:pl-0">
              <p className="z-[1] font-gluten font-medium md:text-3xl">
                To Be <br className="hidden md:block" />
                <span className="md:text-5xl">Continued...</span>
              </p>

              {/* Show in a column layout on small screens */}
              <div className="mt-4 block flex flex-col items-center justify-between gap-4 sm:hidden">
                <a
                  className="flex w-full flex-row flex-wrap items-center justify-between"
                  href={downloadPDFPath}
                  download={downloadPDFPath}
                >
                  <div>
                    <p
                      className="black-shadow text-center font-gluten text-xs font-black text-[#039898] sm:text-lg"
                      style={{ lineHeight: '5px' }}
                    >
                      DOWNLOAD
                    </p>
                    <p className="black-shadow text-center font-gluten text-xs font-black text-[#039898] sm:text-lg">
                      THIS STORY
                    </p>
                  </div>
                  <img src={arrowdownload} alt="Download arrow" className="ml-2 h-14 w-14" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-20 mb-8 mr-4 hidden items-center justify-end gap-3 md:flex">
          <a className="flex flex-row items-center gap-3" href={downloadPDFPath} download={downloadPDFPath}>
            <div>
              <p
                className="black-shadow text-center font-gluten text-xs font-black text-[#039898] sm:text-lg"
                style={{ lineHeight: '5px' }}
              >
                DOWNLOAD
              </p>
              <p className="black-shadow text-center font-gluten text-3xl font-black text-[#039898] sm:text-lg">
                THIS STORY
              </p>
            </div>
            <img src={arrowdownload} alt="Download arrow" className="h-14 w-14" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ChapterCover
