import React from 'react'
import CircleHome from './CircleHome'
import iconBoat from '../resourses/embarques.png'
import iconG from '../resourses/servicios0.png'
import iconMion from '../resourses/entregascamiones.png'
import iconCall from '../resourses/servicios2.png'
import iconBuilding from '../resourses/somos.png'
import iconUbication from '../resourses/puertosterminales.png'
import arrowRight from '../resourses/arrow-right.png'
import { Container, Row, Col } from 'react-bootstrap'
import SmallCircles from './SmallCircles'
const CirclesHome = () => {


    const CardContainerStyle = {
        backgroundColor: "rgba(43,129,126,0.5)",
    }
    return (
        <div className="mb-5 gold">
            <Container className="p-5 white" style={CardContainerStyle}>
            

                <Row>
                    <Col><SmallCircles link="/distanciaEP" img={iconBoat} text={"Distancia entre puertos"} /></Col>
                    <Col><SmallCircles link="/zonaDeServ" img={iconUbication} text={"Zona de servicios"} /></Col>
                </Row>
                <Row>
                    <Col><SmallCircles link="/tipo-de-camiones" img={iconMion} text={"Tipo de camiones"} /></Col>
                    <Col><SmallCircles img={iconBoat} text={"Distancia entre puertos"} /></Col>
                </Row>
                <Row>
                    <Col><SmallCircles img={iconCall} text={"Consultas sobre <br/> calidades y mermas"}  /></Col>
                    <Col><SmallCircles link="/ServDeAcondicionamiento" img={iconBuilding} text={"Costo de servicios <br/> de acondicionamiento"}  /></Col>
                </Row>
                <Row>
                    <Col><SmallCircles img={iconG} text={"Normas de comercialización"}  /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default CirclesHome
