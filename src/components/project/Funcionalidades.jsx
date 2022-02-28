import PropTypes from 'prop-types'

const Funcionalidades = ({ proyecto }) => {
  return (
    <div>
      <h2 className="font-bold text-letra text-lg">Funcionalidades</h2>
      <ul className="pl-4">
        {proyecto.detalles.map((el) => (
          <li className="list-disc" key={el.titulo}>
            <a href="#">{el.titulo}</a>
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
