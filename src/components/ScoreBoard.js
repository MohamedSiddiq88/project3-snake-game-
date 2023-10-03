import React, { useContext, useState } from 'react'
import { MyContext } from '../context/Context';

function ScoreBoard() {
const { snakeArr, highScore, difficulty, setDifficulty, volume, setVolume, } = useContext(MyContext);
    function preventArrowKeys(e) {
        if (
            e.key === 'ArrowLeft' ||
            e.key === 'ArrowRight' ||
            e.key === 'ArrowUp' ||
            e.key === 'ArrowDown'
        ) {
            e.preventDefault();
        }
    }

    function handleMode(value) {
        switch (value) {
            case 1:
                setDifficulty({"level":"easy","number":1});
                break;

            case 2:
                setDifficulty({"level":"medium","number":2});
                break;

            case 3:
                setDifficulty({"level":"hard","number":3});
                break;

            default:
                break;

        }
    }

    return (
        <div className='score-board'>
            <div className='score-board-element'>
                <p className='high-score-text score-text'>
                    HIGH SCORE
                </p>
                <p>
                    {highScore}

                </p>
            </div>
            <div className='score-board-element'>
                <p className='score-text'>
                    SCORE
                </p>
                <p>
                    {(snakeArr.length) - 2}

                </p>
            </div>
            <div className='score-board-element'>
                <p>MODE</p>
                <input type='range' id='mode'
                    min='1'
                    max='3'
                    defaultValue={1}
                    value={difficulty.number}
                    onChange={(e) => (handleMode(Number(e.target.value)))}
                    onKeyDown={(e) => preventArrowKeys(e)}
                ></input>
                {/* <p>{difficulty === 1 ? "easy" : difficulty}</p> */}
                <p>{difficulty.level}</p>

            </div>
            <div className='score-board-element'>
                <p>VOLUME</p>
                <input type='range'
                    id='volume'
                    min={0}
                    max={100}
                    defaultValue={50}
                    value={volume*100}
                    onChange={(e) => setVolume(Number((e.target.value) / 100))}
                    onKeyDown={(e) => preventArrowKeys(e)}
                ></input>
                <p>{parseInt(volume * 100)}%</p>
            </div>
            
        </div>
    )
}

export default ScoreBoard
