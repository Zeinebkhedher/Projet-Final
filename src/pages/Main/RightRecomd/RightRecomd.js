import React from 'react'
import './RightRecomd.css';
function RightRecomd({title,channel,view,timelapse}) {
    return (
            <div className="textRecomd" >
                <h3 className="HRecomd">{title}</h3>
                <p id="ch">{channel}</p>
                <small id="SM">{view} . {timelapse}</small>
            </div>
    )
}

export default RightRecomd