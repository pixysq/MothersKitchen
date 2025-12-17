const BorderDiv = ({ children, className }) => {
  return (
    <div
      className={`relative rounded-2xl border-4 border-b-8 border-r-8 border-t-8 border-black shadow-2xl before:absolute before:left-[0.8px] before:top-[0.8px] before:h-full before:w-full before:rounded-[0.5rem] before:border-[3px] before:border-white md:rounded-[2rem] md:border-8 md:border-r-[12px] md:border-t-[12px] before:md:rounded-[1.4rem] ${className}`}
    >
      {children}
    </div>
  )
}

export default BorderDiv
