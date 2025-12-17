import { Link } from 'react-router-dom'
const NavigationButton = ({ children, className, path }) => {
  return (
    <Link
      to={path}
      className={`rounded-md  border-2 border-b-4 border-l-4 border-black px-8 py-3 font-lexend font-semibold text-white
      duration-300 hover:scale-95 md:rounded-xl md:border-4 md:border-b-[6px] md:border-l-[6px] ${className || ''}`}
      onClick={() => setTimeout(window.scroll(0, 0), 100)}
    >
      {children}
    </Link>
  )
}

export default NavigationButton
