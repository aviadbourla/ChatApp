import React, { useState, useEffect } from 'react';
import Squre from './Squre'
import './game.css';

const Board = (props) => {
    const [boardSquares, setBoardSquares] = useState([{player:0,simbole:''}])
    const [gamestart, SetGamestart] = useState(true);
    
    const xarr = 16;
    const yarr = 16;
    const Xflag = Math.floor(Math.random() * 7);
    const Xblackhool = Math.floor(Math.random() * 6);
    const oflag = Math.floor(Math.random() * (47 - 40 + 1) + 40);
    const oblackhool = Math.floor(Math.random() * (47 - 40 + 1) + 40);

    if (gamestart) {
        for (let i = 0; i <= 15; i++) {
            boardSquares[i] = {player:1,simbole:'x'};
        }
        for (let i = 32; i <= 47; i++) {
            boardSquares[i] =  {player:2,simbole:'o'};
        }
        SetGamestart(false);
    }

    const handleclick = (index) => {
        const squres = [...boardSquares];
        console.log(squres[index])
    }

    const renderSqure = (index) => {
        return <Squre value={boardSquares[index]} onClick={() => handleclick(index)} />
    };

    return (
            <div className="App-header">
                <div> {renderSqure(0)} {renderSqure(1)}  {renderSqure(2)} {renderSqure(3)} {renderSqure(4)} {renderSqure(5)} {renderSqure(6)} {renderSqure(7)} </div>
                <div> {renderSqure(8)} {renderSqure(9)}  {renderSqure(10)} {renderSqure(11)} {renderSqure(12)} {renderSqure(13)} {renderSqure(14)} {renderSqure(15)} </div>
                <div> {renderSqure(16)} {renderSqure(17)}  {renderSqure(18)} {renderSqure(19)} {renderSqure(20)} {renderSqure(21)} {renderSqure(22)} {renderSqure(23)} </div>
                <div> {renderSqure(24)} {renderSqure(25)}  {renderSqure(26)} {renderSqure(27)} {renderSqure(28)} {renderSqure(29)} {renderSqure(30)} {renderSqure(31)} </div>
                <div> {renderSqure(32)} {renderSqure(33)}  {renderSqure(34)} {renderSqure(35)} {renderSqure(36)} {renderSqure(37)} {renderSqure(38)} {renderSqure(39)} </div>
                <div> {renderSqure(40)} {renderSqure(41)}  {renderSqure(42)} {renderSqure(43)} {renderSqure(44)} {renderSqure(45)} {renderSqure(46)} {renderSqure(47)} </div>
            </div>
    )
}

export default Board;