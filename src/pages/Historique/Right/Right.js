import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import {FaRegTrashAlt} from 'react-icons/fa';
import {AiOutlinePauseCircle} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';
import {BsSearch} from 'react-icons/bs'
 
function Right() {
    return (
       <Container style={{marginLeft:'-680px',width:'500px',backgroundColor:'#F2F4F4',height:'1000px',marginTop:'-29px'}}>
           <Row style={{marginLeft:'20px'}} >
               <Col > 
               <BsSearch /><input type='text'  placeholder="Recherche dans l'historique You..." style={{marginTop:'50px',borderRadius:'5px',borderColor:"transparent",borderBottomColor:'black'  ,backgroundColor:'transparent',width:'350px',height:'47px'}} /> 
                 
               </Col>
            </Row>

            <Row style={{marginTop:"38px",marginLeft:'20px'}}> 
                <Col style={{fontSize:'20px'}}>
                 Type d'historique
                </Col>
            </Row>
             <hr style={{width:'450px',marginLeft:'20px'}}></hr>
           
           
            <Row style={{border:'1px solid yellow',marginTop:'35px',fontSize:"10px",marginBottom:'5px',marginLeft:'-600px',marginLeft:"5px",width:"450px"}}>
                <Col style={{border:'1px solid red',display:'flex', justifyContent:'space-between',marginLeft:"-610px"}}>
                <div style={{border:'1px solid blue',width:'200px'}}>
                    <p >
                        historique de visionnage 
                    </p>
                    <input type="radio" style={{marginTop:'15px',marginLeft:"350px"}} /> 
                    </div>
                </Col>
           </Row>
      
           <hr style={{width:'450px',marginLeft:'20px'}}></hr>


            <Row style={{marginTop:'35px',fontSize:"15px",marginLeft:'-600px'}}>
                <Col style={{display:'flex'}}>
                  <p>Communauté</p>  <input type="radio" style={{marginLeft:'285px',marginTop:'12px',fontSize:'30px'}} /> 
                </Col>
            </Row>

            <hr style={{width:'450px',marginLeft:'20px'}}></hr>


            <Row style={{marginTop:'40px',marginLeft:'39px',cursor:'pointer'}}>
                <Col><FaRegTrashAlt style={{fontSize:'20px',marginRight:'8px'}} /> Effacer tout l'historique des vidéos regardées</Col>
            </Row>

            <Row style={{marginLeft:'39px',marginTop:'16px',cursor:'pointer'}}>
                <Col>
                <AiOutlinePauseCircle style={{fontSize:'20px',marginRight:'8px' }}/>  SUSPENDRE L'HISTORIQUE
                </Col>
            </Row>

            <Row style={{marginLeft:'39px',marginTop:'16px',cursor:'pointer'}}>
                <Col>
                <FiSettings style={{fontSize:'20px',marginRight:'8px'}} /> Gérer tout l'historique
                </Col>
            </Row>
            <Row style={{marginLeft:"82px",marginTop:'13px'}}>
                <Col>
                <p style={{cursor:'pointer'}}>Historique des recherches et des vidéos regardés</p>
                <p style={{cursor:'pointer'}}>Commentaires</p>
                <p style={{cursor:'pointer'}}>Chat en direct</p>
                </Col>
            </Row>

       </Container>
    )
}

export default Right