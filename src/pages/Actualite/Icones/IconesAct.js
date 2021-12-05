import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import "./IconesAct.css"
function IconesAct() {
    return (
        <Container style={{marginTop:"-625px"}}>
            <Row>
                <p style={{marginLeft:"175px"}}><b>Rubriques</b></p>
            </Row>
            <Row>
                <Col>
                <img className="img1VidAct" src="//yt3.ggpht.com/TquuOTJFq3CUwcmuVE1Hfqz2COvxNqGYLdapCK31zpEWr25neZvj87zzVrZRgKl0BBe-6oe1=s176-c-k-c0x00ffffff-no-rj-mo"/>
                <p style={{marginLeft:"194px",marginBottom:"5px",cursor:"pointer",width:"145px"}}>Actualités sportives</p>
                <small style={{marginLeft:"215px"}}>903K abonnés</small> <br/>
                <Button style={{marginTop:"25px",marginLeft:"196px",borderColor:"#CACFD2  ",backgroundColor:"#CACFD2  ",color:"#839192",cursor:"pointer"}}>S'ABONNER</Button>
                </Col>

                <Col>
                <img className="img2VidAct" src="//yt3.ggpht.com/7ORKquicVr6NNl6PqRlZebYbO8cwcb-QE6yv91K31mEL6OfunlItExCTOZ1C7jG2HV6hwvfh=s176-c-k-c0x00ffffff-no-rj-mo"/>
                <p style={{marginBottom:"5px",cursor:"pointer",marginLeft:"0px"}}>Actualités média</p>
                <small style={{marginLeft:"14px"}}>703K abonnés</small> <br/>
                <Button style={{marginTop:"24px",borderColor:"#CACFD2  ",backgroundColor:"#CACFD2  ",color:"#839192",cursor:"pointer"}}>S'ABONNER</Button>
                </Col>
                <Col>
                <img className="img3VidAct" src="//yt3.ggpht.com/Easnll8DOse5pVq39LsHRcD7oVkKgqLATuB7nUdxsjkmTWT2H94KYYZxLvWKITZyI_bzgfpVeXM=s176-c-k-c0x00ffffff-no-rj-mo"/>
                <p style={{marginLeft:"-80px",marginBottom:"5px",cursor:"pointer"}}>Actualités financières</p>
                <small style={{marginLeft:"-52px"}}>816K abonnés</small><br/>
                <Button style={{marginTop:"25px",marginLeft:"-64px",borderColor:"#CACFD2  ",backgroundColor:"#CACFD2  ",color:"#839192",cursor:"pointer"}}>S'ABONNER</Button>
                </Col>


                <Col>
                <img className="img4VidAct" src="//yt3.ggpht.com/jKIovWeVDw5pfSue1RxnrA0njV5ieqY53dAlakSRdGxTATSvEpmBYEqu2iBWdTWFXt3XHRvBSQ=s176-c-k-c0x00ffffff-no-rj-mo"/>
                <p style={{marginLeft:"-150px",marginBottom:"5px",cursor:"pointer"}}>Actualités technologiques</p>
                <small style={{marginLeft:"-95px"}}>477K abonnés</small><br/>
                <Button style={{marginTop:"20px",marginLeft:"-110px",borderColor:"#CACFD2  ",backgroundColor:"#CACFD2  ",color:"#839192",cursor:"pointer"}}>S'ABONNER</Button>
                </Col>


                <Col>
                <img className="img5VidAct" src="//yt3.ggpht.com/qniKG7-mMa2oT8k3I_YomGtgVJbaNafNsdL1F3Vi32-PfMk2igv_2KNKWD5hTkWu6gCVzLe1=s176-c-k-c0x00ffffff-no-rj-mo"/>
                <p style={{marginLeft:"-185px",marginBottom:"5px",cursor:"pointer"}}>Actualités internationales</p>
                <small style={{marginLeft:"-145px"}}>1.32M abonnés</small><br/>
                <Button style={{marginTop:"15px",marginLeft:"-150px",borderColor:"#CACFD2  ",backgroundColor:"#CACFD2  ",color:"#839192",cursor:"pointer"}}>S'ABONNER</Button>
                </Col>

              


            </Row>
            
        </Container>
    )
}

export default IconesAct
