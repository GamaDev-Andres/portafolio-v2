import { proyectos } from '../../../helpers/data'
import CardProject from './CardProject'

const ListOfCardsProjects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-layoutCards gap-8">
      {proyectos.map((el) => (
        <CardProject
          project={el}
          key={el.titulo}
          withDetails={el.titulo === 'BARBERAPP' || el.titulo === 'NETBOOK'}
        />
      ))}
    </div>
  )
}

export default ListOfCardsProjects
