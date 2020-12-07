import React from 'react'
import {Route, Link} from 'react-router-dom'
import {connect} from "react-redux"
import {deleteExercise} from '../actions/deleteExercise'

import Exercise from './Exercise'

const Exercises = (props) => {

// const workout_id = () = props.exercises.workout_exercises.map(workout_exercise =>
//     workout_id = workout_exercise.workout_id
// )
    //     const workout_id =(props) => {
//        let workout_id = props.exercises.workout_exercises.map(workout_exercise =>
//          workout_id = workout_exercise.workout_id)
//          return workout_id
//    }

    // const handleDelete = (exercise) => {
    
    // props.deleteExercise(exercise.id)

    // }
        return (
            <div>
                
                <h3>Exercises</h3>
               {props.exercises && props.exercises.exercises.map(exercise => 
               <div key={exercise.id}>
                <li>{exercise.category} - {exercise.exercise_name} </li><br></br>
             {/* <button onClick={()=> handleDelete(exercise)} >Delete</button> */}
             </div>)}
            </div>
        )
    

}

export default connect(null, {deleteExercise}) (Exercises)