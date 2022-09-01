import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ServicesHeading = ({title,subtitle,classToAdd,isnew}) => {
    const containerStyle = {
        padding: isnew ? "200px 0 100px 0" :"200px 0",
    }
    
    return (
        <div className={"bg-gradient " +classToAdd } style={containerStyle}>
            <Container>
                <Row>
                    <Col>
                    <h5 className="white blue-bg bold px-3 py-1" style={{width:"max-content"}}>{">"}{subtitle}</h5>
                    <h1 className="white">{title}</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ServicesHeading
