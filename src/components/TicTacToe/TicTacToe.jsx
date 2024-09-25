
/*87import { useState, useRef, useEffect } from 'react';
import './TicTacToe.css';
import backgroundMusicFile from '../Assets/background.mp3';
import clickSoundFile from '../Assets/click.mp3';
import winSoundFile from '../Assets/win.mp3';
import drawSoundFile from '../Assets/draw.mp3';
import { AiFillSound } from "react-icons/ai";
import { RxSpeakerOff } from "react-icons/rx";
import crossIcon from '../Assets/cross.png'; // Cross (X) icon
import circleIcon from '../Assets/circle.png'; // Circle (O) icon
import DrawComponent from './DrawComponent';

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true); // Track sound status
  const [isGameDraw, setIsGameDraw] = useState(false); // Track if the game is a draw
  const backgroundMusic = useRef(null);
  const clickSound = useRef(null);
  const winSound = useRef(null);
  const drawSound = useRef(null);
  const titleRef = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);
  let boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  useEffect(() => {
    // Initialize the sounds
    backgroundMusic.current = new Audio(backgroundMusicFile);
    backgroundMusic.current.loop = true;

    clickSound.current = new Audio(clickSoundFile);
    winSound.current = new Audio(winSoundFile);
    drawSound.current = new Audio(drawSoundFile);

    // Play the background music if sound is on
    if (isSoundOn) {
      backgroundMusic.current.play().catch(() => {});
    }

    // Cleanup sounds when the component unmounts
    return () => {
      backgroundMusic.current.pause();
      backgroundMusic.current.currentTime = 0;
    };
  }, [isSoundOn]); // Only restart music if sound state changes

  const toggleSound = () => {
    if (isSoundOn) {
      backgroundMusic.current.pause();
    } else {
      backgroundMusic.current.play().catch(() => {});
    }
    setIsSoundOn(!isSoundOn);
  };

  const toggle = (e, num) => {
    if (lock) return;

    // Play click sound if sound is on
    if (isSoundOn) {
      clickSound.current.play();
    }

    if (data[num] === "") {
      if (count % 2 === 0) {
        e.target.innerHTML = `<img src='${crossIcon}' alt='X'>`;
        data[num] = "x";
      } else {
        e.target.innerHTML = `<img src='${circleIcon}' alt='O'>`;
        data[num] = "o";
      }
      setCount(count + 1);
    }
    checkWin();
  };

  const checkWin = () => {
    let winner = null;

    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      winner = data[2];
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      winner = data[5];
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      winner = data[8];
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      winner = data[6];
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      winner = data[7];
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      winner = data[8];
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      winner = data[8];
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      winner = data[6];
    } else if (count === 8 && winner === null) {
      // If all boxes are filled and no winner, it's a draw
      setIsGameDraw(true);
      setLock(true);
      drawSound.current.play();
    }

    if (winner) {
      won(winner);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (isSoundOn) {
      winSound.current.play();
    }
    if (winner === 'x') {
      titleRef.current.innerHTML = `Congratulations: <img src='${crossIcon}' alt='X'> wins`;
    } else {
      titleRef.current.innerHTML = `Congratulations: <img src='${circleIcon}' alt='O'> wins`;
    }
  };

  const reset = () => {
    setLock(false);
    setIsGameDraw(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = `Tic Tac Toe in <span>React</span>`;
    boxArray.forEach((e) => {
      e.current.innerHTML = "";
    });
    setCount(0);
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        Tic Tac Toe in <span>React</span>
      </h1>

      <button className="sound-toggle" onClick={toggleSound}>
        <img src={isSoundOn ? <AiFillSound /> : <RxSpeakerOff />} alt="Toggle Sound" />
      </button>

      <div className="board">
        <div className="row1">
          <div className="boxes" ref={box1} onClick={(e) => toggle(e, 0)}></div>
          <div className="boxes" ref={box2} onClick={(e) => toggle(e, 1)}></div>
          <div className="boxes" ref={box3} onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row2">
          <div className="boxes" ref={box4} onClick={(e) => toggle(e, 3)}></div>
          <div className="boxes" ref={box5} onClick={(e) => toggle(e, 4)}></div>
          <div className="boxes" ref={box6} onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row3">
          <div className="boxes" ref={box7} onClick={(e) => toggle(e, 6)}></div>
          <div className="boxes" ref={box8} onClick={(e) => toggle(e, 7)}></div>
          <div className="boxes" ref={box9} onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>

      {isGameDraw && <DrawComponent />}

      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;*/

