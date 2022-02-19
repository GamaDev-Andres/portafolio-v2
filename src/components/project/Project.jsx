import { Link, useParams } from 'react-router-dom'
import { proyectos } from '../../helpers/data'
import SectionProject from './SectionProject'

const Project = () => {
  const { id } = useParams()
  const proyecto = proyectos.find((el) => id === el.titulo.toLowerCase())
  console.log(proyecto)
  return (
    <>
      <nav className="fixed w-full  sm:top-0 sm:left-0 z-10">
        <div className="flex justify-center max-w-[1256px] mx-auto bg-base items-center px-4 py-2">
          <Link to="/">
            <h1 className="text-letra font-black text-4xl px-4 text-center">
              GamaDev
            </h1>
          </Link>
        </div>
        <Link className="absolute top-4 right-4" to="/">
          <i className="sm:mr-2 fa-solid fa-house"></i>
        </Link>
      </nav>
      <main className="mt-[56px]  px-4 flex flex-col gap-4">
        <div className="flex md:flex-col gap-4 md:gap-0">
          <h2 className="md:pt-4 uppercase text-blue-400 font-bold text-2xl md:text-center">
            {id}
          </h2>
          <small className="flex items-center justify-center md:text-center text-fondos ">
            <a href="#">
              <i className="mr-2 text-sm fa-solid fa-link text-fondos"></i> |{' '}
            </a>
            <a href="#">
              <i className="ml-2 fa-brands fa-github"></i>
            </a>
          </small>
        </div>
        <SectionProject
          titulo={'Descripcion'}
          descripcion={proyecto.descripcion}
          arrImgs={[]}
        />
        <SectionProject
          titulo={'Agregar cita'}
          descripcion={'se puede agregar cita'}
          arrImgs={[]}
        />
        <SectionProject
          titulo={'prueba'}
          descripcion={proyecto.descripcion}
          arrImgs={[]}
        />
      </main>
    </>
  )
}

export default Project
