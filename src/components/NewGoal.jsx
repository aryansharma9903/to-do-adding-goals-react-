import React from "react";
import { useState } from "react";

const NewGoal = props => {
    //let userInput = '';
    //this is just a variable 
    //and so as we have seen in the case of adding a new goal in the array
    //it did not show up on the web browser and we used states to fix that issue
    //so similarly instead of declaring a variable, we will 
    //implement usestate() which will pass the userInput value
    //and so it can be changed when user inputs a value and press the submit button
    const [userInput, setUserInput] = useState('');
    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: userInput
        }
        console.log(newGoal);
        setUserInput('');
        //what this does is basically to change the state to empty string 
        //when the submit button is clicked and we need to add a new goal
        props.onAddGoal(newGoal);
    }

const textChangeHandler = event => {
    //userInput = event.target.value;
    //we will pass this value in the function setUserInput to change the state
    setUserInput(event.target.value);
}
    return (
        <form onSubmit={addGoalHandler}>
            <input type="text" value={userInput} onChange={textChangeHandler}/>
            <button type="submit"> Add Goal </button>
        </form>
    );
};

export default NewGoal;