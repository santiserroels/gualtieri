import React from 'react'
import CircleHome from './CircleHome'
import CircleHomeHref from './CircleHomeHref'
import iconBoat from '../resourses/embarques.png'
import iconG from '../resourses/servicios0.png'
import iconMion from '../resourses/entregascamiones.png'
import iconCall from '../resourses/servicios2.png'
import iconBuilding from '../resourses/somos.png'
import iconUbication from '../resourses/puertosterminales.png'
import arrowRight from '../resourses/arrow-right.png'
import { Col, Container, Row } from 'react-bootstrap'


const CardAnimatedHome = ({cardHandler}) => {
    const CardContainerStyle = {
        backgroundColor: "rgba(43,129,126,0.5)",
        padding: "10px 0px 10px 50px",
        marginTop: "3rem",
        marginBottom: "5rem"


    }
    const arrowStyle = {
        backgroundColor: "white",
        width: "max-content",
        padding: "7px 11px",
        borderRadius: "20px",
        position: "fixed",
        top: "46%",

        left: "-15px"
    }
    const cardHomeStyle = {
        backgroundColor: "#e6f1ef",
        display: "inline-block",
        

    }
    const containerFix = {
        marginLeft: "0px",
        maxWidth: "1220px",

    }
    
    return (
        <div className="container-card-home-open pr-md-5" id="container-card-home" style={CardContainerStyle}>
            <Container className="" style={containerFix}>
                <Row>
                    <Col>
                        <div className="card-home text-left p-4" style={cardHomeStyle}>
                            {window.innerWidth > 1000 ? <div className="title-container-home">
                            <h2 className="bold">Innovación. Calidad. Profesionalismo.</h2>
                            <h3 className="greenblue m-0 ">{">"} Somos la mejor opción para acopiadores, exportadores y cooperativas.</h3></div> : <div className="title-container-home"><h2 className="bold">Innovación.<br/> Calidad.<br/> Profesionalismo.</h2>
                            <h3 className="greenblue m-0 ">{">"} Somos la mejor opción para<br/> acopiadores, exportadores<br/> y cooperativas.</h3></div>}
                            <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                <CircleHome link="/distancia-entre-puertos" img={iconBoat} text={"Distancia entre puertos"} />
                                <CircleHome link="/zona-de-servicios" img={iconUbication} text={"Zona de servicios"} />
                                <CircleHome link="/tipo-de-camiones" img={iconMion} text={"Tipo de camiones"} />
                                <CircleHomeHref link="https://www.cac.bcr.com.ar/es/arbitraje-y-calidad/liquidacion-y-mermas/liquidacion-de-mercaderia-0" img={iconCall} text={"Consultas sobre <br/> calidades y mermas"} target={"_blank"}/>
                                <CircleHome link="/servicio-de-acondicionamiento" img={iconBuilding} text={"Costo de servicios <br/> de acondicionamiento"} />
                                <CircleHomeHref link="https://www.cac.bcr.com.ar/es/arbitraje-y-calidad/normas-de-comercializacion" img={iconG} text={"Normas de comercialización"} target={"_blank"}/>  
                            </div>

            </div>
                        <div onClick={(e) => cardHandler(e)} style={arrowStyle}>
                            <img className="arrow-left" src={arrowRight} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default CardAnimatedHome
