import React from 'react'
import '../../App.scss'
import WhiteBoard from '../../componentes/WhiteBoard'
import Done from '../../assets/Goodies - Done.svg'
import TimeFront from '../../assets/Programadora-Front.svg'
import TimeBack from '../../assets/Programadora-Back.svg'


function Results() {
    return (
        <div className="layout">

            <div>
                <div className="header-results">
                <img className="bandeira-done" src={Done} width={150} height={150} alt="bandeira" />
                </div>
                <div className= "board margin-top">
                <WhiteBoard >
                    <p className="paragraph-results"> Você combina
                        mais com: </p>
                       <p className="paragraph-time"> <span className="time-front" >#timefront</span> <span  className="time-back">#timeback</span> </p>
                </WhiteBoard>
                </div>

                <div  className="area-results">
                        {/* obs: a porcentagem é surpresa porque nao consegui terminar essa parte ;/ */}
                        <img className="img-result"   src={TimeFront} alt="menina programadora" width={150} height={150} />
                        <p className="p-result" >% FRONT END</p>


                        <img className="img-result" src={TimeBack} alt="menina programadora" width={150} height={150}/>
                        <p  className="p-result">% BACK END</p>

                </div>

            </div>

        </div>
    )
}

export default Results