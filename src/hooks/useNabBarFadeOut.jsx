import { useRef } from 'react'

const useNabBarFadeOut = () => {
  const scrollPosition = useRef(0)

  function navBarScrollController() {
    const navBarFooter = document.querySelector('#navFooter')
    if (window && navBarFooter) {
      if (window.scrollY > scrollPosition.current) {
        navBarFooter.classList.add('translate-y-full')
        navBarFooter.classList.remove('-translate-y-0')
      } else {
        navBarFooter.classList.add('-translate-y-0')
        navBarFooter.classList.remove('translate-y-full')
      }
    }
    scrollPosition.current = window.scrollY
  }
  return { navBarScrollController }
}

export default useNabBarFadeOut
