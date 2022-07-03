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

    function updateQuestion(id, section, content) {
        content = content.replace(/<div>/g,"\n").replace(/<\/div>/g,"").replace(/<br>/g,"");
        console.log(id, section,content);
        if(section === 'title') setQuestions([...questions.slice(0, id), {...questions[id], title: content}, ...questions.slice(id + 1, questions.length)]);
        else if(section === 'statement') setQuestions([...questions.slice(0, id), {...questions[id], statement: content}, ...questions.slice(id + 1, questions.length)]);
        else if(section === 'example') setQuestions([...questions.slice(0, id), {...questions[id], example: content}, ...questions.slice(id + 1, questions.length)]);
        else if(section === 'description') setQuestions([...questions.slice(0, id), {...questions[id], description: content}, ...questions.slice(id + 1, questions.length)]);
        else if(section === 'constraints') setQuestions([...questions.slice(0, id), {...questions[id], constraints: content}, ...questions.slice(id + 1, questions.length)]);
        else if(section === 'input') setQuestions([...questions.slice(0, id), {...questions[id], input: content}, ...questions.slice(id + 1, questions.length)]);
        else if(section === 'output') setQuestions([...questions.slice(0, id), {...questions[id], output: content}, ...questions.slice(id + 1, questions.length)]);
        else if(section === 'explanation') setQuestions([...questions.slice(0, id), {...questions[id], explanation: content}, ...questions.slice(id + 1, questions.length)]);
    }

    function questionForm(id) {
        return (
            <>
                <div className='create-form'>
                    <label className='create-label'>Title</label>
                    <div className='create-textarea' contentEditable='true' id={id} onKeyUp={e => updateQuestion(parseInt(e.target.id), 'title', e.target.innerHTML)}>{questions[id].title}</div>
                    <label className='create-label'>Problem Statement</label>
                    <div className='create-textarea' contentEditable='true' id={id} onKeyUp={e => updateQuestion(parseInt(e.target.id), 'statement', e.target.innerHTML)}>{questions[id].statement}</div>
                    <label className='create-label'>Example</label>
                    <div className='create-textarea' contentEditable='true' id={id} onKeyUp={e => updateQuestion(parseInt(e.target.id), 'example', e.target.innerHTML)}>{questions[id].example}</div>
                    <label className='create-label'>Description</label>
                    <div className='create-textarea' contentEditable='true' id={id} onKeyUp={e => updateQuestion(parseInt(e.target.id), 'description', e.target.innerHTML)}>{questions[id].description}</div>
                    <label className='create-label'>Constraints</label>
                    <div className='create-textarea' contentEditable='true' id={id} onKeyUp={e => updateQuestion(parseInt(e.target.id), 'constraints', e.target.innerHTML)}>{questions[id].constraints}</div>
                    <label className='create-label'>Input</label>
                    <div className='create-textarea' contentEditable='true' id={id} onKeyUp={e => updateQuestion(parseInt(e.target.id), 'input', e.target.innerHTML)}>{questions[id].input}</div>
                    <label className='create-label'>Output</label>
                    <div className='create-textarea' contentEditable='true' id={id} onKeyUp={e => updateQuestion(parseInt(e.target.id), 'output', e.target.innerHTML)}>{questions[id].output}</div>
                    <label className='create-label'>Explanation</label>
                    <div className='create-textarea' contentEditable='true' id={id} onKeyUp={e => updateQuestion(parseInt(e.target.id), 'explanation', e.target.innerHTML)}>{questions[id].explanation}</div>
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
                <div className='create-filler'></div>
                <div className='create-submit-button'>Submit</div>
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
