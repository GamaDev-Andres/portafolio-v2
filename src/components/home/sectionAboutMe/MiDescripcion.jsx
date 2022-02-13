import { useState } from 'react'

const MiDescripcion = () => {
  const [verMas, setVerMas] = useState(false)

  const handleVerMas = () => setVerMas(!verMas)
  return (
    <div className="text-fondos flex flex-col gap-4">
      <article className="flex flex-col gap-2">
        <p>
          <span className="text-blue-400 font-medium">Quien soy: </span>
          Mi nombre es Andres Gama, me apasiona encontrar grandes retos que me
          permitan crecer profesional y personalmente, la programación me
          permite enfocarme en esto.Actualmente tengo 21 años y sé que lograre
          que mis conocimientos sean participes de grandes, útiles y reconocidos
          proyectos.
        </p>
        <p>
          En mí podras ver a un chico ansioso por aprender y dispuesto a
          afrontar complejas curvas de aprendizaje y gracias a mi constancia y
          disciplina veras a alguien creciendo constantemente.
        </p>
      </article>
      {verMas && (
        <article className="flex flex-col gap-2">
          <p>
            <span className="text-blue-400 font-medium">Mi proceso: </span>
            Inicie con pequeños cursos y blogs de programación en YouTube,
            posteriormente me di cuenta de que este mundo de verdad me
            interesaba y a pesar de que lo miraba complicado ... debía
            intentarlo entonces me aventuré a profundizar y empecé a conocer
            plataformas como Udemy, Platzi, MDN, etc...
          </p>
          <p>
            He tenido diferentes dificultades en mi proceso, tanto para aprender
            como para aplicar lo aprendido, entre estas dificultades se destaca
            el hecho de enfrentarme a retos desconocidos como pueden ser
            tecnologias nuevas o profundizar más una tecnología para obtener el
            resultado deseado o uno más optimo, al final entendí que lo más
            lindo de esta profesión es que se garantiza un crecimiento
            constante.
          </p>
        </article>
      )}

      <button onClick={handleVerMas} className=" mx-auto block text-blue-400">
        {verMas ? 'Ver menos' : 'Ver mas'}{' '}
        {verMas ? (
          <i className="fa-solid fa-arrow-up"></i>
        ) : (
          <i className="fa-solid fa-arrow-down"></i>
        )}
      </button>
    </div>
  )
}

export default MiDescripcion
