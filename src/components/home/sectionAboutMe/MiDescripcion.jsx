import { useState } from 'react'
import { miDescripcion } from '../../../helpers/data'
import ArticleDescription from './ArticleDescription'

const MiDescripcion = () => {
  const [verMas, setVerMas] = useState(false)

  const handleVerMas = () => setVerMas(!verMas)
  return (
    <div className="text-fondos flex flex-col gap-4">
      <ArticleDescription obj={miDescripcion.quienSoy} title="Quien soy: " />
      {verMas && (
        <ArticleDescription obj={miDescripcion.proceso} title="proceso: " />
      )}
      <button onClick={handleVerMas} className=" mx-auto block text-blue-400">
        {verMas ? 'Ver menos' : 'Ver mas'}{' '}
        {verMas
          ? (
          <i className="fa-solid fa-arrow-up"></i>
            )
          : (
          <i className="fa-solid fa-arrow-down"></i>
            )}
      </button>
    </div>
  )
}

export default MiDescripcion
