import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Quizz from './pages/Quizz/Quizz'
import ShowAnswers from './pages/ShowAnswers/ShowAnswers'
import Results from './pages/Results/Results'

function Rotas() {
    return(
        <Routes>
            <Route path='/register' element={ <Register /> }  />


            <Route path= '/login'  element={<Login />} />


            <Route path='/quizz' element={<Quizz />} />


            <Route  path='/show-answers' element={<ShowAnswers />} />


            <Route path='/results' element={ <Results /> } />


        </Routes>
    )
}

export default Rotas;