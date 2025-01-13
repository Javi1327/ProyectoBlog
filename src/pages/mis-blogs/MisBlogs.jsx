import ListadoBlogs from "../../components/ListadoBlogs"
const MisBlogs = () => {
    return (
      <div>
        <h1 style={{ color: 'white', fontSize: '35px' }}>Mis Blogs</h1>
        <ListadoBlogs isLogged={true}/>
      </div>
    );
  }
  
export default MisBlogs