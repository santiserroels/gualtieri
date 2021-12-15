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


const Entregas = props => {
    React.useEffect(() => {
        window.scrollTo(0,0)
    })
    return (
        
        <div>
            <ServicesHeading classToAdd="entregas" subtitle={"La calidad es nuestra primera prioridad."} title={"Contamos con tecnología propia que nos permite seguir cada entrega y en caso de que haya un problema, poder resolverlo al momento."}/>
            <DividerIcon />
            <Container className="mt-5">
                <Row>
                    <Col md={6} sm={12} className="text-left">
                    <h5 style={{fontSize:"25px"}} className="greenblue ">Realizamos el seguimiento del camión desde su arribo al puerto hasta su descarga, verificando su debida calidad y peso y solución de cualquier inconveniente que surja con las cartas de porte. 

                        </h5>
                    </Col>
                    <Col md={6} sm={12} style={{borderLeft:props.width > 769 ? "solid 1px #a9a9a9" : "" }}  className={props.width > 769 ? "text-right" : " mt-2"}>
                        <h5 style={{fontSize:"25px"}}  className="greenblue ">Contamos con un sistema informático propio por medio del cual nuestras clientes pueden acceder a las posiciones de camiones, calidad y kilos descargados en el transcurso del día e informes de descarga al finalizar el día. 

                        </h5>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5 pt-3">
                <Row >
                    <Col md={6} className="text-center">
                            <p style={{backgroundColor: '#8f8b0c',width:"100%",fontSize: props.width > 769  ? "30px" : "27px" }} className="bold white ml-4 mb-n1 px-5">Soluciones que ofrecemos</p>
                        
                    </Col >
                    <div className="d-flex justify-content-center" style={{backgroundColor: 'whitesmoke' , width:"100%"  ,flexDirection: props.width <769 ? "column" : "",}}>
                        <div className="px-5 pt-5 pb-4 d-flex w-100 text-sm-left text-md-right">
                                <img src={tick}  style={{objectFit:"contain",width:"25px"}} />
                                <p className=" ml-2 mt-1 mb-0 big2">Nos distinguimos con por nuestra comunicación permanente con cada cliente durante todos los días del año</p>
                        </div>
                    </div>
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

export default Entregas
