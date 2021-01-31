import React from 'react'
import {Route, Link} from 'react-router-dom'
import {connect} from "react-redux"
import {deleteExercise} from '../actions/deleteExercise'




const Exercises = (props) => {

        return (
            <div>
             <h3>Exercises</h3>
                {props.exercises && props.exercises.exercises.map(exercise => 
                    <div key={exercise.id}>
                        <li>{exercise.category} - {exercise.exercise_name} </li><br></br>
                    </div>)}
            </div>
        )
    

}

export default connect(null, {deleteExercise}) (Exercises)