import PropTypes from 'prop-types'

const Funcionalidades = ({ proyecto }) => {
  const formatId = (idNoFormat) => {
    return idNoFormat.split(' ').join('')
  }
  return (
    <div>
      <h2 className="font-bold text-letra text-lg">Funcionalidades</h2>
      <ul className="pl-4">
        {proyecto.detalles.map((el) => (
          <li className="list-disc" key={el.titulo}>
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
