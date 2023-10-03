import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

function MoreOption() {

    const navigate =useNavigate();
    const {snakeArr,setSnakeArr,highScore,setHighScore,difficulty,setDifficulty,volume,
        direction,
        setDirection,
        food,
        setFood,
        isPause,
        setIsPause,
        saveGame,
        setSaveGame,
        saveGameFunction,
        message,
        setMessage
      } = useContext(MyContext);
      function saveGameHandle(){
        
    saveGameFunction();
    console.log("trigger")

      }

      useEffect(()=>{
        const gameObj={
            
            name:localStorage.getItem("name"),
            userid:localStorage.getItem("id"),
            score:(snakeArr.length) - 2,
            highscore:highScore,
            lastsnakeposition:snakeArr,
            lastfoodposition:food,
            lastmode:difficulty,
            lastsound:volume
        }
        setSaveGame(gameObj);

      },[isPause, snakeArr, highScore, food, difficulty, volume, setSaveGame])
     

  return (
    <div className='more-option'>
      <div >
            
            <button className='btn btn-outline-primary' onClick={()=>(setIsPause(!isPause))}>{isPause?"RESUME":"PAUSE"}</button>
            </div>
            <div >
            {!message?
            <button className='btn btn-outline-primary' onClick={()=>(saveGameHandle(),setIsPause(true),setMessage(true))}>SAVE</button>
            :
            <button className='btn btn-outline-primary' >loading</button>
            }
            </div>
            <div >
            <button className='btn btn-outline-primary' onClick={()=>(navigate("/"))}>BACK</button>
            </div>

    </div>
  )
}

export default MoreOption
