import React from 'react'
import logo from '../resourses/logo.png'
import './footer.css';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import NewsLetter from './NewsLetter';

const Footer = ({ dark }) => {
    return (
        <footer >
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4 mt-5 d-flex f-column column-logo flex-column">
                        <img src={logo}/>
                        <p className=" mb-0 pl-5">Copyright 2021. Gualtieri e Hijos. <br />
                        Todos los derechos reservados.</p>
                    </div>
                    <div className="col-md-4 mt-5 row-links-footer mt-2">
                        <div className="row">
                            <div className="text-md-left pl-4 col-md-6">
                                <Link to="/">
                                    <p className="mb-1 mr-5 pb-2">INICIO</p>
                                </Link>
                                <Link to="/us">
                                    <p className="mb-1 mr-5 pb-2">NOSOTROS</p>
                                </Link>
                                <Link to="/news">
                                    <p className="mb-1 mr-5 pb-2">NOVEDADES</p>
                                </Link>
                            </div>
                            <div className="col-md-6 pl-4 text-md-left">
                                <Link to="/services/embarques">
                                    <p className="mb-1 mr-5 pb-2">EMBARQUES</p>
                                </Link>
                                <Link to="/services/entregas">
                                    <p className="mb-1 mr-5 pb-2">ENTREGAS</p>
                                </Link>
                                <HashLink to="/#contact">
                                    <p className="mb-1  mr-5 pb-2">CONTACTO</p>
                                </HashLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <p>SUSCRIBITE A NUESTRO NEWSLETTER</p>
                        <p>Accedé a todas las novedades del mercado, informes semanales, reportes mensuales  y  research estratégicos.</p>
                        <NewsLetter />
                    </div>
                </div>
            </div>
            <div className="footer-axyoma text-center">
                <p className=" mb-0"><a className="big pb-0" href="https://axyomaglobal.com" target="_blank"> DISEÑO AXYOMAGLOBAL</a></p>
            </div>
        </footer>
    )
}

export default Footer
