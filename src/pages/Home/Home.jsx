import ListadoBlogs from "../../components/ListadoBlogs.jsx"
import "./Home.css"
const Home = () => {
    
    return (
        <div>
            <div className="Home">
               <h1 className="Titulo">Titulo del proyecto</h1>
            </div>
            <ListadoBlogs/>            
        </div>        
    )

}
export default Home