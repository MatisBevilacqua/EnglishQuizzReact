import React, { useState } from "react";
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase-config";
import { Link, useNavigate} from "react-router-dom";
import '../LoginAndRegister.css';


function Login() {
    const [loginEmail, setloginEmail] = useState("");
    const [loginPassword, setloginPassword] = useState("");

    // Pour la redirection
    const navigate = useNavigate();
    // 

    // fonction pour se conecter
    const login = async () => {
        try{
            const loginUSER = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            
            // console.log(loginEmail);
            navigate("/mainpage")
        }catch(error){
            console.log(error.message);
        }
    };
    // 
    
    return (
        <div className="maininput">
            <h1>Login</h1>
            <div className="bigInput">
                <div className="containerInput">
                    <input type="email" placeholder="Email Address" onChange={(event) => {setloginEmail(event.target.value)}}></input>
                    <input type="password" placeholder="Password" onChange={(event) => {setloginPassword(event.target.value)}}></input>
                    {/* Pour se conecter */}
                    <a id="secondBtn" onClick={login}>Login</a>
                    {/* Une fois cliquer vous êtes conecter */}
                </div>
            </div>
        </div>
        
    );
}
export default Login;
