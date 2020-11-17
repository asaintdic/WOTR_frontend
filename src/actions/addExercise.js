import Exercises from "../components/Exercises"


export const addExercise = (data) => {
  
    
        return (dispatch) => {
            fetch('http://localhost:3000/exercises', {
            headers: {
               'Content-Type': 'application/json',
               'Accept':       'application/json'
            },  
            method: "POST",
            body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(exercise => dispatch({
                type: 'ADD_EXERCISE', 
                payload: exercise
            })) 
         
        
        }
}



