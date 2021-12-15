import React from 'react'
import { Container, Row,Col } from 'react-bootstrap';
import clima from "../../data-fetcher/weather";
import loading from '../../resourses/loading.svg'
import ClimaCard from '../ClimaCard';
import DividerIcon from '../DividerIcon';
import DividerWtitle from '../DividerWTittle';
import Octogonos from '../Octogonos'
import Select, { createFilter } from 'react-select'
import citis from '../../data-fetcher/list-AR.json'

const HomeContent2 = props => {
    const [clima2, setclima2] = React.useState("")
    const options = citis.map(e=>{return{label:e.Name,value:e.ID}}) ;
    const actClima = async (city) => {
        await clima(city).then(data => !data.error ? setclima2(data) :"" )
    }
    React.useEffect(() => {
        if (clima2 === "") {
            actClima(43286)
        }
    })
    const titleOctogonos = <h3 className="greenblue">
    Contamos con <span className="px-2" style={{backgroundColor:"#8f8b0c", color:"white"}}> tecnología propia</span> que nos permite seguir cada entrega
</h3>
    const climaPrint = () =>{
        if(props.width <= 350) {
            return (<Row className="">
            <DividerWtitle title={`Clima en ${clima2.locality.name}`} /><Col className="d-flex mx-0 justify-content-between">
                         <ClimaCard data={clima2.day1} />
                         <ClimaCard data={clima2.day2} />
                     </Col></Row> )
        }else if(props.width <= 425) {
               return (<Row className="">
               <DividerWtitle title={`Clima en ${clima2.locality.name}`} /><Col className="d-flex mx-0 justify-content-between">
                            <ClimaCard data={clima2.day1} />
                            <ClimaCard data={clima2.day2} />
                            <ClimaCard data={clima2.day3} />
                        </Col></Row> )
        }else if(props.width <= 750){
                return (<Row className="">
                    <DividerWtitle title={`Clima en ${clima2.locality.name}`} /><Col className="d-flex mx-0 justify-content-between">
                            <ClimaCard data={clima2.day1} />
                            <ClimaCard data={clima2.day2} />
                            <ClimaCard data={clima2.day3} />
                            <ClimaCard data={clima2.day4} />
                        </Col></Row> )

        }else if(props.width <= 950){    
                return (<Row className="">
                    <DividerWtitle title={`Clima en ${clima2.locality.name}`} /><Col className="d-flex mx-0 justify-content-between">
                            <ClimaCard data={clima2.day1} />
                            <ClimaCard data={clima2.day2} />
                            <ClimaCard data={clima2.day3} />
                            <ClimaCard data={clima2.day4} />
                            <ClimaCard data={clima2.day5} />
                        </Col></Row> )
        }else if(props.width <= 1100){   
                return (<Row className="">
                    <DividerWtitle title={`Clima en ${clima2.locality.name}`} /><Col className="d-flex mx-0 justify-content-between">
                            <ClimaCard data={clima2.day1} />
                            <ClimaCard data={clima2.day2} />
                            <ClimaCard data={clima2.day3} />
                            <ClimaCard data={clima2.day4} />
                            <ClimaCard data={clima2.day5} />
                            <ClimaCard data={clima2.day6} />
                        </Col></Row> )

                
        }else {   
                return (<Row className="">
                    <DividerWtitle title={`Clima en ${clima2.locality.name}`} /><Col className="d-flex mx-0 justify-content-between">
                            <ClimaCard data={clima2.day1} />
                            <ClimaCard data={clima2.day2} />
                            <ClimaCard data={clima2.day3} />
                            <ClimaCard data={clima2.day4} />
                            <ClimaCard data={clima2.day5} />
                            <ClimaCard data={clima2.day6} />
                            <ClimaCard data={clima2.day7} />
                        </Col>
                        </Row> )
        }
    }
    const customStyles = {

        control: () => ({
          // none of react-select's styles are passed to <Control />
          width: 200,
        }),
      }

    return (
        <div>
            <DividerIcon/>
            <Container className="d-flex select-search-father">
            <Select  options={options}  placeholder="Sleccionar ciudad" filterOption={createFilter({ ignoreAccents: false })} onChange={(e)=>{actClima(e.value)}} className="d-flex select-search" style={{width:"200px"}} />
            </Container>
            <Container className="text-right d-flex flex-column">

                {clima2 != "" ? climaPrint() :
                <Row className="d-flex justify-content-center"><img style={{ width: "45px" }} src={loading} /></Row>
                    }
                    <p className="small mt-2">Copiright:{clima2.copyright}</p>
            </Container>
            <Octogonos title={titleOctogonos} />
        </div>
    )
}

export default HomeContent2
