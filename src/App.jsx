import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import DetalleBlog from './pages/Home/DetalleBlog'
import Menu from './components/Header'


// Componente de marcador de posición
const Prueba = ({ message }) => {
  return <div>{message}</div>;
};

function App() {
  
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/blogs/:id' element={<DetalleBlog/>} />      
        <Route path='/crear-blog' element={<Prueba message="(falta hacer el Componente )" />} />  
        <Route path='/mis-blogs' element={<Prueba message="(falta hacer el Componente )" />} />   
        <Route path='/login' element={<Prueba message="(falta hacer el Componente )" />} />  
        <Route path='/register' element={<Prueba message="(falta hacer el Componente )" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
