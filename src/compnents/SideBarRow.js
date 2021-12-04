import React from 'react'
import './SideBarRow.css'
function SideBarRow({ selected, Icon, title }) {
    return (
        <div className={`sidebarrow ${selected && 'selected'}`}>
            <p className='sidebarrow-icon'>{Icon}</p>
            <h2 className='sidebarrow-title'>{title}</h2>
        </div>
    )
}

export default SideBarRow