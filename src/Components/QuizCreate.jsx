import React, { useState } from 'react';
import '../QuizCreate.css';


export default function QuizCreate() {

    const[questions, setQuestion] =  useState([ "" ]); 

    function addItem(){
        setQuestion((arr) => [...arr, ""])
    }
    
    function setQuestionItem(e, i){
        let questionsArr = questions.slice()
        questionsArr[i] = e.target.value

        setQuestion(questionsArr)
    }

    return (
        <div className='quizCreateTop'>
            <div className='quizCreateBody'>
                <h1>Create your QCM</h1>
                <div className='quizCreateInput'>
                    {questions.map((x, i) =><div>
                        <input value={x} onChange={(e) => setQuestionItem(e, i)} placeholder='Definition of Bye ?'></input>
                    </div>)}

                    <div className='quizInputMore'>
                        <h1 onClick={addItem} className='InputMore'>+</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
