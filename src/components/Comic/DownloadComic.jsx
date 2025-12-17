import { useState } from 'react'
import { TextLogo } from '../../assets'
import { DownloadImg, DownloadArrow } from '../../assets/comics'
import { MdOutlineDownload } from 'react-icons/md'
import { FiYoutube } from 'react-icons/fi'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import checked from '../../assets/checked.png'
import unchecked from '../../assets/unchecked.png'

const stories = [
  { name: '1. Personal initiative' },
  { name: '2. Accurate Thinking' },
  { name: '3. What we learn from mountains' },
  { name: '4. Adversity and defeat' },
  { name: '5. Applied faith principle' },
  { name: '6. Controlled attention principle' },
  { name: '7. Pleasing personality principle' },
  { name: '8. Cooperation Principle' },
  { name: '9. Be honest Principle' },
  { name: '10. Definiteness Purpose' },
  { name: '11. Be Hardworking' },
  { name: '12. Enthusiasm Principle' },
  { name: '13. What we learn from ants' },
  { name: '14. Habit formation principle' },
  { name: '15. What we learn from trees' },
  { name: '16. What we learn from bees' },
  { name: '17. Budgeting time and money' },
  { name: '18. Master Mind' },
  { name: '19. Imagination' },
  { name: '20. What we learn from fish' },
  { name: '21. Self Discipline' },
  { name: '22. What we learn from flowers' },
  { name: '23. Positive Mental Attitude' },
]

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="w-11/12 max-w-lg rounded-3xl bg-[#FFFFFF80] p-5 shadow-lg">
        <div>{children}</div>
      </div>
    </div>
  )
}

const DownloadComic = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedStories, setSelectedStories] = useState([])

  const handleStoryToggle = (storyName) => {
    setSelectedStories((prev) =>
      prev.includes(storyName) ? prev.filter((name) => name !== storyName) : [...prev, storyName],
    )
  }

  const handleSelectAll = () => {
    if (selectedStories.length === stories.length) {
      setSelectedStories([])
    } else {
      setSelectedStories(stories.map((story) => story.name))
    }
  }

  const formatStoryName = (storyName) => {
    const [number, ...nameParts] = storyName.split('. ')
    const formattedName = nameParts.join(' ').toUpperCase()
    return `${number.trim()}- ${formattedName}`
  }

  const handleDownload = () => {
    if (selectedStories.length === 0) {
      alert('Please select at least one story to download!')
      return
    }

    if (selectedStories.length === stories.length) {
      const storyFilePath = 'comics/MK Comics Combined.pdf'
      const filename = 'MK Comics Combined.pdf'
      const link = document.createElement('a')
      link.href = storyFilePath
      link.download = filename
      link.click()
    } else {
      selectedStories.forEach((story) => {
        const formattedStoryName = formatStoryName(story)
        const storyFilePath = `comics/${formattedStoryName}.pdf`
        const filename = `${formattedStoryName}.pdf`
        const link = document.createElement('a')
        link.href = storyFilePath
        link.download = filename
        link.click()
      })
    }
  }

  const handleDownloadClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="relative mx-5 mt-20 grid grid-cols-1 gap-5 rounded-xl border-4 border-b-[12px] border-r-[12px] border-black bg-[#358CDD] p-2 font-gluten text-white shadow-2xl md:mx-10 md:grid-cols-5 md:gap-10 lg:mx-20 lg:gap-16">
      {/* Arrow and Image Section */}
      <div className="relative col-span-2">
        <img
          src={DownloadArrow}
          alt="arrow"
          className="absolute -top-10 w-[8rem] md:-top-20 md:w-[10rem] lg:left-20 lg:w-[15rem]"
        />
        <img src={DownloadImg} alt="download" className="h-full w-full object-contain pl-10" />
      </div>

      {/* Content Section */}
      <div className="col-span-3 px-3 md:pr-5 lg:pr-10">
        <h3 className="py-2 text-right text-4xl lg:pr-20">“Grab your copy”</h3>
        <p className="rounded-2xl bg-white/40 p-7 text-center lg:text-2xl">
          “Join Inayat on a delightful journey of love, learning, and laughter. This heartwarming comic imparts valuable
          lessons of honesty, hard work, and the path to success.”
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col items-center justify-between space-y-4 pt-5 sm:flex-row sm:items-center sm:space-y-0">
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
            {/* YouTube Button */}
            <Link
              to="https://www.youtube.com/playlist?list=PLH7v3u8zaEuoL4Qx4H2MxI24Epo38WBlX"
              className="flex cursor-pointer items-center gap-2 border-2 border-b-4 border-r-4 border-black bg-green-base px-4 py-2 text-xs uppercase duration-300 hover:scale-95 sm:px-6 sm:py-3 sm:text-sm lg:px-8 lg:py-4 lg:text-base"
            >
              Watch on YouTube
              <FiYoutube className="h-6 w-6 sm:h-8 sm:w-8" />
            </Link>

            {/* Download Button */}
            <button
              className="flex cursor-pointer items-center gap-2 border-2 border-b-4 border-r-4 border-black bg-green-base px-4 py-2 text-xs uppercase duration-300 hover:scale-95 sm:px-6 sm:py-3 sm:text-sm lg:px-8 lg:py-4 lg:text-base"
              onClick={handleDownloadClick}
            >
              Download Our Stories
              <MdOutlineDownload className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="rounded-3xl bg-[#358CDD]">
          <div className="rounded-3xl border-[5px] border-white border-opacity-50 p-4">
            <div className="flex items-start justify-between ">
              <img src={TextLogo} alt="textLogo" width="120px" />
              <button className="rounded-full bg-[#C40D4F] p-2 text-white hover:bg-blue-600" onClick={closeModal}>
                <RxCross1 />
              </button>
            </div>

            <div className="rounded-3xl bg-white bg-opacity-20 p-4">
              <div className="black-shadow flex items-center gap-4 text-xl uppercase">
                <label className="flex cursor-pointer items-center gap-2">
                  Select All
                  <img
                    src={selectedStories.length === stories.length ? checked : unchecked}
                    alt="Select All"
                    onClick={handleSelectAll}
                    className="h-6 w-6 cursor-pointer"
                  />
                </label>
              </div>
              {/* scroll bar */}
              <div className="scrollbar-thin  max-h-[calc(100vh-400px)] overflow-y-auto pr-6 pt-4">
                {stories.map((story, index) => (
                  <div
                    key={index}
                    className="ml-4 mt-4 flex items-center justify-between border-b"
                    style={{ borderBottomColor: '#FFFFFF5E' }}
                  >
                    <span className="mb-2">{story.name}</span>
                    <img
                      src={selectedStories.includes(story.name) ? checked : unchecked}
                      alt="checkbox"
                      onClick={() => handleStoryToggle(story.name)}
                      className="mb-2 h-6 w-6 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="mt-4 flex cursor-pointer items-center border-2 border-b-4 border-r-4 border-black bg-green-base pb-2 pl-4 pr-4 pt-2 text-lg uppercase duration-300 hover:scale-95 sm:pl-2 sm:pr-2 sm:text-sm lg:text-base"
                onClick={handleDownload}
              >
                Download Selected
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default DownloadComic
