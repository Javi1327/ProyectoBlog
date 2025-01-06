import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./CrearBlog.css"

const CrearBlog = () => {
    const navigate = useNavigate()

    const backurl = import.meta.env.VITE_BACK_URL

    const [titulo,setTitulo]= useState("")
    const [imagen,setImagen]= useState("")
    const [descripcion,setDescripcion]= useState("")
    const [contenido,setContenido]= useState("")

    const handleSubmit = async (e) => {
        e.preventDefault() // evitar q recargue la pagina
        const blog = {
            titulo: titulo,
            descripcion: descripcion,
            contenido: contenido,
            imagen: imagen,
            //author: "user1"
        }
        
        const respuesta = await fetchback(blog) // fetch al back
        if(respuesta){
            alert("Blog creado")
            navigate("/mis-blogs")
        }else{
            alert("Blog no creado")
        }
        console.log(blog)
    }

    const fetchback = async (blog) => {
      const response = await fetch(`${backurl}blogs/`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      }) // metdo body heders

      const responsejson = await response.json()
      console.log(responsejson.data)
      if(response.ok){
        return responsejson.data
      }else{
        return null
      }
    }


    return (
      <div className="contenedorPadre"> 
        <div  className="contenedorHijo">
            <form onSubmit={handleSubmit}  className="form">
                <h1>Crear Blog</h1>
                <div className="input">
                    <label htmlFor="titulo" className="label">Titulo</label>
                    <input
                      type="text"
                      id="titulo" 
                      onChange={(e) => setTitulo(e.target.value)} 
                    />
                </div>
                <div className="input">
                    <label htmlFor="descripcion" className="label">Descripcion</label>
                    <input
                      type="text"
                      id="descripcion"
                      onChange={(e) => setDescripcion(e.target.value)}
                    />
                </div>
                <div className="input">
                    <label htmlFor="contenido" className="label">Contenido</label>
                    <textarea
                      type="text" 
                      id="contenido" 
                      onChange={(e) => setContenido(e.target.value)} 
                      cols={"50"}
                      rows={"10"}
                    ></textarea>
                </div>
                <div className="input">
                    <label htmlFor="imagen" className="label">Imagen</label>
                    <input 
                      type="text"
                      placeholder="URL de la foto"
                      id="imagen"
                      onChange={(e) => setImagen(e.target.value)}
                    />
                </div>
                <button type="submit" className="boton">Crear Blog</button>
            </form>
        </div>
      </div>   
    )
}

export default CrearBlog