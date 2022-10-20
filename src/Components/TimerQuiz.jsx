import React, { useState, useEffect } from 'react';
import '../TimerQuiz.css';
import { onAuthStateChanged } from "firebase/auth";
import { useParams } from 'react-router-dom';
import {set, update, child, push, getDatabase, ref, onValue } from "firebase/database";
import {db, auth} from '../firebase-config';

let uid

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
});

const TimerQuiz = (props) => {
    let random = Math.floor(Math.random() * 60);
    const [seconds, setSeconds] = useState(random);
    const [isActive, setIsActive] = useState(true);
    const { name } = useParams()

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
        if (seconds === 0) {
            setIsActive(false); 
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        const db = getDatabase();
        const quizPath = ref(db, '/user/' + uid + '/quiz/' + name);

        onValue(quizPath, (snapshot) => {
            const data = snapshot.val();
            setQuiz(data.quiz);
        });
        
        return () => { }
    }, [])
    
    console.log(quiz);
    return (
        <div className='container'>
            <div className="main-container">
                <h1>{quiz[0]}</h1>
                <h1 className='seconde'>{seconds}</h1>
            </div>
        </div>
    );
};

export default TimerQuiz;

