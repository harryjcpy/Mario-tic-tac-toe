/*import { React, useState, useRef } from 'react'
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

let data = ["","","","","","","","",""];

const TicTacToe = () => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

    const toggle = (w,num) => {
        if (lock) {
            return 0;
        }
        if (count%2===0) {
            event.target.innerHTML = `<img src='${cross_icon}'>`;
            data[num] = "x";
            setCount(++count); 
        } 
        else {
            event.target.innerHTML = `<img src='${circle_icon}'>`;
            data[num] = "o";
            setCount(++count); 
        }
        checkWin();
    }

    const checkWin = () => {
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            won(data[2]);
        }  else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            won(data[5]);
        }  else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
            won(data[8]);
        }  else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            won(data[6]);
        }  else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
            won(data[7]);
        }  else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            won(data[8]);
        }  else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
            won(data[8]);
        }  else if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            won(data[2]);
        }  else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
            won(data[6]);
        }
    }

    const won = (winner) => {
        setLock(true);
        if(winner==='x'){
            titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon}> wins`
        } else {
            titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon}> wins`
        }
    }

    const reset = () => {
        setLock(false);
        data=["","","","","","","","",""];
        titleRef.current.innerHTML = `Tic Tac Toe in <span>React</span>`;
        box_array.map((e)=>{
            e.current.innerHTML = "";
        })
    }

    return (
        <div className="container">
            <h1 className="title" ref={titleRef}>
                Tic Tac Toe in<span>React</span>
            </h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
                    <div className="boxes" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
                    <div className="boxes" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
                </div> ref={box1}
                <div className="row2">
                    <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
                    <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
                    <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
                </div>
                <div className="row3">
                    <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
                    <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
                    <div className="boxes" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
                </div>
            </div>
            <button className="reset" onClick={() => {reset()}}>Reset</button>
        </div>
    )
};

export default TicTacToe;*/

import { React, useState, useRef } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

let initialData = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
    let [data, setData] = useState(initialData);
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);

    const toggle = (e, num) => {
        if (lock || data[num] !== "") {
            return;
        }

        let newData = [...data]; // copy data state
        if (count % 2 === 0) {
            newData[num] = "x";
        } else {
            newData[num] = "o";
        }
        setData(newData);
        setCount(count + 1);
        checkWin(newData); // pass new data to checkWin
    };

    const checkWin = (currentData) => {
        if (currentData[0] === currentData[1] && currentData[1] === currentData[2] && currentData[2] !== "") {
            won(currentData[0]);
        } else if (currentData[3] === currentData[4] && currentData[4] === currentData[5] && currentData[5] !== "") {
            won(currentData[3]);
        } else if (currentData[6] === currentData[7] && currentData[7] === currentData[8] && currentData[8] !== "") {
            won(currentData[6]);
        } else if (currentData[0] === currentData[3] && currentData[3] === currentData[6] && currentData[6] !== "") {
            won(currentData[0]);
        } else if (currentData[1] === currentData[4] && currentData[4] === currentData[7] && currentData[7] !== "") {
            won(currentData[1]);
        } else if (currentData[2] === currentData[5] && currentData[5] === currentData[8] && currentData[8] !== "") {
            won(currentData[2]);
        } else if (currentData[0] === currentData[4] && currentData[4] === currentData[8] && currentData[8] !== "") {
            won(currentData[0]);
        } else if (currentData[2] === currentData[4] && currentData[4] === currentData[6] && currentData[6] !== "") {
            won(currentData[2]);
        }
    };

    const won = (winner) => {
        setLock(true);
        if (winner === "x") {
            titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon} alt="X" /> wins`;
        } else {
            titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon} alt="O" /> wins`;
        }
    };

    const reset = () => {
        setData(initialData); // Reset the game data to initial state
        setCount(0);          // Reset the turn count
        setLock(false);       // Unlock the game
        titleRef.current.innerHTML = `Tic Tac Toe in <span>React</span>`; // Reset the title
    };

    return (
        <div className="container">
            <h1 className="title" ref={titleRef}>
                Tic Tac Toe in <span>React</span>
            </h1>
            <div className="board">
                <div className="row">
                    <div className="boxes" onClick={(e) => toggle(e, 0)}>
                        {data[0] === "x" ? <img src={cross_icon} alt="X" /> : data[0] === "o" ? <img src={circle_icon} alt="O" /> : ""}
                    </div>
                    <div className="boxes" onClick={(e) => toggle(e, 1)}>
                        {data[1] === "x" ? <img src={cross_icon} alt="X" /> : data[1] === "o" ? <img src={circle_icon} alt="O" /> : ""}
                    </div>
                    <div className="boxes" onClick={(e) => toggle(e, 2)}>
                        {data[2] === "x" ? <img src={cross_icon} alt="X" /> : data[2] === "o" ? <img src={circle_icon} alt="O" /> : ""}
                    </div>
                </div>
                <div className="row">
                    <div className="boxes" onClick={(e) => toggle(e, 3)}>
                        {data[3] === "x" ? <img src={cross_icon} alt="X" /> : data[3] === "o" ? <img src={circle_icon} alt="O" /> : ""}
                    </div>
                    <div className="boxes" onClick={(e) => toggle(e, 4)}>
                        {data[4] === "x" ? <img src={cross_icon} alt="X" /> : data[4] === "o" ? <img src={circle_icon} alt="O" /> : ""}
                    </div>
                    <div className="boxes" onClick={(e) => toggle(e, 5)}>
                        {data[5] === "x" ? <img src={cross_icon} alt="X" /> : data[5] === "o" ? <img src={circle_icon} alt="O" /> : ""}
                    </div>
                </div>
                <div className="row">
                    <div className="boxes" onClick={(e) => toggle(e, 6)}>
                        {data[6] === "x" ? <img src={cross_icon} alt="X" /> : data[6] === "o" ? <img src={circle_icon} alt="O" /> : ""}
                    </div>
                    <div className="boxes" onClick={(e) => toggle(e, 7)}>
                        {data[7] === "x" ? <img src={cross_icon} alt="X" /> : data[7] === "o" ? <img src={circle_icon} alt="O" /> : ""}
                    </div>
                    <div className="boxes" onClick={(e) => toggle(e, 8)}>
                        {data[8] === "x" ? <img src={cross_icon} alt="X" /> : data[8] === "o" ? <img src={circle_icon} alt="O" /> : ""}
                    </div>
                </div>
            </div>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    );
};

export default TicTacToe;
