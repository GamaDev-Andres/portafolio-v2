import { Link } from 'react-router-dom'
const CardProject = ({ project }) => {
  const { poster, descripcion, tecnologias, titulo, url } = project
  return (
    <div className=" shadow-blue-200 shadow-md rounded-2xl bg-white text-fondos">
      <a target="_blank" href={url} className="w-full block aspect-video">
        <img
          className="w-full aspect-video object-cover"
          src={poster}
          alt="project"
        />
      </a>
      <div className="px-4 pb-4 ">
        <a target="_blank" href={url}>
          <h3 className="font-bold text-blue-400 text-center text-xl m-2">
            {titulo}
          </h3>
        </a>
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
        <Link
          className=" hover:shadow-lg hover:shadow-blue-300 text-sm text-center mx-auto block mt-4 border border-solid shadow-blue-200 shadow-md border-blue-400 px-6 py-2 rounded-full"
          to="/project/barberapp"
          rel="noreferrer"
        >
          Ver más detalles
        </Link>
      </div>
    </div>
  )
}

export default CardProject
