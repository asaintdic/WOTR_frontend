import Exercises from "../components/Exercises"
import {Redirect} from 'react-router-dom'
import { useHistory } from 'react-router-dom'


export const addWorkout = (data) => {
  
    
        console.log('b')
        return (dispatch) => {
            console.log('c')
            fetch('http://localhost:3000/workouts', {
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
                // console.log('d')
               }),
            
             
            ) 
            .then(data => Redirect('/workouts'))
            
        
            console.log('e')
        
        }
        console.log('f')
}





