import React from 'react'
import '../../App.scss'
import Avatar from '../../assets/avatar-login.svg'
import ButtonGreen from '../../componentes/ButtonGreen'
import GreenBoard from '../../componentes/GreenBoard'

function Login() {
    return (
        <div className="layout">

            <h1 className="title-page" >#TEAMFRONTORBACK</h1>
            <div className="avatar">
                <img src={Avatar} alt="avatar" width={150} height={150} />
            </div>
            <div className="infos-login">
                <div className="board-infos">
                <GreenBoard>
                    Nome
                </GreenBoard>
                </div>
                <div className="board-infos">
                <GreenBoard>
                    Data
                </GreenBoard>
                </div>

            </div>
            <div>
                <ButtonGreen> LOGIN </ButtonGreen>
            </div>

        </div>
    )
}

export default Login