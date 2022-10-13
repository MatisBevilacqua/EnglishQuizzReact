import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase-config";
import { Link, useNavigate} from "react-router-dom";
import '../LoginAndRegister.css';

function Register() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setloginEmail] = useState("");
    const [loginPassword, setloginPassword] = useState("");

    const navigate = useNavigate();

    const register = async () => {
        try{
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(registerEmail);
            navigate("/login")
        }catch(error){
            console.log(error.message);
        }
    };

    const login = async () => {
    try{
        const loginUSER = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        console.log(loginUSER);
    }catch(error){
        console.log(error.message);
    }
    };
    
    
    return (
    <div className="maininput">
        <h1>Create an account</h1>
        <div className="bigInput">
            <div className="containerInput">
                <input type="email" placeholder="Email Address" onChange={(event) => {setRegisterEmail(event.target.value)}}></input>
                <input type="password" placeholder="Password" onChange={(event) => {setRegisterPassword(event.target.value)}}></input>
                <a onClick={register}>Create an account</a>
            </div>
            {/* <div className="containerInput">
                <h1>Login</h1>
                <input placeholder="Nom d'utilisateur" onChange={(event) => {setloginEmail(event.target.value)}}></input>
                <input placeholder="Mot de passe" onChange={(event) => {setloginPassword(event.target.value)}}></input>
                <a onClick={login}>Valider</a>
            </div> */}
        </div>
    </div>
    );
}

export default Register;
