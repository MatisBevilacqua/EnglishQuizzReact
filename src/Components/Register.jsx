import React, { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { update, child, push, getDatabase, ref, onValue } from "firebase/database";
import { db, auth } from '../firebase-config';

import '../LoginAndRegister.css';

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


function Register() {
    const [yourname, setYourName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    // Pour la redirection
    const navigate = useNavigate();
    //

    // Se creer un compte
    const register = async () => {
        try {
            navigate("/namequiz")
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            // A post entry.
            const postData = {
                name: yourname,
            };
            // Write the new post's data simultaneously in the posts list and the user's post list.
            const updates = {};
            updates['/user/' + uid + '/nameUser/'] = postData;
            return update(ref(db), updates);
        } catch (error) {
            console.log(error.message);
        }
    };




    // 
    return (
        <div className="maininput">
            <h1>Create an account</h1>
            <div className="bigInput">
                <div className="containerInput">
                    <input type="text" placeholder="Your name" onChange={(event) => { setYourName(event.target.value) }}></input>
                    <input type="email" placeholder="Email Address" onChange={(event) => { setRegisterEmail(event.target.value) }}></input>
                    <input type="password" placeholder="Password" onChange={(event) => { setRegisterPassword(event.target.value) }}></input>
                    <a onClick={register}>Create an account</a>
                    {/* Une fois cliquer le compte est créer */}
                </div>
            </div>
        </div>
    );
}

export default Register;