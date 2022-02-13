import SectionAboutMe from './sectionAboutMe/SectionAboutMe'
import SectionHabilidades from './sectionHabilidades/SectionHabilidades'
import SectionPresentation from './sectionPresentation/SectionPresentation'
import SectionProjects from './SectionProjects'

const Home = () => {
  return (
    <main className="px-4 flex flex-col gap-4">
      <SectionPresentation />
      <div className="grid grid-cols-1 md:gap-8 md:grid-cols-2">
        <SectionAboutMe />
        <SectionHabilidades />
      </div>
      <SectionProjects />
    </main>
  )
}

export default Home
