const FarmerCard = ({ photo, name, village }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={photo} alt="Farmer" className="w-[250px] rounded-full sm:w-32 md:w-40 lg:w-48" />
      <span className="mt-2 text-center font-gluten text-lg font-semibold" style={{ color: '#5A230F' }}>
        {name}
      </span>
      <span className="text-center font-lexend text-lg sm:text-lg md:text-lg" style={{ color: 'black' }}>
        Village:
      </span>
      <span className="text-center font-lexend text-lg sm:text-lg md:text-lg" style={{ color: 'black' }}>
        {village}
      </span>
    </div>
  )
}

export default FarmerCard
