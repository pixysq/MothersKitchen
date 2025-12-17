const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border border-b-2 border-r-2  border-black bg-red-base px-5 pb-1 pt-2 font-gluten text-white duration-300 hover:bg-green-base md:border-b-4 md:border-r-4 ${
        className || ''
      }`}
    >
      {children}
    </button>
  )
}

export default Button
