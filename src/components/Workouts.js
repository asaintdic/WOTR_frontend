import React from 'react'
import {Route, Link} from 'react-router-dom'



const Workouts = (props) => {
  
    

        return (
            <div>
               {props.workouts && props.workouts.map(workout => 
               <div key={workout.id}>
                <Link to={`/workouts/${workout.id}`}> {workout.title}</Link>
                </div>)}
            </div>
        )
    

}

export default Workouts