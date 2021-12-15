import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import DividerIcon from '../components/DividerIcon'
import DividerWtitle from '../components/DividerWTittle'
import LastNews from '../components/LastNews'
import ServicesHeading from '../components/ServicesHeading'
import getPosts from '../data-fetcher/getPosts'
import loading from '../resourses/loading.svg'
import facebook from '../resourses/facebook.png'
import linkedin from '../resourses/linkedin.png'
import twitter from '../resourses/twitter.png'
import instagram from '../resourses/instagram.png'


const New = (props) => {
    const charge =
        <div>
            <ServicesHeading classToAdd="new" isnew subtitle={" Cargando..."} title={"..."} />
            <DividerIcon />
            <div className="d-flex justify-content-center mt-5">
                <img style={{ width: "160px" }} src={loading} />
            </div>
        </div>
    let date
    const getMonth = () => {
        const month = date.getUTCMonth()
        switch (month) {
            case 0:
                return "Ene"
                break;
            case 1:
                return "Feb"
                break;
            case 2:
                return "Mar"
                break;
            case 3:
                return "Abr"
                break;
            case 4:
                return "May"
                break;
            case 5:
                return "Jun"
                break;
            case 6:
                return "jul"
                break;
            case 7:
                return "Ago"
                break;
            case 8:
                return "Sep"
                break;
            case 9:
                return "Oct"
                break;
            case 10:
                return "Nov"
                break;
            case 11:
                return "Dic"
                break;

            default:
                break;
        }
    }
    const [post, setPost] = React.useState(charge)
    const { new_id } = useParams()
    const selectBetterImg = sizes =>{
        if(sizes.large){
            return sizes.large.source_url
        }else if(sizes.medium_large){
            return sizes.medium_large.source_url
        }else{
            return sizes.medium.source_url
        }
    }
    const getPost = async () => {
        
        const post = await getPosts.post(new_id)
            
        const category = await getPosts.categori(post.categories[0])
        const datePaso = new Date(post.date)
        const date2 = Date.parse(datePaso)
        date = new Date(date2)
        const postResponse =
            <div >
                <ServicesHeading classToAdd="novedades" isnew subtitle={"Categoría: "+category.name } title={post.title.rendered} />
                <DividerIcon />
                <Container>
                    <Row className="d-flex justify-content-center mt-5">
                        <Col md={12}  className="d-flex flex-column align-items-center justify-content-center">
                            {post.better_featured_image != null ? <img style={{width:"max-content",maxHeight:"400px",maxWidth:"100%",objectFit:"cover"}} src={selectBetterImg(post.better_featured_image.media_details.sizes) } /> : "" }
                            <div className="divier-gold"></div>
                            <h4 className="gold" style={{marginLeft:"auto"}}>{`${date.getUTCDate()} ${getMonth()} ${date.getFullYear()}`}</h4>
                            <div className="mt-4 new-content" dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>  
                        </Col>
                        <Col className="d-flex social-media-container" md={12}>
                            <div>
                                <a href="https://www.facebook.com/gualtieriehijossrl" target="_blank"> <img src={facebook}  /> </a>
                                <a href="https://www.instagram.com/gualtieriehijos/" target="_blank"> <img src={linkedin}  /> </a>
                                <a href="https://twitter.com/gualtieriehijos?lang=es" target="_blank"> <img src={twitter}  /> </a>
                                <a href="https://www.linkedin.com/company/gualtieri-e-hijos/?originalSubdomain=ar" target="_blank"> <img src={instagram}  /> </a>
                            </div>
                            
                        </Col>
                        <Col md={12}>
                            <Link className="gray" to="/news"><DividerWtitle title={"Volver a noticias"} /></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        setPost(postResponse)
    }
    React.useEffect(() => {
        window.scrollTo(0,0)
        getPost()
    },[new_id])
    return (
        <div>
            {post}
             <LastNews width={props.width}/>
        </div>
    )
}

export default New
