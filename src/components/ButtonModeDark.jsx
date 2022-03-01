/* eslint-disable multiline-ternary */
import { useState } from 'react'

const ButtonModeDark = () => {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem('isDark') || 'false'
  )
  const toogleModeDark = () => {
    localStorage.setItem('isDark', isDark === 'true' ? 'false' : 'true')
    setIsDark(isDark === 'true' ? 'false' : 'true')
    document.documentElement.classList.toggle('dark')
  }

  return (
    <button
      onClick={toogleModeDark}
      className=" z-20 absolute top-2 bottom-2 right-4 sm:static "
    >
      {isDark === 'false' ? (
        <i className="w-5 h-5 text-black fa-solid fa-moon"></i>
      ) : (
        <i className="text-letra-dark w-5 h-5 fa-solid fa-sun"></i>
      )}
    </button>
  )
}

export default ButtonModeDark
