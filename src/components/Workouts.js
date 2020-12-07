import React from 'react'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteWorkout} from '../actions/deleteWorkout'



const Workouts = (props) => {
  
    const handleDelete = (workout) => {
    
    props.deleteWorkout(workout.id)

    }

        return (
            <div>
               {props.workouts && props.workouts.map(workout => 
               <div key={workout.id}>
                <Link to={`/workouts/${workout.id}`}> {workout.title}</Link><button onClick={()=> handleDelete(workout)} >Delete</button>
                </div>)}
            </div>
        )
    

}

export default connect(null, {deleteWorkout}) (Workouts)