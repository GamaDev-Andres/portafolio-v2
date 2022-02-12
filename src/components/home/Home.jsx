import SectionAboutMe from './SectionAboutMe'
import SectionPresentation from './sectionPresentation/SectionPresentation'
import SectionProjects from './SectionProjects'
import SectionTechs from './SectionTechs'

const Home = () => {
  return (
    <main className="px-4">
      <SectionPresentation />
      <SectionAboutMe />
      <SectionTechs />
      <SectionProjects />
    </main>
  )
}

export default Home
