import React from 'react'
import {MdOutlineVideoLibrary} from 'react-icons/md';
import {CgProfile} from 'react-icons/cg'
import { Button,Container } from 'react-bootstrap';
import './Biblio.css'

function Biblio() {
    return (
        <div>
            <MdOutlineVideoLibrary className='Biblio-Icon'/>
            <h3 className='Biblio-Title'>Regardez vos vidéos préférées</h3>
            <p className='Biblio-text'>Connectez-vous pour accéder aux vidéos pour lesquelles vous avez cliqué sur "J'aime" ou que vous avez enregistrées.</p>
            <Button className="ButtonBib" style={{borderColor:"blue",color:"#0131B4",backgroundColor:"white",fontSize:"12px",width:"130px",marginTop:"15px",marginLeft:'602px'}}><CgProfile style={{marginLeft:"20px",color:"#0131B4",position:"relative"}}/> Se connecter</Button>
        </div>
    )
}

export default Biblio
