import Exercises from "../components/Exercises"


export const addWorkout = (data) => {
  
    
        return (dispatch) => {
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
            })) 
         
        
        }
}