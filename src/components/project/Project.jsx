import React from 'react'
import { useParams } from 'react-router-dom'
import SectionProject from './SectionProject'

const Project = () => {
  const { id } = useParams()
  return (
    <main className="sm:mt-[96px] md:mt-[56px]  px-4 flex flex-col gap-4">
      <div>
        <h2 className="uppercase text-blue-400 font-bold text-3xl md:text-center">
          {id}
        </h2>
        <small className="text-center text-fondos block">
          <a href="#">
            <i className="mr-2 text-sm fa-solid fa-link text-fondos"></i> |{' '}
          </a>
          <a href="#">
            <i className="ml-2 fa-brands fa-github"></i>
          </a>
        </small>
      </div>
      <SectionProject />
      <SectionProject />
      <SectionProject />
    </main>
  )
}

export default Project
