import React from 'react'
import Groupe from './Groupe.png'
import './HautPrincipale.css'; 
import fromage from './fromage.png'
import {BsCheckCircleFill}  from 'react-icons/bs'
import {IoMdNotificationsOutline}  from 'react-icons/io'

function HautPrincipale() {
    return (
        <div className="parent">
            <img  className="groupePrincipale" src={Groupe}  alt="groupe" style={{width:"1350px",borderRadius:"0px",height:"400px",marginLeft:"-260px",marginTop:"-19px"}} />

            <div className="nomchainePrincipale">
                <img className="profil" src={fromage}  alt="profile" />
                <div style={{marginLeft:'-20px'}}>
                    <h3 className="HPrincipale">BIG cheese <BsCheckCircleFill className="verf"/><br/> <small className="subPrincipale">1M subscribers</small></h3> 
                </div>
            </div>

            <div className="jnabPrincipale">

                <button className="buttonPrincipale"><b>SUBSCRIBED</b></button>


            </div>

           

            



        </div>
    )
}

export default HautPrincipale