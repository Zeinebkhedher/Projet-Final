import React from 'react'
import Video from '../../../compnents/Video'
import './Block.css'
import Emna1 from './Emna1.png';
import Emna2 from './Emna2.png';
import Emna3 from './Emna3.png';
import Emna4 from './Emna4.png';
import BigCheese from './BigCheese.png';
import safe2 from './safe2.png';
import YZ from './YZ.png';
import Safe1 from '../../Main/GVideo/Safe/Safe1';
import programmation  from './programmation.jpg';
import react from './react.png'; 
import uml1 from './uml1.jpg'; 
import bigdata from'./bigdata.png';
import {Link} from 'react-router-dom';
function Block({icon,title}) {
    return (      
        <div className='block2'>   
              
                <div className='videos'>
                   <Link to='/emna-UML'> <Video img1={Emna1} img2={BigCheese}  title='Introduction du langage UML' channel='BigCheese' view='24M' timelapse='3 months ago'/></Link>
                  <Link to='/emna-DCU' >  <Video img1={Emna2}  img2={BigCheese}  title=" Diagramme de cas d'utilisation" channel='BigCheese' view='24M' timelapse='3 months ago'/> </Link>
                  <Link to='/YZ-TODOList'>  <Video img1={YZ} img2={BigCheese}  title='vintage evening - jazz' channel='BigCheese' view='24M' timelapse='3 months ago'/> </Link>
                  <Link to='/emna-Classe'>    <Video img1={Emna3} img2={BigCheese}  title='Diagramme de classe' channel='BigCheese' view='24M' timelapse='3 months ago'/> </Link>
                        <Video img1={uml1} img2="//yt3.ggpht.com/UiCgbNLn12OTgjcL8Oa10Ig2KTEiZ56f-Ut-_7gcVleZ8P_eukKotZbEsZXGNaU2EKjn0ckF=s176-c-k-c0x00ffffff-no-rj-mo"  title='vintage evening - jazz' channel='cee' view='24M' timelapse='3 months ago'/>         
                  <Link to='/DataBase-intro'>   <Video img1={safe2} img2={BigCheese}  title='vintage evening - jazz' channel='BigCheese' view='24M' timelapse='3 months ago'/> </Link>
                        <Video img1={programmation} img2="//yt3.ggpht.com/UiCgbNLn12OTgjcL8Oa10Ig2KTEiZ56f-Ut-_7gcVleZ8P_eukKotZbEsZXGNaU2EKjn0ckF=s176-c-k-c0x00ffffff-no-rj-mo"  title='vintage evening - jazz' channel='Hiney' view='24M' timelapse='3 months ago'/>
                  <Link to='/BigCheese'>   <Video img1={BigCheese} img2={BigCheese}  title='vintage evening - jazz' channel='BigCheese' view='24M' timelapse='3 months ago'/> </Link>
                        <Video img1={react} img2="//yt3.ggpht.com/UiCgbNLn12OTgjcL8Oa10Ig2KTEiZ56f-Ut-_7gcVleZ8P_eukKotZbEsZXGNaU2EKjn0ckF=s176-c-k-c0x00ffffff-no-rj-mo"  title='vintage evening - jazz' channel='WebPro' view='24M' timelapse='3 months ago'/>
                  <Link to='/emna-Analyse'>   <Video img1={Emna4} img2={BigCheese}  title='vintage evening - jazz' channel='BigCheese' view='24M' timelapse='3 months ago'/> </Link>
                    <div>
                        <hr  style={{width:"1200px",marginTop:"-2px"}}/>
                    </div> 
                    <Video img1={bigdata} img2="//yt3.ggpht.com/UiCgbNLn12OTgjcL8Oa10Ig2KTEiZ56f-Ut-_7gcVleZ8P_eukKotZbEsZXGNaU2EKjn0ckF=s176-c-k-c0x00ffffff-no-rj-mo"  title='vintage evening - jazz' channel='cee' view='24M' timelapse='3 months ago'/>
                    <Video img1='https://i.ytimg.com/vi/DGyd7t2vJaI/maxresdefault.jpg'  img2="//yt3.ggpht.com/UiCgbNLn12OTgjcL8Oa10Ig2KTEiZ56f-Ut-_7gcVleZ8P_eukKotZbEsZXGNaU2EKjn0ckF=s176-c-k-c0x00ffffff-no-rj-mo"  title='vintage evening - jazz' channel='cee' view='24M' timelapse='3 months ago'/>
                    <Video img1='https://i.ytimg.com/vi/RkjjPj5vstc/maxresdefault.jpg' img2="//yt3.ggpht.com/UiCgbNLn12OTgjcL8Oa10Ig2KTEiZ56f-Ut-_7gcVleZ8P_eukKotZbEsZXGNaU2EKjn0ckF=s176-c-k-c0x00ffffff-no-rj-mo"  title='vintage evening - jazz' channel='cee' view='24M' timelapse='3 months ago'/>
                    <Video img1='https://i.ytimg.com/vi/5vV412eHGHc/maxresdefault.jpg' img2="//yt3.ggpht.com/UiCgbNLn12OTgjcL8Oa10Ig2KTEiZ56f-Ut-_7gcVleZ8P_eukKotZbEsZXGNaU2EKjn0ckF=s176-c-k-c0x00ffffff-no-rj-mo"  title='vintage evening - jazz' channel='cee' view='24M' timelapse='3 months ago'/> 
                    <Video img1='https://i.ytimg.com/vi/5vV412eHGHc/maxresdefault.jpg' img2="//yt3.ggpht.com/UiCgbNLn12OTgjcL8Oa10Ig2KTEiZ56f-Ut-_7gcVleZ8P_eukKotZbEsZXGNaU2EKjn0ckF=s176-c-k-c0x00ffffff-no-rj-mo"  title='vintage evening - jazz' channel='cee' view='24M' timelapse='3 months ago'/> 
              
                    <Video img1='https://i.ytimg.com/vi/5vV412eHGHc/maxresdefault.jpg' img2="//yt3.ggpht.com/UiCgbNLn12OTgjcL8Oa10Ig2KTEiZ56f-Ut-_7gcVleZ8P_eukKotZbEsZXGNaU2EKjn0ckF=s176-c-k-c0x00ffffff-no-rj-mo"  title='vintage evening - jazz' channel='cee' view='24M' timelapse='3 months ago'/>
                    <Video img1='https://i.ytimg.com/vi/DGyd7t2vJaI/maxresdefault.jpg'  img2="//yt3.ggpht.com/UiCgbNLn12OTgjcL8Oa10Ig2KTEiZ56f-Ut-_7gcVleZ8P_eukKotZbEsZXGNaU2EKjn0ckF=s176-c-k-c0x00ffffff-no-rj-mo"  title='vintage evening - jazz' channel='cee' view='24M' timelapse='3 months ago'/>
                    <Video img1='https://i.ytimg.com/vi/RkjjPj5vstc/maxresdefault.jpg' img2="//yt3.ggpht.com/UiCgbNLn12OTgjcL8Oa10Ig2KTEiZ56f-Ut-_7gcVleZ8P_eukKotZbEsZXGNaU2EKjn0ckF=s176-c-k-c0x00ffffff-no-rj-mo"  title='vintage evening - jazz' channel='cee' view='24M' timelapse='3 months ago'/>
                    <Video img1='https://i.ytimg.com/vi/5vV412eHGHc/maxresdefault.jpg' img2="//yt3.ggpht.com/UiCgbNLn12OTgjcL8Oa10Ig2KTEiZ56f-Ut-_7gcVleZ8P_eukKotZbEsZXGNaU2EKjn0ckF=s176-c-k-c0x00ffffff-no-rj-mo"  title='vintage evening - jazz' channel='cee' view='24M' timelapse='3 months ago'/> 
                    <Video img1='https://i.ytimg.com/vi/5vV412eHGHc/maxresdefault.jpg' img2="//yt3.ggpht.com/UiCgbNLn12OTgjcL8Oa10Ig2KTEiZ56f-Ut-_7gcVleZ8P_eukKotZbEsZXGNaU2EKjn0ckF=s176-c-k-c0x00ffffff-no-rj-mo"  title='vintage evening - jazz' channel='cee' view='24M' timelapse='3 months ago'/> 
               
                </div>
        </div>
    )
}

export default Block