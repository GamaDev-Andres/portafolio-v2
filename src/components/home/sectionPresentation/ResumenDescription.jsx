import { miDescripcion } from '../../../helpers/data'

const ResumenDescription = () => {
  return (
    <>
      <span className="uppercase font-medium text-xl text-fondos">
        Hola soy
      </span>
      <h2 className="my-4 uppercase font-bold text-3xl ">
        <span className="text-blue-400">andres</span> gama
      </h2>
      <p className="whitespace-pre-wrap text-fondos">
        Un
        <span className="text-blue-400 font-medium">
          {' Front-End Web Developer '}
        </span>
        {miDescripcion.presentacion}
      </p>
    </>
  )
}

export default ResumenDescription
