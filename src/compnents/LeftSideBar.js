import Button from '@restart/ui/esm/Button';
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {AiFillHome,AiOutlineTrophy} from 'react-icons/ai';
import {MdOutlineExplore,MdOutlineSubscriptions,MdOutlineVideoLibrary,MdOutlineVideogameAsset,MdOutlinedFlag} from 'react-icons/md';
import {RiHistoryFill,RiNewspaperLine} from 'react-icons/ri';
import {CgProfile,CgGames} from 'react-icons/cg';
import {GiMusicSpell,GiSoundWaves} from 'react-icons/gi';
import {FiSettings} from 'react-icons/fi';
import {BsPlusCircle,BsExclamationSquare} from 'react-icons/bs';
import {BsQuestionCircle} from 'react-icons/bs';
import './LeftSideBar.css'
import { useNavigate } from "react-router-dom";


function LeftSideBar() {
  let navigate = useNavigate();

 
    return (
  
        <Container fluid style={{width:'195px',marginLeft:'-20px',position:'fixed',marginTop:'-17px'}} className='LeftSideContainer'>
          
              <Row style={{backgroundColor:'#E5E7E9',height:'27px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer', textAlign:'center', marginLeft:'-17px',paddingTop:'3px'}}>
                  <Link to='/' style={{color:"inherit",textDecoration:"none"}}> <AiFillHome style={{fontSize:'15px',marginRight:'15px'}}/>    Acceuil </Link> 
                </Col>
             </Row>   

                <Row className='left'style={{height:'25px'}} >
                         <Col style={{fontSize:'10px',cursor:'pointer', textAlign:'center', marginLeft:'-17px',paddingTop:'3px' }}>
                                <Link to='/explore' style={{color:"inherit",textDecoration:"none"}}> <MdOutlineExplore  style={{fontSize:'15px' ,marginRight:'15px'}}/> Explore</Link>
                        </Col>
                </Row>   

                    <Row className='left' style={{height:'28px', textAlign:'center', marginLeft:'-17px',paddingTop:'3px'}}>
                         <Col style={{fontSize:'10px',cursor:'pointer' }}>
                                <MdOutlineSubscriptions  style={{fontSize:'15px' ,marginRight:'15px'}}/> Abonnements
                         </Col>
                   </Row>   



                   <div style={{width:'150px',marginTop:'-8px',marginLeft:'-13px'}}>
                     <hr></hr>
                  </div>



                    <Row className='left' style={{height:'25px',marginTop:'-10px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer', textAlign:'center', marginLeft:'-5px',paddingTop:'3px' }}>
                <Link to='/Biblio' style={{color:"inherit",textDecoration:"none"}}>  <MdOutlineVideoLibrary  style={{fontSize:'15px' ,marginRight:'15px'}}/> Bibliothèques </Link>
                </Col>

                </Row>


                    <Row className='left' style={{ height:'25px',marginTop:'2px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer', textAlign:'center', marginLeft:'-9px',paddingTop:'3px' }}>
                <Link to='/Historique' style={{color:"inherit",textDecoration:"none"}}> <RiHistoryFill  style={{fontSize:'15px' ,marginRight:'15px'}}/> Historiques </Link>
                </Col>
                </Row>   

                <div style={{width:'150px',marginTop:'-9px',marginLeft:'-13px'}}>
                     <hr></hr>
                  </div>


                    <Row  style={{marginTop:'-7px'}}> 
                <Col style={{fontSize:'10px' }}>
                Connectez-vous à YouTube pour cliquer sur "J'aime", ajouter un commentaire et vous abonner.
                </Col>
                </Row>   

                <Row  style={{marginTop:'2px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer'}}>
                <Button style={{color:'#0000FF ',border:'1px solid #0000FF ',backgroundColor:'white'}}> <CgProfile style={{fontSize:'15px' ,marginRight:'15px',marginBottom:'2px'}} /> Se conncter </Button>
                </Col>
                </Row>   

                <div style={{width:'150px',marginTop:'-5px',marginLeft:'-13px'}}>
                     <hr></hr>
                  </div>

                <Row  style={{marginTop:'-8px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer', textAlign:'center', marginLeft:'-8px',paddingTop:'3px' }}>
                LE MEILLEUR DE YOUTUBE
                </Col>
                </Row>



                <Row className='left' style={{marginTop:'5px',height:'25px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer', textAlign:'center', marginLeft:'-17px',paddingTop:'3px' }}>
                <GiMusicSpell style={{fontSize:'15px' ,marginRight:'10px',color:'#D6DBDF',backgroundColor:'#283747',borderRadius:'50px'}} /> Musique
                </Col>
                </Row>

                <Row className='left' style={{marginTop:'2px',height:'25px'}}>
                <Col style={{fontSize:'13px',cursor:'pointer', textAlign:'center', marginLeft:'-17px',paddingTop:'3px' }}>
                <AiOutlineTrophy style={{fontSize:'15px',marginRight:'15px',color:'#D6DBDF',backgroundColor:'#283747',borderRadius:'50px'}} /> Sport 
                </Col>
                </Row>   



                <Row className='left' style={{marginTop:'2px',height:'25px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer', textAlign:'center', marginLeft:'-15px',paddingTop:'3px' }} onClick={()=> {navigate('/Jeux')}}>
                  <Link to="/Jeux" > 
                  <Link to='Jeux'><CgGames style={{fontSize:'15px',marginRight:'12px',color:'#D6DBDF',backgroundColor:'#283747',borderRadius:'50px'}}/> Jeux vidéo</Link>
                  </Link>
                </Col>
                </Row>   

                <Row className='left' style={{marginTop:'5px',height:'25px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer', textAlign:'center', marginLeft:'-10px',paddingTop:'3px' }}>
                <Link to='/Actualite' style={{color:"inherit",textDecoration:"none"}}> <RiNewspaperLine style={{fontSize:'15px',marginLeft:'-10px',marginRight:'15px',color:'#D6DBDF',backgroundColor:'#283747',borderRadius:'50px'}}/> Actualités </Link>
                </Col>  
                </Row>   

                <Row className='left' style={{marginTop:'2px',height:'25px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer', textAlign:'center', marginLeft:'-15px',paddingTop:'3px' }}>
                <GiSoundWaves style={{fontSize:'15px',marginRight:"17px",color:'#D6DBDF',backgroundColor:'#283747',borderRadius:'50px'}} /> En direct
                </Col>    
                </Row>      

                <Row className='left' style={{marginTop:'2px',height:'25px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer', textAlign:'center', marginLeft:'-10px',paddingTop:'3px' }}>
                <MdOutlineVideogameAsset style={{fontSize:'15px',marginRight:'12px',color:'#D6DBDF',backgroundColor:'#283747',borderRadius:'50px'}} /> Vidéo à 360°
                </Col> 
                </Row>


                <div style={{width:'150px',marginTop:'-14px'}}>
                     <hr></hr>
                  </div>

                <Row className='left' style={{marginTop:'-9px',height:'25px'}}>
                <Col style={{fontSize:'11px',cursor:'pointer', textAlign:'center', marginLeft:'-17px',paddingTop:'3px' }}>
                <Link to='/Chaines' style={{color:"inherit",textDecoration:"none"}}> <BsPlusCircle style={{fontSize:'15px',marginRight:'15px'}} /> Chaines  </Link>
                </Col> 
                </Row>   


                <div style={{width:'150px',marginTop:'-15px'}}>
                     <hr></hr>
                  </div>

                <Row className='left' style={{marginTop:'-6px',height:'25px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer', textAlign:'center', marginLeft:'-17px',paddingTop:'3px' }}>
                <Link to='/Parametres' style={{color:"inherit",textDecoration:"none"}}> <FiSettings style={{fontSize:'15px',marginRight:'15px'}} /> Paramétres </Link>
                </Col>
                </Row>   

                <Row className='left' style={{height:'25px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer', textAlign:'center', marginLeft:'-12px',paddingTop:'3px' }}>
                <MdOutlinedFlag style={{fontSize:'15px',marginRight:'15px'}} /> Historique des signal...
                </Col>
                </Row>   

                <Row className='left' style={{height:'25px',marginTop:"3px"}}>
                <Col style={{fontSize:'10px',cursor:'pointer', textAlign:'center', marginLeft:'-34px',paddingTop:'3px' }}>
                <BsQuestionCircle style={{fontSize:'15px',marginRight:'15px'}}/> Aide 
                </Col>
                </Row>   


                <Row className='left' style={{height:'25px',marginTop:'3px'}}>
                <Col style={{fontSize:'10px',cursor:'pointer', textAlign:'center', marginLeft:'-17px',paddingTop:'3px' }}>
                <BsExclamationSquare style={{fontSize:'15px',marginRight:'15px'}}/> Envoyez des commen...
                </Col>
                </Row>   

                <div style={{width:'150px',marginTop:'-11px'}}>
                     <hr></hr>
                  </div>

                <Row >
                    <Col style={{fontSize:'10px',marginTop:'-5px'}}>
                    PrésentationPresseDroits d'auteurNous contacterCréateursPublicitéDéveloppeurs
Conditions d'utilisationConfidentialitéRègles et sécuritéPremiers pas sur YouTubeTester de nouvelles fonctionnalités
                    </Col>
                </Row>




     

        </Container>
    )
}

export default LeftSideBar
