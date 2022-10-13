import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase-config";
import '../Main.css';

function Main() {
    return (
        <div className="mainTop">
            <div className="smallTop">
                <div className="imgTop">
                    <img className="mainImg" src={"/img/avatar.png"}/>
                </div>
            </div>
        </div>
    );
}

export default Main;