/*94import { React, useState, useRef, useEffect } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';
import background from '../Assets/background.mp3';
import clickSound from '../Assets/click.mp3';
import winSound from '../Assets/win.mp3';
import drawSound from '../Assets/draw.mp3';
import DrawComponent from './DrawComponent';
import { RxSpeakerOff } from "react-icons/rx";
import { RxSpeakerLoud } from "react-icons/rx";


let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [bgmPlaying, setBgmPlaying] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const bgmRef = useRef(new Audio(background));
  const clickRef = useRef(new Audio(clickSound));
  const winRef = useRef(new Audio(winSound));
  const drawRef = useRef(new Audio(drawSound));
  const titleRef = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggleSound = () => {
    if (bgmPlaying) {
      bgmRef.current.pause();
    } else {
      bgmRef.current.play();
    }
    setBgmPlaying(!bgmPlaying);
  };

  useEffect(() => {
    if (!lock) {
      bgmRef.current.loop = true;
    }
  }, [lock]);

  useEffect(() => {
    return () => {
      bgmRef.current.pause();
      setBgmPlaying(false);
    };
  }, []);


  const toggle = (num) => {
    if (lock) return;
  
    if (data[num] === "") {
      // Ensure the click sound plays immediately without delay
      clickRef.current.pause();
      clickRef.current.currentTime = 0;  // Reset the sound to the start
      clickRef.current.play();
  
      if (count % 2 === 0) {
        data[num] = "x";
        box_array[num].current.innerHTML = `<img src='${cross_icon}' alt='X' />`;
      } else {
        data[num] = "o";
        box_array[num].current.innerHTML = `<img src='${circle_icon}' alt='O' />`;
      }
      setCount(count + 1);
      checkWin();
    }
  };
  

  const checkWin = () => {
    const winningPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        won(data[a]);
        return;
      }
    }
    if (!data.includes("")) {
      handleDraw();
    }
  };

  const won = (winner) => {
    setLock(true);
    bgmRef.current.pause();
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon} alt='X' /> wins`;
    } else {
      titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon} alt='O' /> wins`;
    }
    winRef.current.play();
  };

  const handleDraw = () => {
    setLock(true);
    setIsDraw(true);
    bgmRef.current.pause();
    drawRef.current.play();
  };



    const reset = () => {
    // Reset the game state
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = `Tic Tac Toe in <span>React</span>`;
    box_array.forEach((e) => {
      e.current.innerHTML = "";
    });

    // Reset the background music to the start and play it
    if (bgmRef.current) {
      bgmRef.current.pause();
      bgmRef.current.currentTime = 0;
      if (soundEnabled) {
        bgmRef.current.play();
      }
    }

    // Reset other states as necessary
    setCount(0);
    setIsDraw(false);
  };
  const reset = () => {
    // Reset the game state
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = `Tic Tac Toe in <span>React</span>`;
    box_array.forEach((e) => {
      e.current.innerHTML = "";
    });

    // Reset the background music to the start and play it
    if (bgmRef.current) {
      bgmRef.current.pause();  // Stop the current music
      bgmRef.current.currentTime = 0;  // Set the music to the beginning
      bgmRef.current.play();  // Start playing the music again
    }

    // Reset other states as necessary
    setCount(0);
    setDraw(false);
  };


  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        Tic Tac Toe in <span>React</span>
      </h1>
      <button className="toggle-music" onClick={toggleSound}>
        {bgmPlaying ? <RxSpeakerLoud />
          : <RxSpeakerOff />}
      </button>
      <div className="board">
        <div className="row">
          <div className="boxes" ref={box1} onClick={() => toggle(0)}></div>
          <div className="boxes" ref={box2} onClick={() => toggle(1)}></div>
          <div className="boxes" ref={box3} onClick={() => toggle(2)}></div>
        </div>
        <div className="row">
          <div className="boxes" ref={box4} onClick={() => toggle(3)}></div>
          <div className="boxes" ref={box5} onClick={() => toggle(4)}></div>
          <div className="boxes" ref={box6} onClick={() => toggle(5)}></div>
        </div>
        <div className="row">
          <div className="boxes" ref={box7} onClick={() => toggle(6)}></div>
          <div className="boxes" ref={box8} onClick={() => toggle(7)}></div>
          <div className="boxes" ref={box9} onClick={() => toggle(8)}></div>
        </div>
      </div>
      {isDraw && <DrawComponent />}
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  );
};

export default TicTacToe;*/

