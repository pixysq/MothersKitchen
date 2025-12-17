const ImageBox = ({ image, className, clickable, boxClassName }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border-2 border-black shadow-2xl before:absolute before:h-full before:w-full before:rounded-lg before:border before:border-white md:rounded-[2rem] md:border-4 md:border-b-8 md:border-r-8 before:md:rounded-[1.7rem] before:md:border-2 ${
        clickable ? 'cursor-pointer duration-300 hover:scale-95' : ''
      } ${boxClassName}`}
    >
      <img src={image} alt="img" className={`m-0 h-full w-full object-contain ${className}`} />
    </div>
  )
}

export default ImageBox
