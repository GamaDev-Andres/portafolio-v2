import { Navigate, useParams } from 'react-router-dom'
import { proyectos } from '../../helpers/data'
import Funcionalidades from './Funcionalidades'
import NavProject from './NavProject'
import SectionInProject from './SectionInProject'
import TitlePageProject from './TitlePageProject'
import { Helmet } from 'react-helmet-async'

const Project = () => {
  const { id } = useParams()
  const proyecto = proyectos.find(
    (el) => id.toLowerCase() === el.titulo.toLowerCase()
  )
  if (!proyecto) {
    return <Navigate to="/" />
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`GamaDev | ${proyecto.titulo}`}</title>
      </Helmet>
      <NavProject />
      <main className="mt-[56px]  px-4 flex flex-col gap-4">
        <TitlePageProject
          titulo={id}
          url={proyecto.url}
          codigo={proyecto.codigo}
        />
        <Funcionalidades proyecto={proyecto} />
        <div className="grid grid-cols-1 gap-4">
          {proyecto.detalles.map((detalle) => (
            <SectionInProject
              key={detalle.titulo}
              titulo={detalle.titulo}
              descripcion={detalle.data}
              arrImgs={detalle.fotos}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default Project
