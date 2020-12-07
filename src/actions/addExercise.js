import Exercises from "../components/Exercises"



export const addExercise = (exercise, workoutId) => {
// purpose of thunk middleware is here, returning a function in a function
    
        return (dispatch) => {
            fetch(`http://localhost:3000/workouts/${workoutId}/exercises`, {
                method: "POST",
                headers: {
                'Content-Type': 'application/json',
                'Accept':       'application/json'
                },  
                body: JSON.stringify(exercise)
                })
                .then(res => res.json())
                .then(workout => dispatch({type: 'ADD_EXERCISE', payload: workout})) 
         
        
        }
}



