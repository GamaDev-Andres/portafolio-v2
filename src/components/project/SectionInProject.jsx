import PropTypes from 'prop-types'
const SectionInProject = ({ titulo, descripcion, arrImgs }) => {
  return (
    <section className="text-fondos">
      <h3 className="uppercase text-blue-400 font-medium">{titulo}</h3>
      <p>{descripcion}</p>
      <div>
        {arrImgs.map((el) => (
          <img src="#" alt="#" key={el} />
        ))}
      </div>
    </section>
  )
}
SectionInProject.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  arrImgs: PropTypes.array.isRequired
}
export default SectionInProject
