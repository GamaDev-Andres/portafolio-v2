import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const CardProject = ({ project, withDetails = false }) => {
  const { poster, descripcion, tecnologias, titulo, url, codigo } = project
  return (
    <div className=" shadow-blue-200 shadow-md rounded-2xl bg-white text-fondos">
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
        <div className="relative py-2 flex justify-center items-center">
          <a
            className="font-bold text-blue-400 text-center mx-auto text-xl"
            target="_blank"
            href={url}
            rel="noreferrer"
          >
            {titulo} <i className="text-sm fa-solid fa-link text-fondos"></i>
          </a>
          <a
            target="_blank"
            className="absolute top-2 right-0 text-xl block text-letra"
            href={codigo}
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div>
          <h3 className="text-letra font-medium">Descripción</h3>

          <p>{descripcion}</p>
        </div>
        <div>
          <h3 className="text-letra font-medium">Tecnologias implementadas</h3>
          <ul className="flex gap-2 flex-wrap py-2">
            {tecnologias.map((el) => (
              <li
                key={el}
                className="px-2 py-1 border border-bordes rounded-full"
              >
                <span>{el}</span>
              </li>
            ))}
          </ul>
        </div>
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
