import Workouts from "../components/Workouts"


export function fetchWorkouts() {
   return (dispatch) => {
    fetch('http://localhost:3000/workouts')
    .then(res => res.json())
    .then(workouts => dispatch({
        type: 'FETCH_WORKOUTS',

        payload: workouts

        
    })) 
   }
}
