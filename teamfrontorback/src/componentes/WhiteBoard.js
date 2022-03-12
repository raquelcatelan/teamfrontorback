import React from 'react'
import '../App.scss';
import './style.scss';



const WhiteBoard = ( {children} ) => {
    return(
        <section >

            <div className="board-white" >
                <p className="goals"> {children} </p>
            </div>

        </section>
    )
}

export default WhiteBoard