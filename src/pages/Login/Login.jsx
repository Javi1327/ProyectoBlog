import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import "./Login.css"

const Login = () => {
    const {setIsLogged, setAccessToken, setRefreshToken } = useContext(AuthContext)
    const [usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState("")
    const navigate = useNavigate()

    const handleLoginBack = async () => {
        const data = {
          username: usuario,
          password: contraseña,
        }
        const response = await fetch(`${import.meta.env.VITE_BACK_URL}auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        return response
    };


    const handleSubmit = async (e) => {
        e.preventDefault() // para que no recargue la pag
        if(usuario.length > 0  && contraseña.length > 0){
            //llamar al back para login
            const response = await handleLoginBack();
            const responsejson = await response.json();
            if(!response.ok){
                alert("usuario o contraseña incorrecto");
            }else{
                alert("sesion iniciada");
                setIsLogged(true);
                setRefreshToken(responsejson.data.refreshtoken)
                setAccessToken(responsejson.data.accesstoken)
                navigate("/");
            }
            
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