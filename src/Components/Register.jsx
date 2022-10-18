import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase-config";
import { Link, useNavigate} from "react-router-dom";
import '../LoginAndRegister.css';


function Register() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    // Pour la redirection
    const navigate = useNavigate();
    //

    // Se creer un compte
    const register = async () => {
        try{
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(registerEmail);
            navigate("/main")
        }catch(error){
            console.log(error.message);
        }
    };

    // 
    return (
    <div className="maininput">
        <h1>Create an account</h1>
        <div className="bigInput">
            <div className="containerInput">
                <input type="email" placeholder="Email Address" onChange={(event) => {setRegisterEmail(event.target.value)}}></input>
                <input type="password" placeholder="Password" onChange={(event) => {setRegisterPassword(event.target.value)}}></input>
                <a onClick={register}>Create an account</a>
                {/* Une fois cliquer le compte est créer */}
            </div>      
        </div>
    </div>
    );
}

export default Register;