/*52import { React, useState, useRef, useEffect } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';
import background from '../Assets/background.mp3';
import clickSound from '../Assets/click.mp3';
import winSound from '../Assets/win.mp3';
import drawSound from '../Assets/draw.mp3';
import DrawComponent from './DrawComponent';
import { RxSpeakerOff } from "react-icons/rx";
import { RxSpeakerLoud } from "react-icons/rx";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [bgmPlaying, setBgmPlaying] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const bgmRef = useRef(new Audio(background));
  const clickRef = useRef(new Audio(clickSound));
  const winRef = useRef(new Audio(winSound));
  const drawRef = useRef(new Audio(drawSound));
  const titleRef = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggleSound = () => {
    if (soundEnabled) {
      // Pause all sounds
      bgmRef.current.pause();
    } else {
      // Resume background sound if sound is enabled and background music is on
      bgmRef.current.play();
    }
    setSoundEnabled(!soundEnabled);
  };

  useEffect(() => {
    if (!lock) {
      bgmRef.current.loop = true;
    }
  }, [lock]);

  useEffect(() => {
    return () => {
      bgmRef.current.pause();
      setBgmPlaying(false);
    };
  }, []);

  const toggle = (num) => {
    if (lock) return;

    if (data[num] === "") {
      if (soundEnabled) {
        clickRef.current.pause();
        clickRef.current.currentTime = 0;  // Reset the sound to the start
        clickRef.current.play();
      }

      if (count % 2 === 0) {
        data[num] = "x";
        box_array[num].current.innerHTML = `<img src='${cross_icon}' alt='X' />`;
      } else {
        data[num] = "o";
        box_array[num].current.innerHTML = `<img src='${circle_icon}' alt='O' />`;
      }
      setCount(count + 1);
      checkWin();
    }
  };

  const checkWin = () => {
    const winningPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        won(data[a]);
        return;
      }
    }
    if (!data.includes("")) {
      handleDraw();
    }
  };

  const won = (winner) => {
    setLock(true);
    bgmRef.current.pause();
    if (soundEnabled) {
      winRef.current.play();
    }

    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon} alt='X' /> wins`;
    } else {
      titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon} alt='O' /> wins`;
    }
  };

  const handleDraw = () => {
    setLock(true);
    setIsDraw(true);
    bgmRef.current.pause();
    if (soundEnabled) {
      drawRef.current.play();
    }
  };

  const reset = () => {
    // Reset the game state
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = `Tic Tac Toe in <span>React</span>`;
    box_array.forEach((e) => {
      e.current.innerHTML = "";
    });

    // Stop win and draw sounds if they are playing
    winRef.current.pause();
    winRef.current.currentTime = 0;
    drawRef.current.pause();
    drawRef.current.currentTime = 0;

    // Reset the background music
    bgmRef.current.pause();
    bgmRef.current.currentTime = 0;
    bgmRef.current.play();

    // Reset other states
    setCount(0);
    setIsDraw(false); // Hide the draw message when reset is pressed
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        Tic Tac Toe in <span>React</span>
      </h1>
      <button className="btn btn-warning btn-lg toggle-music" onClick={toggleSound}>
        {soundEnabled ? <RxSpeakerLoud size={35}/> : <RxSpeakerOff size={35}/>}
      </button>
      <div className="board">
        <div className="row">
          <div className="box0" ref={box1} onClick={() => toggle(0)}></div>
          <div className="boxes" ref={box2} onClick={() => toggle(1)}></div>
          <div className="boxes" ref={box3} onClick={() => toggle(2)}></div>
        </div>
        <div className="row">
          <div className="boxes" ref={box4} onClick={() => toggle(3)}></div>
          <div className="box4" ref={box5} onClick={() => toggle(4)}></div>
          <div className="boxes" ref={box6} onClick={() => toggle(5)}></div>
        </div>
        <div className="row">
          <div className="boxes" ref={box7} onClick={() => toggle(6)}></div>
          <div className="boxes" ref={box8} onClick={() => toggle(7)}></div>
          <div className="box8" ref={box9} onClick={() => toggle(8)}></div>
        </div>
      </div>
      {isDraw && <DrawComponent />}
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  );
};

export default TicTacToe;*/

