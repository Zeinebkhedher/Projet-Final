import React from 'react'
import './NavPrincipale.css'
import {IoSearchOutline} from 'react-icons/io5'
import {RiArrowDropRightLine} from 'react-icons/ri'

function NavPrincipale() {
    return (
        <div className="navbar">

            <ul className="ulNav" style={{marginLeft:"45px"}}>
                <li id="homeNav">Home</li>
                <li className="liNav" style={{marginLeft:"20px"}}>Vidéo</li>
                <li className="liNav" style={{marginLeft:"20px"}}>Playlist</li>
                <li className="liNav" style={{marginLeft:"20px"}}>Community</li>
                <li className="liNav" style={{marginLeft:"20px"}}>Channels</li>
                <li className="liNav" style={{marginLeft:"20px"}}><IoSearchOutline/></li>&nbsp;&nbsp;
                <li className="liNav" style={{marginLeft:"20px"}}><input className="Navinput"   type="text"  placeholder="Search" style={{width:"190px",marginTop:"2px"}} /></li>
                <li className="liNav" style={{marginLeft:"20px"}}><RiArrowDropRightLine className="icon1Nav"/></li>
            </ul>

            
        </div>
    )
}

export default NavPrincipale