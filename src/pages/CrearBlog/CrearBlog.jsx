import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./CrearBlog.css"

const CrearBlog = () => {
    const navigate = useNavigate()

    const backurl = import.meta.env.VITE_BACK_URL

    const [titulo,setTitulo]= useState("")
    const [imagen,setImagen]= useState("")
    const [descripcion,setDescripcion]= useState("")
    const [contenido,setContenido]= useState("")
    const { accessToken,handleRefreshToken } = useContext(AuthContext);


    const handleSubmit = async (e) => {
        e.preventDefault() // evitar q recargue la pagina

        // Validación de campos
      if (!titulo || !descripcion || !contenido || !imagen) {
        alert("Por favor, completa todos los campos.");
        return;
      }

      const blog = {
        titulo: titulo,
        descripcion: descripcion,
        contenido: contenido,
        imagen: imagen,
        //author: "user1"
      }
        
      try {
        let respuesta = await fetchback(blog);
        if (respuesta === -1) {
            respuesta = await fetchback(blog);
        }

        if (respuesta) {
            alert("Blog creado");
            navigate("/mis-blogs");
        } else {
            alert("Blog no creado");
        }
      } catch (error) {
        console.error("Error al crear el blog:", error);
        alert("Hubo un problema al crear el blog. Inténtalo de nuevo.");
      }
      console.log(blog);
    }

    const fetchback = async (blog) => {
      const response = await fetch(`${backurl}blogs/`, {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization":accessToken
        },
        body: JSON.stringify(blog),
      }) // metodo body heders

      if(response.status === 401){
        const res = await handleRefreshToken();
        if(res === -1){
          navigate("/login");
        } 
      }

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
                      maxLength={30} 
                      onChange={(e) => setTitulo(e.target.value)} 
                    />
                </div>
                <div className="input">
                    <label htmlFor="descripcion" className="label">Descripcion</label>
                    <input
                      type="text"
                      id="descripcion"
                      maxLength={200}
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