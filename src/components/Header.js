import React from 'react'
import { Col, Nav, NavDropdown, Row } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import "./header.css"
import logo from '../resourses/logo-white.png'
import arrowDown from '../resourses/arrow-down.png'
import logoGold from '../resourses/logo.png'
import { HashLink } from 'react-router-hash-link';

const Header = ({ cardHandler }) => {

    const logoContainer = {
        marginRight: "auto"
    }
    const buttonStyle = {
        backgroundColor: "trasnparent",
        border: "#8f8b0c solid 2px",
        fontSize: "19px",
        borderRadius: "0px",
        fontWeight: "bold"
    }
    React.useEffect(() => {
        //add arrows 
        const arrows = Array.from(document.getElementsByClassName("arrow-menu"))
        arrows.forEach(e => e.remove())
        const dropdowns = Array.from(document.getElementsByClassName('navDrop'))
        dropdowns.forEach(element => {

            if (document.getElementsByClassName('arrow-menu')) {
                const arrow = document.createElement("img")
                arrow.setAttribute('class', 'arrow-menu')
                arrow.src = arrowDown
                element.firstChild.appendChild(arrow)
            }

        });
        //Make the menu sticky
        const header = document.getElementById('header')
        window.addEventListener('scroll', (() => {
            window.scrollY > 1 ? header.classList.add('sticky') : header.classList.remove('sticky')
        }))
        // Menu selector

        //Hamburger animation selector



        // CLICK EVENT ON HAMBURGER




    })
    let location = useLocation();
    const menuHambHandler = () => {
        const menuBtn = document.getElementById("hamburguer");
        const menuBarTop = document.getElementById("top");
        const menuBarMiddle = document.getElementById("middle");
        const menuBarBottom = document.getElementById("bottom");
        const menuNav = document.getElementById("menu-nav");
        //Expansion
        menuNav.classList.toggle("expanded")
        //Animation
        menuBtn.classList.toggle("hamburger-animate")
        menuBarMiddle.classList.toggle("middle-animate");
        menuBarTop.classList.toggle("top-animate");
        menuBarBottom.classList.toggle("bottom-animate");
    };
    let linkExpanded 
    let servicesExpanded 
    const dropControl = (e, who) => {
        switch (who) {
            case 'links':
                if (!linkExpanded) {

                    const list = Array.from(document.getElementsByClassName('drop-father-links')[0].childNodes)
                    list.forEach(e => {
                        e.style.display = "block"
                    })
                    document.getElementsByClassName('drop-father-links')[0].style.border="0px"
                    linkExpanded = true
                } else {
                    const list = Array.from(document.getElementsByClassName('drop-father-links')[0].childNodes)
                    list.forEach(e => {
                        e.style.display = "none"
                    })
                    linkExpanded = false
                }
                
                break;
                
            case 'services':
                if (!servicesExpanded) {
                    const list = Array.from(document.getElementsByClassName('drop-father-services')[0].childNodes)
                    list.forEach(e => {
                        e.style.display = "block"
                    })
                    servicesExpanded = true
                } else {
                    const list = Array.from(document.getElementsByClassName('drop-father-services')[0].childNodes)
                    list.forEach(e => {
                        e.style.display = "none"
                    })
                    servicesExpanded = false
                }

        }
    }
    return (
        <div>
            <div style={{ width: "100%", height: "10px", backgroundColor: "#2B817E" }}></div>

            <Row className="header mx-sm-0 mx-md-5 mx-0 pb-3 py-3" id="header" >

                <Link to="/" className="logo" href="#" ><img style={window.innerWidth > 860 ? { width: "auto", height: "90px" }:{ width: "auto", height: "80px" }} src={window.innerWidth > 860 ? logo : logoGold} /></Link>
                <nav className="nav-bar " id="nav-bar">
                    <ul className="nav-list">
                        <li><Link className="a-to-sub" to="/">INICIO</Link></li>
                        <li>
                            <NavDropdown className="nav-item a-to-sub navDrop p-0" title="SERVICIOS" id="nav-dropdown">


                                <NavDropdown.Item><Link className="a-to-sub" to="/services/embarques">Servicio de Embarque</Link></NavDropdown.Item>


                                <NavDropdown.Item> <Link className="a-to-sub" to="/services/entregas">Servicio de Entregas</Link></NavDropdown.Item>


                                <NavDropdown.Item> <a className="a-to-sub" onClick={() => window.open("https://play.google.com/store/apps/details?id=com.cerealnet.android&hl=es_419&gl=US", "_blank")} >Funcionalidades de Cerealnet</a></NavDropdown.Item>


                            </NavDropdown>
                        </li>
                        <li><Link className="a-to-sub" to="/us">NOSOTROS</Link></li>
                        <li><Link className="a-to-sub " to="/news">NOVEDADES</Link></li>
                        <li><NavDropdown className="nav-item a-to-sub navDrop p-0" title="LINKS DE INTERES" id="nav-dropdown">
                            <NavDropdown.Item  eventKey="4.1"  ><a className=" a-to-sub"  onClick={() => window.open("http://www.fundacionfada.org")}>www.fundacionfada.org</a></NavDropdown.Item>
                            <NavDropdown.Item  eventKey="4.1"  ><a className=" a-to-sub"  onClick={() => window.open("https://bcr.com.ar/es")}>www.bcr.com.ar</a></NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.1"  ><a className=" a-to-sub"  onClick={() => window.open("https://bolsadecereales.com/")}>www.bolsadecereales.com</a></NavDropdown.Item>

                        </NavDropdown></li>
                        <li><HashLink className="a-to-sub" smooth to="/#contact">CONTACTO</HashLink></li>
                        <li><HashLink id="herramientas" smooth to="/"><button className="herramientas" onClick={() => location.pathname === "/" ? cardHandler() : ""} to="/">HERRAMIENTAS</button></HashLink></li>
                    </ul>
                </nav>
                <div onClick={menuHambHandler} id="hamburguer" className="hamburger">
                    <span id="top" className="bar top"></span>
                    <span id="middle" className="bar middle"></span>
                    <span id="bottom" className="bar bottom"></span>
                </div>
                <nav id="menu-nav" className="menu-nav">
                    <ul className="menu-list  px-0">
                        <li><HashLink onClick={menuHambHandler} onClick={menuHambHandler} smooth to="/#homeContainer">INICIO</HashLink></li>
                        <li className="black drop-down-mine drop-control"><span onClick={(e) => dropControl(e, 'services')}>SERVICIOS <img className="arrow-menu-no" src={arrowDown} /> </span><ul className="nav-item drop-father-services  p-0" title="" id="nav-dropdown drop-">
                            <li><Link onClick={menuHambHandler}  to="/services/embarques">
                                Servicio de Embarque
                            </Link></li>
                            <li><Link onClick={menuHambHandler} to="/services/entregas">
                                Servicio de Entregas
                            </Link></li>
                            <li><a onClick={() => window.open("https://play.google.com/store/apps/details?id=com.cerealnet.android&hl=es_419&gl=US", "_blank")} >Funcionalidades de Cerealnet</a>
                            </li>
                        </ul>
                        </li>
                        <li><Link onClick={menuHambHandler} to="/us">NOSOTROS</Link></li>
                        <li><Link onClick={menuHambHandler} to="/news">NOVEDADES</Link></li>
                        <li className="black drop-down-mine drop-control"><span onClick={(e) => dropControl(e, 'links')}>LINKS DE INTERES <img className="arrow-menu-no" src={arrowDown} /></span> <ul className="nav-item drop-father-links  p-0" title="" id="nav-dropdown">
                            <li className="noneline" ><a onClick={() => window.open("http://www.fundacionfada.org")}>www.fundacionfada.org</a></li>
                            <li className="noneline" ><a onClick={() => window.open("https://bcr.com.ar/es")}>www.bcr.com.ar</a></li>
                            <li className="noneline no-border" ><a onClick={() => window.open("https://bolsadecereales.com/")}>www.bolsadecereales.com</a></li>
                        </ul></li>
                        <li><HashLink onClick={menuHambHandler} smooth to="/#contact">CONTACTO</HashLink></li>
                    </ul>
                </nav>
            </Row>



        </div>
    )
}

export default Header
