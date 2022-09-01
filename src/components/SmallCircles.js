import React from 'react'
import { Link } from 'react-router-dom'

const SmallCircles = ({img, text,link}) => {
    const circleStyle ={
        borderRadius:"250px",
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        width:"100%"
    }
    return (
        <div className="text-center" style={circleStyle}>
            <Link to={link ? "tools"+link : ""}>
            <img style={{width:"100px"}} src={img} alt=""/>
            <p  style={{fontSize:"21px", textDecoration:"none",}} className="white" dangerouslySetInnerHTML={{__html:text}}></p>
            </Link>
        </div>
    )
}

export default SmallCircles
