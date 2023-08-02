import { Link, useLocation, useNavigate } from "react-router-dom";
import './Navbar.css'


export const Navbar = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  


  return (
      <header className='headerNav'>
        {state?.logged ? (
          <div className='user'>
            { <span className='username'>{state?.name}</span> }
            { <button className='btn-logout' >
              Cerrar sesión
            </button> }
          </div>
        ) : (
          <nav className="navregistre">
            <Link className="iniciarsesion" to='/login'>Iniciar Sesión</Link>
            <Link  className="registrarse" to='/registre'>Registrarse</Link>
          </nav>
        )}
      </header>
  
  );
};

//<Link to='/'>Logo</Link>