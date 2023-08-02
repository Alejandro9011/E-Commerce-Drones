
import React, { useState ,} from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import { getDron } from '../../Context/UserProvider';
import { AuthContext } from '../../AuthContext/AuthContext.js';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import './Registres.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';



export const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { setUsername } = useContext(getDron);
  const navigate = useNavigate();
  const {login } = useContext(AuthContext);
  

  const handleLogin = async (event) => {
    event.preventDefault();
  

    try {
      const response = await axios.post('http://localhost:8000/users/login', {
        name,
        password,
      });

      console.log(response.data);

      // Verificar si el inicio de sesión fue exitoso
      if (response.status === 200) {
       let timerInterval
Swal.fire({
  title: 'Iniciando sesión',
  position: 'center',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
        setTimeout(() => {
      
        }, 5000)
    
        // Establecer el nombre de usuario en el contexto de autenticación
       
        setUsername(name)
        // setName(response.data.name);
        login();

        // Redirigir al usuario a la página de administración después de iniciar sesión
        setTimeout(() => {
          navigate('/cuenta', {
            replace: true,
          });
        }, 3000)
      
      } else {
       
        // El inicio de sesión no fue exitoso, mostrar mensaje de error o realizar acciones adicionales si es necesario
      }
     

    } catch (error) {
      Swal.fire({
        position:'top-end',
        icon: 'error',
        iconColor:'black',
        confirmButtonColor:'#FF4000',
        title: 'Oops...',
        text: 'Usuario o Contraseña incorrecta',
        timer: 5500,
        toast:'true',
        footer: ' <a class="alert" href="">Verifica si tu usuario y contraseña son correctos</a>'
      })
     
      console.error(error);
    }
  };

  return (
  <div className='container-login'>
    <div className="login-box">
      <form onSubmit={handleLogin}>
        <div className="user-box">
          <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} required />
          <label>Nombre:</label>
        </div>

        <div className="user-box">
          <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          <label>Contraseña:</label>
        </div>

          <center  onClick={handleLogin}    > 
              <a  className='buttonLogin'>
               Entrar
             <span></span>
             </a>
            </center> 
          
      </form> 
      {/* <Link to="/registre" onClick={handleRegistroClick}> */}
      <Link to="/registre">
  <h6 className="textoLogin">¿Aún no te has registrado?</h6>
</Link>
    </div>
   </div>
   
  );
};



