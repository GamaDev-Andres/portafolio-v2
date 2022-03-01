import ListOfLinks from './ListOfLinks'

const NavBarFooter = () => {
  return (
    <nav
      id="navFooter"
      className="bg-base dark:bg-baseDark flex w-full sm:hidden fixed bottom-0 transition-transform duration-500 px-4 py-2 border-t z-10  border-bordes"
    >
      <ListOfLinks ViewInPhone={true} />
    </nav>
  )
}

export default NavBarFooter
