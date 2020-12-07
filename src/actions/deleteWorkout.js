export const deleteWorkout = (workoutId) => {
    
    return (dispatch) => {
        return fetch(`http://localhost:3000/workouts/${workoutId}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(workout => dispatch({type: 'DELETE_WORKOUT', payload: workout}))
        
    }
}