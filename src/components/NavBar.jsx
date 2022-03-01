import { Link } from 'react-router-dom'
import ButtonModeDark from './ButtonModeDark'
import ListOfLinks from './ListOfLinks'

const NavBar = () => {
  return (
    <nav className="sm:sticky w-full sm:top-0 sm:left-0 z-10">
      <div className="transition-colors duration-150 flex justify-center sm:justify-between relative sm:flex-col md:flex-row max-w-[1256px] mx-auto bg-base dark:bg-baseDark items-center px-4 py-2">
        <Link to="/">
          <h1 className="text-letra dark:text-letraDark font-black text-4xl px-4 text-center">
            GamaDev
          </h1>
        </Link>
        <div className="flex items-center dark:text-letraDark  justify-end gap-4">
          <ListOfLinks />
          <ButtonModeDark />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
