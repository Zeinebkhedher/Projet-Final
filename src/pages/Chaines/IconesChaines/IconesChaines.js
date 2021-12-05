import React from 'react'
import './IconesChaines.css';
function IconesChaines({img,title,view}) {
    return (
        <div className="iconcompChaines">
           <div>
              <img src={img} alt={title} />
           </div> 
           <div className="detailChaines">
               <h3 id="titreChaines">{title}</h3>
               <small className="smallChaines">{view} subscribers</small>
           </div>
           <div className="boutonChaines">
                <button>SUBSCRIBE</button>
           </div>
        </div>
    )
}

export default IconesChaines