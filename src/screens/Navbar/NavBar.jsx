import {NavLink, Navigate } from 'react-router-dom'
import './NavBar.css'
import listIcon from '../../img/list.svg' 
import bookIcon from '../../img/img_book.svg'
import realeasesIcon from '../../img/img_realeases.svg'
import petsIcon from '../../img/img_pet.svg'
import imgLogout from '../../img/sign-out.svg';

 const NavBar = ({children}) => {

    const logout = () => {
        sessionStorage.removeItem('auth');
        window.location = '/login';
    }
    const menuItem=[
        
        {
            path:"/productregister",
            name:"ProductRegister",
            icon: bookIcon
        },
        {
            path:"/pets",
            name:"Pets",
            icon: petsIcon
        }, 
    ]
   return (  
     <div className='container'>
        <div className='sidebar'>
            <div className='bars'>
                <img src={listIcon} alt="" />
            </div>
            <div className='sidebar_items'>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <img className="icon" src={item.icon} alt={item.name} />
                        </NavLink>
                    ))
                }
            </div>   
            <NavLink className="link" onClick={() => logout()}>
                <img src={imgLogout} title='Sair' />
            </NavLink>
        </div>
        <main>{children}</main>
     </div>
     
   )
 }
 
 export default NavBar