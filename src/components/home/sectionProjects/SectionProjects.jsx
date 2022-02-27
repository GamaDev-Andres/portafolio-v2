import TitleSection from '../../TitleSection'

import ListOfCardsProjects from './ListOfCardsProjects'
const SectionProjects = () => {
  return (
    <section id="proyectos">
      <TitleSection textInSpan={'proyectos'} unOrder={true}>
        mis
      </TitleSection>
      <ListOfCardsProjects />
    </section>
  )
}

export default SectionProjects
