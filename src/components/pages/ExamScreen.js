import React, { useState } from "react";

import Editor from "../Editor";
import QuestionSection from "../QuestionSection";
import IOSection from "../IOSection";
import "../../App.css";
import "../css/ExamScreen.css";

var questions = [
    {
        title: "Solve Me First 1",
        statement: "Complete the function solveMeFirst to compute the sum of two integers.",
        example: "a = 7\n b = 3\n Return 10",
        functionDescription: "Complete the solveMeFirst function in the editor below.\nsolveMeFirst has the following parameters:\nint a: the first value \nint b: the second value \nReturns - int: the sum of a and b",
        constraints: "1 <= a, b <= 1000",
        input: "a = 2\nb = 3",
        output: "5",
        explanation: "2 + 3 = 5",
        code: "print('Hello World')",
        testCases: [
            {
                input: "3\n7",
                output: "10\n10"
            },
            {
                input: "4\n6",
                output: "10\n10"
            },
            {
                input: "11\n6",
                output: "17\n16"
            }
        ]
    },
    {
        title: "Solve Me First 2",
        statement: "Complete the function solveMeFirst to compute the sum of two integers.",
        example: "a = 7\n b = 3\n Return 10",
        functionDescription: "Complete the solveMeFirst function in the editor below.\nsolveMeFirst has the following parameters:\nint a: the first value \nint b: the second value \nReturns - int: the sum of a and b",
        constraints: "1 <= a, b <= 1000",
        input: "a = 2\nb = 3",
        output: "5",
        explanation: "2 + 3 = 5",
        code: "print('Hello World')",
        testCases: [
            {
                input: "3\n7",
                output: "10\n10"
            },
            {
                input: "4\n6",
                output: "10\n10"
            },
            {
                input: "11\n6",
                output: "17\n17"
            }
        ]
    },
    {
        title: "Solve Me First 3",
        statement: "Complete the function solveMeFirst to compute the sum of two integers.",
        example: "a = 7\n b = 3\n Return 10",
        functionDescription: "Complete the solveMeFirst function in the editor below.\nsolveMeFirst has the following parameters:\nint a: the first value \nint b: the second value \nReturns - int: the sum of a and b",
        constraints: "1 <= a, b <= 1000",
        input: "a = 2\nb = 3",
        output: "5",
        explanation: "2 + 3 = 5",
        code: "print('Hello World')",
        testCases: [
            {
                input: "3\n7",
                output: "10\n10"
            },
            {
                input: "4\n6",
                output: "10\n10"
            },
            {
                input: "11\n6",
                output: "17\n17"
            }
        ]
    }
]

function ExamScreen() {

    const [results, setResults] = useState([])
    const [active, setActive] = useState(0)
    const [value, setValue] = useState(questions[active].code)

    const SubmitCode = async (e) => {
        questions[active].code = value;
        //console.log(questions);

        var res = [];
        for(var i = 0; i < questions[active].testCases.length; i++) {
            const postOptions = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': 'e888419973msh656e6c519ba40e6p184a27jsnbe37fdf04f60',
                    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
                },
                body: JSON.stringify({"language_id":71,"source_code":value,"stdin":questions[active].testCases[i].input})
            };
            
            const response = await fetch('https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&fields=*', postOptions)        
            const jsonResponse = await response.json();
    
            let jsonGetSolution = {
                status: { description: "Queue" },
                stderr: null,
                compile_output: null,
            };
            while(jsonGetSolution.status.description !== "Accepted" && jsonGetSolution.stderr == null && jsonGetSolution.compile_output == null) {
                if (jsonResponse.token) {
                    let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=false&fields=*`;
                    const getSolution = await fetch(url, {
                        method: "GET",
                        headers: {
                            'X-RapidAPI-Key': 'e888419973msh656e6c519ba40e6p184a27jsnbe37fdf04f60',
                            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
                        },
                    });
                    //console.log(getSolution);
                    jsonGetSolution = await getSolution.json();
                }
            }
            if (jsonGetSolution.stdout) {
                const output = jsonGetSolution.stdout.split('\n');
                //console.log(output)
                //console.log((questions[0].testCases[i].output + '\n').split('\n'))
                if(JSON.stringify((questions[0].testCases[i].output + '\n').split('\n')) === JSON.stringify(output)) {
                    res.push('success')
                } else {
                    res.push('failed')
                }
            } else if (jsonGetSolution.stderr) {
                const error = jsonGetSolution.stderr;
                console.log(error)
            } else {
                const compilation_error = jsonGetSolution.compile_output;
                console.log(compilation_error)
            }
        }
        setResults(res)
        //console.log(results);
    }

    return (
        <>
            <div className="exam-nav">
                {
                    questions.map((question, i) => {
                        return (
                            <div key={i} id={i} className={i===active ? "question active" : "question"} onClick={e => {setActive(parseInt(e.target.id));setValue(questions[parseInt(e.target.id)].code);setResults([])}}>
                                {i + 1}
                            </div>
                        )
                        
                    })
                }
            </div>
            <div className="container">
                
                <div className="left-container">
                    <QuestionSection title={questions[active].title} content={questions[active].statement} />
                    <QuestionSection title='Example' content={questions[active].example} />
                    <QuestionSection title='Function Description' content={questions[active].functionDescription} />
                    <QuestionSection title='Constraints' content={questions[active].constraints} />
                    <IOSection input={questions[active].input} output={questions[active].output} explanation={questions[active].explanation} />
                </div>
                <div className="right-container">
                    <div className="code-header">
                        <select className="lang-selector" name="lang">
                            <option value="python">Python</option>
                            <option value="java">Javascript</option>
                        </select>
                    </div>
                    <Editor 
                        value={value}
                        onChange={setValue}
                    />
                    <div className="buttons-container">
                        <div className="submit-button">
                            Submit
                        </div>
                        <div className="run-button" onClick={SubmitCode}>
                            Run
                        </div>
                    </div>
                    <div className="testcases">
                        {
                            results.map((result, i) => {
                                if(result === "success") return (
                                    <div key={i} className="testcase">
                                        <img alt="" src="data:image/png;base64,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"/ >
                                        Test case passed
                                    </div>
                                )
                                else return (
                                    <div key={i} className="testcase">
                                        <img alt="" src="data:image/png;base64,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"/ >
                                        Test case failed
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExamScreen;
