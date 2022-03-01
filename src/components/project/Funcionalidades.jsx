import PropTypes from 'prop-types'

const Funcionalidades = ({ proyecto }) => {
  const formatId = (idNoFormat) => {
    return idNoFormat.split(' ').join('')
  }
  return (
    <div>
      <h2 className="font-bold text-letra dark:text-letraDark text-lg">
        Funcionalidades
      </h2>
      <ul className="pl-4 inline-block">
        {proyecto.detalles.map((el) => (
          <li className="list-disc hover:text-blue-400 " key={el.titulo}>
            <a className="underline" href={`#${formatId(el.titulo)}`}>
              {el.titulo}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

Funcionalidades.propTypes = {
  proyecto: PropTypes.object.isRequired
}
export default Funcionalidades
