import ReactDOM from 'react-dom'

export const ModalPortal = ({ children, closeModal }) => {
  return ReactDOM.createPortal(
    <div
      className="flex items-center fixed justify-center z-50 w-screen h-screen bg-fondoModal"
      onClick={() => closeModal()}
    >
      <div
        className="relative flex items-center justify-center mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="absolute top-2 right-2 cursor-pointer mx-auto p-1 text-red-600"
          title="cerrar"
          onClick={closeModal}
        >
          <i className="fas fa-times-circle"></i>
        </span>
        {children}
      </div>
    </div>,
    document.getElementById('root-modal')
  )
}
