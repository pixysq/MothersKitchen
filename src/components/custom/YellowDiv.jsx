const YellowDiv = ({ children, className }) => {
  return (
    <div
      className={`relative rounded-3xl border-4 border-b-[12px] border-r-[12px] border-black bg-yellow-dark shadow-2xl before:absolute before:left-[0.8px] before:top-[0.8px] before:h-full before:w-full before:rounded-2xl before:rounded-tl-2xl before:border-[3px] before:border-white ${className}`}
    >
      {children}
    </div>
  )
}

export default YellowDiv
