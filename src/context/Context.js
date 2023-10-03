import React, { createContext, useEffect, useState } from 'react'


const MyContext = createContext();
function Context({children}) {
  const [snakeArr, setSnakeArr] = useState([{ x: 10, y: 10 }, { x: 10, y: 11 }]);
  const initialHighScore =  0 ;
  const [highScore,setHighScore] = useState(initialHighScore);
  const [score,setScore] = useState(0);
  const [difficulty,setDifficulty] = useState({"level":"easy","number":1});
  const [volume,setVolume] = useState(0.5);  
  const [direction, setDirection] = useState({ x: 0, y: 0 });
  const [food, setFood] = useState({ x: 5, y: 9 });  
  const [isPause,setIsPause]=useState(false);
  const [saveGame,setSaveGame]=useState({});
  const [message,setMessage]=useState(false);
  const [isSaveGameAvailable,setIsSaveGameAvailable]=useState(false);
 


  async function saveGameFunction(){
    console.log(saveGame)
    let response = await fetch("https://project3-backend-d1f6.onrender.com/game/update", {
      method:"PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(saveGame)
    });
  
    let result = await response.json();
    if(response.ok){
      setMessage(false)
    }
  }

  async function getSaveGameFunction(){
    // console.log(saveGame)
    let response = await fetch(`https://project3-backend-d1f6.onrender.com/game/${localStorage.getItem("id")}`, {
      method:"GET"
    });
  
    let result = await response.json();
   if(response.ok){
 
    setScore(result.data.score);
    setHighScore(result.data.highscore);
    setSnakeArr(result.data.lastsnakeposition);
    setFood(result.data.lastfoodposition);
    setDifficulty(result.data.lastmode);
    setVolume(result.data.lastsound);
    console.log(result)
   }

  }

 function newGameFunction(){
  setScore(0);
  setHighScore(0);
  setSnakeArr([{ x: 10, y: 10 }, { x: 10, y: 11 }]);
  setFood({ x: 5, y: 9 });
  setDifficulty({"level":"easy","number":1});
  setVolume(0.5);
 }
 
 async function checkSavedGame(){
  let response = await fetch(`https://project3-backend-d1f6.onrender.com/game/${localStorage.getItem("id")}`, {
    method:"GET"
  });
  let result = await response.json();

  if(result.data){
    setIsSaveGameAvailable(true)
    console.log("ok",result.data)
  }

 }
 
 useEffect(()=>{
  checkSavedGame()
 },[])

  return (
    <MyContext.Provider value={
      {
        snakeArr,
        setSnakeArr,
        highScore,
        setHighScore,
        difficulty,
        setDifficulty,
        volume,
        setVolume,
        direction,
        setDirection,
        food,
        setFood,
        isPause,
        setIsPause,
        saveGame,
        setSaveGame,
        saveGameFunction,
        getSaveGameFunction,
        message,
        setMessage,
        newGameFunction,
        isSaveGameAvailable,
        setIsSaveGameAvailable,
        checkSavedGame
      }
      }>
      {children}
    </MyContext.Provider>
  )
}

export  { Context, MyContext }
