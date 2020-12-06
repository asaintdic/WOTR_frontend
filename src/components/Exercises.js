import React from 'react'
import {Route, Link} from 'react-router-dom'
import {connect} from "react-redux"
import {deleteExercise} from '../actions/deleteExercise'

import Exercise from './Exercise'

const Exercises = (props) => {
debugger
// const handleDelete = (exercise) => {
//     debugger
//     props.deleteExercise(exercise.id, exercise.workout_id)

// }
        return (
            <div>
                
                <h3>Exercises</h3>
               {props.exercises && props.exercises.map(exercise => 
               <div key={exercise.id}>
                <li>{exercise.category} - {exercise.exercise_name} </li><br></br>
             {/* <button onClick={()=> handleDelete(exercise)} >Delete</button> */}
             </div>)}
            </div>
        )
    

}

export default Exercises