import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {AuthProvider} from './context/AuthContext'
import Home from './pages/Home/Home'
import Header from './components/Header'
import DetalleBlog from './pages/Home/DetalleBlog'
import CrearBlog from './pages/CrearBlog/CrearBlog'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import MisBlogs from './pages/mis-blogs/MisBlogs'
import ModificarBlog from './pages/modificar-blog/ModificarBlog'
 

function App() {
  
  return (
    <AuthProvider> 
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/blogs/:id' element={<DetalleBlog/>} />      
          <Route path='/crear-blog' element={<CrearBlog/>} />  
          <Route path='/modificar-blog/:idblog' element={<ModificarBlog/>} />
          <Route path='/mis-blogs/' element={<MisBlogs/>} />
          <Route path='/login' element={<Login/>} />  
          <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
