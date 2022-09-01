import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DividerIcon from '../components/DividerIcon'
import DownloadApp from '../components/DownloadApp'
import Octogonos from '../components/Octogonos'
import PreFooter from '../components/PreFooter'
import ServicesHeading from '../components/ServicesHeading'
import tick from '../resourses/tickbig.png'

const Nosotros = props => {
    React.useEffect(() => {
        window.scrollTo(0,0)
    })
    const titleOctogonos = <h3 className="gold">
    Contamos con <span className="px-2" style={{backgroundColor:"#2b817e", color:"white"}}> tecnología propia</span> que nos permite seguir cada entrega
</h3>
    return (
        <div>
            <ServicesHeading classToAdd="us" subtitle={"La calidad es nuestra primera prioridad."} title={"Contamos con tecnología propia que nos permite seguir cada entrega y en caso de que haya un problema, poder resolverlo al momento."}/>
            <DividerIcon />
            <Container className="mt-5">
                <Row>
                    <Col className="text-center">
                        <h4 className="greenblue bold">Hace<span className="px-2" style={{backgroundColor:"#2b817e", color:"white"}}>más de 60</span>años que estamos en el mercado ofreciendo nuestros servicios  de entrega, recepción y embarque de cereales, oleaginosas, subproductos y aceites.
                            Atendemos en todos los puertos y fábricas del cordón industrial.
                        </h4>
                    </Col>
                </Row>
            </Container>
            <Octogonos title={titleOctogonos} />
            <Container className="mt-5 pt-3">
                <Row >
                    <Col md={12}>
                        <p style={{backgroundColor: '#8f8b0c',fontSize: props.width > 769  ? "30px" : "27px" , width:"fit-content"}} className=" white ml-4 mb-n1 px-5">Estamos en cada detalle: ANTES, DURANTE Y DESPUÉS DE CADA OPERACIÓN.</p>
                    </Col>
                    <div style={{backgroundColor: 'whitesmoke',width: '100%'}}>
                        <Col className="px-5 pt-5 pb-4 d-flex"  md={12}>
                                <img src={tick} style={{objectFit:"contain",width:"25px"}} alt=""/>
                                <p className=" ml-2 mt-1 mb-0 big2"> Contamos con tecnología propia y un gran equipo atento a cualquier imprevisto, garantizando el servicio en los tiempos previstos.</p>
                        </Col>
                    </div>
                </Row>
            </Container>
            <Container className="mt-5">
            <DownloadApp width={props.width} />
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

export default Nosotros
