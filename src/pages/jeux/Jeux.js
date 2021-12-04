import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import HeaderImg from './HeaderImg/HeaderImg';
import HeaderGames from './HeaderGames/HeaderGames';
import Recommendations from './Recommendations';
import Games from './Games/Games';
import Tendances from './Tendances';
function Jeux() {
  return (
   <Container >
     <Row style={{marginLeft:"-350px",width:"200px"}}>
       <Col>barre de recherche</Col>
     </Row>
     <Row style={{marginLeft:'245px',marginTop:'55px'}}>
       <div>
       <HeaderImg /> 
       </div>
      <Row >
          <HeaderGames />
       </Row> 

        <div>
          <Games  />
        </div>
       
      
     </Row>
     
     <hr style={{marginTop:"-888px",marginLeft:"284px",width:"860px",color:"#909497 "}}></hr>
    <Row style={{marginTop:"5px"}}>
      <Recommendations />

    </Row>
    <hr style={{marginLeft:"100px",marginLeft:"284px",width:"860px",color:"#909497 "}}></hr>
    <Row>
      <Tendances style={{marginTop:"5px"}} />
    </Row>

   </Container>
  );
}

export default Jeux;
