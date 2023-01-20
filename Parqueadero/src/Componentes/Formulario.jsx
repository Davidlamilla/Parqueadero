import { useState, useEffect } from "react";

const Formulario = () => {
  

  //setNombre('Hook')

  //console.log(nombre);


  return (
   <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Vehiculo</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Veiculo y {' '}
        <span className="text-green-700 font-bold">Administralos</span>
      </p>
    <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
      <div className="mb-5">
        <label htmlFor="Carro" className="block text-gray-700 uppercase font-bold">
            Placas del Veiculo:
        </label>
        <input id="Vehiculo" className="border-2 w-full p-2 placeholder-gray-400 rounded-md" />
      </div>  
      <div className="mb-5">
      <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietaetario del Vehiculo:
          </label>
          <input id="propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          type="text" placeholder="Nombre del propietario"/>
      </div>
      
      <div className="mb-5">
          
          <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">
            Fecha de Ingreso:
          </label>
          <input id="fecha" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          type="date"/>
          
        </div>

        <div className="mb-5">
          
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Hora de Ingreso:
          </label>
          <textarea className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          id="sintomas"  placeholder="--- --- ----" />
          
        </div>

        <input type="submit" className="bg-green-700 w-full p-3
         text-white uppercase font-bold hover:bg-green-700 cursor-pointer transition-colors" 
         value="Entrar"/>

    </form>
    
   </div>
  )
}

export default Formulario;