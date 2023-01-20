import Formulario from './Componentes/Formulario'
import Header from './Componentes/Header'
import ListaUsuarios from './Componentes/ListaUsuarios'
import Usuarios from './Componentes/Usuarios'


function App() {
  

  return (
    <div className="container mx-auto mt-20">

    <Header/>
    <div className="mt-12 md:flex">
    <Formulario/>
    <ListaUsuarios/>
    </div>
    </div>
  )
}

export default App
