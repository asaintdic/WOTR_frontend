export const deleteExercise = (exerciseId, workoutId) => {
    
    return (dispatch) => {
        return fetch(`http://localhost:3000/workouts/${workoutId}/exercises/${exerciseId}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(workout => dispatch({type: 'DELETE_EXERCISE', payload: workout}))
    }
}