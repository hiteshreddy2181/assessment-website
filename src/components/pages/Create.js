import React, { useState } from 'react'
import Navbar from '../Navbar'
import '../css/Create.css';

export default function Create() {

    const [questions, setQuestions] = useState([]);
    const [openQuestions, setOpenQuestions] = useState([]);

    function createQuestion() {
        setQuestions([...questions, {"title": "", "statement": "", "example": "", "description": "", "constraints": "", "input": "", "output": "", "explanation": ""}]);
        setOpenQuestions([...openQuestions, "closed"]);
    }

    function deleteQuestion(id) {
        setQuestions([...questions.slice(0, id), ...questions.slice(id + 1, questions.length)]);
        setOpenQuestions([...openQuestions.slice(0, id), ...openQuestions.slice(id + 1, openQuestions.length)]);
    }

    function openQuestion(id) {
        console.log(id);
        setOpenQuestions([...openQuestions.slice(0, id), openQuestions[id] === "closed" ? "opened" : "closed", ...openQuestions.slice(id + 1, openQuestions.length)]);
    }

    function updateQuestion(id) {
        
    }

    function questionForm(id) {
        return (
            <>
                <div className='create-form'>
                    <label className='create-label'>Title</label>
                    <div className='create-textarea' contentEditable='true'></div>
                    <label className='create-label'>Problem Statement</label>
                    <div className='create-textarea' contentEditable='true'></div>
                    <label className='create-label'>Example</label>
                    <div className='create-textarea' contentEditable='true'></div>
                    <label className='create-label'>Description</label>
                    <div className='create-textarea' contentEditable='true'></div>
                    <label className='create-label'>Constraints</label>
                    <div className='create-textarea' contentEditable='true'></div>
                    <label className='create-label'>Input</label>
                    <div className='create-textarea' contentEditable='true'></div>
                    <label className='create-label'>Output</label>
                    <div className='create-textarea' contentEditable='true'></div>
                    <label className='create-label'>Explanation</label>
                    <div className='create-textarea' contentEditable='true'></div>
                    <div id={id} className='create-save-button' onClick={e => updateQuestion(parseInt(e.target.id))}>Save</div>
                </div>
            </>
        )
    }

    return (
    <>
        <Navbar />
        <div className='create-container'>
            <h1 className='create-title'>Create an Assessment</h1>
            <hr />
            <div className='create-buttons'>
                <div className='create-button' onClick={createQuestion}>
                    + Add a Question
                </div>
            </div>
            <div className='create-questions'>
                {
                    questions.map((question, i) => {
                        return (
                            <div className='create-question-form'>
                                <div className='create-create-question' key={i}>
                                    <div  id={i} className='create-expand' onClick={e => openQuestion(parseInt(e.target.id))}>
                                        <span>Question {i + 1}</span>
                                    </div>
                                    <span className='create-delete-button' id={i} onClick={e => deleteQuestion(parseInt(e.target.id))}>-</span>
                                </div>
                                {
                                    openQuestions[i] === "opened" ? (questionForm(i)) : (<></>)
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}
