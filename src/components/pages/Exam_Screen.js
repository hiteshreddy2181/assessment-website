import React from "react";
import QuestionSection from "../QuestionSection";
import IOSection from "../IOSection";
import "../../App.css";

const questions = [
    {
        title: "Solve Me First",
        statement: "Complete the function solveMeFirst to compute the sum of two integers.",
        example: "a = 7\n b = 3\n Return 10",
        functionDescription: "Complete the solveMeFirst function in the editor below.\nsolveMeFirst has the following parameters:\nint a: the first value \nint b: the second value \nReturns - int: the sum of a and b",
        constraints: "1 <= a, b <= 1000",
        input: "a = 2\nb = 3",
        output: "5",
        explanation: "2 + 3 = 5",
    }
]

function Exam_Screen() {
    return (
        <>
            <div className='container'>
                <div className='question'>
                    <QuestionSection title={questions[0].title} content={questions[0].statement} />
                    <QuestionSection title='Example' content={questions[0].example} />
                    <QuestionSection title='Function Description' content={questions[0].functionDescription} />
                    <QuestionSection title='Constraints' content={questions[0].constraints} />
                    <IOSection input={questions[0].input} output={questions[0].output} explanation={questions[0].explanation} />
                </div>
                <div className='code'>

                </div>
            </div>
        </>
    );
}

export default Exam_Screen;
