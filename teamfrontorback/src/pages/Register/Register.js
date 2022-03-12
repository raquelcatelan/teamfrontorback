import React from 'react';
import WhiteBoard from '../../componentes/WhiteBoard'
import Gender from '../../componentes/Gender'
import BirthDate from '../../componentes/BirthDate'
import ButtonGreen from '../../componentes/ButtonGreen'
import '../../App.scss'

function Register() {
    return (
        <div className="layout ">

            <h1 className="title-page" >
                #TEAMFRONTORBACK
            </h1>
            <div className="board">
            <WhiteBoard >
                <p>ESSE SITE VAI TE AJUDAR A DESCOBRIR  SE  VOCÊ COMBINA MAIS COM <br></br>
                    DESENVOLVIMENTO FRONT END OU BACK END</p>
            </WhiteBoard>
            </div>

            <div className="form-register">
                <div className="select-gender">
                <Gender  />
                </div>
                <div className="date-input">
                <BirthDate />
                </div>


            </div>

            <ButtonGreen> Próximo </ButtonGreen>



        </div>
    )
}

export default Register;