import { React, useState, useRef, useEffect } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';
import background from '../Assets/background.mp3';
import clickSound from '../Assets/click.mp3';
import winSound from '../Assets/win.mp3';
import drawSound from '../Assets/draw.mp3';
import DrawComponent from './DrawComponent';
import { RxSpeakerOff } from "react-icons/rx";
import { RxSpeakerLoud } from "react-icons/rx";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false); // Default to false
  const [bgmPlaying, setBgmPlaying] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const bgmRef = useRef(new Audio(background));
  const clickRef = useRef(new Audio(clickSound));
  const winRef = useRef(new Audio(winSound));
  const drawRef = useRef(new Audio(drawSound));
  const titleRef = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggleSound = () => {
    if (soundEnabled) {
      // Pause all sounds
      bgmRef.current.pause();
      setBgmPlaying(false);
    } else {
      // Play background music if sound is enabled and it's not already playing
      bgmRef.current.play();
      setBgmPlaying(true);
    }
    setSoundEnabled(!soundEnabled);
  };

  useEffect(() => {
    if (!lock) {
      bgmRef.current.loop = true;
    }
  }, [lock]);

  useEffect(() => {
    return () => {
      bgmRef.current.pause();
      setBgmPlaying(false);
    };
  }, []);

  const toggle = (num) => {
    if (lock) return;

    if (data[num] === "") {
      if (soundEnabled) {
        clickRef.current.pause();
        clickRef.current.currentTime = 0;  // Reset the sound to the start
        clickRef.current.play();
      }

      if (count % 2 === 0) {
        data[num] = "x";
        box_array[num].current.innerHTML = `<img src='${cross_icon}' alt='X' />`;
      } else {
        data[num] = "o";
        box_array[num].current.innerHTML = `<img src='${circle_icon}' alt='O' />`;
      }
      setCount(count + 1);
      checkWin();
    }
  };

  const checkWin = () => {
    const winningPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        won(data[a]);
        return;
      }
    }
    if (!data.includes("")) {
      handleDraw();
    }
  };

  const won = (winner) => {
    setLock(true);
    bgmRef.current.pause();
    if (soundEnabled) {
      winRef.current.play();
    }

    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon} alt='X' /> wins`;
    } else {
      titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon} alt='O' /> wins`;
    }
  };

  const handleDraw = () => {
    setLock(true);
    setIsDraw(true);
    bgmRef.current.pause();
    if (soundEnabled) {
      drawRef.current.play();
    }
  };

  const reset = () => {
    // Reset the game state
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = `Tic Tac Toe in <span>React</span>`;
    box_array.forEach((e) => {
      e.current.innerHTML = "";
    });

    // Stop win and draw sounds if they are playing
    winRef.current.pause();
    winRef.current.currentTime = 0;
    drawRef.current.pause();
    drawRef.current.currentTime = 0;

    // Reset the background music
    bgmRef.current.pause();
    bgmRef.current.currentTime = 0;
    if (soundEnabled) {
      bgmRef.current.play();  // Play only if sound is enabled
    }

    // Reset other states
    setCount(0);
    setIsDraw(false); // Hide the draw message when reset is pressed
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        Tic Tac Toe in <span>React</span>
      </h1>
      <button className="btn btn-warning btn-lg toggle-music" onClick={toggleSound}>
        {soundEnabled ? <RxSpeakerLoud size={35}/> : <RxSpeakerOff size={35}/>}
      </button>
      <div className="board">
        <div className="row">
          <div className="box0" ref={box1} onClick={() => toggle(0)}></div>
          <div className="boxes" ref={box2} onClick={() => toggle(1)}></div>
          <div className="boxes" ref={box3} onClick={() => toggle(2)}></div>
        </div>
        <div className="row">
          <div className="boxes" ref={box4} onClick={() => toggle(3)}></div>
          <div className="box4" ref={box5} onClick={() => toggle(4)}></div>
          <div className="boxes" ref={box6} onClick={() => toggle(5)}></div>
        </div>
        <div className="row">
          <div className="boxes" ref={box7} onClick={() => toggle(6)}></div>
          <div className="boxes" ref={box8} onClick={() => toggle(7)}></div>
          <div className="box8" ref={box9} onClick={() => toggle(8)}></div>
        </div>
      </div>
      {isDraw && <DrawComponent />}
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  );
};

export default TicTacToe;





