import React from 'react'
import { Container } from 'react-bootstrap'
import tick from '../resourses/tickbig.png'
import cross from '../resourses/close1.png'
import ServicesHeading from '../components/ServicesHeading'

import DividerIcon from '../components/DividerIcon'
import PreFooter from '../components/PreFooter'


const TipoDeCamiones = props => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (

        <div>
            <ServicesHeading classToAdd="entregas" subtitle={"La calidad es nuestra primera prioridad."} title={"Atendemos en todos los puertos y fábricas del cordón industrial."} />
            <DividerIcon />
            <Container className="mt-5" style={{ overflowX: "scroll" }}>


                <table id="tablepress-5" style={{width:"100%"}} class="tablepress tablepress-id-5">
                    <thead>
                        <tr class="row-1 odd">
                            <th class="column-1">PUERTOS</th><th class="column-2">SEMI REMOLQUE</th><th class="column-3">BALANCIN</th><th class="column-4">COMBINADOS TOLVA + PISO PLANO</th><th class="column-5">TOLVAS AUTODESCARGABLES</th><th class="column-6">BATEAS CON 6to EJE hidráulico</th><th class="column-7">CEREALERO CON ACOPLADO 4 EJES</th><th class="column-8">BITRENES</th>
                            <th class="column-9">LANZA TELESCOPICA</th>
                            <th class="column-10">BATEAS</th>
                        </tr>
                    </thead>

                    <tbody class="row-hover">
                        <tr class="row-1 even">
                            <td class="column-1">Terminal 6</td>
                            <td class="column-2"><img src={tick} alt="" /> 1 </td>
                            <td class="column-3"><img src={tick} alt="" /> 1 </td>
                            <td class="column-4"><img src={tick} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={tick} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" /></td>
                            <td class="column-8"><img src={tick} alt="" /> 5</td>
                            <td class="column-9"><img src={tick} alt="" /></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-2 even">
                            <td class="column-1">Cargill Quebracho</td>
                            <td class="column-2"><img src={tick} alt="" /> 8 </td>
                            <td class="column-3"><img src={tick} alt="" /> 1 </td>
                            <td class="column-4"><img src={cross} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={tick} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" /></td>
                            <td class="column-8"></td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-3 even">
                            <td class="column-1">Cofco Pto S. Martin</td>
                            <td class="column-2"><img src={cross} alt="" />  </td>
                            <td class="column-3"><img src={cross} alt="" />  </td>
                            <td class="column-4"><img src={tick} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" />4</td>
                            <td class="column-6"><img src={cross} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" />9</td>
                            <td class="column-8"><img src={tick} alt="" /> 3 </td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={cross} alt="" /></td>
                        </tr>
                        <tr class="row-4 even">
                            <td class="column-1">ADM Agro-PSM</td>
                            <td class="column-2"><img src={cross} alt="" />  </td>
                            <td class="column-3"><img src={cross} alt="" />  </td>
                            <td class="column-4"><img src={tick} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={tick} alt="" /> </td>
                            <td class="column-7"><img src={tick} alt="" /></td>
                            <td class="column-8"></td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-5 even">
                            <td class="column-1">Buyatti</td>
                            <td class="column-2"><img src={cross} alt="" />  </td>
                            <td class="column-3"><img src={cross} alt="" />  </td>
                            <td class="column-4"><img src={tick} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={tick} alt="" />1</td>
                            <td class="column-7"><img src={tick} alt="" /></td>
                            <td class="column-8"></td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-6 even">
                            <td class="column-1">Bunge Pto San Martín</td>
                            <td class="column-2"><img src={tick} alt="" /> 1 </td>
                            <td class="column-3"><img src={tick} alt="" /> 1 </td>
                            <td class="column-4"><img src={tick} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={tick} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" /></td>
                            <td class="column-8"><img src={tick} alt="" />5</td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-7 even">
                            <td class="column-1">PTA. ACA</td>
                            <td class="column-2"><img src={tick} alt="" /> 6 </td>
                            <td class="column-3"><img src={tick} alt="" /> 6 </td>
                            <td class="column-4"><img src={tick} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={tick} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" /></td>
                            <td class="column-8"><img src={tick} alt="" />3</td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-8 even">
                            <td class="column-1">Molinos Agro S. Lorenzo</td>
                            <td class="column-2"><img src={tick} alt="" /> 10 </td>
                            <td class="column-3"><img src={cross} alt="" /> 1 </td>
                            <td class="column-4"><img src={cross} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" />11</td>
                            <td class="column-6"><img src={cross} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" />11</td>
                            <td class="column-8"><img src={cross} alt="" /></td>
                            <td class="column-9"><img src={cross} alt="" /></td>
                            <td class="column-10"><img src={tick} alt="" />13</td>
                        </tr>
                        <tr class="row-9 even">
                            <td class="column-1">Vicentin</td>
                            <td class="column-2"><img src={tick} alt="" />  </td>
                            <td class="column-3"><img src={tick} alt="" />  </td>
                            <td class="column-4"><img src={tick} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={tick} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" /></td>
                            <td class="column-8"><img src={tick} alt="" /></td>
                            <td class="column-9"><img src={tick} alt="" /></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-10 even">
                            <td class="column-1">Renova</td>
                            <td class="column-2"><img src={tick} alt="" /> 1 </td>
                            <td class="column-3"><img src={tick} alt="" /> 1 </td>
                            <td class="column-4"><img src={tick} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={cross} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" /></td>
                            <td class="column-8"></td>
                            <td class="column-9"><img src={tick} alt="" /></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-11 even">
                            <td class="column-1">AGD CBA</td>
                            <td class="column-2"><img src={tick} alt="" /> 1 </td>
                            <td class="column-3"><img src={tick} alt="" /> 1 </td>
                            <td class="column-4"><img src={tick} alt="" />1</td>
                            <td class="column-5"><img src={tick} alt="" />1</td>
                            <td class="column-6"><img src={tick} alt="" />1</td>
                            <td class="column-7"><img src={tick} alt="" />1</td>
                            <td class="column-8"><img src={tick} alt="" />1</td>
                            <td class="column-9"><img src={tick} alt="" />1</td>
                            <td class="column-10"><img src={tick} alt="" />1</td>
                        </tr>
                        <tr class="row-12 even">
                            <td class="column-1">UDAD 6 Rosario</td>
                            <td class="column-2"><img src={tick} alt="" />  </td>
                            <td class="column-3"><img src={tick} alt="" />  </td>
                            <td class="column-4"><img src={tick} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={tick} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" /></td>
                            <td class="column-8"></td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-13 even">
                            <td class="column-1">COFCO Timbues</td>
                            <td class="column-2"><img src={tick} alt="" /> 14 </td>
                            <td class="column-3"><img src={tick} alt="" />  15</td>
                            <td class="column-4"><img src={tick} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" />4</td>
                            <td class="column-6"><img src={tick} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" />9</td>
                            <td class="column-8"><img src={tick} alt="" />3</td>
                            <td class="column-9"><img src={tick} alt="" /></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-14 even">
                            <td class="column-1">Bounge San Jeronimo</td>
                            <td class="column-2"><img src={cross} alt="" />  </td>
                            <td class="column-3"><img src={cross} alt="" /> </td>
                            <td class="column-4"><img src={tick} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={tick} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" />16</td>
                            <td class="column-8"><img src={cross} alt="" /></td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-15 even">
                            <td class="column-1">MRP Santa Clara Rosario</td>
                            <td class="column-2"><img src={cross} alt="" />  </td>
                            <td class="column-3"><img src={cross} alt="" /> </td>
                            <td class="column-4"><img src={tick} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={cross} alt="" /></td>
                            <td class="column-7"></td>
                            <td class="column-8"></td>
                            <td class="column-9"><img src={cross} alt="" /></td>
                            <td class="column-10"><img src={cross} alt="" /></td>
                        </tr>
                        <tr class="row-16 even">
                            <td class="column-1">Cargil Alvear</td>
                            <td class="column-2"><img src={cross} alt="" />  </td>
                            <td class="column-3"><img src={cross} alt="" />  </td>
                            <td class="column-4"><img src={cross} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={tick} alt="" /></td>
                            <td class="column-7"><img src={cross} alt="" /></td>
                            <td class="column-8"></td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-17 even">
                            <td class="column-1">LDC Gral. Lagos</td>
                            <td class="column-2"><img src={cross} alt="" />  </td>
                            <td class="column-3"><img src={cross} alt="" />  </td>
                            <td class="column-4"><img src={cross} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={tick} alt="" />17</td>
                            <td class="column-7"><img src={tick} alt="" />18</td>
                            <td class="column-8"></td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-18 even">
                            <td class="column-1">Molino Chabas</td>
                            <td class="column-2"><img src={cross} alt="" />  </td>
                            <td class="column-3"><img src={cross} alt="" />  </td>
                            <td class="column-4"><img src={cross} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={tick} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" /></td>
                            <td class="column-8"></td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-19 even">
                            <td class="column-1">Molino Cañuelas Ricardone</td>
                            <td class="column-2"><img src={cross} alt="" /> 1 </td>
                            <td class="column-3"><img src={cross} alt="" /> 1 </td>
                            <td class="column-4"></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={tick} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" /></td>
                            <td class="column-8"></td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-20 even">
                            <td class="column-1">Molino Cañuelas Ricardone</td>
                            <td class="column-2"><img src={cross} alt="" /> </td>
                            <td class="column-3"><img src={cross} alt="" /> </td>
                            <td class="column-4"></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={tick} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" /></td>
                            <td class="column-8"></td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-21 even">
                            <td class="column-1">Trigalia</td>
                            <td class="column-2"><img src={cross} alt="" /> </td>
                            <td class="column-3"><img src={cross} alt="" /> </td>
                            <td class="column-4"><img src={cross} alt="" /></td>
                            <td class="column-5"><img src={cross} alt="" /></td>
                            <td class="column-6"><img src={cross} alt="" /></td>
                            <td class="column-7"><img src={cross} alt="" /></td>
                            <td class="column-8"><img src={cross} alt="" /></td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-22 even">
                            <td class="column-1">ADM Agro Arroyo Seco</td>
                            <td class="column-2"><img src={cross} alt="" />  </td>
                            <td class="column-3"><img src={cross} alt="" />  </td>
                            <td class="column-4"><img src={tick} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={tick} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" /></td>
                            <td class="column-8"><img src={cross} alt="" /></td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-23 even">
                            <td class="column-1">Molino Semino</td>
                            <td class="column-2"><img src={cross} alt="" />  </td>
                            <td class="column-3"><img src={cross} alt="" />  </td>
                            <td class="column-4"></td>
                            <td class="column-5"><img src={tick} alt="" />7</td>
                            <td class="column-6"><img src={tick} alt="" />7</td>
                            <td class="column-7"><img src={tick} alt="" />7</td>
                            <td class="column-8"></td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-24 even">
                            <td class="column-1">Villa Constitución Serv. Portuartios</td>
                            <td class="column-2"><img src={cross} alt="" />  </td>
                            <td class="column-3"><img src={cross} alt="" />  </td>
                            <td class="column-4"></td>
                            <td class="column-5"><img src={cross} alt="" /></td>
                            <td class="column-6"><img src={cross} alt="" /></td>
                            <td class="column-7"><img src={cross} alt="" /></td>
                            <td class="column-8"><img src={cross} alt="" /></td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-25 even">
                            <td class="column-1">Cofco Lima</td>
                            <td class="column-2"><img src={cross} alt="" />  </td>
                            <td class="column-3"><img src={cross} alt="" />  </td>
                            <td class="column-4"></td>
                            <td class="column-5"><img src={tick} alt="" />4</td>
                            <td class="column-6"><img src={tick} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" />9</td>
                            <td class="column-8"><img src={tick} alt="" />3</td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-26 even">
                            <td class="column-1">Bounge Ramallo</td>
                            <td class="column-2"><img src={cross} alt="" />  </td>
                            <td class="column-3"><img src={cross} alt="" />  </td>
                            <td class="column-4"><img src={cross} alt="" /> </td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"></td>
                            <td class="column-7"></td>
                            <td class="column-8"></td>
                            <td class="column-9"></td>
                            <td class="column-10"></td>
                        </tr>
                        <tr class="row-27 even">
                            <td class="column-1">LDC Timbues</td>
                            <td class="column-2"><img src={tick} alt="" /> 1 </td>
                            <td class="column-3"><img src={tick} alt="" />  1</td>
                            <td class="column-4"><img src={cross} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={tick} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" /></td>
                            <td class="column-8"><img src={tick} alt="" /> 3</td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-28 even">
                            <td class="column-1">COFCO Timbues</td>
                            <td class="column-2"><img src={tick} alt="" /> 1 </td>
                            <td class="column-3"><img src={tick} alt="" /> 1 </td>
                            <td class="column-4"><img src={cross} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={tick} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" /></td>
                            <td class="column-8"></td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-29 even">
                            <td class="column-1">Las Palmas</td>
                            <td class="column-2"><img src={cross} alt="" /> 1 </td>
                            <td class="column-3"><img src={cross} alt="" /> 1 </td>
                            <td class="column-4"></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={tick} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" /></td>
                            <td class="column-8"></td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-30 even">
                            <td class="column-1">COFCO Junin</td>
                            <td class="column-2"><img src={cross} alt="" />  </td>
                            <td class="column-3"><img src={cross} alt="" />  </td>
                            <td class="column-4"></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={tick} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" /></td>
                            <td class="column-8"></td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-31 even">
                            <td class="column-1">Grobocopatel</td>
                            <td class="column-2"><img src={cross} alt="" />  </td>
                            <td class="column-3"><img src={cross} alt="" /> </td>
                            <td class="column-4"><img src={cross} alt="" /></td>
                            <td class="column-5"><img src={cross} alt="" /></td>
                            <td class="column-6"><img src={cross} alt="" /></td>
                            <td class="column-7"><img src={cross} alt="" /></td>
                            <td class="column-8"><img src={cross} alt="" /></td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-32 even">
                            <td class="column-1">AGD Timbues</td>
                            <td class="column-2"><img src={cross} alt="" />  </td>
                            <td class="column-3"><img src={cross} alt="" /> </td>
                            <td class="column-4"><img src={tick} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={tick} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" /></td>
                            <td class="column-8"><img src={tick} alt="" /></td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        <tr class="row-33 even">
                            <td class="column-1">ACA Timbues</td>
                            <td class="column-2"><img src={cross} alt="" />  </td>
                            <td class="column-3"><img src={cross} alt="" /> </td>
                            <td class="column-4"><img src={cross} alt="" /></td>
                            <td class="column-5"><img src={tick} alt="" /></td>
                            <td class="column-6"><img src={tick} alt="" /></td>
                            <td class="column-7"><img src={tick} alt="" /></td>
                            <td class="column-8"><img src={tick} alt="" /></td>
                            <td class="column-9"></td>
                            <td class="column-10"><img src={tick} alt="" /></td>
                        </tr>
                        
                        
                    </tbody>
                </table>

                <p className="big mt-4">
                1 - Solo autodescargables . <br />
                3 - Hasta 60 ton solo tolvas.<br />
                4 - Hasta 60 ton bruto.  <br />
                5 - Hasta 75 ton solo tolvas Soja y Maiz.<br />
                6 - Solo si el doble eje tle tractor no es hidráulico.<br />
                7 - Solo hasta 45 ton. <br />
                8 - Con eje hidráulico en tractor no. <br />
                9 - Solo con boquillas. <br />
                10 - Semi solo con eje simple en chasis / Con trigo y maíz al menos 4 boquillas / Con girasol con 4 boquillas y puertas laterales.<br />
                11 - Con soja, maíz y trigo. No girasol.<br />
                12 - Con soja si, otra mercadería solo hasta 45 ton de bruto. <br />
                13 - Solo con eje simple en chasis / Maíz y trigo con al menos 3 boquillas / Con girasol no descarga. <br/>
                14 - Pero solo los que tienen boquillas a cada lado / Tractor con eje hidráulico No.<br/>
                15 - Balancines solo de ejes fijos y no hidráulicos.<br/>
                16 - Solo si acoplado es menor a 9.80 mts.<br/>
                17 - Balancin no<br/>
                18 - No debe superar los 12mts desde parte trasera de la rueda del chasis (donde traba la calza) hasta el paragolpes trasero del acoplado. <br/>
                </p>
            </Container>

            <PreFooter />
        </div>
    )
}

export default TipoDeCamiones
