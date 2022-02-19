import { useEffect } from 'react'
import Footer from './components/Footer'
import useNabBarFadeOut from './hooks/useNabBarFadeOut'

import AppRouter from './routes/AppRouter'

const App = () => {
  const { navBarScrollController } = useNabBarFadeOut()

  useEffect(() => {
    if (document.querySelector('#navFooter')) {
      window.addEventListener('scroll', navBarScrollController)
    }
    return () => {
      window.removeEventListener('scroll', navBarScrollController)
    }
  }, [])

  return (
    <div className="bg-base dark:bg-baseDark text-letra min-w-screen">
      <div className="grid grid-rows-layout grid-cols-1 max-w-[1256px] min-h-screen mx-auto">
        <AppRouter />
        <Footer />
      </div>
    </div>
  )
}

export default App
