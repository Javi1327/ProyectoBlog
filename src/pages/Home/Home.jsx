import ListadoBlogs from "../../components/ListadoBlogs.jsx"
import "./Home.css"
const Home = () => {
    
   return (
       <div>
          <div className="Home">
              <h1 className="Titulo">Zona Deportiva</h1> 
           </div>
           <ListadoBlogs/>           
       </div>        
  )

}
export default Home