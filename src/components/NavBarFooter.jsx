import ListOfLinks from './ListOfLinks'

const NavBarFooter = () => {
  return (
    <nav
      id="navFooter"
      className="flex w-full md:hidden fixed bottom-0 transition-transform duration-500 px-4 py-2 border-t z-10 bg-base border-bordes"
    >
      <ListOfLinks ViewInPhone={true} />
    </nav>
  )
}

export default NavBarFooter
