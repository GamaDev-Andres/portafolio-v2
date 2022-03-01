import { Link } from 'react-router-dom'

const NavProject = () => {
  return (
    <nav className="fixed w-full  sm:top-0 sm:left-0 z-10">
      <div className="flex relative justify-center max-w-[1256px] mx-auto bg-base items-center px-4 py-2">
        <Link to="/">
          <h1 className="text-letra font-black text-4xl px-4 text-center">
            GamaDev
          </h1>
        </Link>
        <Link className="absolute top-4 right-4" to="/">
          <i className="sm:mr-2 fa-solid fa-house"></i>
        </Link>
      </div>
    </nav>
  )
}

export default NavProject
