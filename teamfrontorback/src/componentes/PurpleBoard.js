import React from 'react'
import '../App.scss';
import './style.scss';

const PurpleBoard = ( {children}) => {

    return (
      <div>
          <div className="board-purple">
              <p className="paragraph-board-purple" >{children}</p>
          </div>
      </div>
    )
}

export default PurpleBoard