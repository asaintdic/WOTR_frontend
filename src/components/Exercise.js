import React from 'react'
import Exercises from './Exercises'

const Exercise = (props) => {
   console.log(props)
    let exercise = props.exercises[props.match.params.id - 1]
    
    return (
        <li>
         {exercise ? exercise.attributes.category : null} - {exercise ? exercise.attributes.exercise_name : null}
        </li>
    )
}

export default  Exercise