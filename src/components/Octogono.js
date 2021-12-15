import React from 'react'
import CountUp from 'react-countup'

const Octogono = props => {

    return (
        <div className="text-center">
            <div className="octogon-container d-flex justify-content-center align-items-center text-center">
            <CountUp
            start={0}
            end={props.number}
            duration={2.75}
            prefix="+"
            delay={0}
            decimals={0}
            >
            {({ countUpRef }) => (
                <div className="mr-1">
                <span className="number-counter  gold" ref={countUpRef} />
                </div>
            )}
            </CountUp>
            </div>
           
            <p style={{fontSize:"23px"}} className="greenblue text-large bold px-2">{props.title}</p>
        </div>
    )
}

export default Octogono
