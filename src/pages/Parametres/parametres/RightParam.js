import React from 'react'
import { Container,Row } from 'react-bootstrap';
import HeaderParam from './HeaderParam';
import ContenuParam from './ContenuParm';
import FooterParam from './FooterParam';

function RightParam() {
    return (
        <Container style={{width:'680px',marginLeft:'200px',marginTop:"900px"}}>
        <Row>
               <HeaderParam />
        </Row>
          <hr style={{width:'1250px',marginTop:'-755px'}}></hr>
      
        <Row>
          <ContenuParam/>
        </Row>
        
        <hr style={{width:'1250px'}}></hr>
        <Row>
          <FooterParam />
        </Row>
  
        
      </Container>
    )
}

export default RightParam
