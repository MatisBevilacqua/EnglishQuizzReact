import React, { useState } from "react";
import {set, ref, update, push, child } from "firebase/database";
import {db} from '../firebase-config';
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase-config';
import '../Main.css';
import { Link } from "react-router-dom";

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

    function writeNewPost() {
        // A post entry.
        const postData = {
            language: chooseSubject,
        };
        // Get a key for a new Post.
        const newPostKey = push(child(ref(db), 'language')).key;
        // Write the new post's data simultaneously in the posts list and the user's post list.
        const updates = {};
        updates['/user/' + uid + '/' + newPostKey] = postData;
        return update(ref(db), updates);
    }

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
                    <Link to="/quizcreate" onClick={writeNewPost} className="bodyBtn">Create QCM !</Link>
                </div>
            </div>
        </div>
    );
}

export default Main;
