import PropTypes from 'prop-types'
import { useState } from 'react'
import { ModalPortal } from '../modal/Modal'
const SectionInProject = ({ titulo, descripcion, arrImgs }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const closeModal = () => {
    setIsOpenModal(false)
  }
  return (
    <section className="text-fondos">
      <h3 className="uppercase text-blue-400 font-medium">{titulo}</h3>
      <p>{descripcion}</p>
      <div className="flex flex-wrap pt-4 gap-4 items-center">
        {arrImgs.map((el) => (
          <img
            onClick={() => setIsOpenModal(el)}
            className="object-cover max-h-[400px]  mx-auto ring-1"
            src={el}
            alt="screenshot-proyecto"
            key={el}
          />
        ))}
      </div>
      {isOpenModal && (
        <ModalPortal isOpen={isOpenModal} closeModal={closeModal}>
          <img
            className="object-cover max-h-[80vh] max-w-full mx-auto ring-1"
            src={isOpenModal}
            alt="modal-screenshot-proyecto"
          />
        </ModalPortal>
      )}
    </section>
  )
}
SectionInProject.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  arrImgs: PropTypes.array.isRequired
}
export default SectionInProject
