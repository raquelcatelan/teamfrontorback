import React, { useState } from 'react'
import '../../App.scss'
import Progress from '../../componentes/Progress'
import WhiteBoard from '../../componentes/WhiteBoard'
import GreenBoard from '../../componentes/GreenBoard'
import PurpleBoard from '../../componentes/PurpleBoard'
import ButtonGreen from '../../componentes/ButtonGreen'
import RadioButton from '../../componentes/RadioButton'
import Radio from '@mui/material/Radio';



const questions = [

    {
        question: '1. Prefiro fotografar lugares do que ler livros:',
        answerOptions: [
            { answer: 'a. SIM', isCurrentAmount: +10 },
            { answer: 'b. NÃO', isCurrentSubtract: -10 },
            { answer: 'c. OS DOIS/NENHUM DOS DOIS', isCurrent: 0 }
        ]
    },

    {
        question: '2. Acho melhor aplicativos/sites que sejam Lindos do que Rápido:',
        answerOptions: [
            { answer: 'a. SIM', isCurrentAmount: +10 },
            { answer: 'b. NÃO', isCurrentSubtract: -10 },
            { answer: 'c. IGUALMENTE IMPORTANTES', isCurrent: 0  }

        ]
    },

    {
        question: '3. Me enxergo mais como artista do que como uma engenheira:',
        answerOptions: [
            { answer: 'a. SIM' ,isCurrentAmount: +10 },
            { answer: 'b. NÃO', isCurrentSubtract: -10},
            { answer: 'c. OS DOIS/NENHUM DOS DOIS', isCurrent: 0 }
        ]
    },

    {
        questions: '4. Me apego tanto aos detalhes que às vezes demoro muito pra fazer minhas atividade:',
        answerOptions: [
            { answer: 'a. SIM' ,isCurrentAmount: +10 },
            { answer: 'b. NÃO', isCurrentSubtract: -10 }
        ]

    },

    {
        question: '5. Prefiro História ou Ciências a Matemática ou Química:',
        answerOptions: [
            { answer: 'a. SIM'  ,isCurrentAmount: +10  },
            { answer: 'b. NÃO' ,  isCurrentSubtract: -10  },
            { answer: 'c. PREFIRO IGUALMENTE TODAS', isCurrent: 0 }
        ]

    }
]

function Quizz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [selectedValue, setSelectedValue] = React.useState('');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };




    return (
        <div className="layout">
            <div className="linear-progress progress-quizz">
                <Progress value={100} />
            </div>
            <div className="board">
                <div className="title-quizz">
                    <p className="label-quizz">QUIZZ</p>
                </div>
                <WhiteBoard >
                    <p className="paragraph-quizz"> Responda esse
                        quiz para descobrir
                        se é: <span className="time-front" >#timefront</span> ou <span className="time-back">#timeback</span> </p>

                </WhiteBoard>

            </div>
            <div>

                <div className="question-board">
                    < GreenBoard className="board-large" >
                        <p>{questions[currentQuestion].question}</p>
                    </GreenBoard>
                </div>

                <div >
                    <div className="answer-board">
                        {questions[currentQuestion].answerOptions.map((answerOptions, index) => (
                            <div className="answer-section">
                                < PurpleBoard >
                                    <div className="answer-area">
                                       <Radio
                                        checked={selectedValue === answerOptions.answer}
                                        onChange={handleChange}
                                        value={answerOptions.answer}
                                        name="radio-buttons"
                                        inputProps={{ 'aria-label': 'A' }}

                                       />
                                        <p key={index}>{answerOptions.answer}</p>
                                    </div>
                                </PurpleBoard>
                            </div>
                        ))}
                    </div>

                </div>

            </div>

            <div className="button-page">
                <ButtonGreen

                >
                    <p>PRÓXIMO</p>
                </ButtonGreen>
            </div>

        </div>
    )
}

export default Quizz