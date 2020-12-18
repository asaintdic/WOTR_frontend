import React from 'react'
import ExercisesContainer from '../containers/ExercisesContainer'


const Workout = (props) => {
  

    let workout = props.workouts.filter((workout) => {return workout.id == props.match.params.id})[0]
        
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
 //  let workout = props.workouts.filter(workout => workout.id == props.match.params.id )
 // workout = workout[0]
 // let workout = (props.workouts && props.workouts[props.match.params.id - 1]) 