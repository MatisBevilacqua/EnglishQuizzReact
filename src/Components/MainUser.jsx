import React,  { useState, useEffect } from 'react'
import {set, update, child, push, getDatabase, ref, onValue } from "firebase/database";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {db} from '../firebase-config';
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase-config';
import { Link} from "react-router-dom";
import bookmark from '../bookmark.png';
import user from '../user.png';
import envelope from '../envelope.png';
import '../MainUser.css'

// console.log(pngTop);

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

export default function MaisUser() {

    const [name, setName] = useState('');

    useEffect(() => {
        const db = getDatabase();
        const nameQuiz = ref(db, '/user/' + uid + '/nameUser/');
        onValue(nameQuiz, (snapshot) => {
            // const data = snapshot.val();
            // setName(snapshot.val().name);
            setName(snapshot.val().name)
        });
        return () => { }
    })

    return (
        <div className='bigUser'>
            <div className="profilUserTop">
                <div className="text-top">
                    <h1>Creaze</h1> 
                    <h1>Welcome, {name}</h1>
                </div>
            </div>
            <div className="profilUserBottom">
                <div className="text-bottom">
                    <div id="spawn1" className="box-bottom">
                        {/* <Link>Acces my quiz</Link> */}
                        <div className="box1">
                            <img className="imgBox" src={bookmark} alt="Logo" />
                        </div>
                        <Link>Get Started</Link>
                    </div>

                    <div id="spawn2" className="box-bottom">
                        <div className="box1">
                            <img className="imgBox" src={user} alt="Logo" />
                        </div>
                        <Link>My account</Link>
                    </div>

                    <div id="spawn3" className="box-bottom">
                        <div className="box1">
                            <img className="imgBox" src={envelope} alt="Logo" />
                        </div>
                        <Link>Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
