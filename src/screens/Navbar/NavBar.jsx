
import './NavBar.css'
import listIcon from '../../img/list.svg' 
import bookIcon from '../../img/img_book.svg'
import realeasesIcon from '../../img/img_realeases.svg'
import homeIcon from '../../img/img_home.svg'
import petsIcon from '../../img/img_pet.svg'
import { NavLink } from 'react-router-dom'

 const NavBar = ({children}) => {
    const menuItem=[
        
        {
            path:"/productregister",
            name:"ProductRegister",
            icon: bookIcon
        },
        {
            path:"/realeases",
            name:"Realeases",
            icon: realeasesIcon
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
        </div>
        <main>{children}</main>
     </div>
     
   )
 }
 
 export default NavBar