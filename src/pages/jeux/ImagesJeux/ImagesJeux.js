
import React from 'react'
import { Container,Row,Col} from 'react-bootstrap';
import "./ImagesJeux.css"
import {MdNavigateNext} from "react-icons/md"
function ImagesJeux() {
    return (









        <Container >
            <Row style={{marginLeft:"-180px",marginTop:"20px"}}>
                <Col >
                        <img className="jeux1" src="//yt3.ggpht.com/gOYoKI92Vf16DzVh_wKZ9fBsHrbFX6wNdGhvjcpkB_eqC-2qCZA4DTZgnvp4u4_oFOysr8ASjw" />
                      <div >
                          <p className="j1">Mobile legends:Bang bang</p>
                          <small className="j1" style={{color:"#797D7F"}}> 27 K sepectateurs </small>
                        </div>
                </Col>



                <Col>
                <img className="img2" src="//yt3.ggpht.com/-q1MbFr9kGdNcIi07-l4DHbNdtHSeGpBxSI5zbIRzp-1EqH70k6DRrK7UVthwoKBp70M1IRriA"/>
                <div >
                          <p className="j2"><b>Counter-Strike</b></p>
                          <small className="j2"> 27 K sepectateurs </small>
                        </div>
                </Col>




                <Col>
              <img className="img3" src="//yt3.ggpht.com/9r9Qg_hGMSVq3HM1gbDjgSolEKkGx9h7j-6X9oYMv16Qaz79DSozpqSQZgokCB8dQbbFuZmf"/>
              <div >
                          <p className="j3"><b>Arena of Valor</b></p>
                          <small className="j3" style={{marginTop:"-5px"}}> 27 K sepectateurs </small>
                        </div>
                </Col>

               
                <Col>
                <img className="img4" src="//yt3.ggpht.com/-5rNmG4H2jt11tAOlP1jV9UcHunNuKXn3llpCM6FHxloynq_IcEFUdvm0qUJ3pfGs3bjjQrP0Cs"/>                
                <div>
                       <p className="j4"><b>Minecraft</b></p>
                        <small className="j4" style={{marginBottom:"5px"}}>16 K sepectateurs </small>
                </div> 
                </Col>

                <Col>
                <img className="img5" src="//yt3.ggpht.com/WvDDPQvVwx0en3rAuKQ5-8q9nmiHxRRF5-xsbDn3VdH4CwJUnxjYZCzrDdIigbmG0_XWqL3JGfY"/>
                    <div>
                        <p className="j5"><b>World on tanks</b></p>
                        <small className="j5">16 K spectateur</small>
                    </div>
                    
                </Col>




                
                <Col>
                <img className="img6" src="//yt3.ggpht.com/czMVQlGWX0Hi1bglGj3a3qMZ36Z01cYDB2he1vom9TSsrC5yjNC2qna1xE-J07SvWWprzQMzk8U"/>
                    <div>
                        <p className="j6"><b>World on tanks</b></p>
                        <small className="j6">16 K spectateur</small>
                    </div>
                    <MdNavigateNext style={{marginLeft:"-84px",marginTop:"-310px",fontSize:"10px",borderRadius:"50px",width:"28px",height:"28px",border:"grey",backgroundColor:"white",color:"#909497 "}}/>
                </Col>


                





            </Row>
        </Container>
    )
}

export default ImagesJeux
