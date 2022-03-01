import TitleSection from '../../TitleSection'
import MiDescripcion from './MiDescripcion'

const SectionAboutMe = () => {
  return (
    <section id="sobremi" className="sm:scroll-m-24 md:scroll-m-14">
      <TitleSection textInSpan={'mi'} unOrder={true}>
        sobre
      </TitleSection>
      <MiDescripcion />
    </section>
  )
}

export default SectionAboutMe
