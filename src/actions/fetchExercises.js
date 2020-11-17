import Exercises from "../components/Exercises"


export function fetchExercises() {
   return (dispatch) => {
    fetch('http://localhost:3000/exercises')
    .then(res => res.json())
    .then(exercises => dispatch({
        type: 'FETCH_EXERCISES',

        payload: exercises.data

        
    })) 
   }
}

