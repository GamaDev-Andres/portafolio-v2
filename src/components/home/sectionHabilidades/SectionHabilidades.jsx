import TitleSection from '../../TitleSection'
import Habilidad from './Habilidad'

const SectionHabilidades = () => {
  return (
    <section>
      <TitleSection textInSpan={'Mis'}>Habilidades</TitleSection>
      <div className="flex flex-col gap-2">
        <article className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <Habilidad porcentaje="w-[80%]">Desarrollo front-end</Habilidad>
            <Habilidad porcentaje="w-[70%]">Desarrollo full-stack</Habilidad>
            <Habilidad porcentaje="w-[70%]">Desarrollo web</Habilidad>
            <Habilidad porcentaje="w-[60%]">Desarrollo back-end</Habilidad>
          </div>
        </article>
      </div>
    </section>
  )
}

export default SectionHabilidades
