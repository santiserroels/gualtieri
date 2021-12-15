import React from 'react'

const DividerWtitle = props => {
    const titleStyle ={
        backgroundColor:"white",
        border:"solid 2px #8f8b0c",
        padding:"7px 25px 7px 25px",
        fontSize:"22px"
    }
    return (
        <div className="line-backgound d-flex justify-content-center col-md-12  mt-3 pb-4">
            <div style={titleStyle}>{"> " +props.title}</div>
        </div>
    )
}

export default DividerWtitle
