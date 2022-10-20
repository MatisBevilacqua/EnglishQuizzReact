import React,  { useState, useEffect } from 'react'
import {set, update, child, push, getDatabase, ref, onValue } from "firebase/database";
import {db} from '../firebase-config';
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase-config';
import { Link} from "react-router-dom";
import '../MainPage.css'

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

export default function MainPage() {
    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        const db = getDatabase();
        const cheminQuiz = ref(db, '/user/' + uid + '/quiz/');
        onValue(cheminQuiz, (snapshot) => {
            const data = snapshot.val();
            
            let quizzTemp = []
            for (const quizzName in data) {
                quizzTemp.push(quizzName)
            } 

            setQuiz(quizzTemp);
        });

        
        return () => { }
    }, [])

    return (
        <div className="main">
            <div className="main-page">
                <div className="text-main-page">
                    <h1 className='h1-main-page'></h1>
                </div>
                <div className="main-page-box">
                    {quiz.map((x, i) => <div key={i} className="box-page">
                        <Link to={`/timerquiz/${x}`}>{x}</Link>
                    </div>)}
                </div>
                <div className="btn-main">
                    <Link to="/namequiz" className='btn-main-page'>Create new quiz</Link>
                </div>
            </div>
        </div>
    )
}
