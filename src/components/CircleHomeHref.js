import React from 'react'

const CircleHomeHref = props => {
    const circleStyle ={
        borderRadius:"250px",
        display:"flex",
        alingItems:"center",
        flexDirection:"column",
        maxWidth:"180px"
    }
    return (
        <div className="text-center" style={circleStyle}>
            <a className="circle-best" href={props.link ? props.link : ""} target={props.target}>
            <img style={{width:"180px"}} src={props.img}/>
            <p style={{fontSize:"21px", textDecoration:"none",}} dangerouslySetInnerHTML={{__html:props.text}}></p>
            
            </a>
        </div>
    )
}

export default CircleHomeHref