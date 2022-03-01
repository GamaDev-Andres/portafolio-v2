// eslint-disable-next-line react/prop-types
import PropTypes from 'prop-types'

const TitlePageProject = ({ titulo, url, codigo }) => {
  return (
    <div className="flex md:flex-col gap-4 md:gap-0">
      <h2 className="md:pt-4 uppercase text-blue-400 font-bold text-2xl md:text-center">
        {titulo}
      </h2>
      <small className="flex items-center justify-center md:text-center text-fondos ">
        <a target="_blank" href={url} rel="noreferrer">
          <i className="mr-2 text-sm fa-solid fa-link text-fondos"></i> |
        </a>
        <a target="_blank" href={codigo} rel="noreferrer">
          <i className="ml-2 fa-brands fa-github"></i>
        </a>
      </small>
    </div>
  )
}
TitlePageProject.propTypes = {
  url: PropTypes.string.isRequired,
  codigo: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired
}
export default TitlePageProject
