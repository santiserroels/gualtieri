import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DownloadApp from '../components/DownloadApp'
import Octogonos from '../components/Octogonos'
import tick from '../resourses/tickbig.png'
import ServicesHeading from '../components/ServicesHeading'
import agro from '../resourses/imgAgro.png'
import bote from '../resourses/imgBote.png'
import boteAway from '../resourses/imgBoteAway.png'
import grass from '../resourses/imgGrass.png'
import DividerIcon from '../components/DividerIcon'
import PreFooter from '../components/PreFooter'


const Embarques = props => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div>
            <ServicesHeading classToAdd="embarques" subtitle={"La calidad es nuestra primera prioridad."} title={"Contamos con tecnología propia que nos permite seguir cada entrega y en caso de que haya un problema, poder resolverlo al momento."} />
            <DividerIcon />
            <Container className="mt-5">
                <Row>
                    <Col className="">
                        <h5 style={{ fontSize: "25px" }} className="greenblue  mb-2">Somos representantes en todo tipo de embarques, realizamos control de calidad y estamos en cada detalle cuidando los intereses de nuestros clientes.

                        </h5>
                        <h5 style={{ fontSize: "25px" }} className="greenblue  mt-2">Contamos con una gran estructura para atender cualquier demanda en todo el país y un equipo que trabaja con la mejora continua, buscando siempre la excelencia.

                        </h5>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5 pt-3">
                <Row >
                    <Col md={6} className="text-center">
                        <p style={{ backgroundColor: '#8f8b0c', width: "100%", fontSize: props.width > 769 ? "30px" : "27px" }} className="bold white ml-4 mb-n1 px-5">Soluciones que ofrecemos</p>

                    </Col >
                    <Row style={{ backgroundColor: 'whitesmoke', width: "100%" }}>
                        <Col lg={2}></Col>
                        <Col md={12} lg={4} className="d-flex f-column my-5 pl-5 align-items-center">
                            <img src={tick} className="" style={{ objectFit: "contain", width: "25px" }} />
                            <p className=" ml-2 mt-1 mb-0 big2">Representación en ventas FOB.</p>
                        </Col>
                        <Col md={12} lg={4} className="d-flex f-column my-5 pl-5 align-items-center">
                            <img src={tick} style={{ objectFit: "contain", width: "25px" }} />
                            <p className=" ml-2 mt-1 mb-0 big2"> Servicio de coordinación de cereales, oleaginosas y subproductos.</p>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
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

export default Embarques
