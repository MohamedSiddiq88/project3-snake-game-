import React, { useContext, useEffect } from 'react'
import MainPage from './MainPage'
import { useNavigate } from 'react-router-dom'
import Auth from './Auth';
import { MyContext } from '../context/Context';

function OptionPage() {
    const {getSaveGameFunction,newGameFunction, isSaveGameAvailable,
        setIsSaveGameAvailable,checkSavedGame}=useContext(MyContext);
    const navigate = useNavigate();
    function signOut(){
        localStorage.removeItem("name");
        localStorage.removeItem("id");
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        window.location.reload()
        navigate("/login")
        
    }

    function getGameHandle(){
        getSaveGameFunction();
        navigate("/mainpage")
    }

    function newGameHandle(){
        newGameFunction();
        navigate("/mainpage")
    }

  

    useEffect(()=>{
        checkSavedGame()
        console.log(isSaveGameAvailable)
       },[navigate])
  return (
    <Auth>
    <div>
      <header className='App-header'>
        <h1>Snake Game</h1>
      <button onClick={()=>(navigate('/mainpage'),newGameHandle())} className='game-button'>
      new game
      </button>
      {isSaveGameAvailable?
        <button className='game-button' onClick={()=>getGameHandle()} >
      continue game
    </button>
    :
    <button className='game-button'  disabled={true}>
      continue game
    </button>
      }
    <button  className='game-button' onClick={()=>signOut()}>
      Sign out
    </button>
      </header>
    </div>
    </Auth>
  )
}

export default OptionPage
