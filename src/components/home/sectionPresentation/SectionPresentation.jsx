import FigureFoto from './FigureFoto'
import ListOfLinksContact from './ListOfLinksContact'
const SectionPresentation = () => {
  return (
    <section className="md:flex md:justify-center md:items-center md:gap-8 min-h-screen block ">
      <FigureFoto />
      <ListOfLinksContact />
    </section>
  )
}

export default SectionPresentation
