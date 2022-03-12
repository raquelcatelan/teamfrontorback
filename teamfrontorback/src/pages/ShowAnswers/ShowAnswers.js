import React from 'react'
import '../../App.scss'
import Answers from '../../componentes/Answers';
import Done from '../../assets/Goodies - Done.svg'
import Progress from '../../componentes/Progress'
import ButtonGreen from '../../componentes/ButtonGreen';

function ShowAnswers() {
    return (
        <div className="layout">

            <div className="header-answer" >
                <img className="bandeira-done" src={Done} width={150} height={150} alt="bandeira" />
            </div>
                <div className="linear-progress">
                    <Progress value={100} />
                </div>
            <div className="accordions-answer" >
                <Answers />
            </div>

                <div className="show-results">
                    <ButtonGreen>
                        VER RESULTADO DO QUIZZ
                    </ButtonGreen>
                </div>
        </div>
    )
}

export default ShowAnswers