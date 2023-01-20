import Usuarios from "./Usuarios";


export default function ListaUsuarios() {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
    <h2 className='font-black text-3xl text-center'>Listado Vehiculos</h2>
    <p className='text-xl mt-5 mb-10 text-center'>
      Administrar los {' '}
      <span className='text-green-700 font-bold'>Vehiculos</span>
    </p>

    <Usuarios/>
    <Usuarios/>
    <Usuarios/>
    <Usuarios/>
    
   </div>
  )
}
