import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';
import MoreOption from './MoreOption';
import { MyContext } from '../context/Context';


function MainPage() {
  const {snakeArr}=useContext(MyContext);



  
  return (
    <div>
      
      <div className='main-page-body'>
        <header className='App-header'>
        <div className='row-div'>
        
        <MoreOption />
        <GameBoard />
        <ScoreBoard />
        </div>
        <pre className='message'>{`Comming soon for small screens
untill that you can enjoy this game one large screens`
        }
        </pre>
        </header>
      </div>
    </div>
  )
}

export default MainPage
