import FigureFoto from './FigureFoto'
import ListOfLinksContact from './ListOfLinksContact'
import ResumenDescription from './ResumenDescription'
const SectionPresentation = () => {
  return (
    <section
      id="inicio"
      className="sm:flex sm:justify-center sm:items-center md:gap-8 sm:min-h-screen block "
    >
      <FigureFoto />
      <div className="max-w-2xl">
        <ResumenDescription />
        <ListOfLinksContact />
      </div>
    </section>
  )
}

export default SectionPresentation
