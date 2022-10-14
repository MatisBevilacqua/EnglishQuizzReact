import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase-config";
import '../Main.css';
import { Link } from "react-router-dom";

function Main() {
    const [chooseSubject, setChooseSubject] = useState("");

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
                    <Link to="/quizcreate" className="bodyBtn">Create QCM !</Link>
                </div>
            </div>
        </div>
    );
}

export default Main;
