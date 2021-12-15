import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Select from 'react-select'
import DividerIcon from '../components/DividerIcon'
import ServicesHeading from '../components/ServicesHeading'
import loading from '../resourses/loading.svg'
import DFPosts from '../data-fetcher/getPosts'
import CuadradoEntrada from '../components/CuadradoEntrada'
import { Link } from 'react-router-dom'
import DividerWtitle from '../components/DividerWTittle'

const Novedades = (props) => {
    const charging = <img style={{ width: "70x" }} src={loading} />
    const [categories, setCategories] = React.useState("")
    const [entradas, setEntradas] = React.useState(charging)
    const [currentEntradas, setCurrentEntradas] = React.useState("")
    const [avaliablePages, setAvaliablePages] = React.useState(1)
    const [pagination, setpagination] = React.useState(1)
    const [currentCat, setCurrentCat] = React.useState("")
    const [styleButton, setStyleButton] = React.useState({display: "flex"})

    const getCategories = async () => {
        const data = await DFPosts.categories()
        const response = data.map(categori => ({ label: categori.name, value: categori.id }))
        response.unshift({ label: "Todas", value: "all" })
        setCategories(response)
    }
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
        const data = await DFPosts.posts(pagination)
        let entradasCopy = [...currentEntradas]
        let finalArray = entradasCopy.concat(data.response)
        setCurrentEntradas(finalArray)
        setEntradas(generateEntradas(finalArray))
        setAvaliablePages(data.totalPages)

    }

    React.useEffect(() => {
        getCategories()
        getPosts()
        window.scrollTo(0, 0)
        return () => {
        }
    }, [])
    React.useEffect(() => {
        avaliablePages >= pagination ? setStyleButton({display:"flex"}) : setStyleButton({display:"none"})
    }, [pagination,avaliablePages])
    
    const setPostsByCat = async e => {
        setpagination(1)
        setAvaliablePages(0)
        setCurrentCat(e.value)
        setCurrentEntradas([])
        setEntradas(charging)
        if (e.value === "all") {
            setCurrentEntradas([])
            getPosts()
        } else {

            const data = await DFPosts.postsByCat(e.value, 1)
            if (data.response.length === 0) {
                setEntradas(<h1>Parece que no hay entradas en esta categoría. :( </h1>)
                
            } else {
                setCurrentEntradas(data.response)
                setEntradas(generateEntradas(data.response))
                setAvaliablePages(data.totalPages)
            }
        }
    }


    const addPosts = async () => {
        setpagination(pagination+1)
        if (pagination < avaliablePages){
            if(currentCat != "all" ){
            
                const data = await DFPosts.postsByCat(currentCat, pagination)
                let entradasCopy = [...currentEntradas]
                setAvaliablePages(data.totalPages)
                let finalArray = entradasCopy.concat(data.response)
                setCurrentEntradas(finalArray)
                setEntradas(generateEntradas(finalArray))
                
            }else{
                getPosts()
            }
        }
        
        
    }
    return (
        <div>
            <ServicesHeading classToAdd="novedades" subtitle={"La calidad es nuestra primera prioridad."} title={"Contamos con tecnología propia que nos permite seguir cada entrega y en caso de que haya un problema, poder resolverlo al momento."} />
            <DividerIcon />
            <Container style={{ borderBottom: "solid 1px #8f8b0c" }} className="d-flex my-4 pb-4 ">
                <h2 className="gold">Noticias del Agro</h2>
                <Select style={{ marginLeft: "auto" }} options={categories} onChange={(e) => { setPostsByCat(e) }} placeholder="Categorías" className="d-flex select-search" style={{ width: "200px" }} />
            </Container>
            <Container>
                <Row className="d-flex justify-content-center">
                    {entradas}
                </Row>
                <div key={new Date} style={styleButton} onClick={()=>addPosts()} className="mas-posts-button">
                    <DividerWtitle title="Cargar más novedades" />
                </div>
            </Container>
        </div>
    )
}

export default Novedades
