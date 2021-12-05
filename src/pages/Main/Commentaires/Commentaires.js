import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { BiLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';
import './Commentaires.css';
function Commentaires({nom,date,comm}) {
    return (
 <div className="comments">
           
       <div className="commen">
               <div className="pro">
                <CgProfile style={{marginLeft:"-88px"}}/>
               </div> 
                      
                      <div className="ktiba">
                          <span style={{marginLeft:"-70px",color:"black",}}><b>{nom}</b></span>
                          <small style={{marginLeft:"11px"}}>{date}</small>
                      </div>
                <div className="detailsRecomd">
                   <p>{comm}</p>   
                 </div>
                 
                 <div className="rea"> 
                 <BiLike/>  
                 <BiDislike style={{marginLeft:"25px"}}/>
                 <spam id="reply"><b>REPLY</b></spam>
                 </div>
                 
       </div> 

</div>
    )
}

export default Commentaires