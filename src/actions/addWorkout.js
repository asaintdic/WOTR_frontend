import Exercises from "../components/Exercises"
import {Redirect} from 'react-router-dom'



export const addWorkout = (data) => {
  
    
        
        return (dispatch) => {
    
            return fetch('http://localhost:3000/workouts', {
                headers: {
                'Content-Type': 'application/json',
                'Accept':       'application/json'
                },  
                method: "POST",
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(workout => dispatch({
                        type: 'ADD_WORKOUT', 
                        payload: workout
                    
                })
                ) 
            
            
        
            
        
        }
        
}





