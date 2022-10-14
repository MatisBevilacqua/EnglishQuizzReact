import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Started.css';

function Started() {
    return (
        <div className="containerBombe">
            <div className="containerBig">
                <div className="container">
                    <div className="mainContainer">
                        <h1>Hey ! Welcome</h1>
                        <p>The best free website, for learning english.</p>
                        <div className="mainBtn">
                            <Link to="/register" className="getRegister">Get started</Link>
                            <Link to="/login" className="getLogin">I already have an account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Started;
