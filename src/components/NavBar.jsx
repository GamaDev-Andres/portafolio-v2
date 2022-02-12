import { Link } from 'react-router-dom'
import ListOfLinks from './ListOfLinks'

const NavBar = () => {
  return (
    <nav className="flex justify-center sm:justify-between flex-col md:flex-row sm:fixed sm:left-0 sm:right-0 sm:top-0 z-10 bg-base items-center px-4 py-2">
      <Link to="/">
        <h1 className="text-letra font-black text-4xl px-4 text-center">
          GamaDev
        </h1>
      </Link>
      <ListOfLinks />
    </nav>
  )
}

export default NavBar
