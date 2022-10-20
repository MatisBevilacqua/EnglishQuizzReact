import React, { useState, useEffect } from 'react';
import { update, child, push, getDatabase, ref, onValue } from "firebase/database";
import {db} from '../firebase-config';
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase-config';
import { Link } from "react-router-dom";
import '../Main.css';

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
    


function Main() {
    const [chooseSubject, setChooseSubject] = useState("");
    const [name, setName] = useState('');

        function puttLanaguage() {
            // A post entry.
            const postData = {
                language: chooseSubject,
            };
            // Write the new post's data simultaneously in the posts list and the user's post list.
            const updates = {};
            updates['/user/' + uid + '/quiz/' + name + '/language/'] = chooseSubject;
            return update(ref(db), updates);
        }

    
        useEffect(() => {
            const db = getDatabase();
            const nameQuiz = ref(db, '/user/' + uid + '/nameQuiz/');
            onValue(nameQuiz, (snapshot) => {
                // const data = snapshot.val();
                setName(snapshot.val().name);
            });
    
            return () => { }
        })

    return (
        <div className="containerTop">
            <div className="containerBody">
                <div className="titleBody">
                    <h1>Choose you subject</h1>
                </div>

                <select value={chooseSubject} onChange={(e) => setChooseSubject(e.target.value)}  name="subject" id="subject-select">
                    <option id="chooseSelect" value="">Choose you subject</option>
                    <option value="english">English</option>
                    <option value="french">French</option>
                    <option value="spanish" >Spanish</option>
                </select>
                <div className="containerBodyBtn">
                    <Link to="/quizcreate" onClick={puttLanaguage} className="bodyBtn">Create QCM !</Link>
                </div>
            </div>
        </div>
    );
}

export default Main;
