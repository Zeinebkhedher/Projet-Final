import './Principale.css';
import Homevideo from './HomeVideo/HomeVideo';
import HautPrincipale from './HautPrincipale/HautPrincipale';
import NavPrincipale from './NavPrincipale/NavPrincipale';
import TousVidPrincipale from './TousVidPrincipale/TousVidPrincipale';
import{BsPlay} from 'react-icons/bs';
import Video from '../../compnents/Video' 
import '../Library/Block/Block.css'
import emna1 from './emna1.png';
import emna2 from './emna2.png';
import emna3 from './emna3.png';
import emna4 from './emna4.png';
import bigcheese1 from './bigcheese1.png';
import safe22 from './safe22.png';
import yz from './yz.png';
import {Link} from 'react-router-dom';
import fromage from './HautPrincipale/fromage.png'

function Principale() {
  return (
    <div className="App" style={{width:'1000px',marginLeft:"140px"}}>
      <HautPrincipale/>
      <NavPrincipale/>
      
      <div className='videos' style={{marginLeft:"80px",marginTop:"35px"}}>
                    <Link to='/emna-UML'> <Video img1={emna1} img2={fromage}  title='Introduction du langage UML' channel='BigCheese' view='24M' timelapse='3 months ago'/></Link>
                    <Link to='/emna-DCU' >  <Video img1={emna2}  img2={fromage}  title=" Diagramme de cas d'utilisation" channel='BigCheese' view='24M' timelapse='3 months ago'/> </Link>
                    <Link to='/YZ-TODOList'>  <Video img1={yz} img2={fromage}  title='vintage evening - jazz' channel='BigCheese' view='24M' timelapse='3 months ago'/> </Link>
                    <Link to='/emna-Classe'>    <Video img1={emna3} img2={fromage}  title='Diagramme de classe' channel='BigCheese' view='24M' timelapse='3 months ago'/> </Link>
                    <Link to='/DataBase-intro'>   <Video img1={safe22} img2={fromage}  title='vintage evening - jazz' channel='BigCheese' view='24M' timelapse='3 months ago'/> </Link>
                    <Link to='/BigCheese'>   <Video img1={bigcheese1} img2={fromage}  title='vintage evening - jazz' channel='BigCheese' view='24M' timelapse='3 months ago'/> </Link>
                    <Link to='/emna-Analyse'>   <Video img1={emna4} img2={fromage}  title='vintage evening - jazz' channel='BigCheese' view='24M' timelapse='3 months ago'/> </Link>
                  
         </div>  
        <hr className="hrPrin"/> 
       
</div>
    
  );
}

export default Principale;