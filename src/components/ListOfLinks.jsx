import propTypes from 'prop-types'

const ListOfLinks = ({ ViewInPhone = false }) => {
  return (
    <div
      className={`sm:gap-4 flex-grow sm:flex-grow-0 ${
        ViewInPhone
          ? 'sm:hidden flex w-full justify-between'
          : 'hidden justify-end sm:flex'
      }`}
    >
      <a
        className="sm:hover:bg-blue-200 flex flex-col sm:flex-row items-center transition-colors duration-300 rounded-lg sm:px-4 sm:py-2 py-0 font-medium"
        href="/#inicio"
      >
        <i className="sm:mr-2 fa-solid fa-house"></i>
        <span className={`${ViewInPhone && 'text-xs'}`}>inicio</span>
      </a>
      <a
        className="sm:hover:bg-blue-200  flex flex-col sm:flex-row items-center transition-colors duration-300 rounded-lg sm:px-4 sm:py-2 py-0 font-medium"
        href="/#sobremi"
      >
        <i className="sm:mr-2 fa-solid fa-user"></i>
        <span className={`${ViewInPhone && 'text-xs'}`}>sobre mí</span>
      </a>
      <a
        className="sm:hover:bg-blue-200  flex flex-col sm:flex-row items-center transition-colors duration-300 rounded-lg sm:px-4 sm:py-2 py-0 font-medium"
        href="/#habilidades"
      >
        <i className="sm:mr-2 fa-solid fa-laptop-code"></i>
        <span className={`${ViewInPhone && 'text-xs'}`}>habilidades</span>
      </a>
      <a
        className="sm:hover:bg-blue-200  flex flex-col sm:flex-row items-center transition-colors duration-300 rounded-lg sm:px-4 sm:py-2 py-0 font-medium"
        href="/#proyectos"
      >
        <i className="sm:mr-2 fa-solid fa-briefcase"></i>
        <span className={`${ViewInPhone && 'text-xs'}`}>proyectos</span>
      </a>
    </div>
  )
}
ListOfLinks.propTypes = {
  ViewInPhone: propTypes.bool
}
export default ListOfLinks
