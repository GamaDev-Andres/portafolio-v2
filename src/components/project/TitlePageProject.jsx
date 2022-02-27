// eslint-disable-next-line react/prop-types
const TitlePageProject = ({ children }) => {
  return (
    <div className="flex md:flex-col gap-4 md:gap-0">
      <h2 className="md:pt-4 uppercase text-blue-400 font-bold text-2xl md:text-center">
        {children}
      </h2>
      <small className="flex items-center justify-center md:text-center text-fondos ">
        <a href="#">
          <i className="mr-2 text-sm fa-solid fa-link text-fondos"></i> |{' '}
        </a>
        <a href="#">
          <i className="ml-2 fa-brands fa-github"></i>
        </a>
      </small>
    </div>
  )
}

export default TitlePageProject
