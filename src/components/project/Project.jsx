import { useParams } from 'react-router-dom'
import { proyectos } from '../../helpers/data'
import NavProject from './NavProject'
import SectionInProject from './SectionInProject'
import TitlePageProject from './TitlePageProject'

const Project = () => {
  const { id } = useParams()
  const proyecto = proyectos.find((el) => id === el.titulo.toLowerCase())
  return (
    <>
      <NavProject />
      <main className="mt-[56px]  px-4 flex flex-col gap-4">
        <TitlePageProject>{id}</TitlePageProject>
        <SectionInProject
          titulo={'Descripcion'}
          descripcion={proyecto.descripcion}
          arrImgs={[]}
        />
        <SectionInProject
          titulo={'Agregar cita'}
          descripcion={'se puede agregar cita'}
          arrImgs={[]}
        />
        <SectionInProject
          titulo={'prueba'}
          descripcion={proyecto.descripcion}
          arrImgs={[]}
        />
      </main>
    </>
  )
}

export default Project
