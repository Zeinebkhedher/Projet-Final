import video from '../video.png';
import '../GVideo.css';
import { BiLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import { MdPlaylistAdd } from 'react-icons/md';
import { IoNotificationsOffOutline } from 'react-icons/io5';
import {MdSort}  from 'react-icons/md';
import {CgProfile} from 'react-icons/cg';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Emna4(){
    return (
      <div className="GVideo">
            <div style={{marginLeft:'-30px'}}>
            <iframe width="723" height="409" src="https://www.youtube.com/embed/stMHkpcitb4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
              <br/><br/>
              <small id="hashtag">#programmation#python#tuto</small>
              <h3 className='GVh3'>Apprendre python pour debutant</h3>
           <div className="ligne">
              <small>1,003,298views . 17 Oct 2020 </small>
               <ul className="reaction">
                 <li className='GVli'><BiLike className="like"/>36K</li>
                 <li className='GVli'> <BiDislike className="like"/>DISLIKE</li>
                 <li className='GVli'> <RiShareForwardLine className="like"/>SHARE</li>
                 <li className='GVli'><MdPlaylistAdd/>SAVE</li>
              </ul>
           </div>
      <hr className='GVhr'/>



{/*----------------------------------------- partie2 ---------------------------------------------------------*/}

    <div className="contenu">
                  <div className="chaine">
                  <Link to='/BigCheese'><img className='GVIcon' id="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFpwAZ_7VozOEIIVGCipoE7i4lfkVtfaMOv4z8NgCoBuMimo36IT3UU2Tu9SUodAfIPc&usqp=CAU"/></Link>
                       <span id="py">Python</span>
                       <span id="sub">29K subscribers</span>
                  </div>

                  
                   <div className="jnab" style={{width:"190px"}}>
                   <Button variant='danger' id="subb"><b>SUBSCRIBED</b></Button>
                       
                  </div>
    </div>

                  <p style={{fontSize:"12px"}}>Apprendre Python gratuitement, c'est possible gr??ce ?? ces 7h de formation.Dans cette vid??o, 
                      je vous explique tout ce que vous avez besoin de savoir pour cr??er vos premiers scripts avec Python.
                      La formation a ??t?? pr??vue pour tous les syst??mes d'exploitation (Windows, Mac OS et Linux).
                      Elle est extraite de la 1??re partie de ma formation compl??te disponible sur Udemy et sur Docstring.</p>
           <hr className='GVhr'/>

{/*-------------------------partie3-----------------------------*/}
        <div className="comm">
              <span>617 comments</span>
              <span id="sort">  <MdSort/>Sort By</span>
        </div>

     <div style={{marginTop:"-32px"}}>
      <div className="profile">
             <div id="icon">
                <CgProfile />
              </div>
            <input className='inputGV' type="text" placeholder="Add a public comment" style={{height:"52px",marginTop:"5px",width:"750px"}}/>
      </div>

        <div className="butns">
            <Button style={{backgroundColor:"#606060",borderColor:"#606060",width:"90px",fontSize:"12px"}} className='GVbutton'>CANCEL</Button>
            <Button id="but" style={{fontSize:"14px"}} >COMMENT</Button>
        </div>
        </div>
     
    






 </div>
    )
}

export default Emna4