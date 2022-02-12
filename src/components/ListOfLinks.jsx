import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ListOfLinks = ({ ViewInPhone = false }) => {
  return (
    <div
      className={`sm:gap-4 flex-grow ${
        ViewInPhone
          ? 'sm:hidden flex w-full justify-between'
          : 'hidden justify-end sm:flex'
      }`}
    >
      <Link
        className="sm:hover:bg-blue-200 flex flex-col sm:flex-row items-center transition-colors duration-300 rounded-lg sm:px-4 sm:py-2 py-0 font-medium"
        to="/"
      >
        <i className="sm:mr-2 fa-solid fa-house"></i>
        <span className={`${ViewInPhone && 'text-xs'}`}>inicio</span>
      </Link>
      <Link
        className="sm:hover:bg-blue-200  flex flex-col sm:flex-row items-center transition-colors duration-300 rounded-lg sm:px-4 sm:py-2 py-0 font-medium"
        to="#sobremi"
      >
        <i className="sm:mr-2 fa-solid fa-user"></i>
        <span className={`${ViewInPhone && 'text-xs'}`}>sobremi</span>
      </Link>
      <Link
        className="sm:hover:bg-blue-200  flex flex-col sm:flex-row items-center transition-colors duration-300 rounded-lg sm:px-4 sm:py-2 py-0 font-medium"
        to="#tecnologias"
      >
        <i className="sm:mr-2 fa-solid fa-laptop-code"></i>
        <span className={`${ViewInPhone && 'text-xs'}`}>tecnologias</span>
      </Link>
      <Link
        className="sm:hover:bg-blue-200  flex flex-col sm:flex-row items-center transition-colors duration-300 rounded-lg sm:px-4 sm:py-2 py-0 font-medium"
        to="#proyectos"
      >
        <i className="sm:mr-2 fa-solid fa-briefcase"></i>
        <span className={`${ViewInPhone && 'text-xs'}`}>proyectos</span>
      </Link>
    </div>
  )
}
ListOfLinks.propTypes = {
  ViewInPhone: propTypes.bool
}
export default ListOfLinks
