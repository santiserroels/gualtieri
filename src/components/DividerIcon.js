import React from 'react'
import arrow from './../resourses/arrow-down-blue.png'

const DividerIcon = () => {

    return (
        <div className="divider-icon-cont d-flex justify-content-center align-items-center">
            <div className=" d-flex justify-content-center align-items-center" style={{border:"6px solid #2B817E",borderRadius:"20px", width:`40px`,height:"40px"}}>
                <img style={{height:"max-content"}} src={arrow} alt=""/>
            </div>
        </div>
    )
}

export default DividerIcon
