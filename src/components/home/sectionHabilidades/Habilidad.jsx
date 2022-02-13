import React from 'react'

const Habilidad = ({ porcentaje, children }) => {
  return (
    <div>
      <span className="font-medium">{children}</span>
      <div className="bg-fondos w-full  flex  rounded-full">
        <div className={`bg-letra  ${porcentaje} rounded-full p-1`}>
          <span className="text-white w-full text-center block ">
            {porcentaje.slice(3, 5)} %
          </span>
        </div>
      </div>
    </div>
  )
}

export default Habilidad
