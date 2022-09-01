import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ServicesHeading from '../components/ServicesHeading'
import DividerIcon from '../components/DividerIcon'
import PreFooter from '../components/PreFooter'


const ZonaDeServ = props => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    })


    return (

        <div>
            <ServicesHeading classToAdd="entregas" subtitle={"La calidad es nuestra primera prioridad."} title={"Atendemos en todos los puertos y fábricas del cordón industrial"} />
            <DividerIcon />
            <Container className="mt-5">
                <Row>
                    <Col>
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/eIpxkAKCrIQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video"></iframe>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="mb-5">
                    <Col className="d-flex justify-content-center">
                        <button onClick={() => window.open("https://www.instagram.com/gualtieriehijos/", '_blank')} style={{ border: "solid 1px #2b817e", borderRadius: "0px", backgroundColor: "#2b817e" }} className="btn btn-light white  mt-5 px-5" > {">"} Conocé más</button>
                    </Col>
                </Row>
            </Container>
            <PreFooter />
        </div>
    )
}

export default ZonaDeServ
