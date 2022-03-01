import { useEffect } from 'react'
import Footer from './components/Footer'

import AppRouter from './routes/AppRouter'

const App = () => {
  useEffect(() => {
    const isDark = localStorage.getItem('isDark')
    if (isDark === 'true') {
      document.documentElement.classList.add('dark')
    }
    return () => {}
  }, [])

  return (
    <div className="bg-base dark:bg-baseDark transition-colors duration-150 text-letra dark:text-letraDark min-w-screen">
      <div className="grid grid-rows-layout grid-cols-1 max-w-[1256px] min-h-screen mx-auto">
        <AppRouter />
        <Footer />
      </div>
    </div>
  )
}

export default App
