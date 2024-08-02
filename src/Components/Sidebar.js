import React from 'react'
import { SidebarData } from './SidebarData';
import '../App.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul className='sidebarList'>
            {
                SidebarData.map((val)=>{
                    return (
                        <li className='sidebarList-row'
                        id= {window.location.pathname == val.link ? "active" : ""}
                         onClick={()=>{
                            window.location.pathname = val.link;
                        }}>
                            <div id='icon'>{val.icon}</div>
                            <div id='title'>{val.title}</div>
                        </li>
                    )
                })
            }
        </ul>
    </div>
    )
  
}

export default Sidebar;