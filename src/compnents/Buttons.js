import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap';
import {AiOutlineRight} from 'react-icons/ai'
function Buttons() {
    return (
        <div>
            <Container fluid>
                <Row style={{marginLeft:"15px",width:"1300px",marginTop:"-12px",height:'20px'}}>
                    <Col> <Button variant="primary" style={{backgroundColor:'black',color:"white",borderRadius:"25px",fontSize:"10px",borderColor:"black"}}> Tous</Button> </Col>
                    <Col><Button variant="primary" style={{color:"black", backgroundColor:"#EFEFEF",borderColor:"#BABABA",borderRadius:"25px",fontSize:"10px",marginLeft:"-55px"}}>Musique</Button></Col>
                    <Col><Button variant="primary" style={{color:"black", backgroundColor:"#EFEFEF",borderColor:"#BABABA",borderRadius:"25px",fontSize:"10px",marginLeft:"-92px"}}>Musique arabe</Button></Col>
                    <Col><Button variant="primary" style={{color:"black", backgroundColor:"#EFEFEF",borderColor:"#BABABA",borderRadius:"25px",fontSize:"10px",marginLeft:"-97px"}}>Séries télévisées</Button></Col>                   
                    <Col><Button variant="primary" style={{color:"black", backgroundColor:"#EFEFEF",borderColor:"#BABABA",borderRadius:"25px",fontSize:"10px",marginLeft:"-98px"}}>En direct</Button></Col>
                    <Col><Button variant="primary" style={{color:"black", backgroundColor:"#EFEFEF",borderColor:"#BABABA",borderRadius:"25px",fontSize:"10px",marginLeft:"-132px"}}>Jeux vidéo</Button></Col>
                    <Col><Button variant="primary" style={{color:"black", backgroundColor:"#EFEFEF",borderColor:"#BABABA",borderRadius:"25px",fontSize:"10px",marginLeft:"-158px"}}>Vidéos mises en ligne récement</Button></Col>
                    <Col><Button variant="primary" style={{color:"black", backgroundColor:"#EFEFEF",borderColor:"#BABABA",borderRadius:"25px",fontSize:"10px",marginLeft:"-91px"}}>Programmation</Button></Col>
                    <Col><Button variant="primary" style={{color:"black", backgroundColor:"#EFEFEF",borderColor:"#BABABA",borderRadius:"25px",fontSize:"10px",marginLeft:"-89px"}}>Developpement Web</Button></Col>
                    <Col><Button variant="primary" style={{color:"black", backgroundColor:"#EFEFEF",borderColor:"#BABABA",borderRadius:"25px",fontSize:"10px",marginLeft:"-65px"}}>Algorithmique</Button></Col>
                    <Col><Button variant="primary" style={{color:"black", backgroundColor:"#EFEFEF",borderColor:"#BABABA",borderRadius:"25px",fontSize:"10px",marginLeft:"-72px"}}>C#,C</Button></Col>
                    <Col><Button variant="primary" style={{color:"black", backgroundColor:"#EFEFEF",borderColor:"#BABABA",borderRadius:"25px",fontSize:"10px",marginLeft:'-122px'}}>Réseau</Button></Col>
                    <Col><Button variant="primary" style={{color:"black", backgroundColor:"#EFEFEF",borderColor:"#BABABA",borderRadius:"25px",fontSize:"10px",marginLeft:'-162px'}}>IA</Button></Col>








                    <Col style={{marginLeft:"-250px"}}><Button style={{fontSize:"10px",borderRadius:"80px",backgroundColor:"transparent",borderColor:"transparent",color:"black",marginLeft:"80px"}}><AiOutlineRight/></Button></Col>


               
                </Row>
            </Container>
        </div>
    )
}

export default Buttons
