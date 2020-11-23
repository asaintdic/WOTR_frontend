import React from 'react'
import WorkoutsContainer from '../containers/WorkoutsContainer'
import {Redirect} from 'react-router-dom'
import Exercises from './Exercises'

const Exercise = (props) => {
   
    let exercise = props.exercises[props.match.params.id - 1]
    
    return (
        <div>
        <h1>
         {exercise ? exercise.category : null} - {exercise ? exercise.exercise_name : null}
        </h1>
        < WorkoutsContainer exercise={exercise}/>
        </div>
    )
}

export default Exercise