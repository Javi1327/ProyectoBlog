import ListadoBlogs from "../../components/ListadoBlogs"
const MisBlogs = () => {
    return (
      <div>
        <h1>Mis Blogs</h1>
        <ListadoBlogs isLogged={true}/>
      </div>
    );
  }
  
export default MisBlogs