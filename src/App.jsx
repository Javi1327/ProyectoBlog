import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import DetalleBlog from './pages/Home/DetalleBlog'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />  {/*todos los blogs / consultar a todos los que esten habilitados*/}
    <Route path='/blogs/:id' element={<DetalleBlog/>} /> {/*ver el detalle de 1 blog / consultar 1*/}

    </Routes>
    </BrowserRouter>
  )
}

export default App
