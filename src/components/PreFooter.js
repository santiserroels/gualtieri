import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import agro from '../resourses/imgAgro.png'
import bote from '../resourses/imgBote.png'
import boteAway from '../resourses/imgBoteAway.png'
import grass from '../resourses/imgGrass.png'

const PreFooter = () => {
    return (
        <Container>
                
                <Row className="mt-4">
                    <Col md={6} lg={3} sm={12} className="px-2 my-2">
                        <div style={{ minHeight: "250px" }} className="text-center  bg-obscuro">
                            <img className="mx-2" src={bote} alt=""></img>
                            <h2 style={{ zIndex: "1" }} className="white ">
                                EVITÁ<br /> DEMORAS
                        </h2>
                        </div>
                    </Col>
                    <Col md={6} lg={3} sm={12} className="px-2 my-2">
                        <div style={{ minHeight: "250px" }} className="text-center  bg-obscuro">
                            <img className="mx-2" src={agro} alt=""></img>
                            <h2 style={{ zIndex: "1" }} className="white ">
                                CONFIANZA Y<br /> COLABORACIÓN
                        </h2>
                        </div>
                    </Col>
                    <Col md={6} lg={3} sm={12} className="px-2 my-2">
                        <div style={{ minHeight: "250px" }} className="text-center  bg-obscuro">
                            <img className="mx-2" src={grass} alt=""></img>
                            <h2 style={{ zIndex: "1" }} className="white ">
                                ATENCIÓN 100% <br /> PERSONALIZADA
                        </h2>
                        </div>
                    </Col>
                    <Col md={6} lg={3} sm={12} className="px-2 my-2">
                        <div style={{ minHeight: "250px" }} className="text-center  bg-obscuro">
                            <img className="mx-2" src={boteAway} alt=""></img>
                            <h2 style={{ zIndex: "1" }} className="white ">
                                CUIDAMOS <br /> CADA  DETALLE
                        </h2>
                        </div>
                    </Col>

                </Row>
            </Container>
    )
}

export default PreFooter
