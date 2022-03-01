const ListOfLinksContact = () => {
  return (
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
        <span className="text-xs">Github</span>
      </a>
      <a
        target="_blank"
        className="p-2 flex flex-col justify-center items-center shadow-md shadow-blue-200 border border-solid border-blue-100"
        href="https://www.linkedin.com/in/andres-gama/"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin"></i>
        <span className="text-xs">LinkedIn</span>
      </a>
    </div>
  )
}

export default ListOfLinksContact
