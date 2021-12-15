import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Octogono from './Octogono'

const Octogonos = props => {
    return (
        <Container className="mt-5">
                <Row>
                    <Col md={12} className="text-center mt-5">
                        {props.title}
                    </Col>
                    <Col md={12} className="blue-line-background justify-content-between mt-4 d-flex">
                        <Octogono number={60} title={"Años de trayectoria"}/>
                        <Octogono number={200} title={"Embarques llegaron a puerto"}/>
                        <Octogono number={100} title={"Millones de toneladas entregadas"}/>
                        <Octogono number={50} title={"Clientes que confían"}/>
                    </Col>
                </Row>
            </Container>
    )
}

export default Octogonos
