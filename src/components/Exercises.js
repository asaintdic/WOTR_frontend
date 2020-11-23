import React from 'react'
import {Route, Link} from 'react-router-dom'

import Exercise from './Exercise'

const Exercises = (props) => {

const handleDelete = () => {}
        return (
            <div>
                
                <h3>Exercises</h3>
               {props.exercises && props.exercises.map(exercise => 
               <div key={exercise.id}>
                <li>{exercise.category} - {exercise.exercise_name} <button>Delete</button></li><br></br>
             </div>)}
            </div>
        )
    

}

export default Exercises