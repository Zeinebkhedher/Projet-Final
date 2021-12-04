import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap';
import {AiOutlineMenu} from 'react-icons/ai';
import {BsYoutube} from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';
import {MdMic} from 'react-icons/md';
import './Header.css';
import {MdOutlineVideoCall} from 'react-icons/md';
import {GrApps} from 'react-icons/gr';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {CgProfile} from 'react-icons/cg';

function Header() {
    return (
      

            <Container style={{height:'45px'}} fluid>
                <Row>
                    <Col style={{marginTop:"9px",cursor:'pointer'}}><AiOutlineMenu />
                          <BsYoutube style={{color:"red" , marginLeft:"20px",marginRight:"7px",fontSize:"20px"}}/><b>YouTube</b><p style={{fontSize:"9px", color:"grey",marginLeft:"130px",marginTop:"-23px"}}>TN</p>
                    </Col>
                 
                 
                    <Col style={{marginLeft:"583px", marginTop:"-8px"}}>
                          <div className='header-input' style={{marginTop:"2px"}}>
                                 <input type="text" placeholder='Recherhcher' /> 
                         </div>
                          <Button variant='light' className='boutton' > <AiOutlineSearch className='header-inputButton' /> </Button>
                          <MdMic className='micro' style={{marginLeft:"159px", fontSize:"16px",marginTop:"-129px" ,cursor:'pointer'}} />
                  
           
                    </Col>

                    <Col style={{marginLeft:"270px", fontSize:"17px",justifyContent:"space-between",marginTop:"15px"}}>
                            <MdOutlineVideoCall style={{marginLeft:'25px'}} />
                            <GrApps style={{marginLeft:"15px"}}/>
                            <IoMdNotificationsOutline style={{marginLeft:"9px"}}/>
                     </Col>


                    <Col>
                             <Button style={{borderColor:"blue",color:"#0131B4",backgroundColor:"white",fontSize:"12px",width:"130px",marginTop:"15px",marginLeft:'-12px'}}><CgProfile style={{marginLeft:"20px",color:"#0131B4",position:"relative"}}/> Se connecter</Button>
                  
                    </Col>
                 
                  
               
                



                </Row>
            </Container>
       
    )
}

export default Header
