import React, { useState, useEffect } from 'react';
import '../TimerQuiz.css';


const Timer = () => {
let random = Math.floor(Math.random()  * 60);
const [seconds, setSeconds] = useState(random);
const [isActive, setIsActive] = useState(true);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
    setSeconds(0);
    setIsActive(false);
}

    useEffect(() => {
        let interval = null;
    if (isActive) {
        interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
    }, 1000);
    } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
    } 
    if(seconds === 0){
        setIsActive(false);
    }
    return () => clearInterval(interval);
}, [isActive, seconds]);

    return (
    <div className='container'>
            <div className="main-container">
                <h1>Putt questions</h1>
                <h1 className='seconde'>{seconds}</h1>
            </div>
    </div>
    );
};

export default Timer;

