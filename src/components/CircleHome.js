import React from 'react'
import { Link } from 'react-router-dom'

const CircleHome = props => {
    const circleStyle ={
        borderRadius:"250px",
        display:"flex",
        alingItems:"center",
        flexDirection:"column",
        maxWidth:"180px"
    }
    return (
        <div className="text-center" style={circleStyle}>
            <Link className="circle-best" to={props.link ? "tools"+props.link : ""}>
            <img style={{width:"180px"}} src={props.img}/>
            <p style={{fontSize:"21px", textDecoration:"none",}} dangerouslySetInnerHTML={{__html:props.text}}></p>
            
            </Link>
        </div>
    )
}

export default CircleHome
