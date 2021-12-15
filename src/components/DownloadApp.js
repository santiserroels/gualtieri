
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import imgApp from '../resourses/app-image.jpg'
import tick from '../resourses/tick.png'

const DownloadApp = props => {
    const [imgContainer, SetImageContainer] = React.useState({
        backgroundImage:props.width>= 991 ? `url(${imgApp})` : "",
        backgroundPositionX:"0",
        backgroundPositiony:"50%",
        backgroundSize:"cover"
    })
    React.useEffect(() => {
        props.width<=991 ? SetImageContainer({}) : SetImageContainer({
            backgroundImage:props.width>= 991 ? `url(${imgApp})` : "",
            backgroundPositionX:"0",
            backgroundPositiony:"50%",
            backgroundSize:"cover"
        })
    }, [props.width])
    const listStyle = {
        listStyleImage: `url(${tick})`
    }
    return (
        <div>
            <Row style={imgContainer}>
                    <Col  md={6} sm={0}>
                        
                    </Col>
                    <Col md={6} className="p-5 col-app d-flex flex-column">
                        <h4 className="greenblue ">
                            Brindamos a nuestros clientes toda la información necesaria para que puedan llevar adelante su trabajo sin inconvenientes y optimizando recursos
                        </h4>
                        <h4 className="greenblue ">
                            A través de nuestra App cada cliente puede visualizar:
                        </h4>
                        <ul className="list-home mt-4" style={listStyle}>
                            <li>Posición del día.</li>
                            <li>Detalle de carta de porte buscada.</li>
                            <li>Búsqueda histórica por número de carta o por patente.</li>
                            <li>Solicitar llamado al entregador.</li>
                            <li>Notificaciones push y notificaciones por mail.</li>
                        </ul>
                        <div className="d-flex justify-content-end" >
                            <button onClick={()=>window.open("https://play.google.com/store/apps/details?id=com.cerealnet.android&hl=es_419&gl=US","_blank")} className= "btn btn-light  mt-4 px-5" > {">"} Descarga la app</button>
                        </div>
                    </Col>
                </Row>
        </div>
    )
}

export default DownloadApp
