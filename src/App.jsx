import Footer from './components/Footer'

import AppRouter from './routes/AppRouter'

const App = () => {
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
