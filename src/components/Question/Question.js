import React from 'react';
import './Question.css';
const Question = () => {
    return (
        <div className='question-container'>
            <div className="question-1">
                <h2>How React work?</h2>
                <p>the react has its own VirtualDOM.The reasoning behind VirtualDOM is that you may end up changing lots of parts of your DOM during a single iteration, so the browser would have to process all those changes independently. VirtualDOM frameworks do keep track of these changes in their in-memory virtual dom and, when they know there are no more changes (the iteration has ended), they dump it all to the real DOM in a single change, and only around the areas where changes have occurred.</p>
            </div>
            <div className="question-2">
                <h2>Difference between pops and state?</h2>
                <ul> Pops
                    <li>The Data is passed from one component to another</li>
                    <li>It is Immutable (cannot be modified)</li>
                    <li>Props are read-only.</li>
                </ul>
                <ul>State:
                    <li>The Data is passed within the component only</li>
                    <li>It is Mutable ( can be modified).</li>
                    <li>State is both read and write.</li>
                </ul>
            </div>
            <div className="question-3">
                <h2>How useState work?</h2>
                <p>useState is a Hook (function) that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
            </div>
        </div>
    );
};

export default Question;