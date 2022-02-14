import { Link } from 'react-router-dom'
import ListOfLinks from './ListOfLinks'

const NavBar = () => {
  return (
    <nav className="sm:fixed w-full  sm:top-0 sm:left-0">
      <div className="flex justify-center sm:justify-between flex-col md:flex-row max-w-[1256px] z-10 mx-auto bg-base items-center px-4 py-2">
        <Link to="/">
          <h1 className="text-letra font-black text-4xl px-4 text-center">
            GamaDev
          </h1>
        </Link>
        <ListOfLinks />
      </div>
    </nav>
  )
}

export default NavBar
