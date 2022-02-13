import TitleSection from '../../TitleSection'

const ResumenDescription = () => {
  return (
    <>
      <span className="uppercase font-medium text-xl text-fondos">
        Hola soy
      </span>
      <TitleSection textInSpan={'Andres'}>Gama</TitleSection>
      <p className="whitespace-pre-wrap text-fondos">
        Un
        <span className="text-blue-400 font-medium">
          {' Front-End Web Developer '}
        </span>
        apasionado por el mundo del desarrollo y por crear aplicaciones e
        interfaces que aporten y brinden grandes experiencias.
      </p>
    </>
  )
}

export default ResumenDescription
