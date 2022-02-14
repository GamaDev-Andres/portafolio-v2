import { proyectos } from '../../helpers/data'
import TitleSection from '../TitleSection'

import CardProject from './CardProject'
const SectionProjects = () => {
  return (
    <section id="proyectos">
      <TitleSection textInSpan={'proyectos'} unOrder={true}>
        mis
      </TitleSection>
      <div className="grid grid-cols-1 md:grid-cols-layoutCards gap-8">
        {proyectos.map((el) => (
          <CardProject project={el} />
        ))}
      </div>
    </section>
  )
}

export default SectionProjects
