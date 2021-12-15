import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import ServicesHeading from '../components/ServicesHeading'

import DividerIcon from '../components/DividerIcon'
import PreFooter from '../components/PreFooter'
import octogonoLarge from "../resourses/octogono-large.png"



const ServDeAcondicionamiento = props => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    })


    return (

        <div>
            <ServicesHeading classToAdd="acondicionamiento" subtitle={"La calidad es nuestra primera prioridad."} title={"A partir del 1 de Julio de 2021 estas seran las tarifas de las plantas de acondicionamiento de San Lorenzo, Gral Lagos, Pto Gral San Martin y Timbues."} />
            <DividerIcon />
            <Container className="mt-5">
               <Row>
                   <Col md={6} sm={12}>
                        <h3 className="greenblue bold px-3 py-1" style={{width:"max-content"}}>{">"} Soja / Maiz / Sorgo / Trigo</h3>
                   </Col>
                   <Col md={6} sm={12} className="text-right">
                    <h3 className="white gold-bg bold px-5 ml-auto py-1" style={{width:"max-content"}}>Diciembre 2021</h3>
                   </Col>
               </Row>
               <Row>
                   <Col md={3} className="d-flex mt-5 flex-column text-center aling-items-center">
                        <h4 className="greenblue bold">Paritaria</h4>
                        <div className="text-center gold flex-column d-flex" style={{backgroundImage:`url(${octogonoLarge})`,backgroundSize:"contain",minHeight:"180px",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
                            <h2 style={{fontSize:"48px"}} className="bold mb-0 mt-auto large">$50.00</h2>
                            <p className="bold mb-auto big">Por quintal</p>
                        </div>
                   </Col>
                   <Col md={3} className="d-flex mt-5 flex-column text-center aling-items-center">
                        <h4 className="greenblue bold">Secada por punto</h4>
                        <div className="text-center gold flex-column d-flex" style={{backgroundImage:`url(${octogonoLarge})`,backgroundSize:"contain",minHeight:"180px",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
                            <h2 style={{fontSize:"48px"}} className="bold mb-0 mt-auto large">$50.00</h2>
                            <p className="bold mb-auto big">Por quintal</p>
                        </div>
                   </Col>
                   <Col md={3} className="d-flex mt-5 flex-column text-center aling-items-center">
                        <h4 className="greenblue bold">Zaranda</h4>
                        <div className="text-center gold flex-column d-flex" style={{backgroundImage:`url(${octogonoLarge})`,backgroundSize:"contain",minHeight:"180px",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
                            <h2 style={{fontSize:"48px"}} className="bold mb-0 mt-auto large">$50.00</h2>
                            <p className="bold mb-auto big">Por quintal</p>
                        </div>
                   </Col>
                   <Col md={3} className="d-flex mt-5 flex-column text-center aling-items-center">
                        <h4 className="greenblue bold">Mezcla</h4>
                        <div className="text-center gold flex-column d-flex" style={{backgroundImage:`url(${octogonoLarge})`,backgroundSize:"contain",minHeight:"180px",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
                            <h2 style={{fontSize:"48px"}} className="bold mb-0 mt-auto large">$50.00</h2>
                            <p className="bold mb-auto big">Por quintal</p>
                        </div>
                   </Col>
               </Row>
               <Row>
                   <Col className="text-center">
                        <h4 className="gray bold">Vigentes desde el 1 de diciembre y hasta el próximo aumento</h4>
                   </Col>
               </Row>
            </Container>
            <PreFooter />
        </div>
    )
}

export default ServDeAcondicionamiento
