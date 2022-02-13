import TitleSection from '../../TitleSection'
import MiDescripcion from './MiDescripcion'

const SectionAboutMe = () => {
  return (
    <section>
      <TitleSection textInSpan={'mi'} unOrder={true}>
        sobre
      </TitleSection>
      <MiDescripcion />
    </section>
  )
}

export default SectionAboutMe
