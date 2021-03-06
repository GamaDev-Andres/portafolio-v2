import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import useNavBarFadeOut from '../../hooks/useNavBarFadeOut'
import NavBar from '../NavBar'
import NavBarFooter from '../NavBarFooter'
import SectionAboutMe from './sectionAboutMe/SectionAboutMe'
import SectionHabilidades from './sectionHabilidades/SectionHabilidades'
import SectionPresentation from './sectionPresentation/SectionPresentation'
import SectionProjects from './sectionProjects/SectionProjects'

const Home = () => {
  const { navBarScrollController } = useNavBarFadeOut()

  useEffect(() => {
    if (document.querySelector('#navFooter')) {
      window.addEventListener('scroll', navBarScrollController)
    }
    return () => {
      window.removeEventListener('scroll', navBarScrollController)
    }
  }, [])
  return (
    <>
      <Helmet>
        <title>GamaDev</title>
      </Helmet>
      <NavBar />
      <main className="px-4 flex flex-col gap-4">
        <SectionPresentation />
        <div className="grid grid-cols-1 md:gap-8 md:grid-cols-2">
          <SectionAboutMe />
          <SectionHabilidades />
        </div>
        <SectionProjects />
      </main>
      <NavBarFooter />
    </>
  )
}

export default Home
