import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ListOfTecnologias from './ListOfTecnologias'
import TitleAndLinksProject from './TitleAndLinksProject'
const CardProject = ({ project, withDetails = false }) => {
  const { poster, descripcion, tecnologias, titulo, url } = project
  return (
    <div className=" shadow-blue-200 shadow-md rounded-2xl rounded-t-none transition-colors duration-150 bg-white dark:bg-baseDark text-fondos">
      <a
        target="_blank"
        href={url}
        className="w-full block aspect-video"
        rel="noreferrer"
      >
        <img
          className="w-full aspect-video object-cover"
          src={poster}
          alt="project"
        />
      </a>
      <div className="px-4 pb-4">
        <TitleAndLinksProject project={project} />
        <div>
          <h3 className=" dark:text-letraDark text-letra font-medium">
            Descripción
          </h3>

          <p>{descripcion}</p>
        </div>
        <ListOfTecnologias tecnologias={tecnologias} />
        {withDetails && (
          <Link
            className=" hover:shadow-lg hover:shadow-blue-300 text-sm text-center mx-auto block mt-4 border border-solid shadow-blue-200 shadow-md border-blue-400 px-6 py-2 rounded-full"
            to={`/project/${titulo}`}
            rel="noreferrer"
          >
            Ver más detalles
          </Link>
        )}
      </div>
    </div>
  )
}
CardProject.propTypes = {
  project: PropTypes.object.isRequired,
  withDetails: PropTypes.bool
}
export default CardProject
