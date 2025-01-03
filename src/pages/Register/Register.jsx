import { useState } from "react"
import "./Register.css"

const Register =() => {

    const [usuario, setUsuario] = useState("")
    const [email, setEmail] = useState("")
    const [fecha, setFecha] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [contraseña2, setContraseña2] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        // Validar campos vacíos
        if (usuario === "" || email === "" || fecha === "" || contraseña === "" || contraseña2 === "") {
            setError("Complete los campos para continuar");
            return;
        }

        // Validar que las contraseñas coincidan
        if (contraseña !== contraseña2) {
            setError("Las contraseñas no coinciden");
            return;
        }

        const fechaIngresada = new Date(fecha);
        const fechaHoy = new Date();
        fechaHoy.setHours(0, 0, 0, 0); // Establece la hora a 00:00:00 para comparar solo la fecha

        if (fechaIngresada > fechaHoy) {
            alert("La fecha no puede ser mayor a la de hoy");
            return;
        } 

        // Si todas las validaciones pasan, puedes proceder
        const data = {
            usuario,
            email,
            fecha,
            contraseña,
        };
        console.log(data);
        alert("Usuario creado");
 
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