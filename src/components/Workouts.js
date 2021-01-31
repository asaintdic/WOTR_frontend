import React from 'react'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteWorkout} from '../actions/deleteWorkout'
import WorkoutSearch from './WorkoutSearch'



const Workouts = (props) => {
  
    const handleDelete = (workout) => {
        props.deleteWorkout(workout.id)
    }

        return (
            <div>
                <WorkoutSearch workouts= {props.workouts}/>
                {props.workouts && props.workouts.map(workout => 
                <div key={workout.id}>
                    <Link to={`/workouts/${workout.id}`}> {workout.title}</Link><button onClick={()=> handleDelete(workout)} >Delete</button>
                </div>)}
            </div>
        )
    

}

export default connect(null, {deleteWorkout}) (Workouts)