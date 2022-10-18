import React, { useState } from 'react';
import {set, ref, update, child } from "firebase/database";
import { Link } from "react-router-dom";
import {db} from '../firebase-config';
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase-config';
import '../QuizCreate.css';

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


export default function QuizCreate() {
    
    const[questions, setQuestion] =  useState([ "" ]); 

    
    function setQuestionItem(e, i){
        let questionsArr = questions.slice()
        questionsArr[i] = e.target.value

        setQuestion(questionsArr)
    }

    function writeNewPosts() {
        // A post entry.
        const postData = {
            quiz: questions,
        };
        // Get a key for a new Post.
        const newPostKey = push(child(ref(db), 'quiz')).key;
        // Write the new post's data simultaneously in the posts list and the user's post list.
        const updates = {};
        updates['/user/' + uid + '/' + newPostKey] = postData;
        return update(ref(db), updates);
    }


    function addItem(){
        setQuestion((arr) => [...arr, ""])
    }


    return (
        <div className='quizCreateTop'>
            <div className='quizCreateBody'>
                <h1>Create your QCM</h1>
                <div className='quizCreateInput'>
                    {questions.map((x, i) =><div>
                        <input value={x} onChange={(e) => setQuestionItem(e, i)} placeholder='Definition of Bye ?'></input>
                    </div>)}

                    {/* Pour augment le nombres d'input */}
                    <div className='quizInputMore'>
                        <h1 onClick={addItem} className='InputMore'>+</h1>
                    </div>
                        
                    <div className='btnSubmit'>
                        <Link to="/timerquiz" onClick={writeNewPosts} className='btn'>Lancer le QCM</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
