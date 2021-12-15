import React from 'react'
import arrow from './../resourses/arrow-down-blue.png'

const DividerIcon = props => {
    const titleStyle ={
        backgroundColor:"white",
        border:"solid 2px #8f8b0c",
        padding:"7px 25px 7px 25px",
        fontSize:"22px"
    }
    return (
        <div className="divider-icon-cont d-flex justify-content-center align-items-center">
            <div className=" d-flex justify-content-center align-items-center" style={{border:"6px solid #2B817E",borderRadius:"20px", width:`40px`,height:"40px"}}>
                <img style={{height:"max-content"}} src={arrow}/>
            </div>
        </div>
    )
}

export default DividerIcon
