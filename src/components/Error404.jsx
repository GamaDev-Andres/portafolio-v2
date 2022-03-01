import { Link } from 'react-router-dom'
import NavProject from './project/NavProject'

const Error404 = () => {
  return (
    <>
      <NavProject />
      <div className=" flex items-center justify-center flex-col gap-4 p-2">
        <div className="p-4 border border-blue-500 shadow-md shadow-blue-300">
          <h2 className="text-blue-400 font-bold text-2xl">¡Error 404!</h2>
          <p>La página a la que intento acceder no existe.</p>
          <Link
            to="/"
            className="block py-2 px-4 rounded-md text-center ring-1 mt-4"
          >
            Página principal
          </Link>
        </div>
      </div>
    </>
  )
}

export default Error404
