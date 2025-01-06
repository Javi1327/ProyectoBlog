import "./../Home/Blogs.css"
import { Link } from "react-router-dom"

const BlogAdmin = ({blog, HandleDelete}) => {
 console.log(blog)

    return (
        <div className="contenedorCard">
            <img src={blog.imagen} alt={blog.titulo} className="imagen"/>
            <div className="datos">
                <h2 className="titulo">{blog.titulo}</h2>
                <div className="subtitulo">
                    <p className="autor">{blog.author || "autor por defecto"}</p>
                    <p>{ new Date(blog.fechaPublicacion).toLocaleString("es")}</p>
                </div>
                <p className="description">{blog.descripcion}</p>
                <Link to={`/modificar-blog/${blog.source.id}`}>
                    <button>Modificar</button></Link>
                <button onClick={() => HandleDelete(blog.source.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default BlogAdmin;
