import './App.css';
import Header from './compnents/Header';
import Buttons from './compnents/Buttons';
import { Container,Row,Col } from 'react-bootstrap';
import LeftSideBar from './compnents/LeftSideBar';
import Jeux from './pages/jeux/Jeux';
import MainRouter from './MainRouter';
import Recommanded from './compnents/Recommanded';
import Recommendation from "./pages/Recommendation/Recommendation"
import Library from './pages/Library/Librabry';
import {Link} from 'react-router-dom';
import Explore from './pages/Explore/Explore'
import Historique from './pages/Historique/Historique';
import Actualite from './pages/Actualite/Actualite';
import Parametres from './pages/Parametres/Parametres'
import Biblio from './pages/Biblio/Biblio';
import Chaines from './pages/Chaines/Chaines'
import Main from './pages/Main/Main';
import Principale from './pages/Principale/Principale';

function App() {
  return (
   
     
      <Container fluid p>
           <Row>
                <Col><Header/></Col>
       
            </Row>

            <Row>
                  <div  style={{marginLeft:"145px",width:'1350px',color:"#A6ACAF ",marginTop:'-7px'}}>
                        <hr></hr>
                   </div>
            </Row>   

            <Row>
                 <Col>
                     <LeftSideBar fluid />
                 </Col>
                
                 <Col>
                     <Buttons style={{marginTop:'-189px'}}/>
                 </Col>
             </Row>    


           <Row>
                <div  style={{marginLeft:"145px",width:'1350px',color:"#A6ACAF ",marginTop:'-3px'}}>
                      <hr></hr>
                 </div>
          </Row>
       
          
            <Row>
                <Col> 
                    <Principale/>
                 </Col>
            </Row> 
            



         
       </Container>

     
   
    
   




  
  );
}

export default App;
