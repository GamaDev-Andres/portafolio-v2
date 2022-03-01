import TitleSection from '../../TitleSection'

import ListOfCardsProjects from './ListOfCardsProjects'
const SectionProjects = () => {
  return (
    <section id="proyectos" className="sm:scroll-m-24 md:scroll-m-14">
      <TitleSection textInSpan={'proyectos'} unOrder={true}>
        mis
      </TitleSection>
      <ListOfCardsProjects />
    </section>
  )
}

export default SectionProjects
