import PropTypes from 'prop-types'

const ListOfTecnologias = ({ tecnologias }) => {
  return (
    <div>
      <h3 className="text-letra font-medium dark:text-letraDark">
        Tecnologias implementadas
      </h3>
      <ul className="flex gap-2 flex-wrap py-2">
        {tecnologias.map((el) => (
          <li key={el} className="px-2 py-1 border border-bordes rounded-full">
            <span>{el}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
ListOfTecnologias.propTypes = {
  tecnologias: PropTypes.array.isRequired
}
export default ListOfTecnologias
