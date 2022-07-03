import React from 'react';
import './css/QuestionSection.css';

function IOSection({input, output, explanation}) {
    return (
        <div className='section'>
            <h2 className='section-title'>Input</h2>
            <p className='section-content'>
                {input.split("\n").map(function(item) {
                    return (
                        <>
                            {item}
                            <br />
                        </>
                    )
                })}
            </p>
            <hr className='section-break'/>
            <h2 className='section-title'>Output</h2>
            <p className='section-content'>
                {output.split("\n").map(function(item) {
                    return (
                        <>
                            {item}
                            <br />
                        </>
                    )
                })}
            </p>
            <hr className='section-break'/>
            <h2 className='section-title'>Explanation</h2>
            <p className='section-content'>
                {explanation.split("\n").map(function(item) {
                    return (
                        <>
                            {item}
                            <br />
                        </>
                    )
                })}
            </p>
        </div>
    );
}

export default IOSection;