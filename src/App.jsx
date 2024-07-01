import GoalList from './components/GoalList'
import NewGoal from './components/NewGoal'
import { useState  } from 'react'
import './App.css'

const App = () => {
  //instead of creating a javascript array of objects, which will only change the output in the console window
  // we use states in react, which updates the jsx code being implemented on the browser. 
  // so instead of 
  //const courseGoals =
  //we use
  const [courseGoals, setcourseGoals] = useState(
    // we pass the javascript array in the usestate()
    [
      {id:'cg1', text:"finishing the course"},
      {id:'cg2', text:"hellllloo"},
      {id:'cg3', text:"hellllloocmdisvi"}
    ]
  );


    const addNewGoalHandler = (newGoal) => {
      //instead of courseGoals.push(newGoal);
      //setcourseGoals(courseGoals.concat(newGoal));
      //it will work in most cases
      //but a better way to execute this is by using a callback function
      setcourseGoals((prevCourseGoals) => {
        return prevCourseGoals.concat(newGoal);
      })
      //setcourseGoals(courseGoals.push(newGoal));
      console.log(courseGoals);
    };

  return (
    <> 
      <div>
        <h2>Course Goals</h2>
        <NewGoal onAddGoal = {addNewGoalHandler} />
        <GoalList goals = {courseGoals} />
      </div>
    </>
  )
}

export default App
