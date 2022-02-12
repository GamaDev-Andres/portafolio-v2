import { Route, Routes } from 'react-router-dom'
import Error404 from '../components/Error404'
import Home from '../components/home/Home'
import Project from '../components/project/Project'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<Project />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default AppRouter
