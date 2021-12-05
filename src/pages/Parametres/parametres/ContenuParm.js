import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';

function ContenuParam() {
    return (
       <Container style={{marginLeft:'40px',width:'900px'}}>
           <Row> <h6>Votre chaine Youtube</h6></Row>
           <Row style={{marginLeft:"-630px"}}>
               <p>Il s'agit de votre présence publique sur YouTube. Vous devez posséder une chaîne pour mettre en ligne vos propres vidéos, commenter des vidéos ou créer des playlists.</p>
           </Row>
           <Row>
               <Col>Votre chaine</Col>
               <Col style={{cursor:'pointer',color:'#5DADE2 '}}>Créer une chaine</Col>
           </Row>
       </Container>
    )
}

export default ContenuParam
