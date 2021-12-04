import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import "./Games.css"
import ImagesJeux from '../ImagesJeux/ImagesJeux';

function Jeux() {
    return (
        <div style={{backgroundColor:"#F4F6F6 ",height:"1200px",width:"1400px",marginLeft:'-228px'}}>
        <Container >
            <Row style={{marginLeft:"-444px",marginTop:"20px"}}>
                <p style={{marginBottom:'5px',fontSize:'11px',color:'black'}}>Top des jeux en direct</p>
                <small style={{marginLeft:'620px',fontSize:"9px",color:'#797D7F '}} >Générer automatiquement par Youtube</small>
                
            </Row>

            <Row>
                <ImagesJeux style={{marginLeft:'150px'}} />
            </Row>


        </Container>
        </div>
    )
}

export default Jeux
