import React from 'react'
import {Avatar} from '@mui/material'
import './Video.css'
function Video({img1,img2,title,channel,view,timelapse}) {
    return (
        <div className='recom_space'>
            <div className='Video__comp'>
                <div>
                    <img src={img1} alt={title}></img>
                </div>
                <div className='details'>
                    <div className='avatar__block'>
                        <Avatar src={img2} className='avatar'/>
                    </div>
                    <div className="text">
                        <h3>{title}</h3>
                        <p>{channel}</p>
                        <small>{view} . {timelapse}</small>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Video
