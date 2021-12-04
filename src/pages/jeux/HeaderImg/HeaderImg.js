import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap';
import './HeaderImg.css';

function HeaderImg() {
    return (
        <div  style={{backgroundColor:'grey',marginLeft:'-225px',height:"270px",marginTop:'-92px',width:"1400px"}}>
        <Container>
                <Row>
                    <Col >
                       <div className="contenuHeaderImage" >
                           <h1 className="hHeaderImage" style={{marginTop:'60px'}}>Big Update ? DMO </h1>
                           <span className="spanHeaderImage">nb vues Diffused il y'a 1 jour</span>
                           <div className="bouttonHeaderImage" style={{display:'flex'}}>
                                <Button style={{marginLeft:'55px',color:'white',height:'35px',width:'110px',backgroundColor:"transparent",borderColor:'white',cursor:'pointer'}}>Regarder</Button>
                                <div style={{display:"flex"}}>
                                    <img src="gam-09-online-gaming.jpg" />

                                 </div>
                           </div>
                       </div>
                    
                    </Col>
                </Row>

        </Container>
        </div>      
    )
}

export default HeaderImg
