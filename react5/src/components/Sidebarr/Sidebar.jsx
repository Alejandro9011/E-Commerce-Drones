import React, { useState,useEffect,useRef } from 'react';
import {FaTh,FaBars,FaUserAlt, FaRegChartBar, FaSignOutAlt}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { getDron } from '../../Context/UserProvider';
import './SideBar.css'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

 export function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const { username,setUsername } = useContext(getDron);
    const [dron, setDron] = useState([])
    const sidebarRef = useRef(null);
 
    const toggle = () => setIsOpen(!isOpen);
    const navigate = useNavigate();
    const onLogout = () => {
      setUsername(''); // Eliminar el nombre de usuario del contexto de autenticación
      navigate('/login', { replace: true });
    };
   
  
    // const { username } = useContext(AuthContext);
    const menuItem = [
      {
        path: "/",
        name: "Dashboard",
        icon: <FaTh />
      },
      {
        path: "/about",
        name: "About",
        icon: <FaUserAlt />
      },
      {
        path: "/analytics",
        name: "Delete",
        icon: <FaRegChartBar />
      },
      {
        path: "/create/",
        name: "Add",
        icon:  <AddIcon />     
       
      },
      {
        path: "/edit/",
        name: "Edit",
        icon:  <EditIcon  />
      },
      {
        path: "/",
        name: "Logout",
        icon: <FaSignOutAlt />,
        button: <button className='btn-logout' onClick={onLogout}></button>
      }
     
    ]

    useEffect(() => {
      function adjustSidebarHeight() {
        if (sidebarRef.current) {
          const sidebarHeight = sidebarRef.current.offsetHeight;
          const windowHeight = window.innerHeight;
          const contentHeight = Math.max(sidebarHeight, windowHeight);
  
          sidebarRef.current.style.height = `${contentHeight}px`;
        }
      }
  
      adjustSidebarHeight();
      window.addEventListener('resize', adjustSidebarHeight);
  
      return () => {
        window.removeEventListener('resize', adjustSidebarHeight);
      };
    }, []);
    return (
      
      <div className="container">
            
        <div style={{ width: isOpen ? "250px" : "50px",height:'100vh', }}  className="sidebar" >
          <div className="top_section">
         
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">{username}</h1>
            
            <div style={{ marginLeft: isOpen ? "50" : "0px" }} className="bars">
              <FaBars onClick={toggle} style={{}}   />
            </div>
           
          </div>
          {
            menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className="link" activeclassName="active">
                <div className="icon">{item.icon}</div>
                <div style={{ display: isOpen ? "block" : "none", width: "auto" }} className="link_text">{item.name}</div>
              </NavLink>
            ))
          }
        </div>
       
        <main></main>
      </div>
    );
  }






