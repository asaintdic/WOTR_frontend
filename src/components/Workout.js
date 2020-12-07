import React from 'react'
import ExercisesContainer from '../containers/ExercisesContainer'


const Workout = (props) => {
   
    let workout = (props.workouts && props.workouts[props.match.params.id - 1]) 
   

    return (
        <div>
        <h1>
         {workout ? workout.title : null} - {workout ? workout.note : null}
        </h1>
        < ExercisesContainer workout={workout}/>
        </div>
    )
    }

export default Workout