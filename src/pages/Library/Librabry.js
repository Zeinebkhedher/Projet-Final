import React from 'react'
import './Library.css'
import Block from './Block/Block'
import {VscHistory} from 'react-icons/vsc'
import {BsClock} from 'react-icons/bs'
import {BiLike} from 'react-icons/bi'
import { Container, Row, Col } from 'react-bootstrap'
function Library() {
    return (
        <div className='Library'>
            <Container fluid>
               
                <Row>
                    <Col>
                        <Block icon={<BiLike/>} title='Liked Videos'/>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default Library
