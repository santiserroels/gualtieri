import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import DF from '../data-fetcher/getPosts'
import CuadradoEntrada from './CuadradoEntrada'
import loading from '../resourses/loading.svg'


const LastNews = (props) => {
    const charging = <img style={{ width: "70x" }} src={loading} alt=""/>
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
        const data = await DF.posts2()
        setEntradas(generateEntradas(data))
    }
    React.useEffect(() => {
        if(entradas === charging){
            
        getPosts()
        }

    })
    return (
        <div>
            <Container className="mt-2">
                <Row className="pt-2">
                    <Col md={12}>
                        <h1 className="gold bold">Últimas Noticias </h1>
                    </Col>
                    {entradas}
                </Row>
            </Container>
        </div>
    )
}

export default LastNews
