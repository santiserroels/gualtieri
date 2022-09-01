import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../resourses/logo.png'

const CuadradoEntrada = ({ width, entrada, left }) => {
    const datePaso = new Date(entrada.date)

    const date2 = Date.parse(datePaso)
    const date = new Date(date2)
    const getDay = () => {
        return date.getUTCDate()
    }
    const getMonth = () => {
        const month = date.getUTCMonth()
        switch (month) {
            case 0:
                return "Ene"
            case 1:
                return "Feb"
            case 2:
                return "Mar"
            case 3:
                return "Abr"
            case 4:
                return "May"
            case 5:
                return "Jun"
            case 6:
                return "jul"
            case 7:
                return "Ago"
            case 8:
                return "Sep"
            case 9:
                return "Oct"
            case 10:
                return "Nov"
            case 11:
                return "Dic"

            default:
                break;
        }
    }
    const selectBetterImg = sizes =>{
        if(sizes.medium_large){
            return sizes.medium_large.source_url
        } else if(sizes.large){
            return sizes.large.source_url
        }else {
            return sizes.medium.source_url
        }
    }
    const trymTo = text => {
        
        let cutIn
        if (width > 480) {
            cutIn = 70
        } else if (width > 350) {
            cutIn = 60
        } else {
            cutIn = 50
        }

        return text.slice(0, text.indexOf(" ",cutIn)) + "[...]"
    }
    return (

        <Col md={12} lg={6} className="my-4 p-0 col-news">
            <Link style={{ textDecoration: "none" }} to={"/new/" + entrada.id}>
                {left && width >769?
                    <Row>
                        <Col className="d-flex flex-column text-right">
                            <div className="d-flex ml-a">
                                <h2 style={{ fontSize: "64px" }} className="gold bold">{getDay()}</h2>
                                <div className="gold  mt-2 d-flex flex-column">
                                    <h4 className="bold mb-0">{getMonth()}</h4>
                                    <h4 className="bold mb-0">{date.getFullYear()}</h4>
                                </div>
                            </div>
                            <h4 className="greenblue">{entrada.title.rendered}</h4>
                            <h5 className="gray text-overflow pl-2" dangerouslySetInnerHTML={{ __html: trymTo(entrada.excerpt.rendered) }}></h5>
                        </Col>
                        <Col className="" style={{ overflow: "hidden   ",display:"flex", justifyContent:"center" }}>
                            <img style={{ objectFit: "cover", maxHeight: "250px",position:"center" }} src={entrada.better_featured_image ? selectBetterImg(entrada.better_featured_image.media_details.sizes) : logo}   alt=""/>
                        </Col>

                    </Row>
                    :
                    <Row>

                        <Col style={{ overflow: "hidden   ",display:"flex", justifyContent:"center" }}>
                            <img style={{ objectFit: "cover", maxHeight: "250px",position:"center" }} src={entrada.better_featured_image ? selectBetterImg(entrada.better_featured_image.media_details.sizes) : logo}  alt=""/>
                        </Col>
                        <Col className="d-flex flex-column ">
                            <div className="d-flex " style={{ height: "max-content" }}>
                                <h2 style={{ fontSize: "64px" }} className="gold bold">{getDay()}</h2>
                                <div className="gold mt-2 d-flex flex-column">
                                    <h4 className="bold mb-0">{getMonth()}</h4>
                                    <h4 className="bold mb-0">{date.getFullYear()}</h4>
                                </div>
                            </div>
                            <h4 className="greenblue">{entrada.title.rendered} </h4>
                            <h5 className="gray text-overflow pr-2" dangerouslySetInnerHTML={{ __html: trymTo(entrada.excerpt.rendered) }}></h5>
                        </Col>
                    </Row>}

            </Link>
        </Col>
    )
}

export default CuadradoEntrada
