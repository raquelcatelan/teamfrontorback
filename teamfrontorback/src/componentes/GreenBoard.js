import React from 'react'
import '../App.scss';
import './style.scss';

const GreenBoard = ( {children}) => {

    return (
      <div>
          <div className="board-green board-large">
              <p className="paragraph-board-green" >{children}</p>
          </div>
      </div>
    )
}

export default GreenBoard