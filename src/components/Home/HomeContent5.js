import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import DividerWtitle from '../DividerWTittle'
import iconWeb from '../../resourses/web.png'
import iconPhone from '../../resourses/phone.png'
import iconLocation from '../../resourses/location.png'
import iconMail from '../../resourses/mail.png'
import { Link } from 'react-router-dom'
import FormHome from '../Form'

const HomeContent5 = () => {
    return (
        <div>
            <Container id="contact" className="mt-5">
                <Row className="mt-5">

                    <Col md={6} style={{ backgroundColor: "#f0f0f0" }} className="d-flex flex-column p-0">
                        <h2 className="gold mt-2 ml-4">Contacto</h2>
                        <Row className="p-3">
                            <Col className="py-2" lg={6} md={12}>
                                <div className="d-flex align-items-center px-1">
                                    <img src={iconLocation} style={{ objectFit: "contain" }} />
                                    <a target="_blank" href="https://goo.gl/maps/8HibgknNRgae4ocy9" className="greenblue big ml-2"> H. Yrigoyen 1184, CP 2000 San Lorenzo, Santa Fe </a>
                                </div>
                            </Col>
                            <Col className="py-2" lg={6} md={12}>
                                <div className="d-flex align-items-center px-1 mt-4">
                                    <img src={iconPhone} style={{ objectFit: "contain" }} />
                                    <a target="_blank" href="tel:+5403476428100" className="greenblue big ml-2"> Tel: 03476 428 100  </a>
                                </div>
                            </Col>
                            <Col className="py-2" lg={6} md={12}>
                                <div className="d-flex align-items-center px-1">
                                    <img src={iconMail} style={{ objectFit: "contain" }} />
                                    <div className="d-flex flex-column emails">
                                        <a target="_blank" href="mailto:entregas@gualtieriehijos.com.ar" className="greenblue big ml-2">entregas@gualtieriehijos.com.ar</a>
                                        <a target="_blank" href="mailto:embarques@gualtieriehijos.com.ar" className="greenblue big ml-2">embarques@gualtieriehijos.com.ar</a>
                                    </div>
                                </div>
                            </Col>
                            <Col className="py-2" lg={6} md={12}>
                                <div className="d-flex align-items-center px-1 mt-4">
                                    <img src={iconWeb} style={{ objectFit: "contain" }} />
                                    <a target="_blank" href="https://goo.gl/maps/8HibgknNRgae4ocy9" className="greenblue big ml-2"> gualtieriehijos.com.ar </a>
                                </div>
                            </Col>
                        </Row>



                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13422.365692061368!2d-60.7362051!3d-32.7500382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa18c062b85eeae4c!2sGualtieri%20e%20Hijos%20SRL!5e0!3m2!1ses-419!2sar!4v1611340101611!5m2!1ses-419!2sar"
                            width="100%"
                            height="300"
                            frameBorder="0"
                            style={{ marginTop: "20px" }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        />
                    </Col>
                    <Col md={6} className="">
                        <FormHome />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeContent5
