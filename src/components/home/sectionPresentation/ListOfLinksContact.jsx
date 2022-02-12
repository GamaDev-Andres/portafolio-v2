const ListOfLinksContact = () => {
  return (
    <div className="max-w-2xl">
      <span className="uppercase font-medium text-xl text-fondos">
        Hola soy
      </span>
      <h2 className="my-4 uppercase font-bold text-3xl">
        <span className="text-blue-400">Andres</span> Gama
      </h2>
      <p className="whitespace-pre-wrap text-fondos">
        Un
        <span className="text-blue-400 font-medium">
          {' Front-End Web Developer '}
        </span>
        apasionado por el mundo del desarrollo y por crear aplicaciones e
        interfaces que aporten y brinden grandes experiencias.
      </p>
      <div className="py-4 gap-4 flex justify-start items-center flex-wrap">
        <a
          target="_blank"
          className=" text-sm border border-solid shadow-blue-200 shadow-lg border-blue-400 px-6 py-2 rounded-full"
          href="https://drive.google.com/file/d/1IIUutqCGZL_KSN7NqE-JdRYQl_6Qaqhd/view"
          rel="noreferrer"
        >
          Resumé
        </a>

        <a
          target="_blank"
          className="p-2 flex flex-col justify-center items-center shadow-md shadow-blue-200 border border-solid border-blue-100"
          href="https://github.com/GamaDev-Andres"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
          <span className="ml-2 text-xs">Github</span>
        </a>
        <a
          target="_blank"
          className="p-2 flex flex-col justify-center items-center shadow-md shadow-blue-200 border border-solid border-blue-100"
          href="https://www.linkedin.com/in/andres-gama/"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
          <span className="ml-2 text-xs">LinkedIn</span>
        </a>
      </div>
    </div>
  )
}

export default ListOfLinksContact
