import React from 'react';
import {BsCheckCircleFill}  from 'react-icons/bs';
import './TousVidPrincipale.css'
function TousVidPrincipale({title,channel,view,timelapse,description}) {
    return (
           
                <div className="tTous">

                    <h5 className="titleTous">{title}</h5>
                    <p id="lotaTous">{channel} <BsCheckCircleFill id="icon3Tous"/> <small id="SMTous">{view} . {timelapse}</small> </p>
                   
                    <p id="descTous">{description}</p>
            
               </div>
        
    )
}

export default TousVidPrincipale