import React, { useState } from 'react'
import '../NameQuiz.css'
import { Link } from "react-router-dom";
import { ref, update } from "firebase/database";
import {db, auth} from '../firebase-config';
import {onAuthStateChanged } from "firebase/auth";


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

export default function NameQuiz() {

    const [getName, setGetName] = useState('');

    function saveName() {
        // A post entry.
        const postData = {
            name: getName,
        };
        // Write the new post's data simultaneously in the posts list and the user's post list.
        const updates = {};
        updates['/user/' + uid + '/nameQuiz/'] = postData;
        return update(ref(db), updates);
    }

    return (
        <div className="main-name-quiz">
            <div className="name-quiz">
                <h1>Name your quiz</h1>
                <input onChange={e => setGetName(e.target.value)} placeholder='Quiz name'></input>
                <div className='btnSubmit'>
                        <Link to="/chooselanguage" onClick={saveName} className='btn-get-name'>Configure my quiz</Link>
                </div>
            </div>
        </div>
    )
}