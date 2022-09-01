import React from 'react'

const ClimaCard = ({ data }) => {
    const dateSplit = data.date.split("-")
    const date = new Date(dateSplit[0], (dateSplit[1] - 1), dateSplit[2])
    let day
    switch (date.getDay()) {
        case 0:
            day = "Domingo"
            break;
        case 1:
            day = "Lunes"
            break;
        case 2:
            day = "Martes"
            break;
        case 3:
            day = "Miércoles"
            break;
        case 4:
            day = "Jueves"
            break;
        case 5:
            day = "Viernes"
            break;
        case 6:
            day = "Sabado"
            break;
        default:
            break;
    }
    return (
        <div className="d-flex flex-column card-clima px-2 justify-items-center align-items-center">
            <p className="m-0 greenblue bold">{day}</p>
            <img style={{ objectFit: "contain" }} className="px-2 icon-clima" src={'https://v5i.tutiempo.net/wi/04/50/' + data.icon + '.png'} alt={data.text} />
            <div style={{ width: "5%" }} className="d-flex justify-content-center">

                <div>  
                    <span className="small"> Min:</span>
                    <span className="greenblue bold px-2">{data.temperature_min-2}º</span>
                </div>
                <div>
                    <span className="small"> Max:</span>
                    <span className="gold bold px-2">{data.temperature_max -2}º</span>
                </div>
            </div>
        </div>
    )
}

export default ClimaCard
