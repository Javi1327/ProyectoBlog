import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import "./Login.css"

const Login = () => {
    const {setIsLogged} = useContext(AuthContext)
    const [usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault() // para que no recargue la pag
        if(usuario.length > 0  && contraseña.length > 0){
            setIsLogged(true)
            navigate("/")
        }else{
            alert("Complete los campos para iniciar sesion")
        }
    }

    return (
        <div className="contenedor1">
            <form className="form1">
                <h2>Iniciar sesion</h2>
                <div className="input1">
                    <label htmlFor="usuario" className="label1">Usuario</label>
                    <input type="text" id="usuario" placeholder="usuario" maxLength={30} onChange={(e) => setUsuario(e.target.value)}/> 
                </div>
                <div className="input1">
                    <label htmlFor="contraseña" className="label1">Contraseña</label>
                    <input type="password" id="contraseña" placeholder="contraseña" maxLength={30} onChange={(e) => setContraseña(e.target.value)} />
                </div>
    
                <button className="boton" onClick={(e) => handleSubmit(e)}>Iniciar sesion</button>
            </form>
        </div>
    )
}

export default Login