import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { useContext } from 'react';
import { getDron } from '../../Context/UserProvider';
import './Registres.css'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthContext";


export  function UserName() {
    const { logout } = useContext(AuthContext);
    const { username,setUsername } = useContext(getDron);
    const navigate = useNavigate();
    const onLogout = () => {
        setUsername('');
         // Eliminar el nombre de usuario del contexto de autenticación
        navigate('/', { replace: true });
        logout()
       
      };
  return (
    <div>
        <Header />
            <span className="Bienvenido">Bienvenido  {username}</span>
            <button className="logoutLogin" onClick={onLogout}> Cerrar sesíon </button>
                  
        <Footer/>
    </div>
  )
}
