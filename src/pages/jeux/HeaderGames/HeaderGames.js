import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap';
import "./HeaderGames.css"
function Header() {
    return (
        <Container fluid>
            <Row style={{display:"flex"}}> 
                <Col style={{display:"flex",marginLeft:"-5px"}}>
               <img className="imageH" src="//yt3.ggpht.com/mKM5NiFH2fFRZV6ELAg5UFAJfeSfjuI5LiRsYD0gEzfgCNDLUCVDsA-t2Z-qoPklyi0dS2lXqQ=s88-c-k-c0x00ffffff-no-rj-mo" alt='header__img'/>
                    <div className="pHeader">
                           <p className="jeuxHeader">Jeux vidéo</p> 
                      </div>    
                      <div style={{marginLeft:"-98px",marginTop:'94px'}}>
                          <p className="aboonnésHeader">91 M d'abonnés</p>
                     </div>
               <Button style={{backgroundColor:'#C0392B ',color:"white",height:"28px",borderColor:'red',marginLeft:"620px",marginTop:'20px',width:"75px",fontSize:"11px"}}>S'abonner</Button>
              
                </Col>
            </Row>
        </Container>
    )
}

export default Header
