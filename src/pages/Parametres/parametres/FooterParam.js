import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';

function FooterParam() {
    return (
        <Container style={{marginLeft:'40px'}}>
           <Row> <h6>Votre compte</h6></Row>
         
            <Row>
                <p>Vous vous connectez à YouTube avec votre compte Google</p>
            </Row>

            <Row>
                <Col>Compte Google</Col>
                <Col  > <p style={{cursor:'pointer',color:'#5DADE2 ',width:"550px"}}>Afficher ou modifier les paramètres de votre compte Google</p>
                      <small> Vous allez être redirigé vers la page de votre compte Google</small>
                </Col>
            </Row>

            <Row>
                <Col>Abonnement</Col>
                <Col> pas d'abonnement | <p style={{width:"550px"}}>Obtenez Youtube Premium</p>
                      <small> YouTube Premium vous permet de profiter de votre musique sans interruption, de vidéos sans publicité et bien plus encore</small>
                </Col>

            </Row>

        </Container>
    )
}

export default FooterParam
