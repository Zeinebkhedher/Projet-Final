import React from 'react'
import './HomeVideo.css';
import {BsCheckCircleFill}  from 'react-icons/bs'

function Homevideo({title,channel,view,timelapse,description}) {
    return (
           
                <div className="textHome">

                    <h3 className="titreHome">{title}</h3>
                    <p className="PHome">{channel} <BsCheckCircleFill id="icon2Home"/> <small id="SMHome">{view} . {timelapse}</small> </p>
                   
                    <p className="PHome">{description}</p>
            
               </div>
        
    )
}

export default Homevideo