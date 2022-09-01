import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import DividerWtitle from '../DividerWTittle'
import DF from '../../data-fetcher/getPosts'
import CuadradoEntrada from '../CuadradoEntrada'
import loading from '../../resourses/loading.svg'
import { Link } from 'react-router-dom'



const HomeContent3 = (props) => {
    const charging = <img style={{ width: "70x" }} src={loading} alt="" />
    const [entradas, setEntradas] = React.useState(charging)
    const generateEntradas = (data) => {
        let preLast=true
        let last=true
        return data.map((entrada, i) => {
            const left = preLast === last ? !last : last;
            preLast = last
            last = left
            return <CuadradoEntrada key={i} width={props.width} entrada={entrada} left={left} />
        })
    }
    const getPosts = async () => {
        const data = await DF.posts4()
        setEntradas(generateEntradas(data))
    }
    React.useEffect(() => {
        if(entradas === charging){
            getPosts()
        }

    },[entradas, charging, getPosts] )
    return (
        <div>
            <Container className="mt-5">
                <Row className="pt-5">
                    <Col md={12}>
                        <h1 className="gold bold">Noticias del agro </h1>
                    </Col>
                    {entradas}
                    <Col md={12}>
                        <Link className="gray" to="/news"><DividerWtitle title={"Ver más noticias"} /></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeContent3
