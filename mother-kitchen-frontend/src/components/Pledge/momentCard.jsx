import React from 'react'
import momentsData from './momentsData'

const Moments = () => {
  return (
    <div className="flex flex-col gap-8 p-6 md:p-12">
      {momentsData.map((moment, index) => (
        <div
          key={index}
          className={`flex flex-col items-center gap-6 md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
        >
          {/* Mobile-only title */}
          <h2 className="w-full text-center font-gluten text-3xl font-bold md:hidden" style={{ color: '#171717' }}>
            {moment.title1} <span style={{ color: `${moment.title2Color}` }}>{moment.title2}</span>
          </h2>

          {/* Image Section - Full width on mobile */}
          <div className={`-mx-6 w-screen md:mx-0 md:w-1/2 ${index % 2 === 0 ? 'md:-mr-12' : 'md:-ml-12'}`}>
            <img src={moment.photo} alt={`Moment ${index + 1}`} className="h-auto w-full rounded-none md:rounded-lg" />
          </div>

          {/* Text Section */}
          <div className="flex w-full flex-col gap-4 md:px-6 md:w-1/2 md:px-0">
            {/* Desktop-only title */}
            <h2 className="hidden font-gluten text-3xl font-bold md:block md:text-5xl" style={{ color: '#171717' }}>
              {moment.title1} <span style={{ color: `${moment.title2Color}` }}>{moment.title2}</span>
            </h2>

            {/* Single description element with responsive visibility */}
            <p className="font-lexend  text-sm font-semibold md:text-base" style={{ color: '#000000' }}>
              {moment.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Moments
