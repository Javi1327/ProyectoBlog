import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Register.css"

const Register =() => {

    const [usuario, setUsuario] = useState("")
    const [email, setEmail] = useState("")
    const [fecha, setFecha] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [contraseña2, setContraseña2] = useState("")
    const navigate = useNavigate();
    

    const handleRegisterBack = async (data) => {
        const response = await fetch(`${import.meta.env.VITE_BACK_URL}auth/register`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        console.log(`${import.meta.env.VITE_BACK_URL}auth/register`);
        const responsejson = await response.json();
        console.log(responsejson.data);
          
        if(response.ok){
            alert("Usuario creado");
            navigate("/login"); //navigate a login
        }
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()

        const fechaIngresada = new Date(fecha);
        const fechaHoy = new Date();
        fechaHoy.setHours(0, 0, 0, 0); // Establece la hora a 00:00:00 para comparar solo la fecha

        if (fechaIngresada > fechaHoy) {
            alert("La fecha no puede ser mayor a la de hoy");
            return;
        } 

        // Validar campos vacíos
        if (usuario === "" || email === "" || fecha === "" || contraseña === "" || contraseña2 === "") {
            alert("Complete los campos para continuar");
        }else{
            if(contraseña ===contraseña2){
                const data ={
                    username:usuario,  // tiene que ser los mismos que estana en el back
                    email,
                    fechaNacimiento:fecha,
                    password:contraseña,
                }
                await handleRegisterBack(data)
                console.log(data)
                alert("usuario creado")
            }else{
            alert("la contraseña no coinciden")
            }
        }
    }

    return (
        <div className="contenedor2">
            <form onSubmit={handleSubmit}  className="form2">
            <h1>Crear Usuario</h1>
                <div className="input">
                    <label htmlFor="usuario" className="label2">Usuario</label>
                    <input
                      type="text"
                      id="usuario" 
                      placeholder="Usuario"
                      maxLength={30}
                      onChange={(e) => setUsuario(e.target.value)}
                    />
                </div>
                <div className="input">
                    <label htmlFor="email" className="label2">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="ejemplo@gmail.com"
                      maxLength={30}
                      onChange={(e) => setEmail(e.target.value)}

                    />
                </div>
                <div className="input2">
                    <label htmlFor="fecha" className="label">Fecha de nacimiento</label>
                    <input 
                      type="date"
                      id="fecha"
                      onChange={(e) => setFecha(e.target.value)}

                    />
                </div>
                <div className="input">
                    <label htmlFor="pass" className="label2">Contraseña</label>
                    <input 
                      type="password"
                      id="pass"
                      maxLength={30}
                      onChange={(e) => setContraseña(e.target.value)}

                    />
                </div>
                <div className="input">
                    <label htmlFor="pass2" className="label2">Repetir Contraseña</label>
                    <input 
                      type="password"
                      id="pass2"
                      maxLength={30}
                      onChange={(e) => setContraseña2(e.target.value)}

                    />
                </div>
            <button type="submit" className="boton">Crear Usuario</button>
        </form>
        </div>
         
    )
}

export default Register