import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';


function HeaderParam() {
    return (
     <Container style={{marginTop:'-907px',marginLeft:'40px',width:'900px'}}>
         <Row>
             <Col>Compte</Col>
         </Row>
         <Row style={{marginTop:'25px'}}><h3>Choisissez la façon dont vous apparaissez et ce que vous voyez sur Youtube</h3>
         <small >Connecté avec l'adresse ..@gmaiil.com</small>
         </Row>
     </Container>
    )
}

export default HeaderParam
