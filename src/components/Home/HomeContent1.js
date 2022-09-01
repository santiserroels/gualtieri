import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardAnimatedHome from '../CardAnimatedHome'
import bg1 from '../../resourses/home1.jpg'
import bg2 from '../../resourses/home2.jpg'
import bg3 from '../../resourses/home3.jpg'
import arrowText from '../../resourses/arrow-text-10px.png'
import CirclesHome from '../CirclesHome'

const HomeContent1 = ({cardHandler, width}) => {
    
    const carouselHandler = () =>{
        
        const img1= document.getElementById("carousel-img-1")
        const img2= document.getElementById("carousel-img-2")
        const img3= document.getElementById("carousel-img-3")
        if (img1.classList.contains("bg-home-in" )) {
            img1.classList.replace("bg-home-in","bg-home-out")
            img2.classList.add("bg-home-in")
            img3.classList.remove("bg-home-out")

        }else if(img1.classList.contains("bg-static-home" )){
            img1.classList.replace("bg-static-home","bg-home-out")
            img2.classList.add("bg-home-in")
            img3.classList.remove("bg-home-out")
        }else if (img2.classList.contains("bg-home-in")  ) {
            img2.classList.replace("bg-home-in","bg-home-out")
            img3.classList.add("bg-home-in")
            img1.classList.remove("bg-home-out")
        }else if (img3.classList.contains("bg-home-in")){
            img3.classList.replace("bg-home-in","bg-home-out")
            img1.classList.add("bg-home-in")
            img2.classList.remove("bg-home-out")
        }
    }

    React.useEffect(() => {
        const interval =setInterval(() => {
            carouselHandler()
        }, 6000);
        return(()=>{
            clearInterval(interval)
        })
    },[])
    
    const contStyle = {
        paddingTop: width > 769 && width < 1280  ? "180px" : "220px"
    
    }
           

    return (
        <div id="homeContainer" className="mt-sm-5 pb-5 mt-md-0">
            <div className="carousel-container-home"> 
                {/* <img id="carousel-img-1" className={"img-as-bg " + classimg[0]} src={bg1}/>
                <img id="carousel-img-2" className={"img-as-bg " + classimg[1]}src={bg2}/>
                <img id="carousel-img-3" className={"img-as-bg " + classimg[2]} src={bg3}/> */}
                
                <img id="carousel-img-1" className="img-as-bg bg-home-in" src={bg1} alt=""/>
                <img id="carousel-img-2" className="img-as-bg "src={bg2} alt=""/>
                <img id="carousel-img-3" className="img-as-bg bg-home-out" src={bg3} alt=""/>
            </div>
            

            <Container style={contStyle}>
                <Row>
                    <Col md={12} className="text-left">
                        <h5 className="white blue-bg bold px-5 py-2" style={{width:"max-content"}}> <img src={arrowText} alt=""/> {" La calidad es nuestra primera prioridad"}</h5>
                        {width > 1200 ? <h1 className="white ">Cuidamos los productos de nuestros clientes con la máxima responsabilidad y compromiso como asumimos su representación durante todo el proceso.</h1> : <div className="title-container-home"><h2 className="bold white">Cuidamos los productos de nuestros clientes con la máxima responsabilidad y compromiso como asumimos su representación durante todo el proceso.</h2></div> }
                    </Col>
                </Row>
            </Container>    
            {width >=1200 ? <CardAnimatedHome cardHandler={cardHandler} /> : <CirclesHome width={width}/>}
            
           <p style={{display:"none"}}></p>
           
        </div>
    )
}

export default HomeContent1
