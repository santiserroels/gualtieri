import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import imgTranqui from '../../resourses/eficacia-y-tranquilidad.jpg'
import DownloadApp from '../DownloadApp'
import pdfUrl from '../../resourses/Manual-de-granos.pdf'

const HomeContent4 = props => {
    
    const [imgContainer2, SetImageContainer2] = React.useState({
        backgroundImage:props.width>= 991 ? `url(${imgTranqui})` : "",
        backgroundPositionX:"50%",
        backgroundPositiony:"50%",
        backgroundSize:"cover"
    })
    
    React.useEffect(() => {
        props.width<=991 ? SetImageContainer2({}) : SetImageContainer2({
            backgroundImage:props.width>= 991 ? `url(${imgTranqui})` : "",
            backgroundPositionX:"50%",
            backgroundPositiony:"50%",
            backgroundSize:"cover"
        })
    }, [props.width])
    
    return (
        <div>
            <Container>
            <DownloadApp width={props.width} />
                <Row className="mt-5" style={imgContainer2}>
                    <Col md={6}>
                        
                    </Col>
                    <Col md={6} className="p-5 d-flex flex-column tranquilidad-col">
                        <h2 className="tranqui-title pl-5 pr-4 white">Elegí eficacia y tranquilidad</h2>
                        <h4 className="greenblue mt-2">Nuestra experiencia y recorrido en el rubro nos permitieron agilizar nuestros procesos y responder de la mejor manera a cada una de las demandas de nuestros clientes</h4>
                        <h5 className="bold mt-3">Sabemos que el tiempo es un factor valioso y por eso trabajamos constantemente para mitigar las demoras y realizar las entregas en los plazos acordados</h5>
                        <div className="d-flex justify-content-end" >
                            <button onClick={()=>window.open(pdfUrl, '_blank')}  className= "btn green-btn btn-light mx-2  mt-5 " style={{minWidth:"130px"}} > {">"} Ver manual de granos</button>
                            <button onClick={()=>window.open("https://www.instagram.com/gualtieriehijos/",'_blank')} className= "btn btn-light mx-2 mt-5 " style={{minWidth:"130px"}} > {">"} Conocé más</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeContent4
